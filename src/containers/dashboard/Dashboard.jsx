import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import { Overview, Profile, Activity, Support, Layout } from '..';

class Dashboard extends Component {
  state = {};
  render() {
    const { url } = this.props.match;
    return (
      <Layout url={url}>
        <Container fluid={true} className="my-4">
          <Switch>
            <Route path={`${url}`} exact component={Overview} />
            <Route path={`${url}/profile`} component={Profile} />
            <Route path={`${url}/activity`} component={Activity} />
            <Route path={`${url}/support`} component={Support} />
            <Route path={`${url}/*`} component={Overview} />
          </Switch>
        </Container>
      </Layout>
    );
  }
}

export default Dashboard;
