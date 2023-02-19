import React, { useEffect, useState } from "react";
// import "./auth/Stalls.styles.css";
import { useNavigate, useParams } from "react-router-dom";
import logo2 from "../assets/logo-alimodian.png";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import { green, red } from "@mui/material/colors";
import styles from "./auth/StallDetails.module.css";
import placeholder from "../assets/placeholder.png";
import SuccessPopUp from "./SuccessPopUp";
import { useDispatch, useSelector } from "react-redux";
import { getStall } from "../app/reducer/stallSlice";
import HomeIcon from "@mui/icons-material/Home";
import Header from "./Header";
import { API_URL } from "../app/constants";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function StallDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const { stall } = useSelector((state) => state.stall);
  const [showPopUp, setShowPopUp] = useState(false);
  const [area, setArea] = useState("");
  const [monthlyRate, setMonthlyRate] = useState("");
  const [rate, setRate] = useState("");
  const [stallNum, setStallNum] = useState("");
  const [stallType, setStallType] = useState("");
  const [dimension, setDimension] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [image, setImage] = useState("");

  const monthlyRateChange = (e) => {
    setMonthlyRate(e.target.value);
  };

  const areaChange = (e) => {
    setArea(e.target.value);
  };

  const rateChange = (e) => {
    setRate(e.target.value);
  };
  const stallNumChange = (e) => {
    setStallNum(e.target.value);
  };
  const stalTypeChange = (e) => {
    setStallType(e.target.value);
  };
  const dimensionChange = (e) => {
    setDimension(e.target.value);
  };
  const descriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleGoBack = (e) => {
    //go to verification
    navigate("/area-blueprint");
    console.log("create clicked");
  };
  const handleAcquire = () => {
    navigate(`/market-rules/${id}`);
    console.log();
  };
  const handleProfile = (e) => {
    navigate("/profile-setting");
    console.log("Profile clicked");
  };
  const handleHome = () => {
    navigate("/home");
    console.log("");
  };
  useEffect(() => {
    dispatch(getStall(id));
  }, []);

  useEffect(() => {
    if (stall !== null && stall !== undefined) {
      setArea(stall.dimension);
      setStallNum(stall.stallNumber);
      setStallType(stall.stallType);
      setDescription(stall.setDescription);
      setMonthlyRate(stall.monthlyPayment);
      setRate("P5.00/sq.m x 30days");
      setStatus(stall.status);
      setImage(stall.imageUrl);
    }
  });

  return (
    <div className={styles.ContainerA}>
      <div className={styles.header}>
        <Header />
      </div>

      <div className={styles.InnerContainer1}>
        <div className={styles.picture}>
          <img
            src={image ? `${API_URL}api/receipts/image/${image}` : placeholder}
            alt="stallPicture"
          />
        </div>

        {/* <div className={styles.StallDetails}> */}
        <div className={styles.Stall}>
          <p>Stall #{stallNum}</p>

          <h4>
            {status === "available" ? (
              <RadioButtonCheckedIcon
                sx={{
                  fontSize: 20,
                  marginTop: 1,
                  marginRight: 2,
                  color: green[500],
                }}
              />
            ) : (
              <RadioButtonCheckedIcon
                sx={{
                  fontSize: 18,
                  marginTop: 1,
                  marginRight: 2,
                  color: red[500],
                }}
              />
            )}
            {status.toUpperCase()}
          </h4>
        </div>

        <div className={styles.Groceries}>
          <p>{stallType} Section</p>
        </div>

        <div className={styles.SD}>
          <p>Stall Details</p>
        </div>
        <div div className={styles.Details}>
          <div className={styles.Area}>
            <h5>Area Leasses :</h5>

            <input
              disabled={true}
              placeholder=""
              type="areaLeasses"
              value={area}
              onChange={areaChange}
            />
            <h5>Monthly Rate :</h5>
            <input
              disabled={true}
              placeholder=""
              type="monthlyRate"
              value={monthlyRate}
              onChange={monthlyRateChange}
            />
          </div>
          <div className={styles.Area1}>
            <h5>Rate per sq.m. :</h5>
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
                  sx={{ fontSize: 15, marginTop: 2.5, color: "white" }}
                />{" "}
              </button>{" "}
            </div>

            <div className={styles.Acquire}>
              {status.toLowerCase() === "acquired" ? (
                <button disabled={true} onClick={handleAcquire}>
                  Not Available
                </button>
              ) : (
                <button onClick={handleAcquire}>Acquire Now</button>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
      {showPopUp && (
        <SuccessPopUp labeledName={" Done! "} navigateToHome={true} />
      )}
    </div>
  );
}
export default StallDetails;
