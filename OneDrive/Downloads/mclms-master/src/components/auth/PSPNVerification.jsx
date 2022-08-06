import React, { useState } from "react";
import "./Auth.styles.css";
import {useNavigate} from "react-router-dom";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import SuccessPopUp from "./SuccessPopUp";
;

function PSPNVerification() {
     const navigate = useNavigate();
     const [showPopUp, setShowPopUp] = useState(false);
     
     const handleGoBack = (e) => {
      //go to verification
      navigate("/profile-setting");
      console.log("register clicked");
      };
 
      const handleConfirm1 = (e) => {
        //go to reset sucessful
        setShowPopUp(true);
        console.log("confirm clicked");
      };

    const handleRequest = () => {
    console.log("create clicked");
    };

    return (
        <div className="InnerContainer2">
       
          <div className="ButtonB">
          <button onClick={handleGoBack}>  <ArrowBackIosNewIcon sx={{ fontSize: 18 , marginTop: 1}}/>  </button> <p>BACK</p>
          </div>        
         
        <div className="Code">
        A 4-digit code is sent to <br/>
        your phone number +639******741. <br/> 
        Please enter the code below to complete <br/>
        changing your phone number.
        </div>
        <div className="line"> 
          <p>___      ___       ___       ___</p>
        </div>  
        <div className="ConfirmButton">
          <button onClick={handleConfirm1}>Confirm</button>
        </div>
        <div className="RequestButton">
          <button onClick={handleRequest}>Request for a code again.</button>
        </div>
        {showPopUp &&
          <SuccessPopUp labeledName={"Phone Number changed successfully!"} navigateToHome={true} />}
      </div>


    );
  }
  
  export default PSPNVerification;