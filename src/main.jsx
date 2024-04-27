import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root/Root";
import Home from "./components/Home/Home";
import AllTouristSpot from "./components/TouristSpot/AllTouristSpot";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import ErrorElement from "./components/ErrorPage/ErrorElement";
import AddTouristSpot from "./components/AddTouristSpot/AddTouristSpot";
import MyList from "./components/MyList/MyList";
import SpotDetails from "./components/SpotDetails/SpotDetails";
import AuthProvider from "./Provider/AuthProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorElement></ErrorElement>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/spots"),
      },
      {
        path: "/tourist",
        element: <AllTouristSpot></AllTouristSpot>,
      },

      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/add page",
        element: <AddTouristSpot></AddTouristSpot>,
      },
      {
        path: "/my list",
        element: <MyList></MyList>,
      },
      {
        path: "/details/:id",
        element: <SpotDetails></SpotDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/spots/${params.id}`),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
