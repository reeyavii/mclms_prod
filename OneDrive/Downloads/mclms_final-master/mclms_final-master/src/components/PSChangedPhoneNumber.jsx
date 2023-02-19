import React, { useState } from "react";
// import "./auth/Profile.styles.css";
import styles from "./auth/ProfileUpdate.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Header from "./Header";
import { updateNumber } from "../app/reducer/authSlice";

function PSChangedPhoneNumber() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const [newPhoneNum, setNewPhoneNum] = useState("");
  const [reEnterNewPhoneNum, setReEnterNewPhoneNum] = useState("");
  const [passConfirm, setPassConfirm] = useState("");

  const newPhoneNumChange = (e) => {
    setNewPhoneNum(e.target.value);
  };

  const reEnterNewPhoneNumChange = (e) => {
    setReEnterNewPhoneNum(e.target.value);
  };

  const passConfirmChange = (e) => {
    setPassConfirm(e.target.value);
  };

  const handleGoBack = (e) => {
    //go to profile setting
    navigate("/profile-setting");
    console.log("create clicked");
  };

  const handleConfirm1 = (e) => {
    //go to reset sucessful
    const number = newPhoneNum;
    dispatch(updateNumber({ token, number }));
    navigate(`/profile-setting-verification/${number}`);
    console.log("confirm clicked");
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
          <h1>Update Phone Number</h1>
        </div>

        <div className={styles.InputContainerE}>
          <div className={styles.InputE}>
            <input
              placeholder="Enter New Phone Number"
              value={newPhoneNum}
              onChange={newPhoneNumChange}
            />
          </div>
          <div className={styles.InputE}>
            <input
              placeholder="Re-enter New Phone Number"
              value={reEnterNewPhoneNum}
              onChange={reEnterNewPhoneNumChange}
            />
          </div>
        </div>

        <div className={styles.Confirm1}>
          <button onClick={handleConfirm1}>Confirm</button>
        </div>
      </div>
    </div>
  );
}

export default PSChangedPhoneNumber;
