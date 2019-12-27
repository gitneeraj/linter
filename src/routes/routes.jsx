import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import { history } from '../helpers';
import { Home, Dashboard, Login, Layout, ChoosePlan, CreateAccount, ThankYou } from '../containers';
import { PrivateRoute } from '../routes';

export const Routes = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path='/' component={Home} />
        <PrivateRoute path='/dashboard' component={Dashboard} />
        <Route path='/plans'>
          <Layout url='plans'>
            <ChoosePlan />
          </Layout>
        </Route>
        <Route path='/create-account'>
          <Layout url='create-account'>
            <CreateAccount />
          </Layout>
        </Route>
        <Route exact path='/thank-you' component={ThankYou} />
        <Route path='*'>
          <Layout url='login'>
            <Container fluid={true} className='my-4'>
              <Login />
            </Container>
          </Layout>
        </Route>
      </Switch>
    </Router>
  );
};
