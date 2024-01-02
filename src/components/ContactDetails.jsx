import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function ContactDetails() {
  const { contactId } = useParams();
  const [contact, setContact] = useState([]);

  useEffect(() => {
    async function fetchContactDetails() {
      try {
        const response = await fetch(
          "http://localhost:3000/contacts/" + contactId
        );
        if (!response.ok) {
          throw new Error("Failed to fetch contact details.");
        }
        const resData = await response.json();
        setContact(resData);
      } catch (error) {
        console.error("Error fetching contacts:", error);
      }
    }

    fetchContactDetails();
  }, [contactId]);

  return (
    <>
      <div className="details-container">
        <div className="details-header">
        <Link to='..'><i className="bi bi-arrow-left"></i></Link>
          <h1> Contact Information</h1>
        </div>
        <div className="details-info">
          <div>
            <p>Name</p>
            <h3>{contact.name}</h3>
          </div>
          <div>
            <p>Email Address</p>
            <h3>{contact.email}</h3>
          </div>
          <div>
            <p>Contact Number</p>
            <h3>{contact.number}</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactDetails;
