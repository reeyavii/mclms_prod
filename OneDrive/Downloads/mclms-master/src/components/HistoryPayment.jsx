import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./auth/HistoryPayment.module.css";
// import {getPayments} from "../app/reducer/paymentSlice";
import { getStalls } from "../app/reducer/stallSlice";
import { useDispatch, useSelector } from "react-redux";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

function PaymentHistory() {
  const navigate = useNavigate("");
  const dispatch = useDispatch();
  // const {payments, payment} = useSelector((state) => state.payment);
  const { stalls, stall } = useSelector((state) => state.stall);

  // useEffect(()  => {
  //     dispatch(getPayments());
  // }, []);
  // console.log(payments);

  useEffect(() => {
    dispatch(getStalls());
  }, []);
  console.log(stalls);

  const handleGoBack = (e) => {
    //go to verification
    navigate(-1);
    console.log("create clicked");
  };
  const handleSelect = (e) => {
    navigate("/gcash-receipt-details");
    console.log("");
  };

  return (
    <div className={styles.container}>
      <div className={styles.historyPayment}>
        <div className={styles.navBar}>
          <div className="BackA">
            <button onClick={handleGoBack}>
              {" "}
              <ArrowBackIosNewIcon sx={{ fontSize: 18, marginTop: 1 }} />{" "}
            </button>
          </div>{" "}
          <h1>Payment History </h1>
        </div>

        <div className={styles.content}>
          {stalls.map((stallData, index) => {
            return (
              <div onClick={handleSelect}>
                <div key={stallData.id}>
                  <div className={styles.date}>
                    <h3>{stallData.stallType}</h3>
                  </div>
                  <div>
                    <div className={styles.status}>
                      <p> {stallData.status}</p>
                    </div>

                    <div className={styles.amount}>
                      <h3> {stallData.stallNumber}</h3>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default PaymentHistory;
