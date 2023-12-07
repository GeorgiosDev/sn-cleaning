import React, { useState } from 'react';
import { Link as ScrollLink } from "react-scroll";
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/customer/logo-white.webp';
import '../styles/index.css';

interface NavbarProps {
  handleLinkClick: (section: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ handleLinkClick }) => {

  const NAV_LINKS = [
    { key: 'home', label: 'Η Εταιρεία' },
    { key: 'services', label: 'Υπηρεσίες' },
    { key: 'customer', label: 'Οι πελάτες μας' },
    { key: 'contact', label: 'Επικοινωνία' },
  ];
  
  const [navbar, setNavbar] = useState(false);

  const handleLinkClickInternal = (section: string) => {
    console.log("Clicked link with key:", section); 
    setNavbar(false);
    handleLinkClick(section);
  };

  return (
    <nav className={`flex flex-row justify-between max-container padding-container relative w-full z-30 h-20 font-roboto bg-myBlue-100  border-b-2 border-blue-50`}>
      <div className='flex flex-row justify-around items-center'>
        <img alt='logo' width={80} height={70} src={logo} />
      </div>

      <div className='regular-20 text-darkTeal-400 hidden md:flex flexCenter ml-6'>
        <h1 className="text-2xl font-bold header">SN Cleaning Solutions</h1>
      </div>

      {/* Links for wider screens */}
      <div className='regular-20 mr-6 flexCenter text-myBlue-300 cursor-pointer '>
        <ul className={`hidden md:flex`}>
          {NAV_LINKS.map(({ key, label }) => (
            <ScrollLink
              className={`px-4 cursor-pointer font-medium hover:scale-105 hover:bg-darkTeal-100`}
              key={key}
              to={key}
              smooth={true}
              duration={200}
            >
              {label}
            </ScrollLink>
          ))}
        </ul>
      </div>

      {/* Icon toggle for smaller screens */}
      <div
        className={`cursor-pointer flexCenter pr-6 z-10 md:hidden lg:hidden text-white`}
        onClick={() => setNavbar(!navbar)}
      >
        {navbar ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {/* Links on mobile devices */}
      {navbar && (
        <ul className={`flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen md:hidden lg:hidden bg-myBlue-100 text-myBlue-300`}>
          {NAV_LINKS.map(({ key, label }) => (
            <ScrollLink
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
              key={key}
              to={key}
              smooth={true}
              duration={200}
              onClick={() => handleLinkClickInternal(key)}
            >
              {label}
            </ScrollLink>
          ))}
        </ul>
  )}
    </nav>
  );
};

export default Navbar;
