import React from "react";
import { Container, Carousel } from "react-bootstrap";
import GalleryCarousel from "./gallery"; // Assuming this is your carousel component
// created using react-bootstrap
const HeroSection = () => {
    return (
        <div className="hero-section">
          <Carousel fade controls={false} pause={false} interval={3000} >
                {/* Add your carousel items here */}
                {/* Example: */}
                <Carousel.Item>
                    <GalleryCarousel />
                </Carousel.Item>
            </Carousel>
        <Container  >
         
            
        </Container>
        </div>
    );
};

export default HeroSection;


