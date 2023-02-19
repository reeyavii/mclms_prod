import React, { useState } from "react";
// import "./auth/Auth.styles.css";
import { useNavigate } from "react-router-dom";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import styles from "./auth/Verification.module.css";
import axios from "axios";
import { API_URL } from "../app/constants";
import { useSelector, useDispatch } from "react-redux";
import { authVerify } from "../app/reducer/authSlice";

// const hideNumber = (phoneNumber) => {
//   //0912*****93
//   let newPhoneNumber = "";
//   for (let i = 0; i < phoneNumber.length; i++) {
//     if (i >= 4 && i <= 8) {
//       newPhoneNumber = newPhoneNumber + "*";
//     } else {
//       newPhoneNumber = newPhoneNumber + phoneNumber[i];
//     }
//   }
//   return newPhoneNumber;
// };

function Verification() {
  // const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userId, token } = useSelector((state) => state.auth);
  const [requested, setRequested] = useState(false);
  const [otp, setOtp] = useState({
    first: "",
    second: "",
    third: "",
    fourth: "",
    fifth: "",
    sixth: "",
  });

  const handleGoBack = (e) => {
    //go to verification
    navigate("/register");
    console.log("register clicked");
  };

  const handleConfirm = () => {
    const otpString = otp.first + otp.second + otp.third + otp.fourth + otp.fifth + otp.sixth;
    const data = {
      userId: userId,
      pin: otpString,
    };
    dispatch(authVerify(data));
    console.log("verified clicked");
  };

  const handleRequest = () => {
    setRequested(true);
    axios.get(`${API_URL}auth/request-verification/${userId}`);
    console.log("create clicked");
  };

  const handleOtp = (e) => {
    if (e.target.value === "" || e.target.value.match(/[0-9]/g, "")) {
      setOtp({ ...otp, [e.target.name]: e.target.value });
      console.log("otp changed");
  };
};

  return (
    <div className={styles.ContainerA}>
   
      <div className={styles.BackA}>
              <button onClick={handleGoBack}>
                {" "}
                <ArrowBackIosNewIcon
                  sx={{ fontSize: 18, marginTop: 0.2, marginLeft:0.6 }}
                />{" "}
              </button>
            </div>
 <div className={styles.InnerContainer2}>
      <div className={styles.Code}>
      <p> A 6-digit code is sent to <br />
        your phone number 
        {/* {hideNumber(phoneNumber)} */}
        . <br />
        Please enter the code below to complete <br />
        creating your account.</p> 
      </div>
      <div className={styles.line}>
        <input
          name="first"
          type="text"
          maxLength="1"
          onChange={handleOtp}
          value={otp.first}
        />
        <input
          type="text"
          maxLength="1"
          name="second"
          onChange={handleOtp}
          value={otp.second}
        />
        <input
          type="text"
          maxLength="1"
          name="third"
          onChange={handleOtp}
          value={otp.third}
        />
        <input
          name="fourth"
          type="text"
          maxLength="1"
          onChange={handleOtp}
          value={otp.fourth}
        />
        <input
          type="text"
          maxLength="1"
          name="fifth"
          onChange={handleOtp}
          value={otp.fifth}
        />
        <input
          type="text"
          maxLength="1"
          name="sixth"
          onChange={handleOtp}
          value={otp.sixth}
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
    </div>
    </div>
  );

}

export default Verification;
