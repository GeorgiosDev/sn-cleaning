import React from 'react';
import logo1 from "../assets/customer/logo-toys.webp";
import logo2 from "../assets/customer/logo-rude.webp";
import logo3 from "../assets/customer/logo-nobacco.webp";
import logo4 from "../assets/customer/logo-rock.webp";
import logo5 from "../assets/customer/logo-ngu.webp";
import logo6 from "../assets/customer/logo-koukos.webp";
import logo7 from "../assets/customer/logo-farmakeio.webp";
import logo8 from "../assets/customer/logo-coffee.webp";
import logo9 from "../assets/customer/logo-clik.webp";
import logo10 from "../assets/customer/logo-basta.webp";
import logo11 from "../assets/customer/logo-athos.webp";
import logo12 from "../assets/customer/logo-grill.webp"

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
  { name: "grill", src: logo12, alt: 'grill' }
];

const Customer: React.FC<CustomerProps> = ({id}) => {
  return (
    <div id={id} className="flex flex-col lg:flex-row bg-myBlue-50">
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
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Customer;
