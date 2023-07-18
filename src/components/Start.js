import React from "react";
import "../styles/start.css";
import image3 from "../assets/images/3.jpg";
import image4 from "../assets/images/4.jpg";
import image5 from "../assets/images/5.jpg";
import image6 from "../assets/images/6.jpg";
import startImg from "../assets/images/start.jpg"
import Slider from "./Slider";
import Company from "./Company"
import Footer from "./Footer";

const Start = () => {
  const images = [image3, image4, image5, image6];

  return (
    <section className="start">
      <Slider images={images} />
      <h2 className="start-h2">ΚΑΘΑΡΙΣΜΟΣ ΕΠΑΓΓΕΛΜΑΤΙΚΩΝ ΧΩΡΩΝ</h2>
      <div className="start-component">
        <p className="start-text">
            Η εταιρεία μας αναλαμβάνει τον καθαρισμό επαγγελματικών χώρων παντός είδους με επαγγελματισμό και συνέπεια.
            Παρέχουμε υπηρεσίες καθαρισμού υψηλών προδιαγραφών προσαρμοσμένες στις ανάγκες του εκάστοτε χώρου.
            Ανταποκρινόμενοι στις απαιτήσεις του εκάστοτε πελάτη, οι υπηρεσίες μας παρέχονται από ειδικό συνεργείο καθαριότητας με ειδικευμένο προσωπικό.
            Έχοντας αποκτήσει πολυετή πείρα και άριστη τεχνογνωσία εξασφαλίζουμε την παροχή υπηρεσιών καθαριότητας υψηλού επιπέδου σε επαγγελματικούς χώρους ανεξαρτήτως μεγέθους.Τα μηχανήματα καθαρισμού που διαθέτουμε είναι σύγχρονα και τελευταίας τεχνολογίας κατάλληλα για κάθε περίπτωση με σκοπό την επίτευξη άριστων αποτελεσμάτων.
            Η καθαριότητα πραγματοποιείται μόνο με πιστοποιημένα προϊόντα καθαρισμού, φιλικά προς το περιβάλλον και τον άνθρωπο χωρίς να 
            προκαλούν φθορές στις εγκαταστάσεις και στον εξοπλισμό των κτιρίων. Όπου μας ζητηθεί η καθαριότητα πραγματοποιείται αποκλειστικά με 
            οικολογικά προϊόντα καθαρισμού και απολύμανσης.
        </p>
        <img src={startImg} alt="service" className="start-img" />
      </div>
      <Company/>
      <Footer/>
    </section>
  );
};

export default Start;
