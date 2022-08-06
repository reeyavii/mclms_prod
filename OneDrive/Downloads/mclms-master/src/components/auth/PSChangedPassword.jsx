import React, { useState } from "react";
import "./Auth.styles.css";
import {useNavigate} from "react-router-dom";
import logo2 from "../../assets/logo-alimodian.png";
import logo3 from "../../assets/User.png";
import SuccessPopUp from "./SuccessPopUp";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';



function PSChangedPassword() {
     const navigate = useNavigate();
     const [showPopUp, setShowPopUp] = useState(false);
     const [oldPassword, setOldPassword] = useState("");
     const [password, setPassword] = useState("");
     const [retypePassword, setRetypePassword] = useState("");

   
  

    
     const oldPasswordChange = (e) => {
      setOldPassword(e.target.value);
    };

     const passwordChange = (e) => {
      setPassword(e.target.value);
     };

     const retypePasswordChange = (e) => {
     setRetypePassword(e.target.value);
     };

          
     const handleGoBack = (e) => {
           //go to profile setting
           navigate("/profile-setting");
           console.log("create clicked");
     };

    const handleConfirm1 = (e) => {
          //go to reset sucessful
          setShowPopUp(true);
          console.log("confirm clicked");
     };
    const handleForgotPassword = () => {
          //go to reset-password**
          navigate("/reset-password")
          console.log("login clicked");
     };
        

     const handleProfile = (e) => {
      navigate("/profile-setting");
      console.log("Profile clicked");
      };

 
    return (
    
        <div className="ContainerA">
          <div className="InnerContainer1">
            <div className="bar">
            <div className="Logo1">
            <button onClick={handleProfile}>  <AccountCircleIcon sx={{ fontSize: 60 }}/>  </button> 

            </div>
            <div className="Logo2">
             <img src={logo2} alt="logo2" />
            </div>  
         
           <div className="Economic">
            ECONOMIC<br></br>DEPARTMENT
           </div>
           </div>
           <div className="BackA">
           <button onClick={handleGoBack}>  <ArrowBackIosNewIcon sx={{ fontSize: 18, marginTop: 1 }}/>  </button> <p>BACK</p>
           </div>        
         
           <div className="Logo3">
             <img src={logo3} alt="logo3"/>   
           </div>
   
           <div className="Name">
             <p>NAME</p>
           </div>


           <div className="InputContainerE">
                <div className="InputE">
                    <input
                        placeholder="Enter old password"
                        value={oldPassword}
                        onChange={oldPasswordChange}
                     />
                </div>
                <div className="InputE">
                    <input
                        placeholder="Enter new password"
                        value={password}
                        onChange={passwordChange}
                    />
                </div>
                <div className="InputE">
                    <input
                        placeholder="Re-type new password"
                        type="retypePassword"
                        value={retypePassword}
                        onChange={retypePasswordChange}
                    />
                </div>
            </div>
               
            <div className="Confirm1">
              <button onClick={handleConfirm1}>Confirm</button>
            </div>
            <div className="ButtonP">
              <button onClick={handleForgotPassword}>Forgot Password</button>
            </div>
          </div>
          {showPopUp &&
          <SuccessPopUp labeledName={"Password changed successfully!"} navigateToHome={true} />}
        </div>
        
       
    );
  
}
    
   
export default PSChangedPassword;