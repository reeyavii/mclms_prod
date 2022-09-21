import React, { useState } from "react";
import { useNavigate } from "react-router";
import styles from "./auth/Receipts.module.css";
function Receipts() {
  const navigate = useNavigate("");
  const { amount, setAmount } = useState("");
  const handleDone = (e) => {
    navigate("/receipt-details");
    console.log("");
  };

  return (
    <div className={styles.container}>
      <div className={styles.receipts}>
        <div className={styles.header}>
          <h5>Payment</h5>
          <p onClick={handleDone}>Done</p>
        </div>

        <div className={styles.content}>
          <p>Successfully Paid To</p>

          <div className={styles.profile}>
            <p>Name</p>
            <h4>php 3,000.00</h4>
          </div>

          <div className={styles.details}>
            <p>Amount Paid</p>
            <input placeholder="php 3,000.00" value={amount} disabled={true} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Receipts;
