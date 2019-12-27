import React, { Fragment } from 'react';
import {
  Card, ListGroup, Badge, Button,
} from 'react-bootstrap';

import { NonFreeCategoryBadge } from '..';

import '../../styles/overview-plan-details.scss';

const OverviewPlanDetails = ({ ...props }) => (
  <>
    <Card className="plan-details shadow border-0">
      <Card.Body>
        <div className="d-flex justify-content-between mb-4">
          <h4>
            You're on the
            {' '}
            <span className="text-danger">{props.subscription.subscription.NAME}</span>
            {' '}
plan
          </h4>
          <Button
            variant="danger"
            className="text-uppercase font-weight-bold"
            style={{ fontSize: 14 }}
          >
            Upgrade Plan
          </Button>
        </div>

        <div style={{ fontSize: 14 }} className="mb-4">
          <span className="bg-success px-2 text-white">
            {props.subscription.subscription.THREAT_CATEGORIES.length}
          </span>
          <span className="px-2 mr-1" style={{ backgroundColor: '#d2d2d2' }}>
            opt outs
          </span>
          are activated on your plan
        </div>

        <ListGroup variant="flush" className="font-weight-light">
          {props.categories.map((category, index) => (
            <ListGroup.Item className="px-0" key={index}>
              <div className="d-flex justify-content-between">
                <div>
                  {category.category}
                  <NonFreeCategoryBadge category={category.category} />
                </div>
                {props.subscription.subscription.THREAT_CATEGORIES.includes(category.category) ? (
                  <Button variant="outline-secondary btn-sm nohover">
                    <Badge pill variant="success" className="active-indicator mr-1">
                      &nbsp;
                    </Badge>
                    Active
                  </Button>
                ) : (
                  <small className="text-muted">Upgrade your plan to activate this opt out</small>
                )}
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card.Body>
    </Card>
  </>
);

export default OverviewPlanDetails;
