import React from 'react';
import '../../styles/dashboard-header.scss';
import '../../styles/activity.scss';
import { Button, Row, Col } from 'react-bootstrap';
import ActivityModal from './ActivityModal';

const dateOptions = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  dateStyle: 'long',
  timeStyle: 'short',
  time: 'hour12'
};

const ActivitySiteItem = props => {
  let siteDate = new Date(props.data.date).toLocaleDateString(
    'en-US',
    dateOptions
  );

  return (
    <Row className={'item-child-div-' + (props.siteIndex % 2)}>
      <Col>
        <Col>{siteDate}</Col>
        <Col className='item-child-site'>
          Successfully removed personal information from
          <span className='ml-1 item-child-site-name'>{props.data.site}</span>
        </Col>
      </Col>
      <Col md={3} xl={3} className='item-child-btn-div'>
        <Button
          className='btn-danger'
          onClick={() => props.getModal(props.data.site)}
        >
          Details
        </Button>
      </Col>
      <ActivityModal
        show={props.showModal === props.data.site}
        category={props.category}
        onHide={() => props.hideModal(props.data.site)}
        data={props.data}
      />
    </Row>
  );
};

export default ActivitySiteItem;
