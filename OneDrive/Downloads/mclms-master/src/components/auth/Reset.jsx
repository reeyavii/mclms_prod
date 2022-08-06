import React, { useState } from "react";
import "./Auth.styles.css";
//import {useNavigate} from "react-router-dom";
import SuccessPopUp from "./SuccessPopUp";



function Reset() {
  //const navigate = useNavigate();
  const [showPopUp, setShowPopUp] = useState(false)
  const [password, setPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");

  const passwordChange = (e) => {
    setPassword(e.target.value);
  };
  const retypePasswordChange = (e) => {
    setRetypePassword(e.target.value);
  };

  const handleReset = () => {
    //go to verification
    setShowPopUp(true);
    console.log("login clicked");
  };
      
  return (
  
      <div className="InnerContainerE">   
       <div className="ResetPasswordE">
            Reset Password
          </div>
      <div className="InputContainerE">
          <div className="InputE">
          <input
            placeholder="Enter new password"
            value={password}
            onChange={passwordChange}
          />
        </div>
        <div className="InputE">
          <input
            placeholder="Re-type new password"
            type="retypePassword"
            value={retypePassword}
            onChange={retypePasswordChange}
          />
        </div>
        <div className="ButtonE">
          {
           <button onClick={handleReset}>Confirm</button>
          }
        </div>
       
        </div> 
           {showPopUp &&
            <SuccessPopUp labeledName={"Password changed successfully!"} navigateToHome={false}/>}
      </div>
   
  );
}

export default Reset;
