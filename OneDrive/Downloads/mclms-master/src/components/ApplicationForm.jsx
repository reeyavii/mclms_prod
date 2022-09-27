import React, { useState, useEffect } from "react";
import "./auth/Application.styles.css";
import { useNavigate, useParams } from "react-router-dom";
import logo2 from "../assets/logo-alimodian.png";
import PasswordPopUp from "./PasswordPopUp.jsx";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { addLessees } from "../app/reducer/lesseeSlice";
import { getStall } from "../app/reducer/stallSlice";
import { useDispatch, useSelector } from "react-redux";
import SuccessPopUp from "./SuccessPopUp";

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
const {email, userId} = useSelector ((state) => state.auth);
const [successPopUp, setSuccessPopUp] = useState(false);

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

  const handleCancelPopUp = () => {
    setShowPopUp(false);
  };
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
    

    }
    dispatch (addLessees(data));
    setTimeout(() => {
      setShowPopUp(false);
    },500)
    setTimeout(() => {
      setSuccessPopUp(true);
    }, 1000)
    
    console.log(data);
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
        <div className="BackA">
          <button onClick={handleGoBack}>
            {" "}
            <ArrowBackIosNewIcon sx={{ fontSize: 18, marginTop: 1 }} />{" "}
          </button>{" "}
          <p>BACK</p>
        </div>

        <div className="ApplicationForm">
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
            <div className="a">
              <input placeholder="Last Name" 
              value={lastName}
              onChange={lastNameChange}/>
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

          <div className="b">
            <input placeholder="Age" value={age} onChange={ageChange} />

            <input placeholder="Sex" value={sex} onChange={sexChange} />

            <input
              placeholder="Status"
              value={civilStatus}
              onChange={civilStatusChange}
            />
          </div>

          <div className="c">
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
          <div className="d">
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
          <div className="e">
            <input disabled={true} placeholder="Phone Number:" />
            <input
              placeholder=" +63"
              value={phoneNum}
              onChange={phoneNumChange}
            />
          </div>

          <div className="StallTA">
            STALL TO ACQUIRE
            <p></p>
          </div>
        </div>
        <div className="f">
          <h5>Stall Number:</h5>
          <input
            placeholder="_______ "
            type="stallNum"
            value={stallNum}
            onChange={stallNumChange}
            readOnly
          />
        </div>
        <div className="g">
          <h5>Stall Type:</h5>
          <input
           
            placeholder="Stall Type:"
            type="stallType"
            value={stallType}
            onChange={stallTypeChange}
            readOnly
          />
           <h5>Area Leasses:</h5>
          <input
            placeholder="Area Leasses:"
            type="areaLeasses"
            value={area}
            onChange={areaChange}
            readOnly
          />
        </div>
        <div className="h">
        <h5>Monthly Rate:</h5>
          <input
            placeholder="Monthly Rate:"
            type="monthlyRate"
            value={monthlyRate}
            onChange={monthlyRateChange}
            readOnly
          /> 
          <div className="i">
           <h5>Rate/sq.m:</h5>
          <input 
            placeholder="Rate per sq.m"
            type="rate"
            value={rate}
            onChange={rateChange}
            readOnly
          />
       </div>
       </div>
      </div>

      <div className="Submit">
        <button onClick={handleSubmit}>Submit</button>
      </div>

      {showPopUp && (
        <PasswordPopUp handleCancelPopUp={() => handleCancelPopUp()} handlePopSubmit={() => handlePopSubmit()}/>
      )}
      {successPopUp && (
          <SuccessPopUp labeledName={"Done!"}  navigateToHome={()=>navigate("/home")}/>
      )
      }
    </div>
  );
}
export default ApplicationForm;
