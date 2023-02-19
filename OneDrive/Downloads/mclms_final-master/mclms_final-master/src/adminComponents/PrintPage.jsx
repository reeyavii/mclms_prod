import React, { useRef, useState, useEffect } from "react";
import ReactToPrint from "react-to-print";
import CustomTable from "../adminComponents/CustomTable";
import styles from "./Auth/PrintPage.module.css";
import PrintIcon from "@mui/icons-material/Print";
import { IconButton } from "@mui/material";
import ListIcon from "@mui/icons-material/List";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import logo from "../assets/Alim_Logo.png";
import { useSelector, useDispatch } from "react-redux";
import { getLessees } from "../app/reducer/lesseeSlice";
import { getPayments } from "../app/reducer/paymentSlice";
import { getStalls } from "../app/reducer/stallSlice";

const stallColumns = ["Stall #", "Section", "Monthly Payment", "Status"];
const lesseeColumns = [
  "First Name",
  "Last Name",
  "Stall Number",
  "Monthly Payment",
];
const paymentColumns = [
  "Name",
  "Number",
  "Amount",
  "Balance",
  "Total Payment",
  "Status",
];

function PrintPage() {
  const pageRef = useRef();
  const dispatch = useDispatch();
  const { lessees } = useSelector((state) => state.lessee);
  const { stalls } = useSelector((state) => state.stall);
  const { payments } = useSelector((state) => state.payment);

  const [currentData, setCurrentData] = useState(null);
  const [columns, setColumns] = useState(null);
  useEffect(() => {
    dispatch(getLessees());
    dispatch(getPayments());
    dispatch(getStalls());
  }, []);

  // const [show, setShow] = React.useState(false);

  // const handleShowListMenu = () => {
  //   setShow(true)
  // }

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [title, setTitle] = React.useState("");
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSelectLessee = () => {
    setTitle("Lessees Data");
    setColumns(lesseeColumns);
    console.log(lessees);
    var data = lessees.map((item) => {
      const newData = {
        firstName: item.firstName,
        lastName: item.lastName,
        stallNumber: item.stall.stallNumber,
        monthlyPayment: item.stall.monthlyPayment,
      };
      return newData;
    });
    setCurrentData((prev) => data);
    setAnchorEl(null);
  };
  const handleSelectStall = () => {
    setTitle("Stall Data");
    setColumns(stallColumns);
    console.log(stalls);
    var data = stalls.map((item) => {
      const newData = {
        stallNumber: item.stallNumber,
        section: item.stallType,
        monthlyPayment: item.monthlyPayment,
        status: item.status,
      };
      return newData;
    });
    setCurrentData((prev) => data);
    setAnchorEl(null);
  };

  const handleSelectPayment = () => {
    setTitle("Payments Data");
    setColumns(paymentColumns);
    console.log(payments);
    var data = payments.map((item) => {
      const newData = {
        name: item.gcashName,
        number: item.gcashNumber,
        amount: item.amount,
        balance: item.balance,
        totalPayment: item.totalPayment,
        status: item.status,
      };
      return newData;
    });
    setCurrentData((prev) => data);
    setAnchorEl(null);
  };

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
      <div className={styles.printPage}>
        <ListIcon
          id="demo-positioned-button"
          aria-controls={open ? "demo-positioned-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          sx={{ fontSize: 35, marginTop: 12, marginLeft: 5, color: "white" }}
        />
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "buttom",
            horizontal: "left",
          }}
        >
          <MenuItem onClick={handleSelectLessee}>Lessees List</MenuItem>
          <MenuItem onClick={handleSelectStall}>Stall Data</MenuItem>
          <MenuItem onClick={handleSelectPayment}>Payments</MenuItem>
        
        </Menu>
      </div>
      {currentData && (
        <div className={styles.Bg}>
          <div ref={pageRef} className={styles.page}>
            <div className={styles.header}>
              <img src={logo} alt="logo" />
            </div>
            <div className={styles.header}>
              <p>
                MUNICIPALITY OF ALIMODIAN <br />
                ECONOMIC DEPARTMENT
              </p>
            </div>
            {title}
            <CustomTable data={currentData} columns={columns} />
          </div>
          <ReactToPrint
            trigger={() => {
              return <button className={styles.printButton}>Print</button>;
            }}
            content={() => pageRef.current}
          />
        </div>
      )}
    </div>
    </div>
  );
}

export default PrintPage;
