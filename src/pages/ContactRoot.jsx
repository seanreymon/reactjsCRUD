import { Outlet } from "react-router-dom";
import HeaderPage from "./Header";
import NewContactPage from "./New";
import EditContact from "./Edit";

function ContactRootPage() {
  return (
    <>
      <HeaderPage />
      <NewContactPage />
      <EditContact />
      <Outlet />
    </>
  );
}

export default ContactRootPage;
