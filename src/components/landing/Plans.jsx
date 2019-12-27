import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { ToggleSwitch } from '../../components';

import '../../styles/box-layout.scss';

const Plans = ({ ...props }) => {
  return (
    <section className="content-box box-block px-0 col-lg-5 mx-auto my-5">
        <h3>Choose your plan</h3>
        <div className="box-block-content">
            <ToggleSwitch isMonthly={props.isMonthly} changeTerm={props.changeTerm} />
            <ul className="plans-list list-unstyled">
            {props.products.map((product, index) => {
                return (
                    <li key={index}>
                        <div className="plan-detail">
                            <h5>{product.name}</h5>
                            {/* @todo Update plan price based on the term selection {isMonthly} */}
                            <span>${product.plans[0].amount}</span>
                        </div>
                        <Button variant='primary' type='button' as={Link} to="/create-account">Select</Button>
                    </li>
                );
            })}
            </ul>
        </div>
    </section>
  );
};

export default Plans;
