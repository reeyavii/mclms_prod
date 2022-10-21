import React, {useEffect} from "react";
import "./auth/Payments.styles.css";
import { useNavigate } from "react-router-dom";
import logo2 from "../assets/logo-alimodian.png";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Button from "@mui/material/Button";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import logoGcash from "../assets/gcash.png";
import ReceiptRoundedIcon from "@mui/icons-material/ReceiptRounded";
import { yellow } from "@mui/material/colors";
//import Stack from '@mui/material/Stack';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { getPayment } from "../app/reducer/paymentSlice";
import { useSelector, useDispatch } from "react-redux";

const Reminder = ({reminder, amount, date}) => {
  return(
  <div className="Reminder">
  <NotificationsActiveIcon
    sx={{
      fontSize: 55,
      marginTop: 2,
      marginLeft: -23,
      marginRight: 2,
      color: yellow[500],
    }}
  />
  
   { reminder ? 
   <>
    <h3>Upcoming Payments</h3>
  <p>
    Reminder: Payment of  <br />
    {amount}for stall rent is coming <br />
    up on {date}. Make <br />
    sure to pay before on time to <br />
    avoid conflicts.
  </p>
  </> : <>
  <h3>Add Gcash account</h3>
  <p>
  Before submitting a payment, add your Gcash account.
  </p>
  </>
  }
  
  
 
</div> 
)
}

function Payments() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { payment } = useSelector(state => state.payment);
  const { userId} = useSelector(state => state.auth);

  useEffect(() => {
    dispatch(getPayment(userId));
  }, [])
  console.log(payment)

  const handleGoBack = (e) => {
    //go to verification
    navigate("/home");
    console.log("create clicked");
  };
  const handlePayBills = (e) => {
    //go to verification
    navigate("/qr-code-payment");
    console.log("Edit clicked");
  };
  const handleReceipts = (e) => {
    //go to verification
    navigate("/payment-history");
    console.log("Edit clicked");
  };
  const handleAddGCash = (e) => {
    //go to verification
    navigate("/gcash");
    console.log("Edit clicked");
  };
  const handleHome = () => {
    navigate("/home");
    console.log("");
  }  
  const handleProfile = (e) => {
    navigate("/profile-setting");
    console.log("Profile clicked");
  };

  return (
    <div className="ContainerA">
      <div className="InnerContainer1">
        <div className="bar">
          <div className="Logo2">
            <div className="Logo2Alim">
              <img src={logo2} alt="logo1" />
            </div>
          </div>

          <div className="Economic">
            <div className="Nomic">ECONOMIC</div>
            <div className="Department">DEPARTMENT</div>
          </div>
          <div className="Logo1">
          <button onClick={handleHome}>
            <HomeIcon
            sx={{fontSize:30,marginTop:2, color:"white"}}/>
          </button>
          <button onClick={handleProfile}>
              {" "}
              <AccountCircleIcon
                sx={{
                  fontSize: 35,
                  marginTop: 2,
                  marginRight: 2,
                  color: "white",
                }}
              />{" "}
            </button>
          </div>
        </div>

        <div className="BackA">
          <button onClick={handleGoBack}>
            {" "}
            <ArrowBackIosNewIcon sx={{ fontSize: 18, marginTop: 1 }} />{" "}
          </button>{" "}
          <p>BACK</p>
        </div>


        <Reminder reminder={true} amount={"PHP 3,000"} date={"October 10, 2022"}/>

        <div className="Payment">
          <div className="Pay">
            <Button onClick={handlePayBills}>
              <img src={logoGcash} alt="logoGcash" /> Pay Bills
            </Button>
          </div>

          <div className="Pay">
            <Button onClick={handleReceipts}>
              <ReceiptRoundedIcon
                sx={{
                  fontSize: 50,
                  marginLeft: 1,
                  marginRight: 5,
                  color: [500],
                }}
              />
              Receipts
            </Button>
          </div>

          <div className="Pay">
            <Button onClick={handleAddGCash}>
              {" "}
              <AddCircleIcon
                sx={{ fontSize: 50, marginLeft: 1, marginRight: 3 }}
              />{" "}
              Add G-cash Account
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Payments;
