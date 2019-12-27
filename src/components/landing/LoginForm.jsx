import React from 'react';
import { Form, Button, Spinner } from 'react-bootstrap';

const LoginForm = ({ ...props }) => {
  return (
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

      <Form.Group controlId='formPassword'>
        <Form.Label>Password</Form.Label>
        <Form.Control
          type='password'
          placeholder='Password'
          name='password'
          onChange={props.onInputChange}
        />
      </Form.Group>
      <Form.Group controlId='formCheckbox'>
        <Form.Check
          type='checkbox'
          label='Forgot Password'
          name='forgotPassword'
          onChange={props.onInputChange}
        />
      </Form.Group>
      <Button variant='primary' type='button' onClick={props.handleLogin}>
        {props.isSubmitted && (
          <Spinner animation='border' size='sm' className='mr-2' />
        )}
        Submit
      </Button>
    </Form>
  );
};

export default LoginForm;
