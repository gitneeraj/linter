import React, {Component} from 'react';
import { Form, Button, Col, Alert } from 'react-bootstrap';

import '../../styles/category-card.scss';

class ContactSupport extends Component {
  state = {
    category: '',
    feedback: 'Your Message',
    showAlert: false
  };

  handleCategoryChange = (event) => {
    this.setState({
      category: event.target.value
    });
  }

  handleCommentChange = (event) => {
    this.setState({
      feedback: event.target.value
    });
  }

  handleSubmit = (event) => {
    const formData = {
      // "Name": 'Username',
      "Category": `${this.state.category}`,
      "Feedback": `${this.state.feedback}`,
    }
    //@TODO Send this formData to support@privacymate.com when mail api is ready on tentob
    // console.log(JSON.stringify(formData));

    this.setState({ showAlert: true });
    event.preventDefault();
  }

  setShow = () => {
    this.setState({ showAlert: false });
  }

  componentDidMount() {
    console.log(`
    ${this.state.category}
    ${this.state.feedback}
    `);
  }

  render() {
    return (
      <section className="content-box p-4">
        <h3>Contact Support</h3>
        <p>Choose a category below and add your message to the support team so we can get back to you as quickly as possible.</p>

        <Alert variant="success" show={this.state.showAlert} onClose={() => this.setShow()} dismissible>
          <p className="m-0">PrivacyMates’s help desk has received your request. <br />Thanks in advance for getting in touch, and we’ll reply as soon as we can!</p>
        </Alert>

        <Form onSubmit={this.handleSubmit}>
          <Form.Group as={Col} md="4" className="px-0">
            <Form.Label>Message Category</Form.Label>
            <Form.Control as="select" required 
            value={this.state.category}
            onChange={this.handleCategoryChange}
            >
              <option value="">Select a Category</option>
              <option value="General Feedback">General Feedback</option>
              <option value="Site Suggestion">Site Suggestion</option>
              <option value="Technical Support">Technical Support</option>
              <option value="Customer Support">Customer Support</option>
            </Form.Control>
          </Form.Group>
          <Form.Group as={Col} md="10" className="px-0">
            <Form.Label>Your Message</Form.Label>
            <Form.Control as="textarea" value={this.state.feedback} rows="3" required onChange={this.handleCommentChange} />
          </Form.Group>
          <Form.Group>
            <Button variant="primary" type="submit" className="px-4">Send</Button>
          </Form.Group>
        </Form>
      </section>
    );
  }
}

export default ContactSupport;

