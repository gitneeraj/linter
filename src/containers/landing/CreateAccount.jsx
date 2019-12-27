import React, { Component } from 'react';
import { CreateAccountForm } from '../../components';
import tippy from 'tippy.js';

class CreateAccount extends Component {
    state = {
      viewPassword: false
    };

    togglePasswordDisplay = () => {
      this.setState({
        viewPassword: !this.state.viewPassword
      })
    }

    componentDidMount() {
      //@todo - Update li class 'error' and 'success' by validating entering password text
      //https://atomiks.github.io/tippyjs/
      tippy('#userPassword', {
        content: '<p>Passwords must have…</p><ul><li class="error">8 characters minimum</li><li class="success">One lowercase character</li><li class="error">One number</li><li class="error">One symbol (!@#$%^&*)</li></ul>',
        trigger: 'click',
        placement: 'right',
      });
    }

    render() {
      const { viewPassword } = this.state;
      return (
        <CreateAccountForm viewPassword={viewPassword} togglePasswordDisplay={this.togglePasswordDisplay}/>
      );
    }
  }
  
  export default CreateAccount;
  