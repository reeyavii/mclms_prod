import React, { useState } from "react";
import "./auth/Payments.styles.css";
import { useNavigate } from "react-router-dom";
import logo2 from "../assets/logo-alimodian.png";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Button from "@mui/material/Button";
import logoGcash from "../assets/G-Cash.png";
import styles from "./auth/QRPayment.module.css";
import qr from "../assets/qr.jpg";
// import bgblue from "./assets/bgblue.jpg";

function QRPayment() {
  const navigate = useNavigate();
  const [amount, setAmount] = useState("");

  const amountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleGoBack = (e) => {
    navigate(-1);
    console.log("create clicked");
  };

  const handleVerify = (e) => {
    navigate("/receipt-details");
    console.log("");
  };

  return (
    <div className="ContainerA">
      <div className="InnerContainer1">
        <div className="bar">
          <div className="Logo2">
            <div className="Logo2Alim">
              <img src={logo2} alt="logo1" />
            </div>
          </div>

          <div className="Economic">
            <div className="Nomic">ECONOMIC</div>
            <div className="Department">DEPARTMENT</div>
          </div>
        </div>

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
                  placeholder="php 3,000.00"
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
