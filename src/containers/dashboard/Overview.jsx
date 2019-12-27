import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

import { objectToArray } from '../../helpers';
import {
  OverviewScan,
  OverviewPlanDetails,
  OverviewScanTargets,
  OverviewProfileComplete,
  CategoryCard,
} from '../../components';
import { targetService, userService, get_all_subscription_plans } from '../../services';

class Overview extends Component {
  state = {
    categories: [],
    fields: {},
    subscription: null,
    scaning: false,
  };

  getOverviewData = async () => {
    let categories = objectToArray(await targetService.get_all_target_categories());
    let fields = await userService.get_all_fields();
    let subscription = await userService.get_user_subscription();

    if (!localStorage.getItem('subscription_plans')) {
      localStorage.setItem(
        'subscription_plans',
        JSON.stringify(await get_all_subscription_plans()),
      );
    }

    this.setState((state) => ({
      ...state,
      fields,
      categories,
      subscription,
    }));
  };

  onHandleScanNow = async () => {
    this.setState((state) => ({
      ...state,
      scaning: true,
    }));
    setTimeout(() => {
      this.setState((state) => ({
        ...state,
        scaning: false,
      }));
    }, 5000);
  };

  componentDidMount() {
    this.getOverviewData();
  }

  render() {
    const { categories, fields, scaning, subscription } = this.state;
    return (
      <Row>
        <Col>
          <Row>
            <Col>
              <CategoryCard categories={categories} />
            </Col>
          </Row>
          <Row className="mt-4">
            <Col>
              {subscription && (
                <OverviewPlanDetails
                  subscription={subscription}
                  categories={categories}
                ></OverviewPlanDetails>
              )}
            </Col>
          </Row>
        </Col>
        <Col md={4} xl={3}>
          <Row>
            <Col>
              {!scaning && <OverviewScan handleScanNow={this.onHandleScanNow} />}

              {scaning && <OverviewScanTargets categories={categories}></OverviewScanTargets>}

              <OverviewProfileComplete percent={fields.coverage}></OverviewProfileComplete>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default Overview;
