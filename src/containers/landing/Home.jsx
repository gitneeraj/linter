import React, { Component } from 'react';

import { Hero, MidSection, StatsSection, PlansSection } from '../../components';
import { Layout } from '..';
import { get_all_subscription_plans } from '../../services';

class Home extends Component {
  state = {
    subscription_plans: [],
    interval: 'month'
  };

  getAllSubscriptionPlans = async () => {
    let subscription_plans = await get_all_subscription_plans();
    this.setState({ subscription_plans });
  };

  setPlanInterval = interval => {
    this.setState({ interval });
  };

  componentDidMount() {
    this.getAllSubscriptionPlans();
  }

  render() {
    const { subscription_plans, interval } = this.state;

    return (
      <Layout url={this.props.match.url}>
        <Hero />
        <MidSection />
        <StatsSection />
        <PlansSection
          subscription_plans={subscription_plans}
          interval={interval}
          setPlanInterval={this.setPlanInterval}
        />
      </Layout>
    );
  }
}

export default Home;
