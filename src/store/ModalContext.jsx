import { createContext, useState } from "react";

const ModalContext = createContext({
  method: "",
  showAddContact: () => {},
  closeModal: () => {},
  showEditContact: () => {},
});

export function ModalContextProvider({ children }) {
  const [userMethod, setUserMethod] = useState("");

  function showAddContact() {
    setUserMethod("add");
  }

  function showEditContact() {
    setUserMethod("edit");
  }

  function closeModal() {
    setUserMethod("");
  }

  const modalCtx = {
    method: userMethod,
    showAddContact,
    showEditContact,
    closeModal,
  };

  return (
    <ModalContext.Provider value={modalCtx}>{children}</ModalContext.Provider>
  );
}

export default ModalContext;
