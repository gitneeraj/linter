import React, { Component } from 'react';
import ActivityCategoryItem from '../../components/dashboard/ActivityCategoryItem';
import { Row, Col, Accordion } from 'react-bootstrap';
import { userService, activityService } from '../../services';
import { OverviewProfileComplete } from '../../components';

class Activity extends Component {
  state = { activity: '', fields: '', showModal: 0 };

  getActivity = async () => {
    let activity = await activityService.get_activity();
    let fields = await userService.get_all_fields();
    this.setState(prevState => (
      {
        activity: activity,
        fields: fields,
        showModal: prevState.showModal
      }));
  };

  getModal = value => {
    this.setState(prevState => (
      {
        activity: prevState.activity,
        fields: prevState.fields,
        showModal: value
      }));
  };

  hideModal = value => {
    this.setState(prevState => (
      {
        activity: prevState.activity,
        fields: prevState.fields,
        showModal: 0
      }));
  };

  componentDidMount() {
    this.getActivity();
  }

  render() {
    if (this.state.activity === '') return <div>Loading....</div>;
    else {
      let history = this.state.activity.history;
      const aItems = Object.keys(history).map((elem, index) => (
        <ActivityCategoryItem
          key={index}
          category={elem}
          data={history[elem]}
          showModal={this.state.showModal}
          getModal={this.getModal}
          hideModal={this.hideModal}
        />
      ));
      return (
        <Row>
          <Col md={8} xl={9}>
            <Accordion>
              <Row className='header-div'>
                <Row className='header-text'>Activity Tracker</Row>
                <Row>
                  Click on any of the threat categories below to see the latest
                  protection we have provided. The harmful effects of data
                  brokering include unwanted spam, telemarketing calls, junk
                  mail, and credit and insurance solicitations. Another result
                  of data brokering is finding your information online on people
                  search websites. Identity thieves and others can use this
                  information to steal your identity and bombard you with
                  unwanted solicitations.
                </Row>
              </Row>
              {aItems}
            </Accordion>
          </Col>
          <Col md={4} xl={3}>
            <Row>
              <Col>
                <OverviewProfileComplete
                  percent={this.state.fields.coverage}
                ></OverviewProfileComplete>
              </Col>
            </Row>
          </Col>
        </Row>
      );
    }
  }
}

export default Activity;
