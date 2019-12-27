import React from 'react';
import { Card, ProgressBar } from 'react-bootstrap';

import '../../styles/target-categories.scss';

const TargetCategories = ({ ...props }) => {
  return (
    <Card className='target-categories shadow border-0 mb-4'>
      {props.categories.map((category, index) => {
        return (
          <Card.Body key={index} className='mb-6'>
            <span className='d-flex mb-2 text-uppercase font-weight-light'>
              {category.category}
            </span>
            <ProgressBar
              style={{
                height: 6
              }}
              variant='warning' // set color here
              now={Math.floor(
                (category.harvested.count / category.targets.count) * 100
              )}
            />
          </Card.Body>
        );
      })}
    </Card>
  );
};

export default TargetCategories;
