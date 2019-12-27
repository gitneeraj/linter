import React, { Fragment } from 'react';
import { Card, Button } from 'react-bootstrap';

const OverviewScan = ({ ...props }) => {
  return (
    <Fragment>
      <Card className='scan-now shadow border-0 mb-4'>
        <Card.Body className='text-center'>
          <p>
            We are now continuously scanning the internet for your personal data
            and will automatically remove your data whenever we find it.
          </p>
          <Button
            variant='outline-danger'
            size='lg'
            block
            onClick={props.handleScanNow}
          >
            SCAN NOW
          </Button>
        </Card.Body>
      </Card>
    </Fragment>
  );
};

export default OverviewScan;
