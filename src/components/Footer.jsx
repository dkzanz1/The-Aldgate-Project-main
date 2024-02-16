import React from "react";
// import "../App.css";
import {Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'; 
import "../styles/footer.css";





function Footer() {
    return<>
      <footer className="mt-5" >
        <Container >
          <Row className="border-top justify-content-center p-5">
            <Col md={4} sm={12}>
              <div className="footer-section">
                <h5>About us</h5>
                <p>LOREM IPSUM SDWGERGREGFGGDG</p>
        
                <div className="social-icons">
                    <a href="https://Facebook.com">< FontAwesomeIcon icon={faFacebook}   size="2x"/></a>
                    <a href="https://Twitter.com">< FontAwesomeIcon icon={ faTwitter}    size="2x" /></a>
                    <a href="https://Instagram.com">< FontAwesomeIcon icon={faInstagram} size="2x" /></a>
                    <a href="https://Linkedin.com">< FontAwesomeIcon icon={faLinkedin}   size="2x" /></a>
                </div>
              </div>
            </Col>
            <Col md={4} sm={12}>
            <div className="footer-section">
              <h5>Newsletter</h5>
              <p>Subscribe to our Newletter for the latest updates.</p>
            </div>
            </Col>
            <Col md={4} sm={12}>
            <div className="footer-section">
              <h5>Contact us</h5>
               {/* contact form  */}
                
              <p>123 Street, City, County</p>
              <p>info@example.com</p>
              <h6>Call us direct <a href="tel:+44 123-456-789">123-456-789</a></h6>
            </div>
           
            </Col>
            <Col md={{ span: 8}} sm={12}>
              <div className="footer-section text-center">
                <h6>&copy;Aldgate group 2024.All rights reserved.</h6>
              </div>
            </Col>
          </Row>
        </Container>
       </footer>
      </>
    }
export default Footer;