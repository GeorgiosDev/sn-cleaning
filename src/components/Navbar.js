import React, { useState } from 'react';
import logo from '../assets/images/logo.jpg';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';
import menuIcon from '../assets/images/menu.png';

const Navbar = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <nav className="navbar">
      <div className="logo-container">
        <div className="navbar__logo">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <h2 className="navbar-h2">SN Cleaning Solutions</h2>
        <div className="hamburger-icon" onClick={toggleNavbar}>
          <img src={menuIcon} alt="Menu" />
        </div>
      </div>
      <div className={`navbar__links ${collapsed ? 'collapsed' : ''}`}>
        <Link to="/arxiki">Αρχική</Link>
        <Link to="/etaireia">Η Εταιρεία μας</Link>
        <Link to="/ipiresies">Υπηρεσίες</Link>
        <Link to="/epikinonia">Επικοινωνία</Link>
      </div>
    </nav>
  );
};

export default Navbar;
