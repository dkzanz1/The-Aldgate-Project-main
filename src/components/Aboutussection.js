import React from "react";
import { Row,Col,Image } from 'react-bootstrap';
import TextMaker from '../components/lorem-ipsum';
import '../styles/About.css';


function AboutUs() {
    return<>

          <Row >
              <Col>
                <h2 className="text-center">About Us</h2>
                <div className=" position-relative text-center text-background">
                    <Image src="../images/building-in-london.jpeg" 
                    className="column" 
                    alt="" 
                    height="400px" 
                    width="100%" 
                    />
                    <div className="position-absolute top-50 start-50 translate-middle" style = {{ color: 'white' }} >
                      <div className="text-background">
                        <h3>What we do</h3>
                        <TextMaker />
                      </div>
                    </div>
                </div>
              </Col>
            </Row>
            </>
        }
            
export default AboutUs;
