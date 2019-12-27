import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
  InputGroup,
  FormControl,
  Button
} from 'react-bootstrap';

import envolop from '../../img/envolope.png';

class Footer extends Component {
  render() {
    const d = new Date();
    return (
      <footer>
        <div className='bg-dark py-5 text-white'>
          <Container fluid={true}>
            <Row>
              <Col xs lg='9'>
                <h5 className='font-weight-normal'>Newsletter</h5>
                <p className='font-weight-light'>
                  Stay up to date and get weekly tips to regain your privacy.
                </p>
                <InputGroup size='sm' className='w-50 mb-3'>
                  <InputGroup.Prepend>
                    <InputGroup.Text className='bg-white'>
                      <img src={envolop} alt='envolope' />
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl aria-label='Amount (to the nearest dollar)' />
                  <InputGroup.Append className='border-0'>
                    <Button variant='danger'>Join</Button>
                  </InputGroup.Append>
                </InputGroup>
              </Col>
              <Col xs lg='3'>
                <h5 className='font-weight-normal'>Contact Us</h5>
                <a
                  className='text-white font-weight-light'
                  href='mailto:support@privacymate.com'
                >
                  <img src={envolop} className='mr-2' alt='envolope' />{' '}
                  support@privacymate.com
                </a>
              </Col>
            </Row>
          </Container>
        </div>
        <div className='py-3 bg-info text-white'>
          <Container fluid={true}>
            <span>&copy; {d.getFullYear()}</span>. All rights reserved.
          </Container>
        </div>
      </footer>
    );
  }
}

export default Footer;
