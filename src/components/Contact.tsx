import React from 'react';

interface ContactSectionProps {
  id: string;
}

const ContactSection: React.FC<ContactSectionProps> = ({ id }) => {
  return (
    <section className="bg-myBlue-200" id={id}>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20 ">
        {/* Headers */}
        <div className="mb-4 ">
          <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12 ">
            <h2 className="font-heading mb-4 font-bold tracking-tight text-slate-100 dark:text-white text-3xl sm:text-5xl">
              Επικοινωνήστε μαζί μας
            </h2>           
          </div>
        </div>
        {/*  */}
        <div className="flex flex-row items-center justify-center rounded-l-lg rounded-r-lg bg-myBlue-50">
          <div className="grid md:grid-cols-2">
            {/* Left Form Section */}
            <div className="h-full pr-6">
              <p className="mt-3 mb-12 text-lg text-white dark:text-slate-400 ml-4">
              Παρακαλούμε, συμπληρώστε τη φόρμα επικοινωνίας, και θα έχουμε τη χαρά να επικοινωνήσουμε μαζί σας το συντομότερο δυνατό. Επιδιώκουμε να κατανοήσουμε πλήρως τις ανάγκες σας, προκειμένου να προσφέρουμε εξατομικευμένες λύσεις που θα ανταποκρίνονται στις προσδοκίες σας με υψηλό επίπεδο επαγγελματισμού             </p>
              <ul className="mb-6 md:mb-0 ml-4 flex flex-col">
                <li className="flex items-center mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-myBlue-200 text-gray-50">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                      fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                      strokeLinejoin="round" className="h-6 w-6">
                      <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                      <path
                        d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z">
                      </path>
                    </svg>
                  </div>
                  <div className="ml-4 mb-4">
                    <h3 className=" text-lg font-medium leading-6 text-white dark:text-white">Διεύθυνση
                    </h3>
                    <p className="text-white dark:text-slate-400">
                    <a
                        href="https://www.google.com/maps/search/?api=1&query=Βασιλίσσης%20Όλγας%2029Α,%20Θεσσαλονίκη%2054641"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                  Βασιλίσσης Όλγας 29Α, Θεσσαλονίκη, 54641
                    </a>
                    </p>
                    <p className="text-white dark:text-slate-400">54641</p>
                  </div>
                </li>
                <li className="flex items-center mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-myBlue-200 text-gray-50">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                      fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                      strokeLinejoin="round" className="h-6 w-6">
                      <path
                        d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2">
                      </path>
                      <path d="M15 7a2 2 0 0 1 2 2"></path>
                      <path d="M15 3a6 6 0 0 1 6 6"></path>
                    </svg>
                  </div>
                  <div className="ml-4 mb-4">
                    <h3 className=" text-lg font-medium leading-6 text-white dark:text-white">Επικοινωνία</h3>
                    <p className="text-white dark:text-slate-400">
                        Τηλέφωνο: <a href="tel:+306982038675">+30 6945705152</a>
                    </p>
                    <p className="text-white dark:text-slate-400 m-0">
                        Mail: <a href="mailto:sncleaning83@gmail.com">sncleaning83@gmail.com</a>
                    </p>
                </div>
                </li>
                <li className="flex items-center mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-myBlue-200 text-gray-50">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                      fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                      strokeLinejoin="round" className="h-6 w-6">
                      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                      <path d="M12 7v5l3 3"></path>
                    </svg>
                  </div>
                  <div className="ml-4 mb-4">
                    <h3 className="text-lg font-medium leading-6 text-white dark:text-white">Ωράριο</h3>
                    <p className="text-white dark:text-slate-400">Δευτέρα-Παρασκευή: 08:00 - 19:00</p>
                    <p className="text-white dark:text-slate-400">Σάββατο &amp; Κυριακή: 08:00 - 17:00</p>
                  </div>
                </li>
              </ul>
            </div>
            {/* Right Form Section */}
            <div className="card h-fit max-w-6xl p-5 md:p-12" id="form">
              <h2 className="mb-4 text-2xl font-bold text-white">Συμπληρώστε τα στοιχεία σας</h2>
              <form id="contactForm">
                <div className="mb-6">
                  <div className="mx-0 mb-1 sm:mb-4">
                    <div className="mx-0 mb-1 sm:mb-4">
                      <label htmlFor="name" className="pb-1 text-xs uppercase tracking-wider"></label>
                      <input type="text" id="name" autoComplete="given-name" placeholder=" Όνομα" required minLength={3} maxLength={25}
                        className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0 placeholder-black"
                        name="name" />
                    </div>
                    <div className="mx-0 mb-1 sm:mb-4">
                      <label htmlFor="email" className="pb-1 text-xs uppercase tracking-wider"></label>
                      <input type="email" id="email" autoComplete="email" placeholder="email" required minLength={6} maxLength={30}
                        className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0 placeholder-black"
                        name="email" />
                    </div>
                  </div>
                  <div className="mx-0 mb-1 sm:mb-4">
                    <label htmlFor="textarea" className="pb-1 text-xs uppercase tracking-wider"></label>
                    <textarea id="textarea" name="textarea" cols={30} rows={5} placeholder="Γράψτε το μήνυμα σας"
                      className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0 placeholder-black"></textarea>
                  </div>
                </div>
                <div className="text-center">
                  <button type="submit"
                    className="w-1/2 bg-myBlue-200 text-white text-xl px-6 py-3 font-xl rounded-md sm:mb-0">Αποστολή</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
