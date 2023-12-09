// App.tsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Customer from './components/Customer';
import ContactForm from './components/Contact';
import Footer from './components/Footer';
import { Services } from './components/Services';
import Cookies from './components/Cookies';
import Privacy from './components/Privacy';

const App: React.FC = (): JSX.Element => {
  const [showCookies, setShowCookies] = useState(true);

  const handleLinkClick = (section: string) => {
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleCookiesAccept = () => {
    setShowCookies(false);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/privacy" element={<Privacy onClose={handleCookiesAccept} />} />
          <Route
            path="/"
            element={
              <>
                {showCookies && <Cookies onAccept={handleCookiesAccept} />}
                <Navbar handleLinkClick={handleLinkClick} />
                <Hero id="home" />
                <Services id="services" />
                <Customer id="customer" />
                <ContactForm id="contact" />
                <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
