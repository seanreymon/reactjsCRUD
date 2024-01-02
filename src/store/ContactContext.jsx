import { createContext, useState } from "react";

const ContactContext = createContext({
  data: {},
  isUpdated: false,
  updateContactsData: () => {},
  getContactDetails: () => {},
});

export function ContactContextProvider({ children }) {
  const [contactData, setContactData] = useState({});
  const [isUpdated, setIsUpdated] = useState(false);

  function updateContactsData() {
    setIsUpdated((prev) => !prev);
  }

  function getContactDetails(data) {
    setContactData(data);
  }

  const contactCtx = {
    data: contactData,
    isUpdated,
    updateContactsData,
    getContactDetails,
  };

  return (
    <ContactContext.Provider value={contactCtx}>
      {children}
    </ContactContext.Provider>
  );
}

export default ContactContext;
