import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import styles from "./auth/NotFound.module.css";
import ops from "../assets/ops.png";

function NotFound() {
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.auth);
  console.log("not found");

  // useEffect(() => {
  //   if (token !== null) {
  //     navigate("/home");
  //   } else {
  //     navigate("/login");
  //   }
  //   console.log(token);
  // }, [token]);

  return (
    <div className={styles.Container}>
      <div className={styles.Ops}>
        <h1>Oops!</h1>
      </div>
      <div className={styles.Emoji}>
        <img src={ops} alt="ops" />
      </div>

      <div className={styles.NotFound}>
        <p>Sorry, Page Not Found...</p>
        <div className={styles.home}>
          <button onClick={() => navigate("/home")}>Home</button>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
