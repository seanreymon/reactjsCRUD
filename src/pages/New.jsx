import { useContext } from "react";
import Modal from "../UI/Modal";
import ModalContext from "../store/ModalContext";
import ContactAdd from "../components/ContactAdd";

export default function NewContactPage() {
  const modalCtx = useContext(ModalContext);

  function handleClose() {
    modalCtx.closeModal();
  }

  return (
    <Modal open={modalCtx.method === "add"} onClose={handleClose}>
      <ContactAdd ></ContactAdd>
    </Modal>
  );
}
