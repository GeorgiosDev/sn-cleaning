import React, { useState, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const Navbar = lazy(() => import('./components/Navbar'));
const Hero = lazy(() => import('./components/Hero'));
const Customer = lazy(() => import('./components/Customer'));
const ContactForm = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));
const Services = lazy(() => import('./components/Services').then(module => ({ default: module.Services })));
const Cookies = lazy(() => import('./components/Cookies'));
const Privacy = lazy(() => import('./components/Privacy'));

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
          <Route
            path="/privacy"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Privacy onClose={handleCookiesAccept} />
              </Suspense>
            }
          />
          <Route
            path="/"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                {showCookies && <Cookies onAccept={handleCookiesAccept} />}
                <Navbar handleLinkClick={handleLinkClick} />
                <Hero id="home" />
                <Services id="services" />
                <Customer id="customer" />
                <ContactForm id="contact" />
                <Footer />
              </Suspense>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
