import { Outlet } from "react-router-dom";
import { ContactContextProvider } from "../store/ContactContext";
import { ModalContextProvider } from "../store/ModalContext";


function RootLayout() {
  return (
    <>
      <ModalContextProvider>
        <ContactContextProvider>
          <div className="root">
            <Outlet />
          </div>
        </ContactContextProvider>
      </ModalContextProvider>
    </>
  );
}

export default RootLayout;
