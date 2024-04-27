/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Navigate,useLocation } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const PrivetRoute = ({children}) => {
    const { user, loading} = useContext(AuthContext);
  const location = useLocation();
  if(loading){
    return <h1 className="text-5xl text-center font-medium">
    <span className="loading loading-spinner loading-lg"></span>
    </h1>
  }
  if (!user) {
    return <Navigate to="/login" state={location?.pathname || "/"}></Navigate>;
  }
    return <div>{children}</div>    
};

export default PrivetRoute;