import React from "react";
import "./Auth.styles.css";
import {useNavigate} from "react-router-dom";

function Verified() {
    const navigate = useNavigate();

    const handleProceed = () => {
      //go to Login
        navigate("/login");
    console.log("login clicked");

  };


    return (
      <div className="InnerContainer2">
        <div className="VerifiedEmail">
        <p>
          Your e-mail has been verified,<br></br> you can now log in to your account.</p>
        </div>
        <div className="ProceedButton">
          <button onClick={handleProceed}>Proceed to log in</button>
        </div>
      </div>
   

    );
  }
  
  export default Verified;