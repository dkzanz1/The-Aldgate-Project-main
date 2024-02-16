import React from "react";
import {Container, Carousel, Row, Col}  from 'react-bootstrap';


function GalleryCarousel() {
    return <>
   
    <Container fluid style={{ borderBottom: '80px solid black' }}>
        <Row>
          <Col>
            <Carousel style={{height: '70vh'}}>
              <Carousel.Item>
                  <img 
                    className="d-block w-100"
                    src="images/pexels-photo-1106476.jpeg"
                    alt="First slide" 
                    style={{ height: '70vh', objectFit: 'cover' }}
                  />
                  <Carousel.Caption>
                    <h3>FULL SYSTEM INSTALLATION</h3>
                    <p>Complient to the British standard Regulations</p>
                  </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img 
                  className="d-block w-100"
                  src="images/pexels-photo-1502941 (1).jpeg"
                  alt="Second slide" 
                  style={{ height: '70vh', objectFit: 'cover' }}
                 
                />
                <Carousel.Caption>
                  <h3>PLANNING,DESIGN & INSTALL</h3>
                  <p>Our qualified team is ready to help</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img 
                  className="d-block w-100"
                  src="images/pexels-photo-2225213.jpeg"
                  alt="Third Slide" 
                  style={{ height: '70vh', objectFit: 'cover' }}
                />
                <Carousel.Caption>
                  <h3>EVALUATION,CORRECTION AND COMPLIENCE CHECKS</h3>
                  <p>Experience technicians</p>
                </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
    </> 
  }

export default GalleryCarousel;
