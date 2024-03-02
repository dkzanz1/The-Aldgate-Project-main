import React from "react";
import { Container, Row, Col  } from 'react-bootstrap';
import TextMaker from "./lorem-ipsum";
import "../styles/doublesection.css";
import teamImage from "./pexels-photo-1106476.jpeg";
import designImage from "./pexels-photo-5292195.webp";
import designImage2 from "./pexels-photo-4219527.webp";

const  DoubleSection = () => {
    return (
    <Container fluid className="double-section-container">
        
        <Row>
           
            <Col xs={12} md={4} className="md-10" >
                <div xs={12} md={4} className="text-center" >
                    <h4>Planning & Design</h4>
                </div>
                <div className="image-container">
                    <img
                        src={teamImage}
                        className="App-picture"
                        alt="" />
                    <div className="text-overlay">
                        <TextMaker />
                    </div>
                </div>
            </Col>
           
       
            <Col xs={12} md={4}>
                <div xs={12} md={4} className="text-center">
                    <h4>Meet the Team</h4>
                </div>
                <div className="image-container"> 
                    <img src={designImage}
                        className="App-picture"
                        alt="" />
        
                    <div className="text-overlay">
                        <TextMaker />
                    </div>
                </div>
            </Col>
            <Col xs={12} md={4}>
                <div xs={12} md={4} className="text-center">
                    <h4>
                    Other services</h4>
                </div>
                <div className="image-container"> 
                    <img src={designImage2}
                        className="App-picture"
                        alt="" />
        
                    <div className="text-overlay">
                        <TextMaker />
                    </div>
                </div>
            </Col>
        </Row>
    </Container>
    )
}

export default DoubleSection;