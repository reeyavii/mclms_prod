import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./auth/HistoryPayment.module.css";
import { getPayments } from "../app/reducer/paymentSlice";
import { getPayment, getReceipts } from "../app/reducer/paymentSlice";
import { useDispatch, useSelector } from "react-redux";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { FormatDate } from "../app/constants";
import Header from "./Header";
// const FormatDate = (date) => {
//   let datetime = new Date(date);
//   var newDate = new Date(datetime).toLocaleDateString("en-us", {
//     year: "numeric",
//     month: "short",
//     day: "numeric",
//   });
//   return newDate;
// };

function PaymentHistory() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userId } = useSelector((state) => state.auth);
  const { receipts, receipt, payment } = useSelector((state) => state.payment);

  useEffect(() => {
    dispatch(getPayment(userId));
  }, []);
  console.log(payment);

  useEffect(() => {
    if (payment !== null) {
      dispatch(getReceipts(payment.id));
    }
  }, [payment]);
  console.log(receipts);

  const handleGoBack = (e) => {
    //go to verification
    navigate(-1);
    console.log("create clicked");
  };
  const handleSelect = (e, id) => {
    navigate(`/gcash-receipt-details/${id}`);
    console.log("");
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Header />
      </div>

      <div className={styles.historyPayment}>
        <div className={styles.navBar}>
          <div className={styles.BackA}>
            <button onClick={handleGoBack}>
              {" "}
              <ArrowBackIosNewIcon
                sx={{ fontSize: 18, marginTop: 1, color: "black" }}
              />{" "}
            </button>
          </div>{" "}
          <h1>Payment History </h1>
        </div>

        <div className={styles.content}>
          {receipts &&
            receipts.map((receipt, index) => {
              return (
                <div onClick={(e) => handleSelect(e, receipt.id)}>
                  <div key={receipt.id}>
                    <div className={styles.date}>
                      <h3>{FormatDate(receipt.receiptDate)}</h3>
                    </div>

                    <div className={styles.amount}>
                      <h3> {`PHP ${receipt.amount}`}</h3>
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
