import React from "react";
import {Container, Row, Col, Form, Button} from 'react-bootstrap';

function MakeContact(){
    return<>
    <Container>
      <Row className="justify-content-center">
        <Col md={4}>
        <h3 className="text-center mt-3">Contact Form </h3>
          <Form>

            <Form.Group  controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group  controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group  controlId="Location">
                <Form.Label>Location</Form.Label>
                <Form.Control type="text" placeholder="Location" />
            </Form.Group>

            <Form.Group  controlId="Brief">
                <Form.Label>Make an enquiry</Form.Label>
                <Form.Control type="text" placeholder="Brief overview " />
            </Form.Group>
            {/* <Form.Group ccontrolId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group> */}
            <div className="d-grid gap-2">
              <Button variant="primary" type="submit" className="mt-3" >
                Submit
              </Button>

            </div>
          </Form>
        </Col>
      </Row>
    </Container>
    </>
}


export default MakeContact;