
import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import NavBar from './components/Navbar';
import HeroSection from './components/HeroSection';
import CreateCard from "./components/card";
import AboutUs from './components/Aboutussection';
import TextMaker from './components/lorem-ipsum';
import Footer from './components/Footer';
// import Section from './components/Section';
import MakeContact from './components/makeContact';
import "./styles/twosection.css";


function App() {
  return (
    <div className="App">
      <header >
      <NavBar />
      <HeroSection />
      </header>
      <main className="page-main">

      <Container>
        <div style={{ display: 'flex', justifyContent:'center' }} className="text-center">
          <CreateCard />
        </div>
            <AboutUs />
            <Row>
              <Col md={6}>
                <h2 className="text-center">Meet the team</h2>
                 <div className="item">
                 <div className="App-picture-container">{/* Overlay to hide bottom 1/3 of the image */}
                    <img
                    src="../images/pexels-photo-1106476.jpeg"
                    className="App-picture" 
                    alt="" 
                    /> 
                    <div className="text-wrapper">
                    <TextMaker />
                    </div>
                  </div>
                </div>
              </Col>

              <Col md={6}>
                <h2  className="text-center">Planning & Design</h2>
                <div className="item" >
                <div className="App-picture-container">
                      
                        <img src="../images/pexels-photo-5292195.webp"
                        className="App-picture" 
                        alt=""
                        
                        />
                      <div className="text-wrapper">
                  <TextMaker />
               </div>
               </div> 
               </div>
                
              </Col>
       
          <MakeContact />
          </Row>
        </Container>
       
      </main>
     
      <footer className='App-footer'>
          <Footer />  
      </footer>
   
      {/* container ends*/}
    </div>  
     
  );
}

export default App;
