import React from 'react';
import { Form, Button, Spinner } from 'react-bootstrap';

const ForgotPassword = ({ ...props }) => {
  return (
    <div>
      <h4>Forgot Password?</h4>
      <Form>
        <Form.Group controlId='formEmail'>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter email'
            name='username'
            onChange={props.onInputChange}
          />
        </Form.Group>
        <Button variant='default' type='button' onClick={props.handleBack}>
          Back
        </Button>
        <Button
          variant='primary'
          type='button'
          onClick={props.handleForgotPassword}
        >
          {props.isSubmitted && (
            <Spinner animation='border' size='sm' className='mr-2' />
          )}
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default ForgotPassword;
