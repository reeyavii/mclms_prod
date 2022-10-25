import React, { useState, useEffect } from "react";
import styles from "./auth/ReceiptDetails.module.css";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Stack from "@mui/material/Stack";
import logoGcash from "../assets/G-Cash.png";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getPayment, addReceipt } from "../app/reducer/paymentSlice";
import {FormatDate} from "../app/constants";

function ReceiptDetails() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");
  const [mobileNum, setmobileNum] = useState("");
  const [accountNum, setAccountNum] = useState("");
  const [refNo, setRefNo] = useState("");
  const [date, setDate] = useState("");
  const [image, setImage] = useState(null);
  const authEmail = useSelector((state) => state.auth.email);
  const { userId, phoneNumber } = useSelector((state) => state.auth);
  const { payment } = useSelector((state) => state.payment);

  useEffect(() => {
    dispatch(getPayment(userId));
  }, []);

  const handleDone = (e) => {
    navigate("/payments");
    console.log("create clicked");
  };
  const handleGoBack = (e) => {
    //go to verification
    navigate(-1);
    console.log("create clicked");
  };

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("image", image);
    formData.append("email", email);
    formData.append("amount", amount);
    formData.append("gcashNumber", mobileNum);
    formData.append("gcashNumber", accountNum);
    formData.append("refNo", refNo);
    formData.append("receiptDate", date);
    formData.append("paymentId", payment.id);
    navigate("/gcash-receipt-details");
    dispatch(addReceipt(formData));
    console.log("");
  };

  const handleImage = (e) => {
    setImage(e.target.files[0]);
    console.log(e.target.files[0]);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleRefNoChange = (e) => {
    setRefNo(e.target.value);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
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
            <input
              hidden
              accept="image/*"
              multiple
              type="file"
              onChange={(e) => handleImage(e)}
            />
          </Button>
        </Stack>

        <div className={styles.payment}>
          <h5>Receipt Details</h5>
        </div>

        <div className={styles.details}>
          <p>Email:</p>
          <input placeholder={authEmail} value={email} disabled={true} />
        </div>

        <div className={styles.details}>
          <p>Amount Paid</p>
          <input
            placeholder="Amount"
            value={amount}
            onChange={handleAmountChange}
          />
        </div>

        <div className={styles.details}>
          <p>Mobile Number</p>
          <input placeholder={phoneNumber} value={mobileNum} disabled={true} />
        </div>

        <div className={styles.details}>
          <p>Ref. No.</p>
          <input
            placeholder="Type Gcash Ref.No"
            value={refNo}
            onChange={handleRefNoChange}
          />
        </div>
        <div className={styles.details}>
          <p>Date</p>
          <input
            type="date"
            placeholder="mm/dd/yy"
            value={date}
            onChange={handleDateChange}
          />
        </div>

        <div className={styles.submit}>
          <button onClick={handleSubmit} disabled={image === null ? true : false}>SUBMIT</button>
        </div>
      </div>
      <p>Please upload your payment receipt here.</p>
    </div>
  );
}

export default ReceiptDetails;
