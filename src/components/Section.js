import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import TextMaker from './lorem-ipsum';
import buildingImage from './building-in-london.jpeg';

const Section = () => {
       const imageContainerStyle = {
        position: 'relative',
        height: '100vh',
    };

    const imageFadeStyle = {
        width: '100%', // Make the image cover the full width of the container
        height: '100%', // Make the image cover the full height of the container
        objectFit: 'cover', // Ensure the image covers the entire container without distortion
    };

    const overlayStyle = {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust the opacity here
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
    };

   
    return (
        <>
            <div>
                <h2 className="text-center">About us</h2>
            </div>
            <Container fluid>
                <Row className="align-items-center">
                    {/* Image across screen with text in middle*/}
                    <Col md={12} className='p-0'>
                            <div style={imageContainerStyle}>
                            <Image 
                                    src={buildingImage} 
                                    alt="Responsive"
                                    fluid
                                    // height="50vh"
                                    width="100%"
                                    className="image-fade"
                                    style={imageFadeStyle}
                                
                                />
                            </div>   
                    
                            <div style={overlayStyle}>
                                <div>
                                    <h3>Intro text</h3>
                                    <TextMaker />
                            
                                </div>
                            </div>
                    </Col>
                </Row>
            </Container >
        </>
    );
};

export default Section;