import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import '../../styles/stats-section.scss';

const StatsSection = () => {
  return (
    <Container className='border border-secondary my-5 p-3 text-center stats-section'>
      <Row>
        <Col xs={12} lg>
          <h4 className='text-danger'>91%</h4>
          <p>
            of adults feel they have lost control of personal data collection
          </p>
        </Col>
        <Col xs={12} lg>
          <h4 className='text-danger'>50%</h4>
          <p>
            of users worry about the amount of personal information available
            online
          </p>
        </Col>
        <Col xs={12} lg>
          <h4 className='text-danger'>65%</h4>
          <p>
            of users would like more control over their personal information
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default StatsSection;
