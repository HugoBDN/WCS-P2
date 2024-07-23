import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
// eslint-disable-next-line no-unused-vars
import Signup from "./components/signup/Signup";
import Map from "./components/Map/Map";
import Reservation from "./components/Reservation/Reservation";
import Login from "./components/login/Login";
import { UserContextProvider } from "./contexts/userContext";
// import { Geoloc } from "./Hook/Geoloc";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Map",
    element: <Map />,
  },
  {
    path: "/Signup",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "/Reservation",
    element: <Reservation />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserContextProvider>
      <RouterProvider router={router} />
    </UserContextProvider>
  </React.StrictMode>
);
