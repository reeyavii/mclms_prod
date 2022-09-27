import React from "react";
// import "./auth/Auth.styles.css";
import {useNavigate} from "react-router-dom";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import styles from "./auth/Verification.module.css";

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
        <div className={styles.InnerContainer2}>

          <div className={styles.ButtonB}>
          <button onClick={handleGoBack}> <ArrowBackIosNewIcon sx={{ fontSize: 18, marginTop: -5 }} /> </button> <p>BACK</p>
          </div>        
         
          <div className={styles.Code}>
             A 4-digit code is sent to <br/>
             your phone number +639******741. <br/> 
             Please enter the code below to complete <br/>
             creating your account.
         </div>
         <div className={styles.line}> 
           <p>___      ___       ___       ___</p>
         </div>  
         <div className={styles.ConfirmButton}>
            <button onClick={handleConfirm}>Confirm</button>
         </div>
          <div className={styles.RequestButton}>
           <button onClick={handleRequest}>Request for a code again.</button>
         </div>
      </div>


    );
  }
  
  export default Verification;