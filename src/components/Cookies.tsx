// Cookies.tsx
import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';  
import Modal from './Modal';

interface CookiesProps {
  onAccept: () => void;
}

const Cookies: React.FC<CookiesProps> = ({ onAccept }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleAccept = () => {
    setIsVisible(false);
    onAccept();
  };

  const handleCloseModal = () => {
    setIsVisible(false);
  };

  return isVisible ? (
    <div className="flex justify-between items-center gap-2 bg-gray-100 px-4 py-2 fixed bottom-0 left-0 w-full">
      <p className="text-sm text-gray-700">
        Η ιστοσελίδα χρησιμοποιεί cookies για την καλύτερη εμπειρία. Μάθετε περισσότερα στην Πολιτική Απορρήτου.
      </p>
      <button
        onClick={handleAccept}
        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
      >
        Αποδοχή
      </button>
      <FaTimes onClick={handleCloseModal} />
    </div>
  ) : null;
};

export default Cookies;

