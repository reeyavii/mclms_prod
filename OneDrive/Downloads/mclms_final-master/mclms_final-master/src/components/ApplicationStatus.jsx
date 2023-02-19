import React, { useState } from "react";
// import "./auth/Application.styles.css";
import { useNavigate } from "react-router-dom";
import logo2 from "../assets/logo-alimodian.png";
import PasswordPopUp from "./PasswordPopUp.jsx";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import styles from "./auth/ApplicationStatus.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getLessee } from "../app/reducer/lesseeSlice";
import { useEffect } from "react";
import HomeIcon from "@mui/icons-material/Home";
import Header from "./Header";

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
    let data = { ...lessee };
    data.requestEdit = "yes";
    console.log(data);
    setRequestEdit(true);
  };
  const handleProfile = (e) => {
    navigate("/profile-setting");
    console.log("Profile clicked");
  };

  const handleHome = () => {
    navigate("/home");
    console.log("");
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.content}>
        <div className={styles.BackA}>
          <button onClick={handleGoBack}>
            {" "}
            <ArrowBackIosNewIcon sx={{ fontSize: 15, marginTop: 1 }} />{" "}
          </button>{" "}
        </div>
        <div className={styles.ApplicationForm}>
          <h2>Application Form</h2>
          <h6>
            Note: This application form will serve as your reservation. After
            submitting, <br />
            kindly wait for the response and approval from the Department's
            Office
            <br /> before proceeding to legal forms and documents.
          </h6>
        </div>
        <div className={styles.ApplicationForm}>
          <p>PERSONAL INFORMATION</p>
        </div>
        {/* <div div className={styles.Item}> */}
        <div className={styles.InputContainer}>
          <div className={styles.label}>
            <p>
              {lastName === "" ? (
                <span
                  style={{
                    color: "red",
                    fontSize: 15,
                    marginTop: -2,
                    marginLeft: 75,
                  }}
                >
                  *{" "}
                </span>
              ) : null}
              Last Name{" "}
            </p>
            <p>
              {lastName === "" ? (
                <span
                  style={{
                    color: "red",
                    fontSize: 15,
                    marginTop: -2,
                    marginLeft: 75,
                  }}
                >
                  *{" "}
                </span>
              ) : null}
              First Name{" "}
            </p>
            <p>
              {middleName === "" ? (
                <span
                  style={{
                    color: "red",
                    fontSize: 15,
                    marginTop: -2,
                    marginLeft: 94,
                  }}
                >
                  *{" "}
                </span>
              ) : null}
              Middle Initial{" "}
            </p>
          </div>

          <div className={styles.a}>
            <input value={lastName} onChange={lastNameChange} />

            <input value={firstName} onChange={firstNameChange} />
            <input value={middleName} onChange={middleNameChange} />
          </div>

          <div className={styles.label}>
            <p>
              {age === "" ? (
                <span
                  style={{
                    color: "red",
                    fontSize: 15,
                    marginTop: -2,
                    marginLeft: 30,
                  }}
                >
                  *{" "}
                </span>
              ) : null}
              Age{" "}
            </p>
            <p>
              {sex === "" ? (
                <span
                  style={{
                    color: "red",
                    fontSize: 15,
                    marginTop: -2,
                    marginLeft: 25,
                  }}
                >
                  *{" "}
                </span>
              ) : null}
              Sex{" "}
            </p>
            <p>
              {civilStatus === "" ? (
                <span
                  style={{
                    color: "red",
                    fontSize: 15,
                    marginTop: -2,
                    marginLeft: 78,
                  }}
                >
                  *{" "}
                </span>
              ) : null}
              Civil Status{" "}
            </p>
          </div>
          <div className={styles.a}>
            <input value={age} onChange={ageChange} />

            <input value={sex} onChange={sexChange} />

            <input value={civilStatus} onChange={civilStatusChange} />
          </div>

          <div className={styles.label}>
            <p>
              {address === "" ? (
                <span
                  style={{
                    color: "red",
                    fontSize: 15,
                    marginTop: -2,
                    marginLeft: 42,
                  }}
                >
                  *{" "}
                </span>
              ) : null}
              Street{" "}
            </p>
            <p>
              {brgy === "" ? (
                <span
                  style={{
                    color: "red",
                    fontSize: 15,
                    marginTop: -2,
                    marginLeft: 70,
                  }}
                >
                  *{" "}
                </span>
              ) : null}
              Barangay{" "}
            </p>
            <p>
              {municipality === "" ? (
                <span
                  style={{
                    color: "red",
                    fontSize: 15,
                    marginTop: -2,
                    marginLeft: 88,
                  }}
                >
                  *{" "}
                </span>
              ) : null}
              Municipality{" "}
            </p>
          </div>
          <div className={styles.a}>
            <input value={address} onChange={addressChange} />

            <input value={brgy} onChange={brgyChange} />
            <input value={municipality} onChange={municipalityChange} />
          </div>

          <div className={styles.label}>
            <p>
              {province === "" ? (
                <span
                  style={{
                    color: "red",
                    fontSize: 15,
                    marginTop: -2,
                    marginLeft: 60,
                  }}
                >
                  *{" "}
                </span>
              ) : null}
              Province
            </p>
            <p>
              {zipCode === "" ? (
                <span
                  style={{
                    color: "red",
                    fontSize: 15,
                    marginTop: -2,
                    marginLeft: 64,
                  }}
                >
                  *{" "}
                </span>
              ) : null}
              Zip Code{" "}
            </p>
            <p>
              {phoneNum === "" ? (
                <span
                  style={{
                    color: "red",
                    fontSize: 15,
                    marginTop: -2,
                    marginLeft: 104,
                  }}
                >
                  *{" "}
                </span>
              ) : null}
              Phone Number{" "}
            </p>
          </div>
          <div className={styles.a}>
            <input value={province} onChange={provinceChange} />
            <input value={zipCode} onChange={zipCodeChange} />
            <input value={phoneNum} onChange={phoneNumChange} />
          </div>
        </div>
        <div className={styles.StallTA}>STALL TO ACQUIRE</div>
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
          <h5>Stall Type :</h5>
          <input
            placeholder="Stall Type"
            type="stallType"
            value={stallType}
            onChange={stallTypeChange}
            readOnly
          />
          <h5>Area Leasses :</h5>
          <input
            placeholder="Area Leasses"
            type="areaLeasses"
            value={area}
            onChange={areaChange}
            readOnly
          />
        </div>
        <div className={styles.h}>
          <h5>Monthly Rate :</h5>
          <input
            placeholder="Monthly Rate"
            type="monthlyRate"
            value={monthlyRate}
            onChange={monthlyRateChange}
            readOnly
          />
          <h5>Rate/Sq.m. :</h5>
          <input
            placeholder="Rate per sq.m."
            type="rate"
            value={rate}
            onChange={rateChange}
            readOnly
          />
        </div>
        <div className={styles.Submit}>
          <p>Application Status: {lessee && lessee.status}</p>
        </div>
      </div>
    </div>
  );
}

export default ApplicationStatus;
