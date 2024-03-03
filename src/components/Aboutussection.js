import React from "react";
import { Row,Col,Image } from 'react-bootstrap';
// import TextMaker from '../components/lorem-ipsum';
import '../styles/About.css';


function AboutUs() {
    return<>

          <Row >
              <Col xs={12} md={12} >
                <h2 className="text-center">About Us</h2>
                <div className=" position-relative text-center text-background">
                    <Image src="../images/building-in-london.jpeg" 
                    className="column" 
                    alt="" 
                    height="400px" 
                    width="100%" 
                    />
                    <div className="position-absolute top-50 start-50 translate-middle" style = {{ color: 'white' }} >
                      <div xs={12} md={12} className="text-center text-background">
                        <h3>What we do</h3>
                        <p>We specialize in professional high-riser sprinkler installation,
                         ensuring top-notch security and compliance. Our service encompasses meticulous planning,
                          thoughtful design, and seamless installation. From comprehensive planning to tailored design,
                           we leave no detail overlooked.
                         Our designers blend functionality with aesthetics, crafting solutions that integrate seamlessly into your vision. With precision and proficiency, our technicians bring designs to life with meticulous installation. We are more than installers; we are partners in your safety journey. Committed to quality and innovation,
                          we stand as pioneers in high-rise safety. Join us as we redefine skyline safety, one installation at a time.
                           Let's build a future where safety knows no bounds.</p>
                      </div>
                    </div>
                </div>
              </Col>
            </Row>
            </>
        }
            
export default AboutUs;
