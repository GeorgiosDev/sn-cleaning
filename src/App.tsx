import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Customer from './components/Customer';
import ContactForm from './components/Contact';
import Footer from './components/Footer';
import { Services } from './components/Services';

// App.tsx
const App: React.FC = () => {

  const handleLinkClick = (section: string) => {
    // You can keep the smooth scroll here if needed
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App">
      <Navbar handleLinkClick={handleLinkClick} />
      <Hero id="home" />
      <Services id="services" />
      <Customer id="customers"/>
      <ContactForm id='contact'/>
      <Footer/>
    </div>
  );
}

export default App;


