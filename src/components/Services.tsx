import React from 'react';
import { Image } from 'cloudinary-react';

interface ServiceProps {
  id?: string;
  name?: string;
}

export const SERVICES = [
  {
    title: 'Καθαρισμός Πολυκατοικιών',
    icon: "cleaning3_w5psb2",
    description:
    "Η εξειδικευμένη μας ομάδα προσφέρει υπηρεσίες καθαρισμού πολυκατοικιών με επαγγελματική αποτελεσματικότητα και σεβασμό προς τον χώρο σας. Αναλαμβάνουμε τον πλήρη καθαρισμό των κοινόχρηστων χώρων, εξασφαλίζοντας ένα υγιεινό και φιλόξενο περιβάλλον για όλους τους κατοίκους"

  },
  {
    title: 'Καθαρισμός Καταστημάτων',
    icon: "office_oqnxe7",
    description:
      'Ο καθαρισμός του καταστήματός σας είναι ο στόχος μας. Με εξειδικευμένο προσωπικό και υψηλής ποιότητας εξοπλισμό, διασφαλίζουμε ότι ο χώρος σας λάμπει και εκπέμπει επαγγελματική αισθητική. Προσφέρουμε καθαρισμό εκθεσιακών περιοχών, ραφιών και δαπέδων, διατηρώντας το κατάστημά σας πάντα έτοιμο για υποδοχή πελατών' ,
  },
  {
    title: 'Γενικός Καθαρισμός',
    icon: "cleaning1_ch6ju9",
    description:
    "Ο γενικός καθαρισμός της εταιρείας μας προσφέρει εκτενείς υπηρεσίες καθαρισμού, χρησιμοποιώντας την πιο προηγμένη τεχνολογία και εξειδικευμένο προσωπικό. Εξασφαλίζουμε την αποτελεσματική αφαίρεση ρύπων και την αναζωογόνηση των χώρων, προσφέροντας ένα καθαρό, υγιές και ευχάριστο περιβάλλον για όλους."
  },
  {
    title: 'Καθαρισμός Υαλοπινάκων',
    icon: "glasspane_omjbbi",
    description:
    'Οι Επαγγελματικοί Καθαρισμοί Τζαμιών Ψηλών Κτιρίων & Υαλοπινάκων που εφαρμόζουμε, εξουδετερώνουν όλα τα ρυπαντικά στοιχεία από τις γυάλινες επιφάνειες, εξαφανίζοντας παράλληλα όλους τους λεκέδες και τις βρωμιές.'  
  },
  {
    title: 'Καθαρισμοί Κατοικιών',
    icon: "home_ybupvb",
    description:
      'Είμαστε εδώ για να διασφαλίσουμε εις βάθος καθαρισμό της κατοικίας, είτε μετά από ανακαίνιση είτε σε τακτική βάση.Αναλαμβάνουμε τον καθαρισμό μετά από κάθε είδους ανακαίνιση, αφήνοντας κάθε γωνιά λαμπερή και άψογη για ένα υγιεινό και καθαρό περιβάλλον για εσάς και την οικογένειά σας.',
  },
  {
    title: 'Καθαρισμός Πινακίδων',
    icon: "cleaning4_c1jfad",
    description:
    "Καθαρισμός πινακίδων αλουμινίου, etalbond και lightboxes με εξειδικευμένη προσέγγιση. Χρήση ειδικών μέσων καθαρισμού για απομάκρυνση ρύπων και περιττωμάτων πτηνών.Επιδιόρθωση και προστασία από την επίδραση του αλάτιστου περιβάλλοντος με  ήπια αφαλλάτωση" 
  }
];

export const Services: React.FC<ServiceProps> = ({ id, name }) => {
  const cloudName = 'dkrtgx8ke';

  const supportsLazyLoading = 'loading' in HTMLImageElement.prototype;

  return (
    <div className='bg-custom-winter py-16 bg-myBlue-200' id={id}>
      <div className='container mx-auto px-4 flex flex-col items-center'>
        <h2 className='text-4xl md:text-xl font-bold text-myBlue-500 mb-8 flexBetween text-white bg-myBlue-50 rounded-lg md:w-1/5 w-full'>
          Οι Υπηρεσίες μας
        </h2>
        <div className='grid grid-cols-1 rounded-lg md:grid-cols-3 gap-8'>
          {SERVICES.map((service, index) => (
            <div key={index} className='bg-myBlue-50 rounded-lg grid-box w-full'>
              <div className="relative rounded overflow-hidden">
                <Image
                  cloudName={cloudName}
                  publicId={service.icon}
                  width="1980"
                  height="1240"
                  crop="fill"
                  alt={service.title}
                  className="object-fit w-full h-full"
                  loading={supportsLazyLoading ? "lazy" : "eager"} 
                />
                <p className="cursor-pointer absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-4xl text-center text-white font-roboto font-medium group-hover:bg-opacity-60 transition">
                  {service.title}
                </p>
              </div>
              <p className='text-white mt-2 m-2 text-justify'>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
