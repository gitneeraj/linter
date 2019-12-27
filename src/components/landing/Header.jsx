import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, Navbar, Container } from 'react-bootstrap';

import privacyMateLogo from '../../img/PM-logo.svg';

const Header = () => {
  return (
    <header className='landing-header bg-white border-bottom'>
      <Container fluid={true} className='px-0'>
        <Navbar expand='lg'>
          <Navbar.Brand as={NavLink} to='/'>
            <img src={privacyMateLogo} alt='PrivacyMate' />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse
            id='basic-navbar-nav'
            className='justify-content-end'
          >
            <Nav>
              <Nav.Link
                as={NavLink}
                to='/login'
                className='mr-5 font-weight-bold'
              >
                Login
              </Nav.Link>
              <Nav.Link href='#link' className='mr-5 font-weight-bold'>
                FAQs
              </Nav.Link>
              <Nav.Link href='#plans-section' className='mr-5 font-weight-bold'>
                Pricing
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to='/plans'
                className=' btn btn-danger px-4 py-2 text-white'
              >
                Start Now
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </header>
  );
};

export default Header;
