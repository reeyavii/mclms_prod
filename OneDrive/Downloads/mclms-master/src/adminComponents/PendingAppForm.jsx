import React, { useEffect, useState } from "react";
import "./Lessees.styles.css";
import { useDispatch, useSelector } from "react-redux";
import { getStalls } from "../app/reducer/stallSlice";
import { useNavigate } from "react-router";
import styles from "./Auth/PendingAppForm.module.css";

function PendingAppForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { stalls, stall } = useSelector((state) => state.stall);
  //   const [firstName] = useState("");
  const [lastName] = useState("");
  const [age] = useState("");
  const [sex] = useState("");
  const [status] = useState("");
  const [address] = useState("");
  const [phoneNum] = useState("");

  useEffect(() => {
    dispatch(getStalls());
  }, []);
  console.log(stalls);

  //   const firstNameChange = (e) => {
  //     setFirstName (e.target.value);
  //   }
  const handleView = () => {
    // setView(true);
    // dispatch(({}));
    navigate("/pending-application-form");
    console.log("");
  };
  const handleDecline = () => {};
  const handleApprove = () => {};
  return (
    <div className={styles.pending}>
      <div className={styles.appForm}>
        <h2>APPLICATION FORM</h2>
      </div>
      <div className={styles.information}>
        <p>PERSONAL INFORMATION</p>
      </div>
      <div className={styles.inside}>
        <div className={styles.input}>
          <div className={styles.holdername}>
            <h5>Name:</h5>
          </div>
          <div className={styles.inputContent}>
            <input placeholder="Last Name, First Name" value={lastName} />
          </div>
          <div className={styles.holderName}>
            <h5>Permanent Address:</h5>
          </div>
          <div className={styles.inputContent}>
            <input placeholder="Address " value={address} />
          </div>
        </div>

        <div className={styles.input}>
          <div className={styles.holdername}>
            <h5>Age:</h5>
          </div>
          <div className={styles.inputContent}>
            <input placeholder="#" value={age} />
          </div>

          <div className={styles.holderName}>
            <h5>Phone Number:</h5>
          </div>
          <div className={styles.inputContent}>
            <input placeholder="+63" value={phoneNum} />{" "}
          </div>
        </div>

        <div className={styles.input}>
          <div className={styles.holdername}>
            <h5>Sex:</h5>
          </div>
          <div className={styles.inputContent}>
            <input placeholder="#" value={sex} />
          </div>
        </div>

        <div className={styles.input}>
          <div className={styles.holdername}>
            <h5>Status:</h5>
          </div>
          <div className={styles.inputContent}>
            <input placeholder="#" value={status} />
          </div>
        </div>
      </div>

      <div className={styles.information}>
        <p>STALL TO ACQUIRE</p>
      </div>
      <div className={styles.inside}>
        <div className={styles.input}>
          <div className={styles.holdername}>
            <h5>Stall Number:</h5>
          </div>
          <div className={styles.inputContent}>
            <input placeholder="#" value={status} />
          </div>
          <div className={styles.holderName}>
            <h5>Rate per Sq.m:</h5>
          </div>
          <div className={styles.inputContent}>
            <input placeholder="#" value={status} />
          </div>
        </div>
        <div className={styles.input}>
          <div className={styles.holdername}>
            <h5>Stall Type:</h5>
          </div>
          <div className={styles.inputContent}>
            <input placeholder="#" value={status} />
          </div>
          <div className={styles.holderName}>
            <h5>Monthly Rate:</h5>
          </div>
          <div className={styles.inputContent}>
            <input placeholder="#" value={status} />
          </div>
        </div>
        <div className={styles.input}>
          <div className={styles.holdername}>
            <h5>Area Leased:</h5>
          </div>
          <div className={styles.inputContent}>
            <input placeholder="#" value={status} />
          </div>
        </div>
      </div>

      <div className={styles.button}>
        <div className={styles.decline}>
          <button onClick={handleDecline}>
            <h4>DECLINE</h4>
          </button>
        </div>
        <div className={styles.approve}>
          <button onClick={handleApprove}>
            <h4>APPROVE</h4>
          </button>
        </div>
      </div>
    </div>
  );
}

export default PendingAppForm;
