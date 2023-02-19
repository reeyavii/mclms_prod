import React, { useEffect } from "react";
// import "./auth/Payments.styles.css";
import styles from "./auth/Payments.module.css";
import { useNavigate } from "react-router-dom";
import logo2 from "../assets/logo-alimodian.png";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Button from "@mui/material/Button";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import logoGcash from "../assets/gcash.png";
import ReceiptRoundedIcon from "@mui/icons-material/ReceiptRounded";
import { yellow } from "@mui/material/colors";
//import Stack from '@mui/material/Stack';
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { getPayment } from "../app/reducer/paymentSlice";
import { useSelector, useDispatch } from "react-redux";
import Header from "./Header";

const Reminder = ({ reminder, amount, date }) => {
  const { payment } = useSelector((state) => state.payment);
  const { userId } = useSelector((state) => state.auth);
  const month = (date) => {
    const month = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const newMonth = new Date(date);
    return month[newMonth.getMonth() + 1];
  };

  return (
    <div className={styles.Reminder}>
      <NotificationsActiveIcon
        sx={{
          fontSize: 35,
          marginTop: 2.5,
          marginLeft: -20,
          marginRight: 5,
          color: yellow[500],
        }}
      />

      {reminder ? (
        <>
          <h3>Upcoming Payments</h3>
          <p>
            Reminder: Payment of <br />
            {amount} for stall rent is coming <br />
            up on {month(date)} 10th. Make <br />
            sure to pay before on time to <br />
            avoid conflicts.
          </p>
        </>
      ) : (
        <>
          <h3>Add Gcash account</h3>
          <p>Before submitting a payment, add your Gcash account.</p>
        </>
      )}
    </div>
  );
};

function Payments() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { payment } = useSelector((state) => state.payment);
  const { userId } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getPayment(userId));
  }, []);
  console.log(payment);

  const handleGoBack = (e) => {
    //go to verification
    navigate("/home");
    console.log("create clicked");
  };
  const handlePayBills = (e) => {
    //go to verification
    navigate("/qr-code-payment");
    console.log("Edit clicked");
  };
  const handleReceipts = (e) => {
    //go to verification
    navigate("/payment-history");
    console.log("Edit clicked");
  };
  const handleAddGCash = (e) => {
    //go to verification
    navigate("/gcash");
    console.log("Edit clicked");
  };
  const handleHome = () => {
    navigate("/home");
    console.log("");
  };
  const handleProfile = (e) => {
    navigate("/profile-setting");
    console.log("Profile clicked");
  };

  const date = new Date();
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.content}>
        <div className={styles.BackA}>
          <button onClick={handleGoBack}>
            {" "}
            <ArrowBackIosNewIcon sx={{ fontSize: 18, marginTop: 1 }} />{" "}
          </button>{" "}
        </div>

        <Reminder
          reminder={true}
          amount={payment ? payment.amount : ""}
          date={date}
        />

        <div className={styles.Payment}>
          <div className={styles.Pay} onClick={handlePayBills}>
            <Button>
              <img src={logoGcash} alt="logoGcash" /> Pay Bills
            </Button>
          </div>

          <div className={styles.Pay} onClick={handleReceipts}>
            <Button>
              <ReceiptRoundedIcon
                sx={{
                  fontSize: 40,
                  marginLeft: 1.5,
                  marginRight: 4,
                  color: [500],
                }}
              />
              Receipts
            </Button>
          </div>

          <div className={styles.Pay} onClick={handleAddGCash}>
            <Button>
              {" "}
              <AddCircleIcon
                sx={{ fontSize: 35, marginLeft: 1.5, marginRight: 1 }}
              />{" "}
              Add G-cash Account
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Payments;
