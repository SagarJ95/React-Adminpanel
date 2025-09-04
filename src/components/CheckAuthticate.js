import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CheckAthanciate = ({ children }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("admin_access_token");

  useEffect(() => {
    if (!token) {
      navigate("/admin");
    }
  }, [token, navigate]);

  return children;
};

export default CheckAthanciate;
