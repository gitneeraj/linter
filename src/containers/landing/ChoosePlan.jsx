import React, { Component } from 'react';
import { Plans } from '../../components';
import { get_all_subscription_plans } from '../../services';

class ChoosePlan extends Component {
    state = {
      products: [],
      isMonthly: true,
    };

    getSubscriptionPlans = async () => {

      let products = Object.values(
        await get_all_subscription_plans()
      );

      this.setState(state => ({
        ...state,
        products: products[1]
      }));
    }

    changeTerm = () => {
      this.setState({
        isMonthly: !this.state.isMonthly
      })
    }

    componentDidMount() {
      this.getSubscriptionPlans();
    }

    render() {
      const { products, isMonthly } = this.state;
      return (
        <Plans products={products} isMonthly={isMonthly} changeTerm={this.changeTerm}/>
      );
    }
  }
  
  export default ChoosePlan;
  