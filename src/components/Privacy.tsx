import React,{useState} from 'react';
import { FaTimes } from 'react-icons/fa';

interface PrivacyProps {
  onClose: () => void;
}


  const Privacy: React.FC<PrivacyProps> = ({ onClose }) => {
    const [isModalOpen, setModalOpen] = useState(true);

    const closeModal = () => {
      setModalOpen(false);
      onClose();
    };
    

  return (
    <div className={`bg-gray-300 p-8 mt-4 ${isModalOpen ? '' : 'hidden'}`}>
       <div className="flex justify-end">
        <button onClick={closeModal}>
          <FaTimes />
        </button>
      </div>
      <h1 className="text-2xl font-bold mb-4">Πολιτική Απορρήτου της SN Cleaning Solutions</h1>
      <p className="mb-4">
        Η SN Cleaning Solutions σέβεται την ιδιωτικότητά σας. Αυτή η πολιτική
        απορρήτου εξηγεί πώς συλλέγουμε, χρησιμοποιούμε και προστατεύουμε τα
        προσωπικά σας δεδομένα. Παρακαλούμε διαβάστε προσεκτικά τις παρακάτω
        πληροφορίες.
      </p>

      <h2 className="text-xl font-bold mb-2">1. Συλλογή Πληροφοριών</h2>
      <p className="mb-4">
        Συλλέγουμε προσωπικές πληροφορίες που μας παρέχετε εθελοντικά μέσω της
        ιστοσελίδας μας, της επικοινωνίας με εμάς μέσω email στη διεύθυνση{' '}
        <a href="mailto:sncleaningsolutionsskg@gmail.com">
          sncleaningsolutionsskg@gmail.com
        </a>{' '}
        ή της συνεργασίας με την εταιρεία μας.
      </p>

      <h2 className="text-xl font-bold mb-2">2. Χρήση Πληροφοριών</h2>
      <p className="mb-4">
        Χρησιμοποιούμε τις πληροφορίες που συλλέγουμε για να παρέχουμε τις
        υπηρεσίες μας, να επικοινωνούμε μαζί σας και να βελτιώνουμε την
        εμπειρία σας με την εταιρεία μας.
      </p>

      <h2 className="text-xl font-bold mb-2">3. Διακοπή Χρήσης Πληροφοριών</h2>
      <p className="mb-4">
        Μπορείτε να διακόψετε τη χρήση των προσωπικών σας πληροφοριών ανά πάσα
        στιγμή επικοινωνώντας μαζί μας μέσω email στη διεύθυνση{' '}
        <a href="mailto:sncleaningsolutionsskg@gmail.com">
          sncleaningsolutionsskg@gmail.com
        </a>
        .
      </p>

      <h2 className="text-xl font-bold mb-2">4. Προστασία Δεδομένων</h2>
      <p className="mb-4">
        Προστατεύουμε τα προσωπικά σας δεδομένα με κατάλληλα μέτρα ασφαλείας για
        να αποτρέψουμε την απώλεια, κατάχρηση, πρόσβαση ή διαρροή των
        πληροφοριών.
      </p>

      <h2 className="text-xl font-bold mb-2">5. Κοινοποίηση Πληροφοριών</h2>
      <p className="mb-4">
        Δεν προβαίνουμε σε πώληση ή εκμετάλλευση των προσωπικών σας πληροφοριών
        σε τρίτους. Ενδέχεται, ωστόσο, να μοιραζόμαστε πληροφορίες με συνεργάτες
        μας για την παροχή των υπηρεσιών μας.
      </p>

      <h2 className="text-xl font-bold mb-2">6. Cookies</h2>
      <p className="mb-4">
        Χρησιμοποιούμε cookies για τη βελτίωση της πλοήγησης σας στην
        ιστοσελίδα μας. Μπορείτε να απενεργοποιήσετε τα cookies μέσω των
        ρυθμίσεων του προγράμματος περιήγησής σας.
      </p>

      <h2 className="text-xl font-bold mb-2">7. Αλλαγές στην Πολιτική Απορρήτου</h2>
      <p className="mb-4">
        Ενδέχεται να ενημερώσουμε αυτήν την πολιτική απορρήτου. Οποιεσδήποτε
        αλλαγές θα αναρτώνται στην ιστοσελίδα μας.
      </p>

      <p>
        Για οποιεσδήποτε ερωτήσεις ή ανησυχίες σχετικά με την πολιτική
        απορρήτου μας, παρακαλούμε επικοινωνήστε μαζί μας στη διεύθυνση{' '}
        <a href="mailto:sncleaningsolutionsskg@gmail.com">
          sncleaningsolutionsskg@gmail.com
        </a>
        .
      </p>

      <p>Ευχαριστούμε για την εμπιστοσύνη σας.</p>
    </div>
  );
};

export default Privacy;
