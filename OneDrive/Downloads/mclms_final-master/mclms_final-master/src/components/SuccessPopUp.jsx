import React from "react";
import styles from "./auth/FormSuccessPopUp.module.css";
import { useNavigate } from "react-router-dom";
import PopLogo from "../assets/Verified.png";
import { useSelector } from "react-redux";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

function SuccessPopUp(props) {
  const navigate = useNavigate();
  const { result } = useSelector((state) => state.auth);

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
      <div className></div>
      <div className={styles.PopU}>
      {result === "Update Password Success" ? (
          <img src={PopLogo} alt="PopLogo" />
        ) : (
          <ErrorOutlineIcon sx={{height:100, width:100, marginTop:-5, color:"red"}}/>
        )}
        <p>{result}</p>
      </div>

      <div className={styles.ButtonPopSuccess}>
        <div className={styles.PopSub}>
          {props.navigateToHome ? (
            result === "Password Error" ? <button onClick={() => navigate(-1)}>Go back </button> : 
            <button onClick={handlePopSubmit}>
           
              <p>Home</p>
            </button>
          ) : (
            <button onClick={handlePopSubmit}>Log in again </button>
          )}
         
        </div>

      </div>

    </div>
  );
}

export default SuccessPopUp;
// {result === "Update Password Success" ? (
//           <img src={PopLogo} alt="PopLogo" />
//         ) : (
//           <ErrorIcon/>
//         )}
