import React, { Component } from 'react';
import { UserProfile } from '../../components';
import { userService } from '../../services';
import moment from 'moment';

class Profile extends Component {

  state = {
    profile: {
      NAME_SIR_WITH_PERIOD: '',
      NAME_FIRST: '',
      NAME_MIDDLE: '',
      NAME_LAST: '',
      DATE_OF_BIRTH_MMDDYYYY: '',
      DATE_OF_BIRTH_DD: '',
      DATE_OF_BIRTH_MM: '',
      PHONE_1: '',
      PHONE_MOBILE: '',
      CURRENT_COUNTRY: 'United States',
      STATE: '',
      PREVIOUS_STATE_1: '',
      CITY: '',
      POSTAL_CODE: '',
      ADDRESS_1: '',
      ADDRESS_2: '',
      PREVIOUS_CITY_1: '',
      PREVIOUS_STATE_2: '',
      PREVIOUS_CITY_2: '',
      PREVIOUS_STATE_3: '',
      PREVIOUS_CITY_3: '',
      SSN_FULL: ''
    },
    status: ''
  };

  isNullOrEmpty = value => {
    return !value || value === undefined || value === '' || value.length === 0;
  };

  getProfileData = async () => {
    let profile = await userService.get_profile();
    this.loadState(profile);
  };

  loadState = profile => {
    var dob = moment(profile.DATE_OF_BIRTH_MMDDYYYY, 'MMDDYYYY');
    profile.DATE_OF_BIRTH_MMDDYYYY = new Date(dob.toISOString());
    profile.CURRENT_COUNTRY = 'United States';
    this.setState(state => ({
      ...state,
      profile
    }));
  };

  handleCustomChange = (value, selection, setFieldValue) => {
    setFieldValue([selection], value, true);
  };

  setTitleChange = (event, setFieldValue, setFieldTouched) => {
    const { value } = event.target;
    setFieldTouched('NAME_SIR_WITH_PERIOD');
    setFieldValue('NAME_SIR_WITH_PERIOD', value, true);
  };

  handleSubmit = async (profile, setFieldTouched) => {
    let submitProfile = {};

    submitProfile.ADDRESS_1 = profile.ADDRESS_1;
    submitProfile.ADDRESS_2 = profile.ADDRESS_2;
    submitProfile.CITY = profile.CITY;

    submitProfile.DATE_OF_BIRTH_DD = moment(
      profile.DATE_OF_BIRTH_MMDDYYYY
    ).format('DD');

    submitProfile.DATE_OF_BIRTH_MM = moment(
      profile.DATE_OF_BIRTH_MMDDYYYY
    ).format('MM');

    submitProfile.DATE_OF_BIRTH_YYYY = moment(
      profile.DATE_OF_BIRTH_MMDDYYYY
    ).format('YYYY');

    submitProfile.NAME_FIRST = profile.NAME_FIRST;
    submitProfile.NAME_LAST = profile.NAME_LAST;
    submitProfile.NAME_MIDDLE = profile.NAME_MIDDLE;

    if (this.isNullOrEmpty(profile.NAME_SIR_WITH_PERIOD)) {
      submitProfile.NAME_SIR = '';
    } else {
      submitProfile.NAME_SIR = profile.NAME_SIR_WITH_PERIOD.replace('.', '');
    }

    submitProfile.PHONE_1 = profile.PHONE_1;
    submitProfile.PHONE_MOBILE = profile.PHONE_MOBILE;
    submitProfile.POSTAL_CODE = profile.POSTAL_CODE;
    submitProfile.PREVIOUS_CITY_1 = profile.PREVIOUS_CITY_1;
    submitProfile.PREVIOUS_CITY_2 = profile.PREVIOUS_CITY_2;
    submitProfile.PREVIOUS_CITY_3 = profile.PREVIOUS_CITY_3;

    submitProfile.PREVIOUS_STATE_1 = profile.PREVIOUS_STATE_1;
    submitProfile.PREVIOUS_STATE_2 = profile.PREVIOUS_STATE_2;
    submitProfile.PREVIOUS_STATE_3 = profile.PREVIOUS_STATE_3;

    submitProfile.SSN_FULL = profile.SSN_FULL;
    submitProfile.STATE = profile.STATE;

    let response = await userService.update_profile(submitProfile);

    setFieldTouched('NAME_SIR_WITH_PERIOD');

    return response;
  };

  handleDateChange = (date, selection, setFieldValue) => {
    setFieldValue(selection, date, true);
  };

  componentDidMount() {
    this.getProfileData();
  }

  render() {
    return (
      <div>
        <UserProfile
          handleSubmit={this.handleSubmit}
          userProfile={this.state.profile}
          handleCustomChange={this.handleCustomChange}
          handleDateChange={this.handleDateChange}
          setTitleChange={this.setTitleChange}
        ></UserProfile>
      </div>
    );
  }
}

export default Profile;
