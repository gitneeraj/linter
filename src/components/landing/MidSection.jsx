import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import infoGraphic from '../../img/homepage-graphic.svg';
import '../../styles/mid-section.scss';

const MidSection = () => {
  return (
    <section
      id='mid-section'
      style={{ backgroundColor: '#01a5a4' }}
      className='mid-section py-4'
    >
      <Container fluid={true}>
        <Row className='d-flex align-items-center py-3 text-white'>
          <Col>
            <img
              src={infoGraphic}
              className='img-fluid'
              alt='our life is tracked everyday'
            />
          </Col>
          <Col>
            <h2 className='font-weight-normal'>
              Your life is tracked everyday.
            </h2>
            <p className='mb-5'>
              When you make a purchase, use an app or browse the web your
              personal and sensitive information is collected and shared with
              third parties.
            </p>
            <strong>Put an end to this with PrivacyMate</strong>
            <br />
            <a
              href='#plans-section'
              className='btn btn btn-outline-light text-uppercase mt-2 py-3 px-5'
            >
              View Plans
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default MidSection;
