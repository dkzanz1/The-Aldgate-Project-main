
import React from "react";
import { Container } from 'react-bootstrap';
import NavBar from './components/Navbar';
import HeroSection from './components/HeroSection';
import CreateCard from "./components/card";
import AboutUs from './components/Aboutussection';
import DoubleSection from './components/DoubleSection';
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
        <div style={{ display: 'flex', justifyContent:'center' }} className="text-center">
          <CreateCard />
        </div>
          <AboutUs />
          <div style={{ display: 'flex', justifyContent:'center' }} className="text-center">
            <DoubleSection />
          </div>
          
              
       
          <MakeContact />
          
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
