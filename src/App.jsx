import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/Root";
import ContactDetails from "./components/ContactDetails";
import ErrorPage from "./pages/Error";
import ContactList from "./components/ContactList";
import ContactCard from "./components/ContactCard";
import ContactRootPage from "./pages/ContactRoot";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <ContactRootPage />,
        children: [
          { path: "/", element: <ContactList /> },
          { path: "/card", element: <ContactCard /> },
        ],
      },
      ,
    ],
  },
  { path: "/contacts/:contactId", element: <ContactDetails /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
