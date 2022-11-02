import React, { useEffect } from "react";
import { API_URL } from "../app/constants";
import "./auth/Auth.styles.css";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import logo2 from "../assets/logo-alimodian.png";
import logoA from "../assets/Stalls.png";
import logoB from "../assets/Form.png";
import logoC from "../assets/Payment.png";
import logoD from "../assets/About Us.png";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MarketFront from "../assets/MarketFront.jpg";
import styles from "./auth/Home.module.css";
import HomeIcon from '@mui/icons-material/Home';
import { getLessees } from "../app/reducer/lesseeSlice";
import { getProfile } from "../app/reducer/authSlice";
import Header from "./Header";

function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {lessees} = useSelector(state => (state.lessee));
  const { imageUrl, userId, firstName } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getLessees());
  },[])  

  useEffect(() => {
dispatch(getProfile(userId));
  }, []);


  const handleProfile = (e) => {
    navigate("/profile-setting");
    console.log("profile clicked");
  };

  const handleStalls = (e) => {
    navigate("/area-blueprint/left");
    console.log("stalls clicked");
  };

  
  const handleApplicationForm = (e) => {
const result = lessees.filter(lessee => (lessee.userId === userId));
if (result.length > 0) {
  navigate("/application-status");
}
else {navigate("/application-form");};
    console.log("AF click");
  };

  const handlePayments = (e) => {
    navigate("/payments");
    console.log("payments clicked");
  };
  const handleAboutUs = (e) => {
    navigate("/about-us");
    console.log("about clicked");
  };
  const handleHome = (e) => {
    navigate("/home");
    console.log("");
  }

  return (
    <div className="InnerContainer1">
      {/* <div className="bar">
        <div className="Logo2">
          <div className="Logo2Alim">
            <img src={logo2} alt="logo1" />
          </div>
        </div>

        <div className="Economic">
          <div className="Nomic">ECONOMIC</div>
          <div className="Department">DEPARTMENT</div>
        </div>

        <div className={styles.Logo1}>
          <button onClick={handleHome}>
            <HomeIcon
            sx={{fontSize:30,marginTop:2, color:"white"}}/>
          </button>
          <div className={styles.profile}>
          <button onClick={handleProfile}>
            { imageUrl && <img src={`${API_URL}api/profile/image/${imageUrl}`} />}
          </button></div>
        </div></div> */}
      
<Header/>
      <div className={styles.picture}>
        <img src={MarketFront} alt="MarketFront " />
      </div>

      <div className={styles.InputItem}>
        <div className={styles.InputContainer}></div>
        <div className={styles.box1}>
          <div onClick={handleStalls} className={styles.Stalls}>
            <img src={logoA} alt="logoA" />
            <p>Stalls</p>
            <div className={styles.smalltext}>See available stalls here</div>
          </div>

          <div onClick={handleApplicationForm} className={styles.Stalls}>
            <img src={logoB} alt="logoB" />
            <p>Application Form</p>
            <div className={styles.smalltext}>Check Pending Applications</div>
          </div>
        </div>
        <div className={styles.box2}>
          <div onClick={handlePayments} className={styles.Stalls}>
            <img src={logoC} alt="logoC" />
            <p>Payments</p>
            <div className={styles.smalltext}>MOP and receipts</div>
          </div>

          <div onClick={handleAboutUs} className={styles.Stalls}>
            <img src={logoD} alt="logoD" />
            <p>About Us</p>
            <div className={styles.smalltext}>Contact Information</div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
