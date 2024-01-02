import { useContext } from "react";
import ModalContext from "../store/ModalContext";
import { NavLink } from "react-router-dom";

function HeaderPage() {
  const { showAddContact } = useContext(ModalContext);

  function handleAddNewContact() {
    showAddContact();
  }
  return (
    <>
      <div className="header">
        <h1>Contacts Information</h1>
        <div>
          <p>
            Your list of contacts appears here. To add a new contact, click on
            the Add New Contact button
          </p>
          <button onClick={handleAddNewContact}>Add New Contact</button>
        </div>
      </div>
      <div id="grid">
        <ul className="grid-view">
          <NavLink to="/">
            <i className="bi bi-grid"></i>
          </NavLink>

          <NavLink to="/card">
            <i className="bi bi-list"></i>
          </NavLink>
        </ul>
      </div>
    </>
  );
}

export default HeaderPage;
