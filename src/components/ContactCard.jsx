import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ModalContext from "../store/ModalContext";
import ContactContext from "../store/ContactContext";

function ContactCard() {
  const modalCtx = useContext(ModalContext);
  const contactCtx = useContext(ContactContext);
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    async function fetchContacts() {
      try {
        const response = await fetch("http://localhost:3000/contacts");

        if (!response.ok) {
          throw new Error("Failed to fetch contacts.");
        }
        const resData = await response.json();
        setContacts(resData);
      } catch (error) {
        console.error("Error fetching contacts:", error);
      }
    }

    fetchContacts();
  }, [contactCtx.isUpdated]);

  function handleEdit(data) {
    modalCtx.showEditContact();
    contactCtx.getContactDetails(data);
  }

  function handleDelete(id) {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this contact?"
    );
    if (confirmDelete) {
      async function deleteContact() {
        const response = await fetch("http://localhost:3000/contacts/" + id, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (!response.ok) {
          throw new Error("Something went wrong");
        }
      }
      deleteContact();
      contactCtx.updateContactsData();
    }
  }

  return (
    <ul id="card-layout">
      {contacts.map((data) => (
        <div className="card" key={data.id}>
          <div className="card-info">
            <p>
              <Link to={`/contacts/${data.id}`}><strong>{data.name}</strong></Link>
            </p>
            <div className="card-button">
              <button onClick={() => handleEdit(data)}>
                <i className="bi bi-pencil"></i>
              </button>
              <button className="delete" onClick={() => handleDelete(data.id)}>
                <i className="bi bi-trash3"></i>
              </button>
            </div>
          </div>
          <div>
            <p>{data.email}</p>
            <p>{data.number}</p>
          </div>
        </div>
      ))}
    </ul>
  );
}

export default ContactCard;



