import React, { Component } from 'react';

import { Footer, Header, DashboardHeader, CreateAccountHeader } from '../components';

class Layout extends Component {
  state = {};

  getHeader = () => {
    if (this.props.url.includes('dashboard')) {
      return <DashboardHeader />;
    } else if (this.props.url.includes('plans') || this.props.url.includes('create-account')) {
      return <CreateAccountHeader />;
    } else {
      return <Header />;
    }
  };
  render() {
    return (
      <div className="wrapper">
        {this.getHeader()}
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default Layout;
