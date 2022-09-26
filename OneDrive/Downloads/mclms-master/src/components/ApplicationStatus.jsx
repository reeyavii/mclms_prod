import React, { useState } from "react";
import "./auth/Application.styles.css";
import { useNavigate } from "react-router-dom";
import logo2 from "../assets/logo-alimodian.png";
import PasswordPopUp from "./PasswordPopUp.jsx";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import styles from "./auth/ApplicationStatus.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getLessee } from "../app/reducer/lesseeSlice";
import { useEffect } from "react";

function ApplicationStatus() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPopUp, setShowPopUp] = useState(false);
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [age, setAge] = useState("");
  const [sex, setSex] = useState("");
  const [civilStatus, setCivilStatus] = useState("");
  const [address, setAddress] = useState("");
  const [brgy, setBrgy] = useState("");
  const [municipality, setMunicipality] = useState("");
  const [province, setProvince] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [stallNum, setStallNum] = useState("");
  const [stallType, setStallType] = useState("");
  const [area, setArea] = useState("");
  const [monthlyRate, setMonthlyRate] = useState("");
  const [rate, setRate] = useState("");
  const { lessee } = useSelector((state) => state.lessee);
  const { userId } = useSelector((state) => state.auth);
  const [requestEdit, setRequestEdit] = useState(false);

console.log(lessee);

  useEffect(() => {
    dispatch(getLessee({ userId }));
  }, []);
  useEffect(() => {
    if (lessee !== null && lessee !== undefined) {
      setLastName(lessee.lastName);
      setFirstName(lessee.firstName);
      setMiddleName(lessee.middleInitial);
      setAge(lessee.age);
      setSex(lessee.sex);
      setCivilStatus(lessee.civilStatus);
      setAddress(lessee.address);
      setBrgy(lessee.brgy);
      setMunicipality(lessee.municipality);
      setProvince(lessee.province);
      setZipCode(lessee.zipCode);
      setPhoneNum(lessee.contactNumber);
      setArea(lessee.stall.dimension);
      setStallNum(lessee.stall.stallNumber);
      setStallType(lessee.stall.stallType);
      setMonthlyRate(lessee.stall.monthlyPayment);
      setRate("P5.00/sq.m x 30days ");
    }
  }, [lessee]);
  const lastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const firstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const middleNameChange = (e) => {
    setMiddleName(e.target.value);
  };

  const ageChange = (e) => {
    setAge(e.target.value);
  };

  const sexChange = (e) => {
    setSex(e.target.value);
  };

  const civilStatusChange = (e) => {
    setCivilStatus(e.target.value);
  };
  const addressChange = (e) => {
    setAddress(e.target.value);
  };
  const brgyChange = (e) => {
    setBrgy(e.target.value);
  };
  const municipalityChange = (e) => {
    setMunicipality(e.target.value);
  };

  const provinceChange = (e) => {
    setProvince(e.target.value);
  };

  const zipCodeChange = (e) => {
    setZipCode(e.target.value);
  };

  const phoneNumChange = (e) => {
    setPhoneNum(e.target.value);
  };

  const stallNumChange = (e) => {
    setStallNum(e.target.value);
  };

  const stallTypeChange = (e) => {
    setStallType(e.target.value);
  };

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
    navigate(-1);
    console.log("create clicked");
  };
  const handleRequestEdit = () => {
    // setShowPopUp(true);
let data = {...lessee}
 data.requestEdit = "yes";
    console.log(data);
    setRequestEdit(true);
  };
  const handleProfile = (e) => {
    navigate("/profile-setting");
    console.log("Profile clicked");
  };

  return (
    <div className={styles.ContainerA}>
      <div className={styles.InnerContainer1}>
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
        <div className={styles.BackA}>
          <button onClick={handleGoBack}>
            {" "}
            <ArrowBackIosNewIcon sx={{ fontSize: 18, marginTop: 1 }} />{" "}
          </button>{" "}
          <p>BACK</p>
        </div>

        <div className={styles.ApplicationForm}>
          <h2>Application Form</h2>
          <h6>
            Note: This application form will serve as your reservation. After{" "}
            <br />
            submitting, kindly wait for the response and approval from the{" "}
            <br /> Department's Office before proceeding to legal forms and
            documents.
          </h6>
        </div>

        <div className="ApplicationForm">
          <p>PERSONAL INFORMATION</p>
        </div>
        <div div className="Item">
          <div className="InputContainer">
            <div className={styles.a}>
              <input
                placeholder="Last Name"
                value={lastName}
                onChange={lastNameChange}
              />
              <input
                placeholder="First Name"
                value={firstName}
                onChange={firstNameChange}
              />
              <input
                placeholder="Middle initial"
                value={middleName}
                onChange={middleNameChange}
              />
            </div>
          </div>

          <div className={styles.b}>
            <input placeholder="Age" value={age} onChange={ageChange} />

            <input placeholder="Sex" value={sex} onChange={sexChange} />

            <input
              placeholder="Status"
              value={civilStatus}
              onChange={civilStatusChange}
            />
          </div>

          <div className={styles.c}>
          <input placeholder="Street" 
            value={address}
            onChange={addressChange}/>

            <input placeholder="Barangay" value={brgy} onChange={brgyChange} />
            <input
              placeholder="Municipality"
              value={municipality}
              onChange={municipalityChange}
            />
          </div>
          <div className={styles.d}>
          <input
              placeholder="Province"
              value={province}
              onChange={provinceChange}
            />
            <input
              placeholder="Zip Code"
              value={zipCode}
              onChange={zipCodeChange}
            />
          </div>
          <div className={styles.e}>
            <input disabled={true} placeholder="Phone Number:" />
            <input
              placeholder=" +63"
              value={phoneNum}
              onChange={phoneNumChange}
            />
          </div>
          <div className={styles.StallTA}>
            STALL TO ACQUIRE
            <p></p>
          </div>
        </div>
        <div className={styles.f}>
        <h5>Stall Number:</h5>
          <input
            placeholder="_______ "
            type="stallNum"
            value={stallNum}
            onChange={stallNumChange}
            readOnly
          />
        </div>
        <div className={styles.g}>
        <input
          
          placeholder="Stall Type:"
          type="stallType"
          value={stallType}
          onChange={stallTypeChange}
          readOnly
        />
        <input
          placeholder="Area Leasses:"
          type="areaLeasses"
          value={area}
          onChange={areaChange}
          readOnly
        />
        </div>
        <div className={styles.h}>
        <input
            placeholder="Monthly Rate:"
            type="monthlyRate"
            value={monthlyRate}
            onChange={monthlyRateChange}
            readOnly
          />
          <input
            placeholder="Rate per sq.m"
            type="rate"
            value={rate}
            onChange={rateChange}
            readOnly
          />
        </div>
      </div>

      <div className={styles.Status}>
      { lessee && requestEdit ?  <button disabled={true}onClick={handleRequestEdit}>Requested</button> : <button onClick={handleRequestEdit}>Request Edit</button>}
      </div>

      <div className={styles.Submit}>
        <p>Application Status: {lessee && lessee.status}</p>
      </div>

      {showPopUp && <PasswordPopUp />}
    </div>
  );
}

export default ApplicationStatus;
