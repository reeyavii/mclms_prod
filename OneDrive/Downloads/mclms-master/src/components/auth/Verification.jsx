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
        <p>A 4-digit code is sent to your phone number +639******741. 
        Please enter the code below to complete creating your account</p>
        </div>
        <div className="line"> 
          <p>__      __       __       __</p>
        </div>  
        <div className="ConfirmButton">
          <button onClick={handleConfirm}>CONFIRM</button>
        </div>
        <div className="RequestButton">
          <button onClick={handleRequest}>Request for a code again.</button>
        </div>
      </div>


    );
  }
  
  export default Verification;