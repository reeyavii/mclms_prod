import React from "react";
import "./auth/Auth.styles.css";
import {useNavigate} from "react-router-dom";
import logoV from "../assets/Verified1.png";

function Verified() {
    const navigate = useNavigate();

    const handleProceed = () => {
      //go to Login
        navigate ("/login");
    console.log("login clicked");

  };


    return (
      <div className="InnerContainer2">
        <div className="VerifiedEmail">
            <div className="LogoV">
              <img src={logoV} alt="logoV" />
              </div>  
                Your e-mail has been verified,<br></br> you can now log in to your account. 
         </div>
        <div className="ProceedButton">
          <button onClick={handleProceed}>Proceed to log in</button>
        </div>
      </div>
   

    );
  }
  
  export default Verified;