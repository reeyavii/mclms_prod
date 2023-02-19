import React from "react";
import "./auth/Auth.styles.css";
import {useNavigate} from "react-router-dom";
import logo1 from "../assets/Profile.png";
import logo2 from "../assets/logo-alimodian.png";
import logoCheck from "../assets/Verified.png";
 


function ResetSuccessful () {
    const navigate = useNavigate();

    const handleLoginAgain = () => {
        //go to verification
        navigate("/login");
        console.log("login clicked");
      };

return (

    <div className="InnerContainerE">   
         <div className="InnerContainer1">
            <div className="bar">
            <div className="Logo1">
             <img src={logo1} alt="logo1" />

            </div>
            <div className="Logo2">
             <img src={logo2} alt="logo1" />
            </div>  
         
          <div className="Economic">
            ECONOMIC<br></br>DEPARTMENT
          </div>
          </div>

          <div className="LogoCheck">
             <img src={logoCheck} alt="logoCheck" />
            </div> 

       <div className="ResetPasswordF">
            Reset password sucessful!
          </div>
      
        <div className="ButtonF">
          {
           <button onClick={handleLoginAgain}>Log in again</button>
          }
        </div>
       
    </div> 
    </div>
    
);
}

export default ResetSuccessful;