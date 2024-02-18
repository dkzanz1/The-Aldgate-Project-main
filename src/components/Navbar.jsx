import React from "react";
import { Container, Nav, NavDropdown, Button, Navbar, Row, Col} from "react-bootstrap";
import Logo from "./logo";
import "../styles/navbar.css";

function NavBar() {
    return<>
    {/* styled with react-bootstrap;:- It allows you to use Bootstrap's components directly within your React application without the need for jQuery or Bootstrap's own JavaScript*/}
    <Navbar expand="lg" bg="black" className="custom-navbar" >
        <Container>
            <Navbar.Brand href="#home">
                <Logo />
            </Navbar.Brand>   

                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav"  className="justify-content-end" >
                    <Nav className="ml-auto">
                        <Nav.Item >                             
                            <Nav.Link  href="/" >Contact</Nav.Link>
                        </Nav.Item> 
                                <NavDropdown title="About us" id="basic-nav-dropdown" >
                                    <NavDropdown.Item href="/">About us</NavDropdown.Item> 
                                    <NavDropdown.Item href="/">Ours services</NavDropdown.Item>
                                    <NavDropdown.Item href="/">Make an Enquiry</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="/">Request a quote</NavDropdown.Item>
                                </NavDropdown>
                        <Nav.Link>
                            <Row className="button-group">
                            <Col>
                                <Button variant="outline-primary">Get in Touch</Button>
                            
                                <Button variant="outline-primary">Request a quote</Button>
                            </Col>    
                        </Row>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
        </Container>
    </Navbar>
    
    </> 
    }

export default NavBar;