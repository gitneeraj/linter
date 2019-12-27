import React from 'react';
import { Card } from 'react-bootstrap';

import '../../styles/category-card.scss';

const CategoryCard = ({ ...props }) => {
  return (
    <section className="category-cards">
      {props.categories.map((category, index) => {
        let categoryName = category.category.replace(/\W+(?!$)/g, '-').toLowerCase();
        let iconClassName = `${categoryName}-icon`;
        return (
          <Card className="item" key={index}>  
          <Card.Body>
            <Card.Title>{category.category} <i className={iconClassName}></i></Card.Title>
            <div className="scan-results">
              <div className="scan-results-col targets">
                <span className="count">{category.targets.count}</span>
                <small>Data Found</small>
              </div>
              <div className="scan-results-col harvested">
                <span className="count">{category.harvested.count}</span>
                <small>Removed</small>
              </div>
              <div className="scan-results-col pending">
                <span className="count">{category.pending.count}</span>
                <small>Pending</small>
              </div>
            </div>
          </Card.Body>
          </Card>
        );
      })}
    </section>
  );
};

export default CategoryCard;

