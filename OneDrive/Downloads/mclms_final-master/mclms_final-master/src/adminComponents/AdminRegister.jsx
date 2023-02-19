import React, { useState, useMemo } from "react";
import styles from "./Auth/AdminRegister.module.css";
import { useNavigate } from "react-router-dom";
import { authRegister, authRegisterAdmin } from "../app/reducer/authSlice";
import { useDispatch } from "react-redux";
// import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Button } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

function AdminRegister() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [suffix, setSuffix] = useState("");
  const [employeeId, setEmployeeId] = useState("");
  const [address, setAddress] = useState("");
  const [emailAdd, setEmailAdd] = useState("");
  const [contactNum, setContactNum] = useState("");
  const [setPassword, setSetPassword] = useState("");
  const [retypePass, setRetypePass] = useState("");
  const [matchFailed, setMatchFailed] = useState(false);

  const fieldComplete = () => {
    if (
      fullName !== "" &&
      suffix !== "" &&
      employeeId !== "" &&
      address !== "" &&
      emailAdd !== "" &&
      contactNum !== "" &&
      setPassword !== "" &&
      retypePass
    ) {
      return true;
    } else {
      return false;
    }
  };

  const enableNext = useMemo(() => fieldComplete(), [
    fullName,
    suffix,
    employeeId,
    address,
    emailAdd,
    contactNum,
    setPassword,
    retypePass,
  ]);

  const fullNameChange = (e) => {
    setFullName(e.target.value);
  };

  const suffixChange = (e) => {
    setSuffix(e.target.value);
  };

  const employeeIdChange = (e) => {
    setEmployeeId(e.target.value);
  };

  const addressChange = (e) => {
    setAddress(e.target.value);
  };

  const emailAddChange = (e) => {
    setEmailAdd(e.target.value);
  };

  const contactNumChange = (e) => {
    setContactNum(e.target.value);
  };

  const setPasswordChange = (e) => {
    setSetPassword(e.target.value);
    if (e.target.value !== retypePass) {
      setMatchFailed(true);
    } else {
      setMatchFailed(false);
    }
  };

  const retypePassChange = (e) => {
    setRetypePass(e.target.value);
    if (e.target.value !== setPassword) {
      setMatchFailed(true);
    } else {
      setMatchFailed(false);
    }
  };

  const handleAdminNext = () => {
    //go to verification 

    var nameArray = fullName.split(" ");
    const lastName = nameArray[nameArray.length - 1];
    nameArray.pop();
    const firstName = nameArray.join(" ");
    console.log(lastName);
    console.log(firstName);

    if (setPassword === retypePass) {
      const data = {
        username: emailAdd,
        password: setPassword,
        email: emailAdd,
        phoneNumber: contactNum,
        firstName: firstName,
        lastName: lastName,
        middleInitial: suffix,
        employeeId: employeeId,
        address: address,
      };
      dispatch(authRegisterAdmin(data));
    } else {
    }

    navigate("/admin-login");
    console.log("create clicked");
  };
  const handleGoBack = (e) => {
    navigate(-1);
    console.log("Home clicked");
  };
  return (
    <div className={styles.BgInnerContainer1}>
 <div className={styles.back}>
              {" "}
              <Button
                onClick={handleGoBack}
                sx={{
                  fontSize: 10,
                  color: "black",
                  marginTop: 1,
                  marginBottom: 0.5,
                }}
              >
                <ArrowBackIosNewIcon
                  sx={{
                    fontSize: 18,
                    // marginTop: 2,
                    // marginBottom: 5,
                    marginLeft: -2,
                    color: "black",
                  }}
                />
                Back
              </Button>
            </div>
      <div className={styles.AdminAccount}>Create Account</div>
      <div className={styles.InputAdminItem}>
        <div className={styles.RegisterContainer}>
          <div className={styles.Input1Admin}>
          
            <p>First Name | Last Name
                {fullName === "" ? (
                  <span
                    style={{
                      color: "red",
                      fontSize: 15,
                      marginTop: -15,
                      marginLeft: 5,
                    }}
                  >
                    *
                  </span>
                ) : null}
               
              </p>
            <input
              placeholder="Enter your name"
              value={fullName}
              onChange={fullNameChange}
            />
            </div>
            <div className={styles.Input2Admin}>
            <p> Middle Initial
                {suffix === "" ? (
                  <span
                    style={{
                      color: "red",
                      fontSize: 15,
                      marginTop: -15,
                      marginLeft: 5,
                    }}
                  >
                    *
                  </span>
                ) : null}
               
              </p>
             <input
              placeholder="Enter your Middle Initial"
              value={suffix}
              onChange={suffixChange}
            />
          </div>
        </div>

        <div className={styles.RegisterContainer2}>
            <div className={styles.Input3Admin}>
            <p> Employee Id
                {employeeId === "" ? (
                  <span
                    style={{
                      color: "red",
                      fontSize: 15,
                      marginTop: -15,
                      marginLeft: 5,
                    }}
                  >
                    *
                  </span>
                ) : null}
               
              </p>
             <input placeholder="Enter employee ID" value={employeeId} onChange={employeeIdChange} />
            </div>
            <div className={styles.Input4Admin}>
            <p> Contact Number
                {contactNum === "" ? (
                  <span
                    style={{
                      color: "red",
                      fontSize: 15,
                      marginTop: -15,
                      marginLeft: 5,
                    }}
                  >
                    *
                  </span>
                ) : null}
               
              </p>
            <input
              placeholder="Enter your contact number"
              value={contactNum}
              onChange={contactNumChange}
            />
          </div>
          </div>

          <div className={styles.RegisterContainer3}>
          <div className={styles.Input5Admin}>
          <p> Address
                {address === "" ? (
                  <span
                    style={{
                      color: "red",
                      fontSize: 15,
                      marginTop: -15,
                      marginLeft: 5,
                    }}
                  >
                    *
                  </span>
                ) : null}
               
              </p>
            <input
              placeholder="Street,  Barangay,  Municipality,   Province"
              value={address}
              onChange={addressChange}
            />
          </div>
          <div className={styles.Input6Admin}>
          <p> Email Address
                {emailAdd === "" ? (
                  <span
                    style={{
                      color: "red",
                      fontSize: 15,
                      marginTop: -15,
                      marginLeft: 5,
                    }}
                  >
                    *
                  </span>
                ) : null}
               
              </p>
            <input
              placeholder="Enter your e-mail address"
              value={emailAdd}
              onChange={emailAddChange}
            />
          </div>
        </div>

        <div className={styles.RegisterContainer4} >
          <div className={styles.Input7Admin}title="Password must :

         •  Be at least 8 characters long
         •  Contain at least one uppercase letter
         •  Contain at least one lowercase letter
         •  Contain at least 2 numbers
         •  Contain at least one special character
         •  Enter and Confirm passwords match ">
          <p> Password
                {setPassword === "" ? (
                  <span
                    style={{
                      color: "red",
                      fontSize: 15,
                      marginTop: -15,
                      marginLeft: 5,
                    }}
                  >
                    *
                  </span>
                ) : null}
               
              </p>
            <input
              placeholder="Must have at least 8 characters"
              type="Password"
              value={setPassword}
              onChange={setPasswordChange}
            />
          </div>
          <div className={styles.Input8Admin}>
          <p> Confirm Password
                {retypePass === "" ? (
                  <span
                    style={{
                      color: "red",
                      fontSize: 15,
                      marginTop: -15,
                      marginLeft: 5,
                    }}
                  >
                    *
                  </span>
                ) : null}
               
              </p>
            <input
              placeholder="Re-type Password"
              type="Password"
              value={retypePass}
              onChange={retypePassChange}
            />
            
            
          </div>
          
        </div>
        <div className={styles.Span}>{matchFailed && <span>passwords do not match</span>}</div>
      </div>

      <div className={styles.ButtonAdmin}>
        <button disabled={!enableNext} onClick={handleAdminNext}>
          SUBMIT
        </button>
      </div>
    </div>
  );
}

export default AdminRegister;