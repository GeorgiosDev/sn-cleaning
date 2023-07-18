import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../src/styles/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/Navbar';
import Company from './components/Company';
import Start from './components/Start';
import Services from './components/Services';
import Contact from './components/Contact';

function App() {
  return (
          <Router>
            <Navbar/>
            <div className="app">
              <Routes>
                <Route path="/" element={<Start/>} />
              </Routes>
              <Routes>
                <Route path="/etaireia" element={<Company />} />
              </Routes>
              <Routes>
                <Route path="/arxiki" element={<Start />} />
              </Routes>
              <Routes>
                <Route path="/ipiresies" element={<Services />} />
              </Routes>
              <Routes>
                <Route path="/epikinonia" element={<Contact />} />
              </Routes>
            </div>
          </Router>

    
  );
}

export default App;
