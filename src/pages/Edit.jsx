import { useContext } from "react";
import Modal from "../UI/Modal";

import ModalContext from "../store/ModalContext";
import ContactEdit from "../components/ContactEdit";

export default function EditContact() {
  const modalCtx = useContext(ModalContext);

  function handleClose() {
    modalCtx.closeModal();
  }

  return (
    <Modal open={modalCtx.method === "edit"} onClose={handleClose}>
      <ContactEdit />
    </Modal>
  );
}
