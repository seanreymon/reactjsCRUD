import { useContext } from "react";
import Input from "../UI/Input";
import ModalContext from "../store/ModalContext";
import ContactContext from "../store/ContactContext";

function ContactAdd() {
  const modalCtx = useContext(ModalContext);
  const contactCtx = useContext(ContactContext);

  function handleCancel() {
    modalCtx.closeModal();
  }

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    async function addContact() {
      const response = await fetch("http://localhost:3000/contacts", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          number: data.number,
        }),
      });
      if (!response.ok) {
        throw new Error("Failed to add contact");
      }
    }
    addContact();
    contactCtx.updateContactsData();
    event.target.reset();
    modalCtx.closeModal();
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="Full Name"
        type="text"
        id="name"
        name="name"
        placeholder="Enter your full name"
        aria-label="fullname"
        required
      />
      <Input
        label="Email Address"
        type="email"
        id="email"
        name="email"
        placeholder="Enter your email address"
        aria-label="email-address"
        required
      />

      <Input
        label="Contact number"
        type="text"
        id="number"
        name="number"
        placeholder="Enter your contact number"
        aria-label="contact-number"
        required
        pattern="[0-9]{11}"
      />
      <p className="actions">
        <button type="reset" onClick={handleCancel}>
          Cancel
        </button>
        <button type="submit">Add Contact</button>
      </p>
    </form>
  );
}
export default ContactAdd;
