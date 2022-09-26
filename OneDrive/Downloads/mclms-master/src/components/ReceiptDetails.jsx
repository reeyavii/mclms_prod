import React, { useState } from "react";
import styles from "./auth/ReceiptDetails.module.css";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Stack from "@mui/material/Stack";
import logoGcash from "../assets/G-Cash.png";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useNavigate } from "react-router";

function ReceiptDetails() {
  const navigate = useNavigate();
  const { email, setEmail } = useState("");
  const { amount, setAmount } = useState("");
  const { mobileNum, setmobileNum } = useState("");
  const { accountNum, setAccountNum } = useState("");
  const { refNo, setRefno } = useState("");
  const { date, setDate } = useState("");
  const { status, setStatus } = useState("");

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
    navigate("/gcash-receipt-details");
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
            <ArrowBackIosNewIcon sx={{ fontSize: 18, marginTop: 0.5 }} />{" "}
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
        <Stack
          direction="row"
          alignItems="center"
          marginLeft={35}
          marginTop={2}
          justifyContent="center"
        >
          <Button
            variant="contained"
            component="label"
            sx={{
              fontSize: 10,
              width: 10,
              height: 25,
              backgroundColor: "#7e9ec0",
            }}
          >
            Upload
            <input hidden accept="image/*" multiple type="file" />
          </Button>
        </Stack>

        <div className={styles.payment}>
          <h5>Payment Details</h5>
        </div>
        <div className={styles.details}>
          <p>Status:</p>
          <input placeholder="Status" value={status} disabled={true} />
        </div>

        <div className={styles.details}>
          <p>Email:</p>{" "}
          <input placeholder="Email" value={email} disabled={true} />
        </div>

        <div className={styles.details}>
          <p>Amount Paid</p>
          <input placeholder="php 3,000.00" value={amount} disabled={true} />
        </div>

        <div className={styles.details}>
          <p>Mobile Number</p>
          <input placeholder="+63" value={mobileNum} disabled={true} />
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
          <button onClick={handleSubmit}>SUBMIT</button>
        </div>
      </div>
      <p>Please upload your payment receipt here.</p>
    </div>
  );
}

export default ReceiptDetails;
