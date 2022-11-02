import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";

function NotFound() {
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.auth);
  useEffect(() => {
    if (token !== null) {
      navigate("/home");
    } else {
      navigate("/login");
    }
  });

  return <div></div>;
}

export default NotFound;
