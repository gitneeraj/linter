import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Row, Col, Button } from 'react-bootstrap';

import 'tippy.js/dist/tippy.css';
import '../../styles/box-layout.scss';
import '../../styles/create-account.scss';

const CreateAccountForm = ({ ...props }) => {

    

  return (
    <section className="content-box box-block px-0 col-lg-5 mx-auto my-5">
        <h3>Create your account</h3>
        <div className="box-block-content">
            <Form className="create-account">
                <Form.Group controlId="userEmail">
                    <Form.Label>Your email address</Form.Label>
                    <Form.Control type="email" />
                </Form.Group>

                <Form.Group controlId="userPassword" className="passwordBlock">
                    <Form.Label>Set your password</Form.Label>
                    <Form.Control type={props.viewPassword ? 'text' : 'password'} />
                    <span className="show-hide" onClick={props.togglePasswordDisplay}>
                        <svg version="1.1" viewBox="0 0 32 26" xmlns="http://www.w3.org/2000/svg">
                            <g fill="none" fillRule="evenodd">
                            <g transform="translate(-904 -433)" fill="#999" fillRule="nonzero">
                            <g transform="translate(412 184)">
                            <g transform="translate(76 219)">
                            <g transform="translate(416 30)">
                            <g transform="translate(.4 .2)">
                            <path d="m6.039 18.685c0.098465 0.076956 0.2162 0.11491 0.33339 0.11491 0.15733 0 0.31306-0.067996 0.41901-0.19872 0.18409-0.22771 0.14609-0.55925-0.085087-0.74057-0.42865-0.33629-0.84391-0.70157-1.2335-1.0858l-3.9589-3.8995 4.0826-4.0212c3.9247-3.8652 9.6341-5.1845 14.898-3.4441 0.27988 0.091188 0.5833-0.056399 0.67802-0.33207 0.093649-0.27567-0.056725-0.57506-0.33714-0.66783-5.6521-1.8686-11.782-0.45172-15.995 3.6981l-4.8398 4.7671 4.7156 4.6448c0.41794 0.41219 0.86371 0.80382 1.3234 1.1649z"/>
                            <path d="m26.859 8.4082c-0.72526-0.71516-1.5205-1.3603-2.3641-1.9184-0.24642-0.16287-0.58161-0.098149-0.74678 0.14484-0.16571 0.24298-0.099535 0.57298 0.14688 0.73638 0.78552 0.51939 1.5269 1.121 2.2027 1.7874l3.9803 3.9249-4.1046 4.0474c-3.9733 3.918-9.9605 5.2427-15.254 3.3721-0.27977-0.09921-0.58806 0.044565-0.68813 0.32044-0.10007 0.27588 0.045194 0.57934 0.32497 0.67855 1.712 0.60481 3.4918 0.89819 5.2597 0.89819 4.1003 0 8.1371-1.5794 11.118-4.5191l4.8654-4.7976-4.7405-4.6751z"/>
                            <path d="m16.433 18.956c-1.1429 0-2.2567-0.3123-3.2223-0.90348-0.24791-0.15145-0.57544-0.077292-0.73098 0.16764-0.15501 0.24493-0.078566 0.56663 0.1704 0.71913 1.1334 0.69458 2.4419 1.0612 3.7829 1.0612 3.9517 0 7.1665-3.1627 7.1665-7.0503 0-1.4022-0.41778-2.7569-1.2077-3.9179-0.1635-0.23971-0.49369-0.30395-0.73629-0.14362-0.24366 0.16085-0.30896 0.48516-0.14598 0.72435 0.67259 0.98861 1.0283 2.1422 1.0283 3.3371 0 3.3121-2.7387 6.0058-6.1048 6.0058z"/>
                            <path d="m16.447 6.6799c1.1084 0 2.1948 0.29861 3.1428 0.86396 0.25443 0.15173 0.584 0.067497 0.73537-0.18953 0.15083-0.25649 0.067096-0.58749-0.18841-0.73976-1.1133-0.66363-2.3891-1.0146-3.6903-1.0146-3.9957 0-7.2463 3.2701-7.2463 7.2896 0 1.1253 0.24799 2.2047 0.73752 3.208 0.093397 0.19115 0.28395 0.30238 0.48255 0.30238 0.078905 0 0.15996-0.017819 0.23564-0.055077 0.26624-0.13175 0.37627-0.4552 0.24584-0.72248-0.41653-0.85424-0.62802-1.7733-0.62802-2.7323 5.368e-4 -3.4245 2.7697-6.2102 6.1734-6.2102z"/>
                            <path d="m29.043 0.15479c-0.20961-0.20638-0.54841-0.20638-0.75801 0l-24.928 24.544c-0.20961 0.20638-0.20961 0.53997 0 0.74635 0.10454 0.10293 0.24177 0.15465 0.37901 0.15465s0.27447-0.051728 0.37901-0.15465l24.928-24.544c0.20961-0.20585 0.20961-0.53997 0-0.74635z"/>
                            </g>
                            </g>
                            </g>
                            </g>
                            </g>
                            </g>
                        </svg>
                    </span>
                </Form.Group>

                <Form.Group controlId="region">
                    <Form.Label>Street 1</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>

                <Row>
                    <Col>
                        <Form.Group controlId="streetOne">
                            <Form.Label>Region</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="city">
                            <Form.Label>City</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Form.Group controlId="postalCode">
                            <Form.Label>Postal Code</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="country">
                            <Form.Label>Country</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                    </Col>
                </Row>

                {/* If user selects paid plan activate below feilds */}
                <hr className="mt-5 mb-5" />

                <Form.Group controlId="nameOnCard">
                    <Form.Label>Name on card</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>

                <Form.Group controlId="cardNumber">
                    <Form.Label>Card number</Form.Label>
                    <Form.Control type="number" />
                </Form.Group>

                <Row>
                    <Col xs={7}>
                        <Form.Group>
                            <Form.Label>Expiration date</Form.Label>
                            <Row>
                                <Col>
                                    <Form.Control as="select">
                                        <option>MM</option>
                                        <option value="january">January</option>
                                        <option value="february">February</option>
                                        <option value="march">March</option>
                                        <option value="april">April</option>
                                        <option value="may">May</option>
                                        <option value="june">June</option>
                                        <option value="july">July</option>
                                        <option value="august">August</option>
                                        <option value="september">September</option>
                                        <option value="october">October</option>
                                        <option value="november">November</option>
                                        <option value="december">December</option>
                                    </Form.Control>
                                </Col>
                                <Col className="px-0">
                                    <Form.Control as="select">
                                        <option>YY</option>
                                        <option value="2019">2019</option>
                                        <option value="2020">2020</option>
                                        <option value="2021">2021</option>
                                        <option value="2022">2022</option>
                                        <option value="2023">2023</option>
                                        <option value="2024">2024</option>
                                        <option value="2025">2025</option>
                                        <option value="2026">2026</option>
                                        <option value="2027">2027</option>
                                        <option value="2028">2028</option>
                                        <option value="2029">2029</option>
                                        <option value="2030">2030</option>
                                    </Form.Control>
                                </Col>
                            </Row>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="securityCode">
                            <Form.Label>Security code (CVV)</Form.Label>
                            <Form.Control type="number" />
                        </Form.Group>
                    </Col>
                </Row>
                {/* End credit card feilds */}

                <Form.Group controlId="termsAndPolicy" className="mt-3 d-flex justify-content-center terms-and-policy">
                    <Form.Check type="checkbox" /> I agree to the <Link to="/">Terms of Service</Link>&nbsp;and&nbsp;<Link to="/">Privacy Policy</Link>
                </Form.Group>
                <Form.Group controlId="buttonSubmit" className="mt-3 d-flex justify-content-center">
                    <Button variant="primary" type="submit" className="btn-lg px-5">
                        Create Account
                    </Button>
                </Form.Group>
            </Form>
        </div>
    </section>
  );
};

export default CreateAccountForm;
