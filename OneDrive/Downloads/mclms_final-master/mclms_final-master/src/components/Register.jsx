import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { authLogin, authRegister } from "../app/reducer/authSlice";
import { useDispatch } from "react-redux";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import styles from "./auth/Register.module.css";
import { color } from "@mui/system";

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [suffix, setSuffix] = useState("");
  const [age, setAge] = useState("");
  const [sex, setSex] = useState("");
  const [status, setStatus] = useState("");
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
      age !== "" &&
      sex !== "" &&
      status !== "" &&
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
    age,
    sex,
    status,
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

  const ageChange = (e) => {
    setAge(e.target.value);
  };

  const sexChange = (e) => {
    setSex(e.target.value);
  };

  const statusChange = (e) => {
    setStatus(e.target.value);
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

  const handleGoBack = (e) => {
    navigate(-1);
    console.log("create clicked");
  };
  const handleNext = () => {
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
        sex: sex,
        age: parseInt(age),
        address: address,
        status: status,
      };
      dispatch(authRegister(data));
      setTimeout(() => {
        dispatch(
          authLogin({
            username: emailAdd,
            password: setPassword,
          })
        );
        navigate("/");
        console.log("create clicked");
      }, 800);
    } else {
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.content}>
      <div className={styles.ButtonB}>
        <button onClick={handleGoBack}>
          <ArrowBackIosNewIcon
            sx={{ fontSize: 18, marginTop: -5, marginLeft: 0.2 }}
          />
        </button>

      </div>

      <div className={styles.CreateAccount1}>Create Account</div>
      <div className={styles.InputItem}>
        <div className={styles.InputContainer}>
          <div className={styles.Input1}>
            <input
              placeholder="First Name | Last Name"
              value={fullName}
              onChange={fullNameChange}
            />
          </div>
          <div className={styles.Input2}>
            <input
              placeholder="M.I"
              value={suffix}
              onChange={suffixChange}
            />
          </div>
        </div>

        <div className={styles.InputContainer}>
          <div className={styles.Input3}>
            <input placeholder="Age" value={age} onChange={ageChange} />
          </div>
          <div className={styles.Input4}>
            <input placeholder="Sex" value={sex} onChange={sexChange} />
          </div>
          <div className={styles.Input5}>
            <input
              placeholder="Status"
              value={status}
              onChange={statusChange}
            />
          </div>
        </div>

        <div className={styles.InputContainer3}>
          <div className={styles.Input6}>
            <input
              placeholder="Address"
              value={address}
              onChange={addressChange}
            />
          </div>
          <div className={styles.Input6}>
            <input
              placeholder="E-mail Address"
              value={emailAdd}
              onChange={emailAddChange}
            />
          </div>
          <div  className={styles.Input6}>
            
            <input
              placeholder="Contact Number"
              value={contactNum}
              onChange={contactNumChange}
            />
          </div>
          <div className={styles.Input6}>
            <input title="Password must :

            •  Be at least 8 characters long
            •  Contain at least one uppercase letter
            •  Contain at least one lowercase letter
            •  Contain at least 2 numbers
            •  Contain at least one special character
            •  Enter and Confirm passwords match "
              placeholder="Set your Password"
              type="Password"
              value={setPassword}
              onChange={setPasswordChange}
            />
          </div>
          <div className={styles.Input6}>
            <input
              placeholder="Re-type your Password"
              type="Password"
              value={retypePass}
              onChange={retypePassChange}
            />
            {matchFailed && <span>passwords do not match</span>}
          </div>
        </div>
      </div>


      <div className={styles.Button2}>
        <button disabled={!enableNext} onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
    </div>
  );
}

export default Register;
