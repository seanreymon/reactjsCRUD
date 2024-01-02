import { useContext } from "react";
import Input from "../UI/Input";
import ModalContext from "../store/ModalContext";
import ContactContext from "../store/ContactContext";

function ContactEdit() {
  const modalCtx = useContext(ModalContext);
  const contactCtx = useContext(ContactContext);

  function handleClose() {
    modalCtx.closeModal();
  }

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    async function updateContact() {
      const response = await fetch(
        "http://localhost:3000/contacts/" + contactCtx.data.id,
        {
          method: "PUT",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            name: data.name,
            email: data.email,
            number: data.number,
          }),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to update contact.");
      }
    }
    updateContact();
    contactCtx.updateContactsData();
    event.target.reset();
    handleClose();
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="Full Name"
        type="text"
        id="name"
        name="name"
        placeholder="Enter your full name"
        aria-label="full-name"
        defaultValue={contactCtx.data.name}
        required
      />
      <Input
        label="Email Address"
        type="email"
        id="email"
        name="email"
        placeholder="Enter your email address"
        aria-label="email"
        defaultValue={contactCtx.data.email}
        required
      />
      <Input
        label="Contact number"
        type="text"
        id="number"
        name="number"
        defaultValue={contactCtx.data.number}
        required
        placeholder="Enter your contact number"
        aria-label="contact-number"
        pattern="[0-9]{11}"
      />
      <p className="actions">
        <button type="reset" onClick={handleClose}>
          Cancel
        </button>
        <button type="submit">Save Changes</button>
      </p>
    </form>
  );
}
export default ContactEdit;
