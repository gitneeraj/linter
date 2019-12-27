import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Nav, Navbar, NavDropdown, Dropdown } from 'react-bootstrap';

import { userService } from '../../services';
import '../../styles/dashboard-header.scss';
import privacyMateLogo from '../../img/PM-logo.svg';

const DashboardHeader = () => {
  return (
    <header className='bg-white border-bottom'>
      <Container fluid={true} className='px-0'>
        <Navbar expand='lg'>
          <Navbar.Brand href='#home'>
            <img src={privacyMateLogo} alt='PrivacyMate' />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='pm-navbar-nav' />
          <Navbar.Collapse id='pm-navbar-nav'>
            <Nav className='mr-auto main-nav'>
              <Nav.Link
                as={NavLink}
                to='/dashboard/overview'
                exact
                activeClassName='active'
              >
                Overview
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to='/dashboard/profile'
                exact
                activeClassName='active'
              >
                Profile
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to='/dashboard/activity'
                exact
                activeClassName='active'
              >
                Activity
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to='/dashboard/support'
                exact
                activeClassName='active'
              >
                Support
              </Nav.Link>
            </Nav>

            <Nav>
              <div className='d-lg-flex top-right'>
                <Dropdown className='notify mr-4 mt-2'>
                  <Dropdown.Toggle className='have-notifications'>
                    <svg
                      version='1.1'
                      viewBox='0 0 23 25'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <g fill='none' fillRule='evenodd'>
                        <g
                          transform='translate(0 -2)'
                          fill='#BFC5D2'
                          fillRule='nonzero'
                        >
                          <path d='m22.574 22.435c-2.7271-1.1998-2.8308-6.3497-2.8328-6.4797v-3.455c0-3.3253-2.0857-6.1846-5.0496-7.4021-0.0063734-1.7096-1.4356-3.0985-3.1918-3.0985-1.7562 0-3.1854 1.389-3.1918 3.0984-2.9637 1.2175-5.0495 4.0769-5.0495 7.4021v3.455c-0.0019288 0.12994-0.10575 5.2799-2.8329 6.4797-0.31066 0.13672-0.48141 0.46618-0.40958 0.79085 0.071744 0.32472 0.36647 0.55662 0.70741 0.55662h6.9135c0.14173 0.75956 0.51038 1.4662 1.0742 2.0385 0.74888 0.76013 1.7392 1.1788 2.7885 1.1788 1.0493 0 2.0397-0.41863 2.7885-1.1788 0.56393-0.57239 0.93258-1.2791 1.0742-2.0385h6.9135c0.34094 0 0.63563-0.23186 0.70746-0.55662 0.071911-0.32467-0.098747-0.65409-0.40941-0.79077zm-3.5923-2.4671c0.28668 0.84674 0.69261 1.6971 1.2682 2.4047h-17.5c0.57554-0.70752 0.98147-1.5578 1.2682-2.4047h14.964zm-7.4818-16.558c0.79438 0 1.466 0.52002 1.6762 1.2288-0.54141-0.1094-1.102-0.16708-1.6762-0.16708-0.57416 0-1.1348 0.057639-1.6762 0.16708 0.2102-0.70879 0.88185-1.2288 1.6762-1.2288zm-6.7941 12.55v-3.4594c0-3.6497 3.0478-6.6189 6.7941-6.6189 3.7463 0 6.7941 2.9692 6.7941 6.6189v3.4651c9.644e-4 0.10605 0.017904 1.2206 0.30622 2.5925h-14.201c0.28848-1.3733 0.30551-2.4898 0.30639-2.5983zm6.7941 9.6303c-1.1045 0-2.0684-0.77582-2.3779-1.8074h4.7556c-0.30941 1.0316-1.2732 1.8074-2.3778 1.8074z' />
                        </g>
                      </g>
                    </svg>
                  </Dropdown.Toggle>
                  <Dropdown.Menu className='notifications-list'>
                    <ul class='list-unstyled'>
                      <li>
                        <small>Notification item 1</small>
                      </li>
                      <li>
                        <small>
                          Please complete your profile to remove more of your
                          personal data from internet.
                        </small>
                      </li>
                    </ul>
                  </Dropdown.Menu>
                </Dropdown>

                <NavDropdown
                  title='My Account'
                  className='myaccount-dropdown'
                  id='myaccount-dropdown'
                >
                  <figure>
                    <svg
                      version='1.1'
                      viewBox='0 0 61 60'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <g fill='none' fillRule='evenodd'>
                        <g transform='translate(-1187 -92)'>
                          <g transform='translate(1100 60)'>
                            <g transform='translate(87.156 32)'>
                              <g
                                transform='translate(17 17)'
                                fill='#7D7D7D'
                                fillRule='nonzero'
                              >
                                <path d='m22.192 16.808c-1.4159-1.4159-3.1013-2.4641-4.9401-3.0986 1.9694-1.3564 3.2633-3.6265 3.2633-6.1934 0-4.1441-3.3715-7.5156-7.5156-7.5156-4.1441 0-7.5156 3.3715-7.5156 7.5156 0 2.5669 1.2939 4.837 3.2633 6.1934-1.8388 0.63451-3.5241 1.6827-4.9401 3.0986-2.4554 2.4554-3.8076 5.72-3.8076 9.1924h2.0312c0-6.0482 4.9206-10.969 10.969-10.969 6.0482 0 10.969 4.9206 10.969 10.969h2.0312c0-3.4724-1.3523-6.737-3.8076-9.1924zm-9.1924-3.8076c-3.0241 0-5.4844-2.4602-5.4844-5.4844s2.4603-5.4844 5.4844-5.4844c3.0241 0 5.4844 2.4602 5.4844 5.4844s-2.4603 5.4844-5.4844 5.4844z' />
                              </g>
                              <circle
                                cx='30'
                                cy='30'
                                r='29'
                                stroke='#7D7D7D'
                                strokeWidth='2'
                              />
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </figure>
                  <p className='text-center'>
                    Hello, <span>John Smith</span>
                    <br />
                    You're on the <span className='suscribed-plan'>
                      Free
                    </span>{' '}
                    plan
                  </p>
                  <p className='text-center'>
                    <span className='optout'>
                      <span className='optout-count'>2</span>opt outs
                    </span>
                    <br />
                    are activated on you plan
                  </p>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href='#'>Upgrade Plan</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href='#'>Change Password</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={userService.logout}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </header>
  );
};

export default DashboardHeader;
