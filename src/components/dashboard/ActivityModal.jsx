import React from 'react';
import '../../styles/dashboard-header.scss';
import '../../styles/activity.scss';
import { Modal, Button, Row, Col } from 'react-bootstrap';
import { isNull } from 'util';

const getDesc = (props) => {
  let threats = '';
  let header = '';

  if (!isNull(props.data.THREATS)) {
    header =
      <Col className="col-md-12 modal-header-div">
        {props.data.site} is a {props.data.category}. Below is the personal
        information
        <span className='ml-1'>{props.data.site}</span> collects and sells.
    </Col>

    threats = Object.keys(props.data.THREATS).map((elem, index) => (
      <Col key={index} className="col-md-6">
        <li>
          <h4 className="modal-threats-header">{elem}</h4>
          <p>{props.data.THREATS[elem]}</p>
        </li>
      </Col>
    ))
  }
  else {
    header =
      <Col className="col-md-12 modal-header-div">
        {props.data.site} is a {props.data.category}.
    </Col>
  }
  return (
    <Row>
      {header}
      <Col>
        <ul><Row>{threats}</Row></ul>
      </Col>
    </Row>
  );
}

const ActivityModal = (props) => {
  return (
    <Modal size='lg' id="activity-modal" aria-labelledby='contained-modal-title-vcenter' centered show={props.show}
      onHide={props.onHide}>
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col className="modal-header-text">
            {props.data.site}
          </Col>
        </Row>
        {getDesc(props)}
        <Row className="modal-uses-div">
          <Col className="col-md-12">
            Privacy Mate has shielded your personal information from
          </Col>
          <Col className="col-md-12">
            <span className='modal-uses-text'>{(props.data.count).toLocaleString(navigator.language, { minimumFractionDigits: 0 })}</span>
          </Col>
          <Col className="col-md-12">
            potential uses.
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button className="btn-danger" onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ActivityModal;
