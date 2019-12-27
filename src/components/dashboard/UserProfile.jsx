import React, { Fragment } from 'react';
import { Card, Form, Col, Button } from 'react-bootstrap';
import '../../styles/user-profile.scss';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import DatePicker from 'react-date-picker';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { PROFILE_UPDATE_SUCCESS, PROFILE_UPDATE_FAIL } from '../../constants';

const UserProfile = ({ ...props }) => {
  // RegEx for phone number validation
  const phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;
  const ssnRegExp = /^(?!0{3}|6{3})([0-6]\d{2}|7([0-6]\d|7[012]))([ -]?)(?!00)\d\d\3(?!0000)\d{4}$/;
  const nameRegExp = /^[\w ]+$/;
  const zipRegExp = /^[0-9]{5}$/;
  const serverErrors = [];
  // Schema for yup
  const validationSchema = Yup.object().shape({
    NAME_FIRST: Yup.string()
      .min(2, '*First Name must have at least 2 characters')
      .max(40, "*First Name can't be longer than 40 characters")
      .required('*First Name is required')
      .matches(nameRegExp, '*Please enter a valid first Name.'),
    NAME_LAST: Yup.string()
      .min(2, '*Last Name must have at least 2 characters')
      .max(40, "*Last Name can't be longer than 40 characters")
      .matches(nameRegExp, '*Please enter a valid first Name.'),
    NAME_SIR_WITH_PERIOD: Yup.string()
      .oneOf(['Mr.', 'Mrs.', 'Miss.', 'Dr.', 'Rev.'], 'Please select a title')
      .required('Please select a title'),
    POSTAL_CODE: Yup.string().matches(zipRegExp, '*Postal Code is not valid'),
    PHONE_1: Yup.string().matches(phoneRegExp, '*Phone number is not valid'),
    PHONE_MOBILE: Yup.string().matches(
      phoneRegExp,
      '*Mobile number is not valid'
    ),
    SSN_FULL: Yup.string().matches(ssnRegExp, '*SSN is not valid')
  });

  return (
    <Fragment>
      <Card>
        <Card.Body className='user-profile-card-body'>
          <h1>Complete Your Profile </h1>
          <p>
            Please Complete all fields below. PrivacyMate requires this
            information to scan the online and offline world of databases,
            repositories and lists so we can remove it on your behalf. We will
            continue to scan daily and report our results to you on your
            personal dashboard
          </p>
          <p id='required-notif' className='text-right'>
            ITEMS MARKED WITH (<span id='red-star'>*</span>) ARE REQUIRED
          </p>
          <div>{props.status} </div>
          <Formik
            enableReinitialize
            initialValues={props.userProfile}
            validationSchema={validationSchema}
            validate={values => {
              let errors = {};

              serverErrors.forEach(function(item) {
                errors[item.key] = item.value;
              });

              serverErrors.pop();
              return errors;
            }}
            onSubmit={(
              values,
              {
                setSubmitting,
                setFieldTouched,
                setErrors,
                errors,
                setFieldError,
                setStatus
              }
            ) => {
              setSubmitting(true);

              setTimeout(async () => {
                let response = await props.handleSubmit(
                  values,
                  setFieldTouched
                );

                if (response.invalid_values != null) {
                  setStatus(true);
                  if (response.invalid_values.SSN_FIRST_THREE != null) {
                    serverErrors.push({
                      key: 'SSN_FULL',
                      value: 'Please Enter Valid SSN Number'
                    });
                    setFieldTouched('SSN_FULL', true);
                  } else if (response.invalid_values.NAME_FIRST != null) {
                    serverErrors.push({
                      key: 'NAME_FIRST',
                      value: 'Please enter a valid value for the first name.'
                    });
                    setFieldTouched('NAME_FIRST', true);
                  } else if (response.invalid_values.NAME_FIRST != null) {
                    serverErrors.push({
                      key: 'NAME_LAST',
                      value: 'Please enter a valid Last Name'
                    });
                    setFieldTouched('NAME_LAST', true);
                  }
                  // alert to show that the fields are set but it doesn't
                } else {
                  toast.success(PROFILE_UPDATE_SUCCESS);
                }

                setSubmitting(false);
              }, 500);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              setFieldTouched,
              setFieldValue
            }) => (
              <Form onSubmit={handleSubmit}>
                <Form.Row className='mb-2'>
                  <Form.Group noValidate as={Col} md='2' controlId='user-title'>
                    <Form.Label className='req-star'>TITLE</Form.Label>
                    <Form.Control
                      name='title'
                      as='select'
                      md='2'
                      value={values.NAME_SIR_WITH_PERIOD}
                      onChange={e =>
                        props.setTitleChange(e, setFieldValue, setFieldTouched)
                      }
                    >
                      <option na>Select a Title</option>
                      <option key='Mr'>Mr.</option>
                      <option key='Mrs'>Mrs.</option>
                      <option key='Miss'>Miss.</option>
                      <option key='Dr'>Dr.</option>
                      <option key='Rev'>Rev.</option>
                    </Form.Control>
                    {touched.NAME_SIR_WITH_PERIOD &&
                    errors.NAME_SIR_WITH_PERIOD ? (
                      <div className='invalid-feedback'>
                        {errors.NAME_SIR_WITH_PERIOD}
                      </div>
                    ) : null}
                  </Form.Group>
                </Form.Row>

                <Form.Row>
                  <Form.Group as={Col} md='4' controlId='first-name'>
                    <Form.Label className='req-star'>FIRST NAME</Form.Label>

                    <Form.Control
                      type='text'
                      name='NAME_FIRST'
                      placeholder='Full Name'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.NAME_FIRST}
                    />
                    {touched.NAME_FIRST && errors.NAME_FIRST ? (
                      <div className='invalid-feedback'>
                        {errors.NAME_FIRST}
                      </div>
                    ) : null}
                  </Form.Group>
                  <Form.Group as={Col} md='4' controlId='middle-name'>
                    <Form.Label>MIDDLE NAME</Form.Label>
                    <Form.Control
                      type='text'
                      name='NAME_MIDDLE'
                      placeholder='Full Name'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.NAME_MIDDLE}
                    />
                  </Form.Group>
                  <Form.Group as={Col} md='4' controlId='last-name'>
                    <Form.Label>LAST NAME</Form.Label>
                    <Form.Control
                      type='text'
                      placeholder='Last Name'
                      name='NAME_LAST'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.NAME_LAST}
                    />
                    {touched.NAME_LAST && errors.NAME_LAST ? (
                      <div className='invalid-feedback'>{errors.NAME_LAST}</div>
                    ) : null}
                  </Form.Group>
                </Form.Row>

                <Form.Row>
                  <Form.Group
                    as={Col}
                    md='4'
                    controlId='date-of-birth'
                    l='30px'
                  >
                    <Form.Label>DATE OF BIRTH</Form.Label>
                    <DatePicker
                      className='form-control'
                      placeholder='Date of Birth'
                      onChange={e =>
                        props.handleDateChange(
                          e,
                          'DATE_OF_BIRTH_MMDDYYYY',
                          setFieldValue
                        )
                      }
                      name='DATE_OF_BIRTH_MMDDYYYY'
                      onBlur={handleBlur}
                      value={values.DATE_OF_BIRTH_MMDDYYYY}
                    />
                  </Form.Group>
                  <Form.Group as={Col} md='4' controlId='primary-phone'>
                    <Form.Label>PRIMARY PHONE NUMBER</Form.Label>
                    <Form.Control
                      type='text'
                      placeholder='123-555-1234'
                      name='PHONE_1'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.PHONE_1}
                    />
                    {touched.PHONE_1 && errors.PHONE_1 ? (
                      <div className='invalid-feedback'>{errors.PHONE_1}</div>
                    ) : null}
                  </Form.Group>

                  <Form.Group as={Col} md='4' controlId='mobile-phone'>
                    <Form.Label>MOBILE PHONE NUMBER</Form.Label>
                    <Form.Control
                      type='text'
                      placeholder='123-555-1234'
                      name='PHONE_MOBILE'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.PHONE_MOBILE}
                    />
                    {touched.PHONE_MOBILE && errors.PHONE_MOBILE ? (
                      <div className='invalid-feedback'>
                        {errors.PHONE_MOBILE}
                      </div>
                    ) : null}
                  </Form.Group>
                </Form.Row>
                <hr />
                <Form.Row>
                  <h4>Current Address</h4>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col} md='4' controlId='country'>
                    <Form.Label>COUNTRY</Form.Label>
                    <CountryDropdown
                      id='CURRENT_COUNTRY'
                      name='CURRENT_COUNTRY'
                      className='form-control'
                      onChange={val =>
                        props.handleCustomChange(
                          val,
                          'CURRENT_COUNTRY',
                          setFieldValue
                        )
                      }
                      value={values.CURRENT_COUNTRY}
                    />
                  </Form.Group>
                  <Form.Group as={Col} md='4' controlId='state'>
                    <Form.Label>STATE/PROVINCE</Form.Label>
                    <RegionDropdown
                      id='STATE'
                      name='STATE'
                      className='form-control'
                      valueType='SHORT'
                      country={values.CURRENT_COUNTRY}
                      onChange={val =>
                        props.handleCustomChange(val, 'STATE', setFieldValue)
                      }
                      value={values.STATE}
                    />
                  </Form.Group>
                  <Form.Group as={Col} md='4' controlId='city'>
                    <Form.Label>CITY</Form.Label>
                    <Form.Control
                      type='text'
                      placeholder='City'
                      name='CITY'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.CITY}
                    />
                  </Form.Group>
                </Form.Row>

                <Form.Row>
                  <Form.Group as={Col} md='4' controlId='zip-code'>
                    <Form.Label>ZIP CODE</Form.Label>
                    <Form.Control
                      type='text'
                      placeholder='Zip Code'
                      name='POSTAL_CODE'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.POSTAL_CODE}
                    />
                    {touched.POSTAL_CODE && errors.POSTAL_CODE ? (
                      <div className='invalid-feedback'>
                        {errors.POSTAL_CODE}
                      </div>
                    ) : null}
                  </Form.Group>
                  <Form.Group as={Col} md='4' controlId='address-1'>
                    <Form.Label>STREET ADDRESS 1</Form.Label>
                    <Form.Control
                      type='text'
                      placeholder='Street Address 1'
                      name='ADDRESS_1'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.ADDRESS_1}
                    />
                  </Form.Group>
                  <Form.Group as={Col} md='4' controlId='address-2'>
                    <Form.Label>STREET ADDRESS 2</Form.Label>
                    <Form.Control
                      type='text'
                      placeholder='Stree Address 2'
                      name='ADDRESS_2'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.ADDRESS_2}
                    />
                  </Form.Group>
                </Form.Row>
                <hr />
                <Form.Row>
                  <h4>Previous Address 1</h4>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col} md='4' controlId='prev-state1'>
                    <Form.Label>STATE/PROVINCE</Form.Label>
                    <RegionDropdown
                      id='prev-state1'
                      className='form-control'
                      valueType='SHORT'
                      name='PREVIOUS_STATE_1'
                      country='United States'
                      onChange={val =>
                        props.handleCustomChange(
                          val,
                          'PREVIOUS_STATE_1',
                          setFieldValue
                        )
                      }
                      value={values.PREVIOUS_STATE_1}
                    />
                  </Form.Group>
                  <Form.Group as={Col} md='4' controlId='prev-city-1'>
                    <Form.Label>CITY</Form.Label>
                    <Form.Control
                      type='text'
                      placeholder='City'
                      name='PREVIOUS_CITY_1'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.PREVIOUS_CITY_1}
                    />
                  </Form.Group>
                </Form.Row>
                <hr />
                <Form.Row>
                  <h4>Previous Address 2</h4>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col} md='4' controlId='prev-state2'>
                    <Form.Label>STATE/PROVINCE</Form.Label>
                    <RegionDropdown
                      id='PREVIOUS_STATE_2'
                      className='form-control'
                      valueType='SHORT'
                      name='PREVIOUS_STATE_2'
                      country='United States'
                      onChange={val =>
                        props.handleCustomChange(
                          val,
                          'PREVIOUS_STATE_2',
                          setFieldValue
                        )
                      }
                      value={values.PREVIOUS_STATE_2}
                    />
                  </Form.Group>
                  <Form.Group as={Col} md='4' controlId='prev-city2'>
                    <Form.Label>CITY</Form.Label>
                    <Form.Control
                      type='text'
                      placeholder='City'
                      name='PREVIOUS_CITY_2'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.PREVIOUS_CITY_2}
                    />
                  </Form.Group>
                </Form.Row>
                <hr />
                <Form.Row>
                  <h4>Previous Address 3</h4>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col} md='4' controlId='prev-state3'>
                    <Form.Label>STATE/PROVINCE</Form.Label>
                    <RegionDropdown
                      id='PREVIOUS_STATE_3'
                      className='form-control'
                      valueType='SHORT'
                      name='PREVIOUS_STATE_3'
                      country='United States'
                      onChange={val =>
                        props.handleCustomChange(
                          val,
                          'PREVIOUS_STATE_3',
                          setFieldValue
                        )
                      }
                      value={values.PREVIOUS_STATE_3}
                    />
                  </Form.Group>
                  <Form.Group as={Col} md='4' controlId='prev-city3'>
                    <Form.Label>CITY</Form.Label>
                    <Form.Control
                      type='text'
                      placeholder='City'
                      name='PREVIOUS_CITY_3'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.PREVIOUS_CITY_3}
                    />
                  </Form.Group>
                </Form.Row>
                <hr />
                <Form.Row>
                  <h4>Social Security Number</h4>
                </Form.Row>

                <Form.Row>
                  <Form.Group as={Col} md='4' controlId='ssn'>
                    <Form.Label>SSN</Form.Label>
                    <Form.Control
                      type='password'
                      placeholder='SSN Number'
                      name='SSN_FULL'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.SSN_FULL}
                    />
                    {touched.SSN_FULL && errors.SSN_FULL ? (
                      <div className='invalid-feedback'>{errors.SSN_FULL}</div>
                    ) : null}
                  </Form.Group>
                </Form.Row>
                <Form.Row className='float-right'>
                  <Button
                    variant='primary'
                    className='submit-button'
                    type='submit'
                    disabled={isSubmitting}
                  >
                    SAVE AND CONTINUE
                  </Button>
                </Form.Row>
              </Form>
            )}
          </Formik>
        </Card.Body>
      </Card>
    </Fragment>
  );
};

export default UserProfile;
