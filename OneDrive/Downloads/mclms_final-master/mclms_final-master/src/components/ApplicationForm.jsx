import React, { useState, useEffect } from "react";
// import "./auth/Application.styles.css";
import styles from "./auth/ApplicationForm.module.css";
import { useNavigate, useParams } from "react-router-dom";
import logo2 from "../assets/logo-alimodian.png";
import PasswordPopUp from "./PasswordPopUp.jsx";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { addLessees } from "../app/reducer/lesseeSlice";
import { getStall } from "../app/reducer/stallSlice";
import { useDispatch, useSelector } from "react-redux";
import FormSuccessPopUp from "./FormSuccessPopUp";
import HomeIcon from "@mui/icons-material/Home";
import Header from "./Header";

function ApplicationForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const { stall } = useSelector((state) => state.stall);
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
  const { email, userId } = useSelector((state) => state.auth);
  const [successPopUp, setSuccessPopUp] = useState(false);

  const inputBorder = { borderBottom: "2px solid red" };

  const normalInputBorder = { borderBottom: "2px solid black" };

  useEffect(() => {
    dispatch(getStall(id));
  }, []);

  useEffect(() => {
    if (stall !== null && stall !== undefined) {
      setArea(stall.dimension);
      setStallNum(stall.stallNumber);
      setStallType(stall.stallType);
      setMonthlyRate(stall.monthlyPayment);
      setRate("P5.00/sq.m x 30days ");
    }
  }, [stall]);
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
  const handleSubmit = () => {
    setShowPopUp(true);
    console.log();
  };
  const handleProfile = (e) => {
    navigate("/profile-setting");
    console.log("Profile clicked");
  };

  // const handleCancelPopUp = () => {
  //   setShowPopUp(false);
  // };
  const handlePopSubmit = (e) => {
    //go to Application Form Submission
    const data = {
      email: email,
      lastName: lastName,
      firstName: firstName,
      middleInitial: middleName,
      age: age,
      sex: sex,
      civilStatus: civilStatus,
      address: address,
      brgy: brgy,
      municipality: municipality,
      province: province,
      zipCode: zipCode,
      contactNumber: phoneNum,
      stallNumber: stallNum,
      stallType: stallType,
      userId: userId,
      // dimension: area,
      // monthlyRate: monthlyRate,
    };
    dispatch(addLessees(data));
    // setTimeout(() => {
    //   setShowPopUp(false);
    // },500)
    setTimeout(() => {
      setSuccessPopUp(true);
    }, 1000);

    console.log(data);
  };

  const handleHome = () => {
    navigate("/home");
    console.log("");
  };

  const [submitClick, setSubmitClick] = useState(false);

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
            Note: This application form will serve as your reservation. After{" "}
            <br />
            submitting, kindly wait for the response and approval from the{" "}
            <br /> Department's Office before proceeding to legal forms and
            documents.
          </h6>
        </div>

        <div className={styles.ApplicationForm}>
          <p>PERSONAL INFORMATION</p>
        </div>
        {/* <div div className={styles.Item}> */}
          <div className={styles.InputContainer}>
            <div className={styles.label}>
              <p> Last Name
                {lastName === "" ? (
                  <span
                    style={{
                      color: "red",
                      fontSize: 15,
                      marginTop: -2,
                      marginLeft: 4,
                    }}
                  >
                    *
                  </span>
                ) : null}
               
              </p>
              <p> First Name{" "}
                {firstName === "" ? (
                  <span
                    style={{
                      color: "red",
                      fontSize: 15,
                      marginTop: -2,
                      marginLeft: 3
                    }}
                  >
                    *
                  </span>
                ) : null}
               
              </p>
              <p>Middle Initial
                {middleName === "" ? (
                  <span
                    style={{
                      color: "red",
                      fontSize: 15,
                      marginTop: -2,
                      marginLeft: 5,
                    }}
                  >
                    *{" "}
                  </span>
                ) : null}
                
              </p>
            </div>

            <div className={styles.a}>
              <input
                
                value={lastName}
                onChange={lastNameChange}
              />

              <input value={firstName} onChange={firstNameChange} />
              <input value={middleName} onChange={middleNameChange} />
            </div>
        
         
         <div className={styles.label}>
           
              <p> Age{" "}
                {age === "" ? (
                  <span
                    style={{
                      color: "red",
                      fontSize: 15,
                      marginTop: -2,
                      marginLeft: 2,
                    }}
                  >
                    *{" "}
                  </span>
                ) : null}
               
              </p>
              <p> Sex{" "}
                {sex === "" ? (
                  <span
                    style={{
                      color: "red",
                      fontSize: 15,
                      marginTop: -2,
                      marginLeft: 3,
                    }}
                  >
                    *{" "}
                  </span>
                ) : null}
               
              </p>
              <p> Civil Status{" "}
                {civilStatus === "" ? (
                  <span
                    style={{
                      color: "red",
                      fontSize: 15,
                      marginTop: -2,
                      marginLeft: 3,
                    }}
                  >
                    *{" "}
                  </span>
                ) : null}
               
              </p>
            </div>

            <div className={styles.a}>
              <input
                value={age}
                onChange={ageChange}
              />

              <input
                value={sex}
                onChange={sexChange}
              />

              <input
                value={civilStatus}
                onChange={civilStatusChange}
              />
            </div>
         
             <div className={styles.label}>
           
              <p> Street{" "}
                {address === "" ? (
                  <span
                    style={{
                      color: "red",
                      fontSize: 15,
                      marginTop: -2,
                      marginLeft: 3,
                    }}
                  >
                    *{" "}
                  </span>
                ) : null}
               
              </p>
              <p> Barangay{" "}
                {brgy === "" ? (
                  <span
                    style={{
                      color: "red",
                      fontSize: 15,
                      marginTop: -2,
                      marginLeft: 3,
                    }}
                  >
                    *{" "}
                  </span>
                ) : null}
               
              </p>
              <p>Municipality{" "}
                {municipality === "" ? (
                  <span
                    style={{
                      color: "red",
                      fontSize: 15,
                      marginTop: -2,
                      marginLeft: 3,
                    }}
                  >
                    *{" "}
                  </span>
                ) : null}
                
              </p>
             </div> 
            <div className={styles.a}>
              <input value={address} onChange={addressChange} />

              <input value={brgy} onChange={brgyChange} />
              <input value={municipality} onChange={municipalityChange} />
            </div>
         
          <div className={styles.label}>
          
              <p>Province
                {province === "" ? (
                  <span
                    style={{
                      color: "red",
                      fontSize: 15,
                      marginTop: -2,
                      marginLeft: 5,
                    }}
                  >
                    *{" "}
                  </span>
                ) : null}
                
              </p>
              <p>Zip Code
                {zipCode === "" ? (
                  <span
                    style={{
                      color: "red",
                      fontSize: 15,
                      marginTop: -2,
                      marginLeft: 4,
                    }}
                  >
                    *{" "}
                  </span>
                ) : null}
                
              </p>
              <p style={{width:125}}>Phone Number
                {phoneNum === "" ? (
                  <span
                    style={{
                      color: "red",
                      fontSize: 15,
                      marginTop: -2,
                      marginLeft: 4
                    }}
                  >
                    *
                  </span>
                ) : null}
                
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
            // readOnly
          />
          <h5>Area Leasses :</h5>
          <input
            placeholder="Area Leasses"
            type="areaLeasses"
            value={area}
            // onChange={areaChange}
            readOnly
          />
        </div>
        <div className={styles.h}>
          <h5>Monthly Rate :</h5>
          <input
            placeholder="Monthly Rate"
            type="monthlyRate"
            value={monthlyRate}
            // onChange={monthlyRateChange}
            readOnly
          />
          <div className={styles.i}>
            <h5>Rate/Sq.m. :</h5>
            <input
              placeholder="Rate per sq.m."
              type="rate"
              value={rate}
              // onChange={rateChange}
              readOnly
            />
          </div>
        </div>
        <div className={styles.Submit}>
          {
            lastName &&
            firstName &&
            middleName &&
            age &&
            sex &&
            civilStatus &&
            address &&
            brgy &&
            municipality &&
            province &&
            zipCode &&
            phoneNum 
            ?
             <button onClick={handlePopSubmit}>Submit</button>
             :
             <button disabled={true} onClick={handlePopSubmit}>Submit</button>

            
          }
         
        </div>
      {/* </div> */}

      {/* 
      {showPopUp && (
        <PasswordPopUp handleCancelPopUp={() => handleCancelPopUp()} handlePopSubmit={() => handlePopSubmit()}/>
      )} */}
      {successPopUp && (
        <FormSuccessPopUp
          labeledName={"Done!"}
          navigateToHome={() => navigate("/home")}
        />
      )}
    </div>
    </div>
  );
}
export default ApplicationForm;


//  const [lastName, setLastName] = useState("");
//   const [firstName, setFirstName] = useState("");
//   const [middleName, setMiddleName] = useState("");
//   const [age, setAge] = useState("");
//   const [sex, setSex] = useState("");
//   const [civilStatus, setCivilStatus] = useState("");
//   const [address, setAddress] = useState("");
//   const [brgy, setBrgy] = useState("");
//   const [municipality, setMunicipality] = useState("");
//   const [province, setProvince] = useState("");
//   const [zipCode, setZipCode] = useState("");
//   const [phoneNum, setPhoneNum] = useState("");