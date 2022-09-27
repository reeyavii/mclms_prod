import React, { useState } from "react";
import styles from "./auth/GcashReceiptDetails.module.css";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Stack from "@mui/material/Stack";
import logoGcash from "../assets/G-Cash.png";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useNavigate } from "react-router";
import CloseIcon from '@mui/icons-material/Close';
import index from "../assets/index.png";

function GcashReceiptDetails() {
  const navigate = useNavigate();
  const { email, setEmail } = useState("");
  const { amount, setAmount } = useState("");
  const { mobileNum, setmobileNum } = useState("");
  const { accountNum, setAccountNum } = useState("");
  const { refNo, setRefno } = useState("");
  const { date, setDate } = useState("");
  const { status, setStatus } = useState("");
  const [showImage, setShowImage] = useState(false);

  const handleDone = (e) => {
    navigate("/payments");
    console.log("create clicked");
  };
  const handleGoBack = (e) => {
    //go to verification
    navigate(-1);
    console.log("create clicked");
  };
  const handleSubmit = (e) => {
    setShowImage(true);
    console.log("");
  };
  return (
    // details of payment
    // date, amount, name, number, ref. no., status(approved, pending),
    <div className={styles.container}>
      <div className={styles.button}>
        <div className={styles.BackA}>
          <button onClick={handleGoBack}>
            {" "}
            <ArrowBackIosNewIcon sx={{ fontSize: 18, marginTop: 0.2 }} />{" "}
          </button>
        </div>
        <div className={styles.done}>
          <button onClick={handleDone}>Done</button>
        </div>
      </div>
      <div className={styles.logoGcash}>
        <img src={logoGcash} alt="logoGcash" />
      </div>

      <div className={styles.content}>
        <div className={styles.payment}>
          <h5>Payment Details</h5>
        </div>
        <div className={styles.details}>
          <p>Status:</p>
          <input placeholder="Approved" value={status} disabled={true} />
        </div>

        <div className={styles.details}>
          <p>Email:</p>{" "}
          <input placeholder="user000@gmail.com" value={email} disabled={true} />
        </div>

        <div className={styles.details}>
          <p>Amount Paid</p>
          <input placeholder="php 2,774.00" value={amount} disabled={true} />
        </div>

        <div className={styles.details}>
          <p>Mobile Number</p>
          <input placeholder="09123456789" value={mobileNum} disabled={true} />
        </div>

        <div className={styles.details}>
          <p>Ref. No.</p>
          <input placeholder="##########" value={refNo} />
        </div>
        <div className={styles.details}>
          <p>Date</p>
          <input placeholder="mm/dd/yy" value={date} />
        </div>

        <div className={styles.submit}>
          <button onClick={handleSubmit}>Show Receipt</button>
        </div>
      </div>

     {showImage && <div className={styles.imageContainer}>
        <IconButton onClick={() => setShowImage(false)}>
           <CloseIcon sx={{color:"white"}}/>
        </IconButton>
        <img src={index} alt="index"/>
      </div>}
    </div>
  );
}

export default GcashReceiptDetails;
