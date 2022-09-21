import React, { useState } from "react";
import "./auth/Stalls.styles.css";
import { useNavigate } from "react-router-dom";
import logo2 from "../assets/logo-alimodian.png";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import { green } from "@mui/material/colors";
import styles from "./auth/StallDetails.module.css";
import stallPicture from "../assets/stallPicture.jpg";
import SuccessPopUp from "./SuccessPopUp";

function StallDetails() {
  const navigate = useNavigate();
  const [showPopUp, setShowPopUp] = useState(false);
  const [area, setArea] = useState("");
  const [monthlyRate, setMonthlyRate] = useState("");
  const [rate, setRate] = useState("");

  const monthlyRateChange = (e) => {
    setMonthlyRate(e.target.value);
  };

  const areaChange = (e) => {
    setArea(e.target.value);
  };

  const rateChange = (e) => {
    setRate(e.target.value);
  };

  const handleGoBack = (e) => {
    //go to verification
    navigate("/market-rules");
    console.log("create clicked");
  };
  const handleAcquire = () => {
    setShowPopUp(true);
    console.log();
  };
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

        <div className={styles.StallDetails}>
          <div className={styles.Stall}>
            <p>Stall #1</p>
            <h4>
              <RadioButtonUncheckedIcon
                sx={{
                  fontSize: 15,
                  marginTop: 1,
                  marginRight: 2,
                  color: green[500],
                }}
              />
              Available
            </h4>
          </div>
          <div div className={styles.Details}>
            <div className={styles.Groceries}>
              <p>Groceries Section</p>
            </div>
            <div className={styles.SD}>
              <p>Stall Details</p>
            </div>
            <div className={styles.Area}>
              <h5>Area Leasses:</h5>
              <input
                disabled={true}
                placeholder=""
                type="areaLeasses"
                value={area}
                onChange={areaChange}
              />
              <h5>Monthly Rate:</h5>
              <input
                disabled={true}
                placeholder=""
                type="monthlyRate"
                value={monthlyRate}
                onChange={monthlyRateChange}
              />
            </div>
            <div className={styles.Area}>
              <h5>Rate per sq.m</h5>
              <input
                disabled={true}
                placeholder=""
                type="rate"
                value={rate}
                onChange={rateChange}
              />
            </div>

            <div className={styles.click}>
              <div className="BackA">
                <button onClick={handleGoBack}>
                  {" "}
                  <ArrowBackIosNewIcon
                    sx={{ fontSize: 18, marginTop: 5 }}
                  />{" "}
                </button>{" "}
                <p>BACK</p>
              </div>

              <div className="Acquire">
                <button onClick={handleAcquire}>Acquire Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showPopUp && (
        <SuccessPopUp labeledName={" Done! "} navigateToHome={true} />
      )}
    </div>
  );
}
export default StallDetails;
