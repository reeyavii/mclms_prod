import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Auth/Payment.module.css";
// import {getPayments} from "../app/reducer/paymentSlice";
import { getStalls, editStall } from "../app/reducer/stallSlice";
import { getLessees } from "../app/reducer/lesseeSlice";
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

function Payment() {
  const navigate = useNavigate("");
  const dispatch = useDispatch();
  const { stalls, stall } = useSelector((state) => state.stall);
  const { lessees, lessee } = useSelector((state) => state.lessee);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [description, setDescription] = useState("");
  const [section, setSection] = useState("");
  const [stallId, setStallId] = useState(0);
  const [stallNumber, setStallNumber] = useState("");
  const [dimension, setDimension] = useState("");
  const [monthlyPayment, setMonthlyPayment] = useState("");

  const [date, setDate] = useState("");
  const [orNum, setOrNum] = useState("");
  const [amount, setAmount] = useState("");
  const [total, setTotal] = useState("");
  const [penalty, setPenalty] = useState("");
  const dateChange = (e) => {
    setDate(e.target.value);
  };
  const orNumChange = (e) => {
    setOrNum(e.target.value);
  };
  const amountChange = (e) => {
    setAmount(e.target.value);
  };
  const penaltyChange = (e) => {
    setPenalty(e.target.value);
  };
  const totalChange = (e) => {
    setTotal(e.target.value);
  };

  const searchChange = (e) => {
    setSearch(e.target.value);
  };

  const statusChange = (e) => {
    setStatus(e.target.value);
  };
  const stallNumberChange = (e) => {
    setStallNumber(e.target.value);
  };
  const descriptionChange = (e) => {
    setDescription(e.target.value);
  };
  const sectionChange = (e) => {
    setSection(e.target.value);
  };
  useEffect(() => {
    dispatch(getStalls());
  }, []);
  console.log(stalls);

  useEffect(() => {
    dispatch(getLessees());
  }, []);
  console.log(lessee);

  const [open, setOpen] = React.useState(false);

  const handleSelect = (
    section,
    status,
    description,
    id,
    stallNumber,
    dimension,
    monthlyPayment
  ) => {
    setOpen(true);
    setSection(section);
    setStatus(status);
    setDescription(description);
    setStallId(id);
    setStallNumber(stallNumber);
    setDimension(dimension);
    setMonthlyPayment(monthlyPayment);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    const id = stallId;
    const data = {
      status: status,
      description: description,
      stallType: section,
      id: stallId,
      stallNumber: stallNumber,
      dimension: dimension,
      monthlyPayment: monthlyPayment,
    };
    dispatch(editStall({ id, data }));
    console.log(data);

    setTimeout(() => {
      dispatch(getStalls());
      setOpen(false);
    }, 500);
  };
  return (
    <div className={styles.container}>
      <div className={styles.historyPayment}>
        <div className={styles.search}>
          <input
            placeholder="Search any keyword"
            value={search}
            onChange={searchChange}
          />
        </div>
        <div className={styles.name}>
        <p>PAYMENTS</p>
      </div>
        <div className={styles.content}>
          <div className={styles.label}>
            <h5> Stall #</h5>
            <h5> Section </h5>
            <h4> Occupant</h4>
          </div>

          {stalls
            .filter((item) => {
              if (search !== "") {
                if (item.stallNumber === parseInt(search)) {
                  return item;
                } else {
                  return null;
                }
              } else {
                return item;
              }
            })
            .map((stall, lessee, index) => {
              return (
                <div onClick={handleSelect}>
                  <div
                    key={stall.id}
                    onClick={() => handleSelect(stall.status)}
                  >
                    <div className={styles.date}>
                      <h3>{stall.stallNumber}</h3>
                      <h5> {stall.stallType}</h5>
                      <h4>{`${lessee.firstName}, ${lessee.middleInitial}, ${lessee.lastName}`}</h4>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Payment Details</DialogTitle>
        <DialogContent>
          {/* <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText> */}
          <div className="paymentDetails">
            <div className="number">
              <input
               placeholder="Stall Number" value={stallNumber} />
              <input placeholder="O.R No." value={orNum} />
            </div>

            <div>
              <input
                placeholder="Occupant"
                // value={stallNumber}
              />
              <input
                placeholder="Monthly Payment"
                // value={stallNumber}
              />
            </div>
          </div>
          <table>
            <th>Month</th>
            <th>Amount</th>
            <th>Penalty</th>
            <th>Total</th>

            {stalls.map((stall, index) => {
              return (
            <tr >
              <td>January</td>
              <td>{stall.monthlyPayment}</td>
              <td> </td>
              <td>{}</td>
            </tr>
            );}
          )}

          </table>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Payment;
