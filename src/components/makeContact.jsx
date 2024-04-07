import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import axios from 'axios';





function MakeContact(){
  const [formValues, setFormValues] =  useState({
    email: '',
    password: '',
    location: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState({});
  const [submitError, setSubmitError] = useState('');
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);//SET STATE resets success message


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
      const response = await axios.post('http://localhost:8000/api/contact', formValues);
      console.log(response.data); // Handle success response
      setSubmitSuccess(true);
      resetForm(); //Reset the form field
      setFormErrors({});
      setShowSuccessMessage(true); //Show the success message
    } catch (e) {
      console.error(e); // Handle error response
      console.log("you broke  down here");
      //Provide feedback
      setSubmitError("An error has occurred while submitting the form please try again") 
    } 
  }
};

const resetForm = () => 
setFormValues({
  email: '',
  password: '',
  location: '',
  message: ''
});



// form validation
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
    if (!formValues.message){
      errors.message = 'Enquiry is required';
      isValid = false;
    }
    setFormErrors(errors)
    return isValid;
  };
  //function to hide success message after some time
  useEffect(() => {
    let timer;
    if (submitSuccess) {
      console.log('Success message will be hidden after 5 seconds');
      timer = setTimeout(() => {
        setShowSuccessMessage(false);
      }, 5000);//hide after 5 seconds
    } 
    return () => clearTimeout(timer);
  }, [submitSuccess]);

    return (
    <Container>
      <Row className="justify-content-center">
        <Col md={4}>
        <h3 className="text-center mt-3">Contact Form </h3>
        {submitError && <Alert variant="danger">{submitError}</Alert>}
        {/* {submitSuccess && <Alert variant="success">Form submitted successfully!</Alert>} */}
        {showSuccessMessage && <Alert variant="success">Form submitted successfully!</Alert>}

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
              
                />
              <Form.Control.Feedback type="invalid">
                {formErrors.location}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="Brief">
                <Form.Label>Make an enquiry</Form.Label>
                <Form.Control 
                as="textarea"
                name="message"
                value={formValues.message}
                onChange={handleChange}
                isInvalid={!!formErrors.message}
                type="text" 
                placeholder="Enter a Brief overview of your enquiry"
                aria-label="Enter a Brief overview of your enquiry" 
                 />
              <Form.Control.Feedback type="invalid">
                {formErrors.message}
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