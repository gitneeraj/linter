import React from 'react';
import { Container, Button, Table } from 'react-bootstrap';

import yes from '../../img/yes.png';
import no from '../../img/no.png';
import '../../styles/plans-section.scss';

/**
 * Check if category is present in the plan
 * @param {object} plan plan details object
 * @param {string} category category name
 * @returns {html} yes or no with image tag
 */
const isCategoryInPlan = (plan, category) => {
  return plan.threat_categories.includes(category) ? (
    <img src={yes} alt='yes' height='16' />
  ) : (
    <img src={no} alt='no' height='16' />
  );
};

/**
 * Get plan amount based on interval(month/year)
 * @param {string} interval month or year
 * @param {object} plans plans list with amount based on month/year
 * @returns {number} plan amount
 */
const getPlanPrice = (interval, plans) => {
  let amount = 0;
  plans.forEach(plan => {
    if (plan.interval === interval) amount = plan.amount / 100;
  });
  return amount;
};

const PlansSection = ({ ...props }) => {
  const { all_categories, products } = props.subscription_plans;

  return (
    <Container id='plans-section' className='plans-section my-4'>
      <Table responsive borderless>
        <thead>
          <tr>
            <th className='fixed-width'>
              <h2 className='pricing-title'>Pricing</h2>
            </th>
            <th
              className={
                'cursor fix-width ' +
                (props.interval === 'month' ? 'bg-white' : 'border')
              }
              onClick={() => props.setPlanInterval('month')}
            >
              Monthly
            </th>
            <th
              className={
                'cursor align-middle ' +
                (props.interval === 'year' ? 'bg-white' : 'border')
              }
              onClick={() => props.setPlanInterval('year')}
            >
              <span style={{ float: 'left' }}>Annually</span>
              <span
                style={{ float: 'right' }}
                className='badge badge-danger pt-2'
              >
                SAVE 20%
              </span>
            </th>
          </tr>
        </thead>
      </Table>
      <Table responsive borderless>
        <thead>
          <tr>
            <th style={{ verticalAlign: 'middle' }} className='fixed-width'>
              <h4>Let us defend your Privacy.</h4>
            </th>
            {products &&
              products.map((product, index) => {
                return (
                  <th
                    key={index}
                    className={
                      product.name.toLowerCase().replace(/ /g, '-') +
                      '-plan text-center'
                    }
                  >
                    <h3 className='header-section text-white p-4'>
                      {product.name} <br />
                      <span className='price'>
                        ${getPlanPrice(props.interval, product.plans)} /{' '}
                        {props.interval}
                      </span>
                    </h3>
                  </th>
                );
              })}
          </tr>
        </thead>
        <tbody>
          {all_categories &&
            all_categories.map((category, index) => {
              return (
                <tr key={index}>
                  <td className='text-dark'>{category}</td>
                  <td className='text-center'>
                    {isCategoryInPlan(products[0], category)}
                  </td>
                  <td className='text-center'>
                    {isCategoryInPlan(products[1], category)}
                  </td>
                  <td className='text-center'>
                    {isCategoryInPlan(products[2], category)}
                  </td>
                </tr>
              );
            })}
          <tr>
            <td></td>
            <td className='text-center bg-white'>
              <Button variant='info' className='px-5 text-uppercase'>
                Select
              </Button>
            </td>
            <td className='text-center bg-white'>
              <Button variant='danger' className='px-5 text-uppercase'>
                Select
              </Button>
            </td>
            <td className='text-center bg-white'>
              <Button variant='dark' className='px-5 text-uppercase'>
                Select
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

export default PlansSection;
