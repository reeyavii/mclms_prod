import React, { useState, useMemo } from "react";
import "./AdminAuth.styles.css";
import { useNavigate } from "react-router-dom";
import { authRegister, authRegisterAdmin } from "../app/reducer/authSlice";
import { useDispatch } from "react-redux";
// import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';


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
 
  return (
    <div className="BgInnerContainer1">

      <div className="AdminAccount">Create Account</div>
      <div className="Input-AdminItem">
        <div className="RegisterContainer">
          <div className="Input1Admin">
            <p>First Name | Last Name*</p>
            <input
              placeholder="Enter your name"
              value={fullName}
              onChange={fullNameChange}
            />
            </div>
            <div className="Input2Admin">
              <p>Suffix*</p>
             <input
              placeholder="Enter your Middle Initial"
              value={suffix}
              onChange={suffixChange}
            />
          </div>
        </div>

        <div className="RegisterContainer2">
            <div className="Input3Admin">
            <p>Employee ID*</p>
             <input placeholder="Enter employee ID" value={employeeId} onChange={employeeIdChange} />
            </div>
            <div className="Input4Admin">
            <p>Contact Number*</p>
            <input
              placeholder="Enter your contact number"
              value={contactNum}
              onChange={contactNumChange}
            />
          </div>
          </div>

          <div className="RegisterContainer3">
          <div className="Input5Admin">
          <p>Address*</p>
            <input
              placeholder="Address"
              value={address}
              onChange={addressChange}
            />
          </div>
          <div className="Input6Admin">
          <p>Email Address*</p>
            <input
              placeholder="Enter your e-mail address"
              value={emailAdd}
              onChange={emailAddChange}
            />
          </div>
        </div>

        <div className="RegisterContainer4">
          <div className="Input7Admin">
          <p>Password*</p>
            <input
              placeholder="Set your Password"
              type="Password"
              value={setPassword}
              onChange={setPasswordChange}
            />
          </div>
          <div className="Input8Admin">
          <p>Confirm Password*</p>
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

      <div className="ButtonAdmin">
        <button disabled={!enableNext} onClick={handleAdminNext}>
          SUBMIT
        </button>
      </div>
    </div>
  );
}

export default AdminRegister;