import React from "react";
import styles from "./auth/FormSuccessPopUp.module.css";
import { useNavigate } from "react-router-dom";
import PopLogo from "../assets/Verified.png";
import { useSelector } from "react-redux";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

function FormSuccessPopUp(props) {
  const navigate = useNavigate();
  const { result } = useSelector((state) => state.lessee);

  const handlePopSubmit = (e) => {
    //go to Home
    if (props.navigateToHome) {
      navigate("/home");
    } else {
      navigate("/Login");
    }

    console.log("PopSubmit clicked");
  };
  return (
    <div className={styles.SuccessPop}>
      
      <div className={styles.content}>
      <div className={styles.PopU}>
        {result === "Application Form Submitted Successfully" ? (
          <img src={PopLogo} alt="PopLogo" />
        ) : (
          <ErrorOutlineIcon
            sx={{ height: 100, width: 100, marginTop: -5, color: "red" }}
          />
        )}
        <p>{result}</p>
      </div>

      <div className={styles.ButtonPopSuccess}>
        <div className={styles.PopSub}>
          {props.navigateToHome ? (
            result === "Application Form Failed" ? (
              <button onClick={() => navigate(-1)}>Go back </button>
            ) : (
              <button onClick={handlePopSubmit}>
                {" "}
                <p>Home</p>
              </button>
            )
          ) : (
            <button onClick={handlePopSubmit}>Log in again </button>
          )}
        </div>
      
    </div>
   </div> 
    </div>
  );
}

export default FormSuccessPopUp;
