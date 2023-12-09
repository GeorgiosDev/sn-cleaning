import React from 'react';
import hero300x200 from "../assets/customer/hero300x200.webp";
import hero1070x713 from "../assets/customer/hero1070x713.webp";
import hero1490x993 from "../assets/customer/hero1490x993.webp";
import hero1810x1206 from "../assets/customer/hero1810x1206.webp";
import hero from "../assets/customer/hero-image.webp";
import 'tailwindcss/tailwind.css';


interface HeroProps {
  id: string;
}

const Hero: React.FC<HeroProps> = ({ id }) => {
  return (
    <div className="relative bg-gradient-to-r from-gray-800 to-blue-800 h-screen text-white overflow-hidden">
      <div className="absolute inset-0">
      <img
          srcSet={`
          ${hero300x200} 300w,
          ${hero1070x713} 1070w,
          ${hero1490x993} 1490w,
          ${hero1810x1206} 1810w,
          ${hero} 3580w,
        `}
          sizes="100vw"
          src={hero}
          alt="Background"
          className="object-cover object-center w-full h-full opacity-80"
          // loading="lazy"
        />

      </div>

      <div className="relative">
        <div className="bg-myBlue-100 p-4 rounded-xl absolute left-4 top-6 flex flex-col justify-center items-center">
          <h1 className="text-5xl font-bold leading-tight mb-4 ">SN Cleaning Solutions</h1>
          <p className="text-2xl text-white mb-4 lg:mb-8">Οι επαγγελματίες στην καθαριότητα</p>
          <ul className="flex flex-col text-justify text-xl list-disc ml-4 ">
            <li> Yπηρεσίες καθαρισμού προσαρμοσμένες στις ανάγκες σας</li>
            <li> Eξειδικευμένη ομάδα καθαριστών</li>
            <li>Αξιόπιστο τελικό αποτέλεσμα</li>
            <li>Καθαρισμός όλων των επαγγελματικών χώρων</li>
            <li>Καθαρισμός κατοικιών </li>
          </ul>
        </div>
      </div>

      {/* Display this on mobile devices */}
      <div className="hidden lg:block text-center">
        <p className="bg-myBlue-100 w-48 h-48 text-2xl rounded-full flex items-center text-center absolute right-8 top-1/2 transform -translate-y-1/2">Για επαγγελματικό αποτέλεσμα</p>
      </div>
    </div>
  );
};

export default Hero;
