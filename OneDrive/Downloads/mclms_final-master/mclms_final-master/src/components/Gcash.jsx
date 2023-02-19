import React, { useState, useEffect } from "react";
import styles from "./auth/Gcash.module.css";
import { useNavigate } from "react-router-dom";
import logo2 from "../assets/logo-alimodian.png";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Button from "@mui/material/Button";
import logoGcash from "../assets/GcashLogo.png";
import { useSelector, useDispatch } from "react-redux";
import { addPayment } from "../app/reducer/paymentSlice";
import { getLessee } from "../app/reducer/lesseeSlice";
import { getPayment, editPayment } from "../app/reducer/paymentSlice";
import Header from "./Header";

function Gcash() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [gcashNumber, setGcashNumber] = useState("");
  const [gcashName, setGcashName] = useState("");
  // const [amount, setAmount] = useState("");
  const { lessee } = useSelector((state) => state.lessee);
  const { payment } = useSelector((state) => state.payment);
  const { userId } = useSelector((state) => state.auth);
  const gcashNumberChange = (e) => {
    setGcashNumber(e.target.value);
  };
  const [isEdit, setIsEdit] = useState(false);
  //use effect to call reducers
  useEffect(() => {
    dispatch(getLessee({ userId }));
    dispatch(getPayment(userId));
  }, []);

  useEffect(() => {
    if (payment) {
      setGcashName(payment.gcashName);
      setGcashNumber(payment.gcashNumber);
    }
  }, [payment]);

  const gcashNameChange = (e) => {
    setGcashName(e.target.value);
  };

  console.log(payment);
  console.log(lessee);
  //  const amountChange = (e) => {
  //  setAmount(e.target.value);
  //  };

  const handleGoBack = (e) => {
    //go to verification
    navigate(-1);
    console.log("create clicked");
  };

  const handleVerify = (e) => {
    if (payment) {
      let receipts = [];
      if (payment.receipts === null) {
        receipts = [];
      } else {
        receipts = payment.receipts;
      }
      const payload = {
        id: payment.id,
        userId: payment.userId,
        acquiredDate: payment.acquiredDate,
        amount: payment.amount,
        receipts: receipts,
        gcashNumber: gcashNumber,
        gcashName: gcashName,
      };
      dispatch(editPayment(payload));
      setTimeout(() => {
        navigate("/payments");
      }, 500);
    } else {
      if (lessee) {
        const currentDate = new Date();
        const payload = {
          userId: userId,
          acquiredDate: currentDate.toString(),
          amount: lessee.stall.monthlyPayment,
          receipts: [],
          gcashNumber: gcashNumber,
          gcashName: gcashName,
        };
        dispatch(addPayment(payload));
        setTimeout(() => {
          navigate("/payments");
        }, 500);
      }
    }
  };
  const handleEdit = (e) => {
    setIsEdit(true);
  };
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.InnerContainer1}>
        <div className={styles.Container3}>
          <div className={styles.BackA}>
            <button onClick={handleGoBack}>
              {" "}
              <ArrowBackIosNewIcon sx={{ fontSize: 18, marginTop: 1 }} />{" "}
            </button>{" "}
          </div>

          <div className={styles.GcashAddAccount}>
            <img src={logoGcash} alt="GcashLogo" />
            <div className={styles.Gcash}>
              <div className={styles.GcashAccnt}>
                <p>G-Cash Name</p> <br />
                <input
                  placeholder=""
                  value={gcashName}
                  onChange={gcashNameChange}
                  readOnly={isEdit ? false : true}
                />
              </div>

              <div className={styles.GcashAccnt}>
                <p>G-Cash Number</p> <br />
                <input
                  placeholder=""
                  value={gcashNumber}
                  onChange={gcashNumberChange}
                  readOnly={isEdit ? false : true}
                />
              </div>
              <div className={styles.edit}>
                {isEdit || payment === null ? (
                  <div className={styles.GcashVerify}>
                    <Button
                      onClick={handleVerify}
                      disabled={
                        lessee && lessee.status === "requested" ? true : false
                      }
                    >
                      {" "}
                      Save
                    </Button>
                  </div>
                ) : (
                  <div className={styles.GcashVerify}>
                    {" "}
                    <Button
                      onClick={handleEdit}
                      disabled={
                        lessee && lessee.status === "requested" ? true : false
                      }
                    >
                      {" "}
                      Edit
                    </Button>
                  </div>
                )}
              </div>
              {isEdit && payment !== null ? (
                <p>Waiting for approval cannot add Gcash Account!</p>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Gcash;
