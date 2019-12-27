import React from 'react';
import '../../styles/dashboard-header.scss';
import '../../styles/activity.scss';
import { Accordion, Card, Row, Col } from 'react-bootstrap';
import ActivitySiteItem from './ActivitySiteItem';
import { isNull } from 'util';

const toggleArrow = (evt) => {
  if (!isNull(document.getElementById(evt.target.id))) {
    document.getElementById(evt.target.id).children[0].className ===
      'arrow arrow-right mr-3'
      ? (document.getElementById(evt.target.id).children[0].className =
        'arrow arrow-down mr-3')
      : (document.getElementById(evt.target.id).children[0].className =
        'arrow arrow-right mr-3');
  }
}

const getCategoryDesc = {
  'Credit & Insurance Solicitations': 'All of the big credit bureaus, banks and insurance companies work together to bombard you with offers for credit cards, bank accounts and other financial services. They often purchase your information from data brokers or otherwise collect it themselves. The result is a mail box full of credit and insurance solicitations on a daily basis. PrivacyMate protects you by suppressing your personal information sharing from these credit and insurance companies.',
  'Data Brokers': 'A data broker is a company or person who collects and maintains your personal and sensitive information and then packages and sells it to anyone willing to pay. Most often, this is done without your consent. Data brokering is a multi-billion dollar industry. PrivacyMate protects you from the harmful effects of data brokering.',
  'Junk Mailers': 'Junk mailers are responsible for filling your mailbox with unwanted coupons, solicitations, offers, requests, catalogs, flyers and more. More than 40 pounds of unwanted junk mail is wasted per person each year in the United States. Junk mailers purchase your address from direct marketing companies, the U.S. Postal Service and also from data brokers. PrivacyMate removes your address from these Junk Mailers lists so that you only get the mail you want.',
  'People Search Sites': 'People search sites are online websites that act like phone or address books and are available to the public at large. These sites are harmful in that they also collect information such as your date of birth, family members, income, social media activity, affiliations, property holdings and lawsuits. People search sites often purchase this information from data brokers or collect it themselves. PrivacyMate protects you by removing your personal information from these websites.',
  'Telemarketing': ''
}

const ActivityCategoryItem = (props) => {
  const siteItems = props.data.map((elem, index) => (
    <ActivitySiteItem
      key={index}
      siteIndex={index}
      category={props.category}
      data={elem}
      showModal={props.showModal}
      getModal={props.getModal}
      hideModal={props.hideModal}
    />
  ));
  let categoryName = props.category.replace(/\W+(?!$)/g, '-').toLowerCase();
  let iconClassName = `${categoryName}-icon`;
  return (
    <Row className='item-div'>
      <Card className="col-md-12">
        <Card.Header>
          <Accordion.Toggle
            as={Card.Header}
            variant='link'
            id={props.category
              .replace('&', '')
              .replace('  ', '-')
              .replace(' ', '-')}
            eventKey={props.category}
            onClick={toggleArrow}
          >
            <i className='arrow arrow-right mr-3'></i>
            {props.category}
            <i className={"icon " + iconClassName}></i>
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey={props.category}>
          <Card.Body>
            <Row>
              <Col className="col-md-12 mb-3">{getCategoryDesc[props.category]}</Col>
              <Col className="item-child-div">
                {siteItems}
              </Col>
            </Row>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Row>
  );
}

export default ActivityCategoryItem;
