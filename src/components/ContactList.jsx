import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ModalContext from "../store/ModalContext";
import ContactContext from "../store/ContactContext";

function ContactList() {
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
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email Address</th>
          <th>Contact Number</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((data) => (
          <tr key={data.id}>
            <td>
              <Link to={`/contacts/${data.id}`}>{data.name}</Link>
            </td>
            <td>{data.email}</td>
            <td>{data.number}</td>
            <td className="table-button">
              <button onClick={() => handleEdit(data)}>
              <i className="bi bi-pencil"></i>
              </button>
              <button className="delete" onClick={() => handleDelete(data.id)}>
                <i className="bi bi-trash3"></i>
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export default ContactList;
