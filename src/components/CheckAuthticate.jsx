import { Navigate } from "react-router-dom";

const CheckAthanciate = ({ children }) => {
  const token = localStorage.getItem("admin_access_token");

  if (!token) {
    return <Navigate to="/admin" replace />;
  }

  return children
};

export default CheckAthanciate;
