import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';

import chevron from '../../img/chevron.svg';
import '../../styles/hero.scss';

const Hero = () => {
  return (
    <Row className='hero-section'>
      <Col>
        <div className='d-flex w-100 justify-content-center align-items-center flex-column text-center content'>
          <h1>
            Reclaim
            <br />
            your privacy.
          </h1>
          <Col xs={12} sm={6} lg={3}>
            <p className='my-4 font-weight-light'>
              Stop the collection and distribution of your personal information.
            </p>
          </Col>
          <Button
            variant='danger'
            size='lg'
            className='text-uppercase px-5 py-3'
          >
            Start Now
          </Button>
        </div>
        <div className='d-flex w-100 justify-content-center flex-column text-center'>
          <span className='text-uppercase text-danger font-weight-bold mb-4'>
            Learn More
          </span>
          <a
            href='#mid-section'
            className='position-absolute chevron-placement'
          >
            <img
              src={chevron}
              alt='chevron'
              height='32'
              className='bg-white rounded-circle'
            />
          </a>
        </div>
      </Col>
    </Row>
  );
};

export default Hero;
