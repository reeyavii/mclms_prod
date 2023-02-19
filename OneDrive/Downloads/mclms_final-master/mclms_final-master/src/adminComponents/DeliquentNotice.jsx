import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./Auth/DeliquentNotice.module.css";
import { getStalls, editStall } from "../app/reducer/stallSlice";
import { useDispatch, useSelector } from "react-redux";
import { getLesseeId, SentNotice } from "../app/reducer/lesseeSlice";
import {
  getPayment,
  delinquent,
  getDelinquent,
} from "../app/reducer/paymentSlice";

// import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
// import TextField from "@mui/material/TextField";
// import Dialog from "@mui/material/Dialog";
// import DialogActions from "@mui/material/DialogActions";
// import DialogContent from "@mui/material/DialogContent";
// import DialogContentText from "@mui/material/DialogContentText";
// import DialogTitle from "@mui/material/DialogTitle";
// import Button from "@mui/material/Button";
// import { IconButton } from "@mui/material";

function DeliquentNotice() {
  const navigate = useNavigate("");
  const dispatch = useDispatch();
  const { stalls, stall } = useSelector((state) => state.stall);
  const { lessees, lessee } = useSelector((state) => state.lessee);
  const { payment } = useSelector((state) => state.payment);
  const { id } = useParams();
  const [status, setStatus] = useState("");
  const [description, setDescription] = useState("");
  const [firstName, setFirstName] = useState("");
  const [send, setSend] = useState(false);
  const [stallId, setStallId] = useState(0);
  const [stallNumber, setStallNumber] = useState("");
  const [dimension, setDimension] = useState("");
  const [monthlyPayment, setMonthlyPayment] = useState("");
  useEffect(() => {
    dispatch(getStalls());
  }, []);
  console.log(stalls);

  const [open, setOpen] = React.useState(false);
  // const [payments, setPayments] = useState(null);
  const stallNumberChange = (e) => {
    setStallNumber(e.target.value);
  };
  const firstNameChange = (e) => {
    setFirstName(e.target.value);
  };
  const handleSend = () => {
    setSend(true);
    const data = { ...lessee}
    dispatch(delinquent());
    dispatch(getDelinquent(id));
    dispatch(SentNotice({ id, data, status: "yes" }));
  };
  useEffect(() => {
    dispatch(getLesseeId(id));
  }, [id]);
  console.log(id);

  useEffect(() => {
    if (lessee) {
      dispatch(getPayment(lessee.userId));
    }
  }, [lessee]);
  //   const handleSelect = (
  //     section,
  //     status,
  //     description,
  //     id,
  //     stallNumber,
  //     dimension,
  //     monthlyPayment
  //   ) => {
  //     setOpen(true);
  //     setSection(section);
  //     setStatus(status);
  //     setDescription(description);
  //     setStallId(id);
  //     setStallNumber(stallNumber);
  //     setDimension(dimension);
  //     setMonthlyPayment(monthlyPayment);
  //   };
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
    return month[newMonth.getMonth()];
  };

  console.log(payment);
  return (
    <div className={styles.deliquentNotice}>
      <div>
        <div className={styles.noticeContainer}>
          <div className={styles.deliquentContent}>
            <div className={styles.name}>
              <p>NOTICE OF DELIQUENCY</p>
            </div>
            <div className={styles.contents}>
              <div className={styles.blur}></div>
              <div className={styles.innerContainer}>
                <div className={styles.label}>
                  <h4>State of Accounts</h4>
                  <div className={styles.lesseeInfo}>
                    <div className={styles.block}>
                      <p>Block Number: </p>
                      <input
                        placeholder="#"
                        value={lessee && lessee.stall.stallNumber}
                        readOnly
                      />
                    </div>
                    <div className={styles.block}>
                      <p>Lessee</p>
                      <input
                        placeholder="#"
                        value={
                          lessee && `${lessee.firstName} ${lessee.lastName}`
                        }
                        readOnly
                      />
                    </div>
                    <div className={styles.block}>
                      <p>Location:</p>
                      <input
                        placeholder="#"
                        value={
                          lessee &&
                          `${lessee.address} ${lessee.municipality} ${lessee.province}`
                        }
                        readOnly
                      />
                    </div>
                  </div>
                  <div className={styles.letter}>
                    <p>
                      {" "}
                      Per record of this Office, you have incurred an amount on
                      your leased stall as stated hereunder. <br />
                      To avoid penalty, pllease pay your monthly RENT on or
                      before 10th day of each month.
                    </p>
                    <p>
                      {" "}
                      Further, Municipal Ordinance no. 2011-01, Section X
                      Paragraph 3, clearly states that the Lessor reserves the
                      right to summarily eject the Lessee of the stall who
                      incurred three (3) months arrears on Stall RENTS.
                    </p>
                    <p>
                      IMPORTANT: The figures below reflect your ACCOUNTS as if
                      (month, Year). Please pay your monthly RENT within the
                      billing period to avoid penalties.
                    </p>

                    <table>
                      <thead>
                        <th>Block No.</th>
                        <th>Billing Period</th>
                        <th>Rate/Month</th>
                        <th>Unpaid Rent</th>
                        <th>Penalty</th>
                        <th>Amount Due</th>
                      </thead>

                      {/* {payment &&
                        payment.map((item, index) => {
                          return ( */}
                      {payment && (
                        <tbody>
                          <tr>
                            <td>{lessee && lessee.stall.stallNumber}</td>
                            <td>10th of the Month</td>
                            <td>{payment.amount}</td>
                            <td>
                              {payment.balance === null ? 0 : payment.balance}
                            </td>
                            <td>PHP -</td>
                            <td>{payment.amount}</td>
                          </tr>
                        </tbody>
                      )}

                      {/* );
                        })} */}
                    </table>
                  </div>
                </div>
              </div>
              {lessee && lessee.editRequested === "yes" ? (
                <div className={styles.send}>
                  <p style={{ color: "red" }}>Notice Already Sent</p>
                </div>
              ) : (
                <div className={styles.send} onClick={handleSend}>
                  <p>SEND NOTICE</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeliquentNotice;
