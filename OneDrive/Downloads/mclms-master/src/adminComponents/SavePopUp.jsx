import React from "react";
import "./PopUp.styles.css";
import {useNavigate} from "react-router-dom";
import logo2 from "../assets/logo-alimodian.png";
import logoCheck from "../assets/Verified.png";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';



function SavePopUp () {
    const navigate = useNavigate();

    const handleBacktoHome = () => {
     //go to HomePage
     navigate("/Home");
     console.log("Home clicked");
   };
   const handleProfile = (e) => {
     navigate("/profile-setting");
     console.log("Profile clicked");
     };
  

return (

     
    <div className="Dashboard">
      <div className="Save">

       <div className="Check">
        <img src={logoCheck} alt="logoCheck" />
       </div> 

       <div className="ResetPasswordF">
        Changes Save Successfully.
       </div>
      
       <div className="ButtonF">
        {
          <button onClick={handleBacktoHome}>Go back to Home</button>
        }
       </div>
      </div>
    </div> 
 
);
}

export default SavePopUp;