import React, { useState } from "react";
import "./Auth.styles.css";


function Register() {
    
    const [fullName, setFullName] = useState("");
    const [suffix, setSuffix] =  useState("");
    const [age, setAge] =  useState("");
    const [sex, setSex] =  useState("");
    const [status, setStatus] =  useState("");
    const [address, setAddress] =  useState("");
    const [emailAdd, setEmailAdd] =  useState("");
    const [contactNum, setContactNum] =  useState("");
    const [cPassword, setCPassword] =  useState("");
    const [retypePass, setRetypePass] =  useState("");

    const fullNameChange = (e) => {
         setFullName (e.target.value); };

    const suffixChange =  (e) => { 
        setSuffix (e.target.value); };

    const ageChange =  (e) => { 
        setAge(e.target.value); };

    const sexChange =  (e) => { 
        setSex (e.target.value); };

    const statusChange =  (e) => { 
        setStatus (e.target.value); };

    const addressChange =  (e) => { 
        setAddress (e.target.value); };

    const emailAddChange =  (e) => { 
        setEmailAdd(e.target.value); };

    const contactNumChange =  (e) => { 
        setContactNum (e.target.value); };

    const cPasswordChange =  (e) => { 
        setCPassword (e.target.value); };

    const retypePassChange =  (e) => {
         setRetypePass (e.target.value); };
    
    const handleNext = () => {
          //go to verification
    console.log("create clicked");
    };
        
    return (
    
        <div className="InnerContainer1">
          <div className="CreateAccount1">
            Create Account
          </div>
          <div className="Input-item">
            <div className="InputContainer">
              <div className="Input1">
                  <input
                      placeholder="Full Name"
                      value={fullName}
                      onChange={fullNameChange}
                 />
              </div>
              <div className="Input2">
                 <input
                      placeholder="Suffix"
                      value={suffix}
                      onChange={suffixChange}
                />
              </div>
          </div>
          

        <div className="InputContainer2">
           <div className="Input3">
              <input
              placeholder="Age"
              value={age}
              onChange={ageChange}
              />
          </div>
            <div className="Input4">
             <input
              placeholder="Sex"
              value={sex}
              onChange={sexChange}
              />
            </div>
            <div className="Input5">
             <input
              placeholder="Status"
              value={status}
              onChange={statusChange}
             />
           </div>
        </div>
        <div className="InputContainer3">
          <div className="Input6">
            <input
              placeholder="Address"
              value={address}
              onChange={addressChange}
            />
          </div>
          <div className="Input6">
            <input
              placeholder="Email Address"
              value={emailAdd}
              onChange={emailAddChange}
            />
          </div>
          <div className="Input6">
            <input
              placeholder="Contact Number"
              value={contactNum}
              onChange={contactNumChange}
            />
          </div>
          <div className="Input6">
            <input
              placeholder="Change Password"
              type="Password"
              value={cPassword}
              onChange={cPasswordChange}
            />
          </div>
          <div className="Input6">
            <input
              placeholder="Retype Password"
              type="Password"
              value={retypePass}
              onChange={retypePassChange}
            />
          </div>
          </div>
          </div> 
          <div className="Button1">
      <button onClick={handleNext}>Next</button>
    </div>
         </div>
       
   

     
    );
  }
  
  export default Register;