import React from "react";
import "./Auth.styles.css";

function Verified() {


    const handleProceed = () => {
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