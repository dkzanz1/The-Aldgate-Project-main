import React from "react";
import { Container, Row, Col  } from 'react-bootstrap';
// import TextMaker from "./lorem-ipsum";
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
                        <p>
                        As guardians of your building's security,
                        we embark on a journey of meticulous planning,
                        where every detail is a piece of the safety puzzle.
                        Our process begins with a comprehensive assessment,
                        With a keen eye for detail 
                        our team crafts tailored solutions that seamlessly integrate into your architectural vision.
                        From the placement of sprinkler heads to the layout of piping systems,
                         every element is carefully orchestrated to optimize functionality and aesthetic appeal.
                        Our designers bring forth a wealth of experience and expertise,  
                        Through collaborative dialogue and innovative thinking, 
                        we transform concepts into tangible designs that elevate the safety and appeal of your high-rise structure.</p>
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
                       <p>  Our team comprises seasoned professionals who are committed to ensuring the safety and security of high-rise structures.

At the helm, our project manager leads  seamless coordination from planning to installation.
Their leadership ensures that every project is executed with efficiency and excellence.
Behind the scenes, our technicians are the backbone of our operation, executing installations with precision and proficiency. Their expertise ensures that every component is seamlessly integrated,
 delivering maximum protection and peace of mind to our clients.
Together, our team stands united in our commitment to excellence, innovation, and safety.one project at a time.</p>
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
                      <p>Our Services are crafted to fortify your premises against fire hazards.
                         Our commitment extends beyond mere installation to the ongoing maintenance and servicing of fire systems,
                          guaranteeing uninterrupted protection when it matters most.
                           Trust our advisory service to provide insightful guidance on design concepts,
                            harmonizing safety imperatives with architectural aesthetics seamlessly.
                             Whether you seek to enhance an existing system or embark on a new project,
                              our team offers tailored solutions that prioritize your unique needs and aspirations.
                               Count on us to provide competitive, market-related quotations,
                                ensuring transparency and affordability every step of the way.</p>
                    </div>
                </div>
            </Col>
        </Row>
    </Container>
    )
}

export default DoubleSection;