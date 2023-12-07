import React, {useState}from 'react';
import logo from "../assets/customer/logo-white.webp"
import facebook from "../assets/facebook.webp"
import instagram from "../assets/instagram.webp"
import Modal from './Modal';


const Footer: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };


  return (
    <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 bg-myBlue-50">
      <div className="flex flex-wrap gap-10 row-gap-6 mb-8 justify-between">
        <div className="flex flex-col items-center sm:col-span-2">
          <a href="/" aria-label="Go home" title="Company" className="inline-flex items-center">
            <img src={logo} alt="logo" className='w-16 h-16'/>
            <span className="ml-2 text-xl font-bold tracking-wide text-white uppercase">SN Cleaning Solutions</span>
          </a>
          <div className="mt-6 lg:max-w-sm ml-auto">
            <p className="text-white text-justify">
              Οι συνεργάτες μας απολαμβάνουν επαγγελματικές υπηρεσίες προσανατολισμένες στις ιδιαίτερες ανάγκες της κάθε περίπτωσης.
            </p>            
          </div>
        </div>     
        <div className="flex items-center">
          <div>
            <span className="text-base font-bold tracking-wide text-white">Ακολουθήστε μας</span>
            <div className="flex items-center mt-1 space-x-3">
              <a href="https://www.facebook.com/profile.php?id=100090968037388" target='__blank' className="text-pink-500 transition-colors duration-300 hover:text-deep-purple-accent-400">
                <img src={facebook} alt="Facebook Icon" className="h-12" />
              </a>
              <a href="https://www.instagram.com/sn_cleaning_solutions/" target='__blank' className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400">
                <img src={instagram} alt="Instagram Icon" className="h-12" />
              </a>
            </div>
          </div> 
        </div>
      </div>
      <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
        <p className="text-sm text-white">
          © Copyright  {new Date().getFullYear()}  
          <a
            href="https://www.deverakisgeorgios.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600  hover:text-deep-purple-accent-400"
          >
            &nbsp; Deverakis Georgios. 
          </a>
          &nbsp;All rights reserved.{"  "}
        </p>
        <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
          <li>
            <button
              className="text-sm text-white transition-colors duration-300 hover:text-deep-purple-accent-400"
              onClick={openModal}
            >
              Πολιτική Απορρήτου
            </button>
          </li>
        </ul>
        <Modal isOpen={isModalOpen} onClose={closeModal} />

      </div>
    </div>
  );
};

export default Footer;
