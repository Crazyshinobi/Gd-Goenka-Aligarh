import { Navigate } from "react-router-dom";
import Cookies from "js-cookie"; 

// A wrapper for protected routes
const UserPrivateRoute = ({ children }) => {
  const userToken = Cookies.get("userToken");

  // If the token does not exist, redirect to Admission Form 
  return userToken ? children : <Navigate to="/admission/application-form" />;
};

export default UserPrivateRoute;
