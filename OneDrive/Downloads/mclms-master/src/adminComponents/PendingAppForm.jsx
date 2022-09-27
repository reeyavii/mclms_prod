import React, { useEffect, useState } from "react";
import "./Lessees.styles.css";
import { useDispatch, useSelector } from "react-redux";
import { getLesseeId } from "../app/reducer/lesseeSlice";
import { useNavigate, useParams } from "react-router";
import styles from "./Auth/PendingAppForm.module.css";
// import {toMoney} from "../app/constants";

function PendingAppForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { lessee } = useSelector((state) => state.lessee);
  const { id } = useParams();
  //   const [firstName] = useState("");
  const [lastName] = useState("");
  const [age] = useState("");
  const [sex] = useState("");
  const [status] = useState("");
  const [address] = useState("");
  const [phoneNum] = useState("");

  useEffect(() => {
    const Id = id;
    dispatch(getLesseeId({ Id }));
  }, []);
  console.log(lessee);

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
<>

   { lessee && <div className={styles.pending}>
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
            <input placeholder="Last Name, First Name" value={`${lessee.lastName}, ${lessee.firstName}` } />
          </div>
          <div className={styles.holderName}>
            <h5>Permanent Address:</h5>
          </div>
          <div className={styles.inputContent}>
            <input placeholder="Address " value={lessee.address} />
          </div>
        </div>

        <div className={styles.input}>
          <div className={styles.holdername}>
            <h5>Age:</h5>
          </div>
          <div className={styles.inputContent}>
            <input placeholder="#" value={lessee.age} />
          </div>

          <div className={styles.holderName}>
            <h5>Phone Number:</h5>
          </div>
          <div className={styles.inputContent}>
            <input placeholder="+63" value={lessee.contactNumber} />{" "}
          </div>
        </div>

        <div className={styles.input}>
          <div className={styles.holdername}>
            <h5>Sex:</h5>
          </div>
          <div className={styles.inputContent}>
            <input placeholder="#" value={lessee.sex} />
          </div>
        </div>

        <div className={styles.input}>
          <div className={styles.holdername}>
            <h5>Status:</h5>
          </div>
          <div className={styles.inputContent}>
            <input placeholder="#" value={lessee.civilStatus} />
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
            <input placeholder="#" value={lessee.stall.stallNumber} />
          </div>
          <div className={styles.holderName}>
            <h5>Rate per Sq.m:</h5>
          </div>
          <div className={styles.inputContent}>
            <input placeholder="#" value={"P5.00/sq.m x 30days"} />
          </div>
        </div>
        <div className={styles.input}>
          <div className={styles.holdername}>
            <h5>Stall Type:</h5>
          </div>
          <div className={styles.inputContent}>
            <input placeholder="#" value={lessee.stall.stallType} />
          </div>
          <div className={styles.holderName}>
            <h5>Monthly Rate:</h5>
          </div>
          <div className={styles.inputContent}>
            <input placeholder="#" value={lessee.stall.monthlyPayment} />
          </div>
        </div>
        <div className={styles.input}>
          <div className={styles.holdername}>
            <h5>Area Leased:</h5>
          </div>
          <div className={styles.inputContent}>
            <input placeholder="#" value={lessee.stall.dimension} />
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
    </div>} </>
  );
}

export default PendingAppForm;
