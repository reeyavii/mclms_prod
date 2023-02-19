import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Auth/Payment.module.css";
// import { getPayment, getUserReceipts } from "../app/reducer/paymentSlice";
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
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {
  getReceipts,
  getPayments,
  getUserReceipts,
  getReceiptsAdmin,
  updateReceiptStatus,
} from "../app/reducer/paymentSlice";
import Payments from "../components/Payments";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import Tooltip from "@mui/material/Tooltip";
import { API_URL } from "../app/constants";
import placeholder from "../assets/placeholder.png";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function Payment() {
  const navigate = useNavigate("");
  const dispatch = useDispatch();
  const { stalls, stall } = useSelector((state) => state.stall);
  const { lessees, lessee } = useSelector((state) => state.lessee);
  const { payment, payments, receipts, userReceipts, receiptsAdmin } =
    useSelector((state) => state.payment);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [description, setDescription] = useState("");
  const [section, setSection] = useState("");
  const [stallId, setStallId] = useState(0);
  const [stallNumber, setStallNumber] = useState("");
  const [dimension, setDimension] = useState("");
  const [monthlyPayment, setMonthlyPayment] = useState("");

  const [date, setDate] = useState("");
  const [oRNo, setORNo] = useState("");
  const [amount, setAmount] = useState("");
  const [total, setTotal] = useState("");
  const [penalty, setPenalty] = useState("");
  const [openPending, setOpenPending] = React.useState(false);
  const [currentPaymentsData, setCurrentPaymentsData] = useState(null);
  const [paymentData, setPaymentData] = useState(null);
  // const [imageUrl, setImageUrl] = useState("");
  const [image, setImage] = useState("");
  const [stallType, setStallType] = useState("");

  const [currentReceiptData, setCurrentReceiptData] = useState({
    id: null,
    paymentId: "",
    refNo: "",
    oRNo: "",
    receiptDate: "",
    amount: "",
    status: "",
    receiptImage: "",
    name: "",
    balance: "",
  });

  const dateChange = (e) => {
    setDate(e.target.value);
  };
  const oRNoChange = (e) => {
    setCurrentReceiptData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
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
    // dispatch(getReceipts());
    dispatch(getPayments());
    dispatch(getReceiptsAdmin());
  }, []);
  console.log(receipts);
  console.log(userReceipts);
  console.log(payments);
  console.log(receiptsAdmin);

  console.log(lessees);

  useEffect(() => {
    dispatch(getLessees());
    // dispatch(getUserReceipts(userId));
  }, [payment]);

  const [open, setOpen] = React.useState(false);
  // const mergeData = useMemo(() => {
  //   const data = {
  //     lessee
  //   }
  //   );

  //   return result;
  // }, [lessees, stalls]);
  // console.log(mergeData);

  const handleSelect = (data) => {
    setOpen(true);
    console.log(data);
    setCurrentPaymentsData((prev) => data);
    const newDataPayment = payments.filter(
      (item) => item.userId === data.userId
    );
    console.log(newDataPayment);
    setPaymentData((prev) => newDataPayment[0]);
  };

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

  console.log(payments);
  console.log(receipts);
  console.log(paymentData);
  // console.log(mergeData);

  const handleClose = () => {
    setOpen(false);
  };
  const handleSelectPending = (receipt) => {
    setOpenPending(true);
  };
  const handleSave = () => {
    if (currentReceiptData.oRNo !== "") {
      const data = {
        ...currentReceiptData,
      };
      dispatch(updateReceiptStatus(data));
      setOpenReceipt(false);
    }
  };

  console.log(paymentData);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [openReceipt, setOpenReceipt] = React.useState(false);
  // const handleOpenReciept = () => {
  //   setOpenReciept(true);
  // };
  const handleCloseReceipt = () => {
    setOpenReceipt(false);
  };

  const handleOpenReceipt = (data) => {
    setOpenReceipt(true);
    console.log(data);
    setCurrentReceiptData({
      id: data.id,
      paymentId: data.paymentId,
      refNo: data.refNo,
      oRNo: "",
      receiptDate: data.receiptDate,
      amount: data.amount,
      status: data.status,
      receiptImage: data.receipt,
      name: data.name,
      balance: data.balance,
    });
  };
  const handleImage = (e) => {
    setImage(e.target.files[0]);
    console.log(e.target.files[0]);
  };

  console.log(currentReceiptData);
  return (
    <div className={styles.container}>
      <div className={styles.historyPayment}>
        <div className={styles.tables}></div>
        <div className={styles.search}>
          <input
            placeholder="Search any keyword"
            value={search}
            onChange={searchChange}
          />
        </div>

        <Box
          sx={{
            width: "78%",
            marginLeft: 30,
            backgroundColor: "rgba(245, 245, 245, 0.598)",
            backdropFilter: " blur(5px)",
            borderRadius: 4,
          }}
        >
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="Pending Payments" {...a11yProps(0)} />
              <Tab label="Lessee's Payment" {...a11yProps(1)} />
              <Tab label="Archive Payment" {...a11yProps(2)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            {/* <div className={styles.name}>
            <p>Pending</p>
          </div> */}

            <div className={styles.contents}>
              <div className={styles.blur}></div>
              <table>
                <th> Payment Id </th>
                <th> Lessee </th>
                <th> Ref. No.</th>
                <th> OR No.</th>
                <th> Amount </th>
                <th> Receipt Date</th>
                <th> Status </th>
                <th> Receipt Image </th>
                <th></th>

                {receipts
                  .filter((item) => item.status.toLowerCase() === "pending")
                  .map((receipt) => {
                    return (
                      <tr key={receipt.id}>
                        <td>{receipt.paymentId}</td>
                        {/* get from userID     */}
                        <td>{`${receipt.firstName} ${receipt.lastName}`}</td>
                        <td>{receipt.refNo}</td>
                        <td>{receipt.orNum}</td>
                        <td>{receipt.amount}</td>
                        <td>{receipt.receiptDate}</td>
                        <td>{receipt.status}</td>
                        <td>{receipt.name}</td>
                        <td>
                          <Tooltip title="View">
                            <IconButton
                              onClick={() => handleOpenReceipt(receipt)}
                            >
                              <VisibilityOutlinedIcon
                                sx={{
                                  width: 18,
                                  height: 20,
                                  color: "black",
                                  marginTop: 0.5,
                                }}
                              />
                            </IconButton>
                          </Tooltip>
                        </td>
                      </tr>
                    );
                  })}
              </table>
            </div>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <div className={styles.name}>
              <p>PAYMENTS</p>
            </div>
            <div className={styles.contents}>
              <div className={styles.blur}></div>
              <table>
                <th> Stall #</th>
                <th>Floor</th>
                <th> Section </th>
                <th> Occupant</th>

                {lessees
                  .filter((item) => {
                    if (
                      search !== "" &&
                      item.status.toLowerCase() === "approved"
                    ) {
                      if (
                        item.stallType.toLowerCase() === search.toLowerCase() ||
                        item.stallNumber === parseInt(search)
                      ) {
                        return item;
                      } else {
                        return null;
                      }
                    } else if (item.status.toLowerCase() === "approved") {
                      return item;
                    } else {
                      return null;
                    }
                  })
                  .map((lessee, index) => {
                    return (
                      <tr onClick={() => handleSelect(lessee)} key={lessee.id}>
                        <td>{lessee.stall.stallNumber}</td>
                        <td>{lessee.stall.floor}</td>
                        <td> {lessee.stall.stallType}</td>

                        <td>
                          {lessee.firstName !== undefined
                            ? `${lessee.firstName} ${lessee.middleInitial} ${lessee.lastName}`
                            : ""}
                        </td>
                      </tr>
                    );
                  })}
              </table>
            </div>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <div className={styles.name}>
              <p>ARCHIVE PAYMENTS</p>
            </div>
            <div className={styles.contents}>
              <div className={styles.blur}></div>
              <table>
                <th> Stall #</th>
                <th>Floor</th>
                <th> Section </th>
                <th> Occupant</th>

                {lessees
                  .filter((item) => {
                    if (
                      search !== "" &&
                      item.status.toLowerCase() === "archived"
                    ) {
                      if (
                        item.stallType.toLowerCase() === search.toLowerCase() ||
                        item.stallNumber === parseInt(search)
                      ) {
                        return item;
                      } else {
                        return null;
                      }
                    } else if (item.status.toLowerCase() === "archived") {
                      return item;
                    } else {
                      return null;
                    }
                  })
                  .map((lessee, index) => {
                    return (
                      <tr onClick={() => handleSelect(lessee)} key={lessee.id}>
                        <td>{lessee.stall.stallNumber}</td>
                        <td>{lessee.stall.floor}</td>
                        <td> {lessee.stall.stallType}</td>

                        <td>
                          {lessee.firstName !== undefined
                            ? `${lessee.firstName} ${lessee.middleInitial} ${lessee.lastName}`
                            : ""}
                        </td>
                      </tr>
                    );
                  })}
              </table>
            </div>
          </TabPanel>
        </Box>
      </div>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle sx={{ color: "white", background: "#284f8f", height: 20 }}>
          Payment Details
        </DialogTitle>
        <DialogContent>
          {currentPaymentsData && (
            <div className={styles.paymentDetails}>
              <div className={styles.number}>
                <input
                  value={`Occupant : ${currentPaymentsData.firstName} ${currentPaymentsData.lastName}`}
                  readOnly
                />

                <input
                  value={`Stall No. : ${currentPaymentsData.stall.stallNumber}`}
                  readOnly
                />
              </div>

              <div className={styles.number}>
                <input
                  value={`Section : ${currentPaymentsData.stall.stallType}`}
                />
                <input
                  value={`Area Leased : ${currentPaymentsData.stall.dimension}`}
                />
              </div>
              <div className={styles.number}>
                <input
                  placeholder=":"
                  value={`Date of Occupancy :  ${currentPaymentsData.stall.stallNumber}`}
                />
                <input
                  placeholder=" :"
                  value={`Rate per Sq. M. : ${currentPaymentsData.stall.monthlyPayment}`}
                />
              </div>
            </div>
          )}

          <table>
            <th>Month</th>
            <th>Date</th>
            <th>O.R No.</th>
            <th>Amount</th>
            <th>Balance</th>
            <th>Penalty</th>
            <th>Total</th>

            {paymentData &&
              paymentData.receipts.map((userReceipt, index) => {
                return (
                  <tr>
                    <td>{month(userReceipt.receiptDate)}</td>
                    <td>{userReceipt.receiptDate}</td>
                    <td>{userReceipt.orNo}</td>
                    <td>{userReceipt.amount} </td>
                    <td>{paymentData.balance} </td>
                    <td> </td>
                    <td>{paymentData.totalPayment}</td>
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

      {/* /////// */}

      <Dialog open={openReceipt} onClose={handleCloseReceipt}>
        <DialogTitle sx={{ color: "white", background: "#284f8f", height: 20 }}>
          Payment Details
        </DialogTitle>
        <DialogContent>
          {currentReceiptData && (
            <div className={styles.paymentDetails}>
              <div className={styles.number}>
                <input
                  readOnly
                  value={`Payment Id: ${currentReceiptData.paymentId}`}
                />
              </div>
              <div className={styles.number}>
                <input
                  value={`Reference No.: ${currentReceiptData.refNo}`}
                  readOnly
                />
              </div>
              <div className={styles.number}>
                <p
                  style={{
                    marginTop: -3,
                    marginLeft: 0.5,
                    color: " black",
                    fontSize: 14,
                    fontWeight: 400,
                  }}
                >
                  OR No.
                </p>
                <input
                  className={styles.Or}
                  onChange={oRNoChange}
                  name="oRNo"
                  value={currentReceiptData.oRNo}
                  placeholder="Input OR No."
                />
              </div>

              <div className={styles.number}>
                <input value={`Amount: ${currentReceiptData.amount}`} />
              </div>
              <div className={styles.number}>
                <input
                  value={`ReceiptDate: ${currentReceiptData.receiptDate}`}
                />
              </div>
              <div className={styles.number}>
                <input value={`Status: ${currentReceiptData.status}`} />
              </div>

              <div className={styles.number}>
                <img
                  src={
                    currentReceiptData
                      ? `${API_URL}api/receipts/image/${currentReceiptData.name}`
                      : placeholder
                  }
                  alt="stallPicture"
                />
              </div>
            </div>
          )}

          {/* <table>
            <th>Month</th>
            <th>Date</th>
            <th>O.R No.</th>
            <th>Amount</th>
            <th>Balance</th>
            <th>Penalty</th>
            <th>Total</th>

            {paymentData &&
              paymentData.receipts.map((userReceipt, index) => {
                return (
                  <tr>
                    <td>{month(userReceipt.receiptDate)}</td>
                    <td>{userReceipt.receiptDate}</td>
                    <td>
                      <input></input>{" "}
                    </td>
                    <td>{userReceipt.amount} </td>
                    <td> </td>
                    <td> </td>
                    <td>{userReceipt.monthlyPayment + penalty}</td>
                  </tr>
                );
              })}
          </table> */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseReceipt}>Cancel</Button>
          <Button onClick={handleSave}>Confirm</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Payment;
