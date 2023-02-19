import React, { useState } from "react";
import styles from "./auth/ForgotPassEmail.module.css";
import { useNavigate } from "react-router-dom";
import SuccessPopUp from "./SuccessPopUp";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { requestForgotPassword, updatePassword } from "../app/reducer/authSlice";
import { useDispatch, useSelector } from "react-redux";

function ForgotPassEmail() {
  const navigate = useNavigate();
  const [showPopUp, setShowPopUp] = useState(false);
  const [email, setEmail] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const dispatch = useDispatch();

  const emailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleGoBack = (e) => {
    //go to profile setting
    navigate(-1);
    console.log("create clicked");
  };

  const handleConfirm1 = (e) => {
    //go to reset sucessful
    //  setShowPopUp(true);
    var mclmsEmail = email;
    localStorage.setItem("mclms", mclmsEmail);
    dispatch(requestForgotPassword(email));
    navigate("/forgot-password-verification");
    console.log("confirm clicked");
  };

  return (
    <div className={styles.ContainerA}>
      {/* <Header /> */}

     
        <div className={styles.BackA}>
          <button onClick={handleGoBack}>
            {" "}
            <ArrowBackIosNewIcon
              sx={{ fontSize: 18, marginTop: 1.5, marginLeft:-0.1 }}
            />{" "}
          </button>
        </div> 
        <div className={styles.InnerContainer1}>
        <div className={styles.Name}>
          <h1>Please enter your email address</h1>
        </div>

        <div className={styles.InputContainerE}>
          <div className={styles.InputE}>
            <input placeholder="Email" value={email} onChange={emailChange} />
          </div>
        </div>

        <div className={styles.Confirm1}>
          <button onClick={handleConfirm1}>Submit</button>
        </div>
      </div>
      {/* {showPopUp && (
      <SuccessPopUp
        labeledName={"Password changed successfully!"}
        navigateToHome={true}
      />
    )} */}
    </div>
  );
}

export default ForgotPassEmail;
