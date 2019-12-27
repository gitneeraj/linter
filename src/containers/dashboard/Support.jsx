import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import '../../styles/support.scss';

import { OverviewProfileComplete } from '../../components';
import { ContactSupport } from '../../components';
import { userService } from '../../services';

class Support extends Component {
  state = {
    fields: {},
  };

  getProfileData = async () => {
    let fields = await userService.get_all_fields();

    this.setState(state => ({
      ...state,
      fields
    }));
  };

  componentDidMount() {
    this.getProfileData();
  }

  render() {
    const {fields} = this.state;
    return (
      <Row>
        <Col>
          <ContactSupport />
        </Col>
        <Col md={4} xl={3}>
          <OverviewProfileComplete percent={fields.coverage}></OverviewProfileComplete>
        </Col>
      </Row>
    );
  }
}

export default Support;
