import React, { useState} from "react";
import styles from "./auth/PSPNVerification.module.css";
import { useNavigate, useParams } from "react-router-dom";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import SuccessPopUp from "./SuccessPopUp";
import axios from "axios";
import { API_URL } from "../app/constants";
import { useSelector, useDispatch } from "react-redux";
import { updateNumberVerify } from "../app/reducer/authSlice";

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

function PSPNVerification() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showPopUp, setShowPopUp] = useState(false);
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
    navigate("/profile-setting");
    console.log("register clicked");
  };

  // const handleConfirm1 = (e) => {
  //   //go to reset sucessful
  //   setShowPopUp(true);
  //   console.log("confirm clicked");
  // };

  // const handleRequest = () => {
  //   console.log("create clicked");
  // };

  const handleConfirm1 = () => {
    const otpString =
      otp.first + otp.second + otp.third + otp.fourth + otp.fifth + otp.sixth;
    const payload = {
      userId: userId,
      pin: otpString,
    };
    const phoneNumber = id;
    dispatch(updateNumberVerify({ token, payload, phoneNumber }));
    navigate("/profile-setting");
    console.log("verified clicked");
  };

  const handleRequest = () => {
    //
  };

  const handleOtp = (e) => {
    if (e.target.value === "" || e.target.value.match(/[0-9]/g, "")) {
      setOtp({ ...otp, [e.target.name]: e.target.value });
      console.log("otp changed");
    }
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
        <p>
          A 6-digit code is sent to <br />
          your phone number 
          {/* {hideNumber(id)}.  */}
          <br />
          Please enter the code below to complete <br />
          changing your phone number.
        </p>
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
          <button onClick={handleRequest}>Request Code</button>
        </div>
      ) : (
        <div className={styles.ConfirmButton}>
          <button onClick={handleConfirm1}>Submit</button>
        </div>
      )}
      {showPopUp && (
        <SuccessPopUp
          labeledName={"Phone Number changed successfully!"}
          navigateToHome={true}
        />
      )}
    </div>
    </div>
  );
}

export default PSPNVerification;
