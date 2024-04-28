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
import PrivetRoute from "./components/PrivetRoute/PrivetRoute";
import AddCountry from "./components/AddCountry/AddCountry";
import UpdateSpot from "./components/UpdateSpot/UpdateSpot";

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
        loader:()=> fetch("http://localhost:5000/spots")
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
        element: (
          <PrivetRoute>
            <AddTouristSpot></AddTouristSpot>
          </PrivetRoute>
        ),
      },
      {
        path: "/my list",
        element: <MyList></MyList>,
      },
      {
        path: "/details/:id",
        element: (
          <PrivetRoute>
            <SpotDetails></SpotDetails>
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/spots/${params.id}`),
      },
      {
        path:'/addcountry',
        element:<AddCountry></AddCountry>,
        loader: ()=> fetch("http://localhost:5000/country")

      },
      {
        path:'/update/:id',
        element:<PrivetRoute><UpdateSpot></UpdateSpot></PrivetRoute>,
        loader:({params})=> fetch(`http://localhost:5000/spots/${params.id}`)
      }
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
