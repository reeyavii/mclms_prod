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
import { useMemo } from "react";

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

  console.log(lessees);

  useEffect(() => {
    dispatch(getLessees());
  }, []);

  const [open, setOpen] = React.useState(false);
  const mergeData = useMemo(() => {
    // let newLessees = [...lessees];
    // console.log(newLessees);
    // newLessees.forEach((element) => {
    //   // delete element.stall;
    //   console.log(element);
    // });
    let newLessees = lessees.map(({ stall, ...rest }) => ({ ...rest }));
    console.log(newLessees);
    // let newStalls = [...stalls];
    // newStalls.forEach((element) => {
    //   newLessees.forEach((lessee) => {
    //     if (element.id === lessee.stallNumber) {
    //       element.lessee = lessee;
    //     }
    //   });
    // });
    // let result = stalls.map((stall) => {
    //   newLessees.forEach((lessee) => {
    //     if (stall.id === lessee.stallId) {
    //       stall.lessee = lessee;
    //     } else {
    //       return null;
    //     }
    //   });
    // });

    let result = stalls.map((item, i) =>
      Object.assign({}, item, newLessees[i])
    );

    return result;
  }, [lessees, stalls]);
  console.log(mergeData);

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

          {mergeData
            .filter((item) => {
              if (search !== "") {
                if (
                  item.stallType.toLowerCase() === search.toLowerCase() ||
                  item.stallNumber === parseInt(search)
                ) {
                  return item;
                } else {
                  return null;
                }
              } else {
                return item;
              }
            })
            .map((stall, index) => {
              return (
                <div onClick={handleSelect}>
                  <div
                    key={stall.id}
                    onClick={() => handleSelect(stall.status)}
                  >
                    <div className={styles.date}>
                      <h3>{stall.stallNumber}</h3>
                      <h5> {stall.stallType}</h5>

                      <h4>
                        {stall.firstName !== undefined
                          ? `${stall.firstName}, ${stall.middleInitial}, ${stall.lastName}`
                          : ""}
                      </h4>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle sx={{ color: "#284f8f" }}>Payment Details</DialogTitle>
        <DialogContent>
          {/* <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText> */}
          <div className={styles.paymentDetails}>
            <div className={styles.number}>
              <input
                placeholder="Occupant :"
                // value={stallNumber}
                readOnly
              />
              <input placeholder="Stall No. :" value={stallNumber} readOnly />
            </div>

            <div className={styles.number}>
              <input
                placeholder="Section :"
                // value={stallNumber}
              />
              <input
                placeholder="Area Leased :"
                // value={stallNumber}
              />
            </div>
            <div className={styles.number}>
              <input
                placeholder="Date of Occupancy :"
                // value={stallNumber}
              />
              <input
                placeholder="Rate per Sq. M. :"
                // value={stallNumber}
              />
            </div>
          </div>
          <table>
            <th>Month</th>
            <th>Date</th>
            <th>O.R No.</th>
            <th>Amount</th>
            <th>Penalty</th>
            <th>Total</th>

            {stalls.map((stall, index) => {
              return (
                <tr>
                  <td>January</td>
                  <td></td>
                  <td> </td>
                  <td>{stall.monthlyPayment} </td>
                  <td> </td>
                  <td>{stall.monthlyPayment + penalty}</td>
                </tr>
              );
            })}
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
