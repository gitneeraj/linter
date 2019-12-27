import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { toast } from 'react-toastify';

import { LoginForm, ForgotPassword } from '../../components';
import { LOGIN_SUCCESSFUL } from '../../constants';
import { handleInputChange, getCookie } from '../../helpers';
import { userService } from '../../services';

class Login extends Component {
  state = {
    submitted: false,
    loggedIn: false,
    forgotPassword: false,
    username: '',
    password: ''
  };

  onInputChange = event => {
    let obj = handleInputChange(event);

    this.setState(state => ({
      ...state,
      ...obj
    }));
  };

  handleLogin = async () => {
    this.setState(state => ({ ...state, submitted: true }));
    await userService.login({
      username: this.state.username,
      password: this.state.password
    });
    this.setState(state => ({ ...state, submitted: false }));
    if (getCookie('token')) {
      toast.success(LOGIN_SUCCESSFUL);
      this.setState(state => ({
        ...state,
        loggedIn: true
      }));
    }
  };

  handleForgotPassword = () => {
    this.setState(state => ({ ...state, submitted: true }));
    //do forgot password
  };

  handleBack = () => {
    this.setState(state => ({
      ...state,
      forgotPassword: false,
      submitted: false
    }));
  };

  render() {
    const { submitted, loggedIn, forgotPassword } = this.state;

    if (loggedIn) {
      return <Redirect to={'/dashboard'} />;
    }

    if (forgotPassword) {
      return (
        <ForgotPassword
          onInputChange={this.onInputChange}
          handleForgotPassword={this.handleForgotPassword}
          handleBack={this.handleBack}
          isSubmitted={submitted}
        />
      );
    }

    return (
      <LoginForm
        onInputChange={this.onInputChange}
        handleLogin={this.handleLogin}
        isSubmitted={submitted}
      />
    );
  }
}

export default Login;
