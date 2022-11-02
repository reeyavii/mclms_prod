import React, { useState, useEffect } from "react";
import "./auth/Payments.styles.css";
import { useNavigate } from "react-router-dom";
import logo2 from "../assets/logo-alimodian.png";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Button from "@mui/material/Button";
import logoGcash from "../assets/G-Cash.png";
import styles from "./auth/QRPayment.module.css";
import qr from "../assets/qr.jpg";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HomeIcon from "@mui/icons-material/Home";
import { useDispatch, useSelector } from "react-redux";
import { getPayment } from "../app/reducer/paymentSlice";
import Header from "./Header";

function QRPayment() {
  const navigate = useNavigate();
  const [amount, setAmount] = useState("");
  const dispatch = useDispatch();
  const { userId } = useSelector((state) => state.auth);
  const { payment } = useSelector((state) => state.payment);
  const amountChange = (e) => {
    setAmount(e.target.value);
  };

  useEffect(() => {
    dispatch(getPayment(userId));
  }, []);

  const handleGoBack = (e) => {
    navigate(-1);
    console.log("create clicked");
  };

  const handleVerify = (e) => {
    navigate("/receipt-details");
    console.log("");
  };
  const handleHome = () => {
    navigate("/home");
    console.log("");
  };
  const handleProfile = (e) => {
    navigate("/profile-setting");
    console.log("Profile clicked");
  };

  return (
    <div className="ContainerA">
      <div className="InnerContainer1">
      <Header />


        <div className={styles.Container3}>
          <div className="BackA">
            <button onClick={handleGoBack}>
              {" "}
              <ArrowBackIosNewIcon sx={{ fontSize: 18, marginTop: 1 }} />{" "}
            </button>{" "}
            <p>BACK</p>
          </div>

          <div className={styles.logoGcash}>
            <img src={logoGcash} alt="logoGcash" />
          </div>

          <div className={styles.gcashContainer}>
            <div className={styles.qr}>
              <img src={qr} alt="qr" />
            </div>

            <div className={styles.Gcash}>
              <div className={styles.GcashAccnt}>
                <p>Amount</p>
                <br />
                <input
                  placeholder={`PHP ${payment && payment.amount}`}
                  value={amount}
                  disabled={true}
                />
              </div>

              <div className={styles.GcashVerify}>
                <Button onClick={handleVerify}> CONFIRM</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QRPayment;
