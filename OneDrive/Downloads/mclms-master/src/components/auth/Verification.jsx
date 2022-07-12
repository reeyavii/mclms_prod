import React from "react";
import "./Auth.styles.css";
import {useNavigate} from "react-router-dom";

function Verification() {
     const navigate = useNavigate();

    const handleConfirm = () => {
      //go to verified
      navigate("/verified")
    console.log("login clicked");

  };

    const handleRequest = () => {
    console.log("login clicked");

    
  };

    return (
        <div className="InnerContainer2">
        <div className="Code">
        <p>A 4-digit code is sent to <br></br> 
        your phone number +639******741. <br></br> 
        Please enter the code below to complete <br></br> 
        creating your account.</p>
        </div>
        <div className="line"> 
          <p>___      ___       ___       ___</p>
        </div>  
        <div className="ConfirmButton">
          <button onClick={handleConfirm}>Confirm</button>
        </div>
        <div className="RequestButton">
          <button onClick={handleRequest}>Request for a code again.</button>
        </div>
      </div>


    );
  }
  
  export default Verification;