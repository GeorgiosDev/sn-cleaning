import React from 'react';
import logo1 from "../assets/logo-toys.jpg";
import logo2 from "../assets/logo-rude.png";
import logo3 from "../assets/logo-nobacco.jpg";
import logo4 from "../assets/logo-rock.jpg";
import logo5 from "../assets/logo-ngu.jpg";
import logo6 from "../assets/logo-koukos.jpg";
import logo7 from "../assets/logo-farmakeio.jpg";
import logo8 from "../assets/logo-coffee.jpg";
import logo9 from "../assets/logo-clik.jpg";
import logo10 from "../assets/logo-basta.jpg";
import logo11 from "../assets/logo-athos.png";
import logo12 from "../assets/logo-hotel.png"

interface CustomerProps {
  id: string;
}

// Customer Logos
const customerLogos = [
  { name: 'Toys', src: logo1, alt: 'Toys Logo' },
  { name: 'Rude', src: logo2, alt: 'Rude Logo' },
  { name: 'No Tobacco', src: logo3, alt: 'No Tobacco Logo' },
  { name: 'Rock', src: logo4, alt: 'Rock Logo' },
  { name: 'Ngu', src: logo5, alt: 'Ngu Logo' },
  { name: 'Koukos', src: logo6, alt: 'Koukos Logo' },
  { name: 'Farmakeio', src: logo7, alt: 'Farmakeio Logo' },
  { name: 'Coffee', src: logo8, alt: 'Coffee Logo' },
  { name: 'Clik', src: logo9, alt: 'Clik Logo' },
  { name: 'Basta', src: logo10, alt: 'Basta Logo' },
  { name: 'Athos', src: logo11, alt: 'Athos Logo' },
  { name: "amari", src: logo12, alt: 'Amari' }
];

const Customer: React.FC<CustomerProps> = ({id}) => {
  return (
    <div className="flex flex-col lg:flex-row bg-myBlue-50">
      {/* Left side (header and paragraph) */}
      <div className="lg:w-1/2 p-6">
        <h2 className="text-2xl font-extrabold text-center mb-4 text-white">Οι πελάτες μας</h2>
        <p className="text-justify text-white text-xl">Οι συνεργάτες μας απολαμβάνουν υψηλής ποιότητας επαγγελματικές υπηρεσίες πλήρως προσαρμοσμένες στις ιδιαίτερες ανάγκες κάθε πελάτη. Καθιστούμε την εξατομίκευση και την ανταπόκριση στις ατομικές απαιτήσεις προτεραιότητα, διασφαλίζοντας έτσι πλήρη ικανοποίηση των αναγκών τους.

     Η εμπειρία μας στον επαγγελματικό καθαρισμό επιτρέπει στους συνεργάτες μας να απολαμβάνουν υπηρεσίες υψηλού επιπέδου, ενισχυμένες με τη δέσμευσή μας για προσφορά προσαρμοσμένων λύσεων που ανταποκρίνονται στις μοναδικές τους απαιτήσεις.</p>
      </div>

      {/* Right side (logos) */}
      <div className="lg:w-1/2 flex justify-center flex-wrap gap-5 lg:inline-grid lg:grid-cols-4 xl:grid-cols-4 p-6">
        {customerLogos.map((logo, index) => (
          <div key={index} className="bg-white rounded-lg shadow w-36 h-36 flex justify-center items-center">
            <img
              src={logo.src}
              alt={logo.alt}
              className="w-full h-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Customer;
