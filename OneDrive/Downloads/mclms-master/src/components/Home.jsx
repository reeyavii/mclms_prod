import React from "react";
import "./auth/Auth.styles.css";
import { useNavigate } from "react-router-dom";
import logo2 from "../assets/logo-alimodian.png";
import logoA from "../assets/Stalls.png";
import logoB from "../assets/Form.png";
import logoC from "../assets/Payment.png";
import logoD from "../assets/About Us.png";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import stallPicture from "../assets/stallPicture.jpg";
import styles from "./auth/Home.module.css";

function Home() {
  const navigate = useNavigate();

  const handleProfile = (e) => {
    navigate("/profile-setting");
    console.log("profile clicked");
  };

  const handleStalls = (e) => {
    navigate("/area-blueprint/:side");
    console.log("stalls clicked");
  };

  const handleApplicationForm = (e) => {
    navigate("/market-rules");
    console.log("AF clicked");
  };

  const handlePayments = (e) => {
    navigate("/payments");
    console.log("payments clicked");
  };
  const handleAboutUs = (e) => {
    navigate("/about-us");
    console.log("about clicked");
  };

  return (
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

      <div className={styles.picture}>
        <img src={stallPicture} alt="stallPicture " />
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
