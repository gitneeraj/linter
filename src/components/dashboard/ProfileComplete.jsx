import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Row, Col } from 'react-bootstrap';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';

import 'react-circular-progressbar/dist/styles.css';
import '../../styles/overview-profile-complete.scss';

const OverviewProfileComplete = ({ ...props }) => {
  let profileMessage = 'Your profile is up-to-date';

  if (props.percent && Math.floor(props.percent * 100) < 100) {
    profileMessage = (
      <p>
        Please{' '}
        <Link to={'/dashboard/profile'} className='text-danger text-decoration'>
          complete your profile
        </Link>{' '}
        to remove more of your personal data from internet.
      </p>
    );
  }
  return (
    <Card className='profile-completeness shadow border-0'>
      <Card.Body>
        <h6 className='text-uppercase font-weight-normal'>
          Profile Completeness
        </h6>
        <Row className='my-4'>
          <Col>
            <span className='display-4'>
              {props.percent && Math.floor(props.percent * 100)}
            </span>
            <span style={{ fontSize: 25 }}>%</span>
          </Col>
          <Col className='d-flex justify-content-end'>
            <CircularProgressbarWithChildren
              value={props.percent && props.percent * 100}
            >
              <img
                style={{ width: 32, marginTop: -5 }}
                src='https://icon-library.net/images/user-png-icon/user-png-icon-6.jpg'
                alt='Profile'
              />
              <div style={{ fontSize: 12, marginTop: -5 }} />
            </CircularProgressbarWithChildren>
          </Col>
        </Row>
        {profileMessage}
      </Card.Body>
    </Card>
  );
};

export default OverviewProfileComplete;
