import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import AllTouristSpot from './components/TouristSpot/AllTouristSpot';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import ErrorElement from './components/ErrorPage/ErrorElement';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorElement></ErrorElement>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/tourist',
        element:<AllTouristSpot></AllTouristSpot>
      },
    
      {
        path:'/login',
        element:<Login></Login>
        
      },
      {
        path:'/register',
        element:<Register></Register>
      }
    
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  
  
    <React.StrictMode>
    <RouterProvider router={router} />
    </React.StrictMode>
  
 
)
