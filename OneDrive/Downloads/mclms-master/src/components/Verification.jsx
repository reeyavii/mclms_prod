import React, { useState } from "react";
// import "./auth/Auth.styles.css";
import { useNavigate } from "react-router-dom";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import styles from "./auth/Verification.module.css";
import axios from "axios";
import { API_URL } from "../app/constants";
import { useSelector, useDispatch } from "react-redux";
import { authVerify } from "../app/reducer/authSlice";

function Verification() {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const dispatch = useDispatch();
  const { userId } = useSelector((state) => state.auth);
  const [requested, setRequested] = useState(false);

  const handleGoBack = (e) => {
    //go to verification
    navigate("/register");
    console.log("register clicked");
  };

  const handleConfirm = () => {
    const data = {
      userId: userId,
      pin: otp,
    };
    dispatch(authVerify(data));
    console.log("verified clicked");
  };

  const handleRequest = () => {
    setRequested(true);
    axios.get(`${API_URL}auth/request-verification/${userId}`);
    console.log("create clicked");
  };

  const handleOtp = (e, index) => {
    setOtp(e.target.value);
    console.log("");
  };

  return (
    <div className={styles.InnerContainer2}>
      <div className={styles.ButtonB}>
        <button onClick={handleGoBack}>
          {" "}
          <ArrowBackIosNewIcon sx={{ fontSize: 18, marginTop: -5 }} />{" "}
        </button>{" "}
        <p>BACK</p>
      </div>

      <div className={styles.Code}>
        A 4-digit code is sent to <br />
        your phone number +639******741. <br />
        Please enter the code below to complete <br />
        creating your account.
      </div>
      <div className={styles.line}>
        <input
          inputMode="numeric"
          max="999999"
          min="0"
          type="number"
          onChange={handleOtp}
          value={otp}
        />
      </div>

      {requested ? (
        <div className={styles.ConfirmButton}>
          <button onClick={handleConfirm}>Submit</button>
        </div>
      ) : (
        <div className={styles.ConfirmButton}>
          <button onClick={handleRequest}>Request Code</button>
        </div>
      )}

      <div className={styles.RequestButton}>
        <button onClick={handleRequest}>Request for a code again.</button>
      </div>
    </div>
  );
}

export default Verification;
