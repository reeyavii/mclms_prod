import React, { useState, useEffect } from "react";
import styles from "./auth/GcashReceiptDetails.module.css";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Stack from "@mui/material/Stack";
import GcashLogo from "../assets/GcashLogo.png";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useNavigate, useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";
import index from "../assets/index.png";
import { getReceipt, getPayment } from "../app/reducer/paymentSlice";
import { FormatDate, API_URL } from "../app/constants";
import Header from "./Header";

function GcashReceiptDetails() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const { email, setEmail } = useState("");
  const { amount, setAmount } = useState("");
  const { mobileNum, setmobileNum } = useState("");
  const { accountNum, setAccountNum } = useState("");
  const { refNo, setRefNo } = useState("");
  const { date, setDate } = useState("");
  const { status, setStatus } = useState("");
  const [showImage, setShowImage] = useState(false);
  const authEmail = useSelector((state) => state.auth.email);
  const { userId, phoneNumber } = useSelector((state) => state.auth);
  const { receipt, payment } = useSelector((state) => state.payment);

  useEffect(() => {
    dispatch(getReceipt(id));
    dispatch(getPayment(userId));
  }, [id]);

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
     
     <div className={styles.innerContainer}>
      {receipt && payment && (
        <>
       
          <div className={styles.button}>
            <div className={styles.BackA}>
              <button onClick={handleGoBack}>
                {" "}
                <ArrowBackIosNewIcon
                  sx={{ fontSize: 18, marginTop: 0.2 }}
                />{" "}
              </button>
            </div>
            <div className={styles.done}>
              <button onClick={handleDone}>Done</button>
            </div>
          </div>
          <div className={styles.logoGcash}>
            <img src={GcashLogo} alt="GcashLogo" />
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
              <input placeholder={authEmail} value={email} disabled={true} />
            </div>

            <div className={styles.details}>
              <p>Amount Paid</p>
              <input placeholder={receipt.amount} />
            </div>

            <div className={styles.details}>
              <p>Mobile Number</p>
              <input placeholder={payment.gcashNumber} disabled={true} />
            </div>

            <div className={styles.details}>
              <p>Ref. No.</p>
              <input placeholder={receipt.refNo} />
            </div>
            <div className={styles.details}>
              <p>Date</p>
              <input placeholder={FormatDate(receipt.receiptDate)} />
            </div>

            <div className={styles.submit}>
              <button onClick={handleSubmit}>Show Receipt</button>
            </div>
          </div>

          {showImage && (
            <div className={styles.imageContainer}>
              <IconButton onClick={() => setShowImage(false)}>
                <CloseIcon sx={{ color: "white" }} />
              </IconButton>
              <img
                src={`${API_URL}api/receipts/image/${receipt.name}`}
                alt="index"
              />
            </div>
          )}
        </>
      )}
    </div>
    </div>
  );
}

export default GcashReceiptDetails;
