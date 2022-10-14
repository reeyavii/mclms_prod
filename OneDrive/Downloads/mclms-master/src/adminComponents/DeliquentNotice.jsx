import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Auth/DeliquentNotice.module.css";
import { getStalls, editStall } from "../app/reducer/stallSlice";
import { useDispatch, useSelector } from "react-redux";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import { IconButton } from "@mui/material";

function DeliquentNotice() {
  const navigate = useNavigate("");
  const dispatch = useDispatch();
  const { stalls, stall } = useSelector((state) => state.stall);

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

  const stallNumberChange = (e) => {
    setStallNumber(e.target.value);
  };
  const firstNameChange = (e) => {
    setFirstName(e.target.value);
  }
  const handleSend = () => {
    setSend(true);
  }

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

  return (
    <div className={styles.deliquentNotice}>
      <div>
        <div className={styles.name}>
          <p>NOTICE OF DELIQUENCY</p>
        </div>
        <div className={styles.content}>
          <div className={styles.label}>
            <h4>State of Accounts</h4>
            <div className={styles.lesseeInfo}>
              <div className={styles.block}>
                <p>Block Number:</p>
                <input 
                placeholder="#"
                value={stallNumber}
                 readOnly 
                 />
              </div>
              <div className={styles.block}>
                <p>Lessee</p>
                <input 
                placeholder="#"
                value={firstName}
                readOnly
                />
              </div>
              <div className={styles.block}>
                <p>Location:</p>
                <input 
                placeholder="#"
                value={description}
                readOnly
                />
              </div>
            </div>
            <div className={styles.letter}>
                <p>    Per record of this Office, you have incurred an amount on your leased stall as stated hereunder. <br/>To avoid penalty, pllease pay your monthly RENT on or before 10th day of each month.</p>
                <p> Further, Municipal Ordinance no. 2011-01, Section X Paragraph 3, clearly states that the Lessor 
reserves the right to summarily eject the Lessee of the stall who incurred three (3) months arrears
on Stall RENTS.</p>
<p>IMPORTANT: The figures below reflect your ACCOUNTS as if (Month, Year). Please pay your monthly RENT within the billing period to avoid penalties.</p>
<table>
  
        <th>Block No.</th>
        <th>Billing Period</th>
        <th>Rate/Month</th>
        <th>Unpaid Rent</th>
        <th>Penalty</th>
        <th>Amount Due</th>
{/*    
    {stalls.map((stall, index) => {
              return ( */}
    <tr>
        <td>8</td>
        <td>(Month,Year)</td>
        <td>PHP -</td>
        <td>PHP -</td>
        <td>PHP -</td>
        <td>PHP -</td>
    </tr>
    <tr>
        <td>Total</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>PHP -</td>
    </tr>
      {/* );
    })}  */}
</table>
            </div>
          </div>
          <div className={styles.send} onClick={handleSend}>
<p>SEND NOTICE</p>
        </div>
        </div>
      </div>
    </div>
  );
}

export default DeliquentNotice;
