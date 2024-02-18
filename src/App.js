
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


function App() {
  return (
    <div className="App">
      <header >
      <NavBar />
      <HeroSection />
      </header>
      <main className="page-main">

      <Container>
        <div style={{ display:'flex' }} className="text-center">
          <CreateCard />
        </div>
            <AboutUs />
            <Row>
              <Col md={6}>
                <h2>Meet the team</h2>
                 <div className="item">
                    <img
                    src="../images/pexels-photo-1106476.jpeg"
                    className="App-picture" 
                    alt="" 
                    height="300px" 
                    width="100%"
                    />
                    <div className="text-maker">
                    <TextMaker />
                    </div>
                  </div>
              </Col>

              <Col md={6}>
          <h2>Planning & Design</h2>
          <div className="item" >
            <div className="text-maker">
            
            </div>
            <img src="../images/pexels-photo-5292195.webp"
             className="App-picture" 
             alt=""
             height="300px" 
             width="100%"
             />
             <TextMaker />
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
