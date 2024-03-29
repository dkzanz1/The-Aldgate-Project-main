import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import axios from 'axios';

function MakeContact(){
  const [formValues, setFormValues] =  useState({
    email:'',
    password:'',
    location:'',
    enquiry:''
  });

  const [formErrors, setFormErrors] = useState({});
  const [submitError, setSubmitError] = useState('');
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) { 
      try {
      const response = await axios.post('/api/contact', formValues);
      console.log(response.data); // Handle success response
      setSubmitSuccess(true);
      // Optionally, provide feedback to the user

    } catch (error) {
      console.error(error); // Handle error response
      setSubmitError("an error has occurred while submitting the form please try again")
      // Optionally, provide feedback to the user
    }
  }
};
  const validateForm = () => {
    let errors ={};
    let isValid = true;

    if (!formValues.email){
      errors.email = 'Email is required';
      isValid = false;
    }
    if (!formValues.password){
      errors.password = 'Password is required';
      isValid = false;
    }
    if (!formValues.location){
      errors.location = 'Location is required';
      isValid = false;
    }
    if (!formValues.enquiry){
      errors.enquiry = 'Enquiry is required';
      isValid = false;
    }
    setFormErrors(errors)
    return isValid;
  };

    return (
    <Container>
      <Row className="justify-content-center">
        <Col md={4}>
        <h3 className="text-center mt-3">Contact Form </h3>
        {submitError && <Alert variant="danger">{submitError}</Alert>}
        {submitSuccess && <Alert variant="success">Form submitted successfully!</Alert>}
        {/* Display submit success message if submission is successful */}
          <Form onSubmit={handleSubmit}>

            <Form.Group  controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control 
                type="email" 
                name="email"
                value={formValues.email}
                onChange={handleChange}
                placeholder="Enter your email"
                isInvalid={!!formErrors.email}
                aria-label="Enter your email" 
                aria-describedby="emailHelp"
               />

                <Form.Text className="text-muted" id="emailHelp">
                  We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group  controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                type="password" 
                name="password"
                value={formValues.password}
                onChange={handleChange}
                isInvalid={!!formErrors.password}
                placeholder="Enter your Password"
                aria-label="Enter your password" 
                />
              <Form.Control.Feedback type="invalid">
                {formErrors.password}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="Location">
                <Form.Label>Location</Form.Label>
                <Form.Control 
                type="text" 
                name="location"
                value={formValues.location}
                onChange={handleChange}
                isInvalid={!!formErrors.location}
                placeholder="enter your location"
                aria-label="Enter your location" 
                // autoComplete=""
                />
              <Form.Control.Feedback type="invalid">
                {formErrors.location}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="Brief">
                <Form.Label>Make an enquiry</Form.Label>
                <Form.Control 
                as="textarea"
                name="enquiry"
                value={formValues.enquiry}
                onChange={handleChange}
                isInvalid={!!formErrors.enquiry}
                type="text" 
                placeholder="Enter a Brief overview of your enquiry"
                aria-label="Enter a Brief overview of your enquiry" 
                 />
              <Form.Control.Feedback type="invalid">
                {formErrors.enquiry}
              </Form.Control.Feedback>
            </Form.Group>
          
            <div className="d-grid gap-2">
              <Button 
              variant="primary" 
              type="submit" 
              className="mt-3" 
              >Submit
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}


export default MakeContact;