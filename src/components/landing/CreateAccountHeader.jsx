import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, Navbar, Container } from 'react-bootstrap';

import privacyMateLogo from '../../img/PM-logo.svg';

const CreateAccountHeader = () => {
  return (
    <header className='landing-header bg-white border-bottom'>
      <Container fluid={true} className='px-0'>
        <Navbar expand='lg'>
          <Navbar.Brand as={NavLink} to='/'>
            <img src={privacyMateLogo} alt='PrivacyMate' />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls='pm-navbar-nav' />
          <Navbar.Collapse id='pm-navbar-nav'>
            <Nav className='m-auto main-nav nav-center'>
              <Nav.Link as={NavLink} to='/plans' exact activeClassName='active'>
                Choose Plan
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to='/create-account'
                exact
                activeClassName='active'
                className='mr-0'
              >
                Create Account
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </header>
  );
};

export default CreateAccountHeader;
