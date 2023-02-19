import React from "react";
import "./auth/Auth.styles.css";
import {useNavigate} from "react-router-dom";
import logo2 from "../assets/logo-alimodian.png";
import logoCheck from "../assets/Verified.png";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';



function ApplicationFormSubmission () {
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

    <div className="InnerContainerE">   
        <div className="InnerContainer1">
         <div className="bar">
            <div className="Logo2">
               <div className="Logo2Alim">
                  <img src={logo2} alt="logo1" />
               </div>  
            </div>
         
            <div className="Economic">
               <div className='Nomic'>
                    ECONOMIC
               </div>
               <div className='Department'>
                    DEPARTMENT
               </div>
            </div>
           
            <div className="Logo1">

            <button onClick={handleProfile}>  <AccountCircleIcon sx={{ fontSize: 35, marginTop: 2, marginRight:2, color:'white' }}/>  </button> 
            </div>
          </div>

          <div className="LogoCheck">
             <img src={logoCheck} alt="logoCheck" />
          </div> 

          <div className="ResetPasswordF">
            Application Form Submitted.
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

export default ApplicationFormSubmission;