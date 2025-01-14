import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

// A wrapper for protected routes
const UserPrivateRoute = ({ children }) => {
  const token = Cookies.get("userToken");

  // If the token does not exist, redirect to Admission Form 
  return token ? children : <Navigate to="/admission/application-form" />;
};

export default UserPrivateRoute;
