import React, { useState } from "react";
import styles from "./auth/ProfileUpdate.module.css";
import { useNavigate } from "react-router-dom";
import logo2 from "../assets/logo-alimodian.png";
import logo3 from "../assets/User.png";
import SuccessPopUp from "./SuccessPopUp";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { updatePassword } from "../app/reducer/authSlice";
import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";

function PSChangedPassword() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const [showPopUp, setShowPopUp] = useState(false);
  const [oldPassword, setOldPassword] = useState("");
  const [password, setPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");

  const oldPasswordChange = (e) => {
    setOldPassword(e.target.value);
  };

  const passwordChange = (e) => {
    setPassword(e.target.value);
  };

  const retypePasswordChange = (e) => {
    setRetypePassword(e.target.value);
  };

  const handleGoBack = (e) => {
    //go to profile setting
    navigate("/profile-setting");
    console.log("create clicked");
  };

  const handleConfirm1 = (e) => {
    //go to reset sucessful
    const newPassword = password;
    dispatch(
      updatePassword({
        oldPassword,
        newPassword,
        token,
      })
    );
    setShowPopUp(true);
    console.log("confirm clicked");
  };
  const handleForgotPassword = () => {
    //go to reset-password**
    navigate("/reset");
    console.log("login clicked");
  };

  const handleProfile = (e) => {
    navigate("/profile-setting");
    console.log("Profile clicked");
  };

  return (
    <div className={styles.ContainerA}>
      <Header />
      <div className={styles.InnerContainer1}>
        <div className={styles.BackA}>
          <button onClick={handleGoBack}>
            {" "}
            <ArrowBackIosNewIcon sx={{ fontSize: 20, marginTop: 1 }} />{" "}
          </button>{" "}
        </div>

        <div className={styles.Name}>
          <h1>Update Password</h1>
        </div>

        <div className={styles.InputContainerE}>
          <div className={styles.InputE}>
            <input
              placeholder="Enter old password"
              value={oldPassword}
              onChange={oldPasswordChange}
            />
          </div>
          <div className={styles.InputE}>
            <input
              placeholder="Enter new password"
              value={password}
              onChange={passwordChange}
            />
          </div>
          <div className={styles.InputE}>
            <input
              placeholder="Re-type new password"
              type="retypePassword"
              value={retypePassword}
              onChange={retypePasswordChange}
            />
          </div>
        </div>

        <div className={styles.Confirm1}>
          <button onClick={handleConfirm1}>Confirm</button>
        </div>
      </div>
      {showPopUp && (
        <SuccessPopUp
          labeledName={"Password changed successfully!"}
          navigateToHome={true}
        />
      )}
    </div>
  );
}

export default PSChangedPassword;
