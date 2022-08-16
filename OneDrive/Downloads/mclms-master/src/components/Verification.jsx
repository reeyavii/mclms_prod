import React from "react";
import "./auth/Auth.styles.css";
import {useNavigate} from "react-router-dom";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

function Verification() {
     const navigate = useNavigate();

     const handleGoBack = (e) => {
      //go to verification
      navigate("/register");
      console.log("register clicked");
      };
 
      const handleConfirm = () => {
      //go to verified
      navigate("/verified");
    console.log("verified clicked");
      };

    const handleRequest = () => {
    console.log("create clicked");
    };

    return (
        <div className="InnerContainer2">

          <div className="ButtonB">
          <button onClick={handleGoBack}> <ArrowBackIosNewIcon sx={{ fontSize: 18, marginTop: 1 }} /> </button> <p>BACK</p>
          </div>        
         
          <div className="Code">
             A 4-digit code is sent to <br/>
             your phone number +639******741. <br/> 
             Please enter the code below to complete <br/>
             creating your account.
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