import React, { useState } from "react";
import "./auth/Auth.styles.css";
import {useNavigate} from "react-router-dom";
import logo2 from "../assets/logo-alimodian.png";
import logo3 from "../assets/User.png";
import SuccessPopUp from "./SuccessPopUp";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';



function PSChangedEmail() {
     const navigate = useNavigate();
     const [showPopUp, setShowPopUp] = useState(false)
     const [newEmail, setNewEmail] = useState("");
     const [reEnterNewEmail, setReEnterNewEmail] = useState("");
     const [passwordConfirm, setPasswordConfirm] = useState("");

   
  

    
     const newEmailChange = (e) => {
      setNewEmail(e.target.value);
    };

     const reEnterNewEmailChange = (e) => {
      setReEnterNewEmail(e.target.value);
     };

     const passwordConfirmChange = (e) => {
     setPasswordConfirm(e.target.value);
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
           
     const handleProfile = (e) => {
      navigate("/profile-setting");
      console.log("Profile clicked");
      };

    return (
    
        <div className="ContainerA">
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
           <div className="BackA">
           <button onClick={handleGoBack}>  <ArrowBackIosNewIcon sx={{ fontSize: 20, marginTop: 1 }}/>  </button> 
           {/* <p>BACK</p> */}
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
                        placeholder="Enter new E-mail Address"
                        value={newEmail}
                        onChange={newEmailChange}
                     />
                </div>
                <div className="InputE">
                    <input
                        placeholder="Re-enter new E-mail Addess"
                        value={reEnterNewEmail}
                        onChange={reEnterNewEmailChange}
                    />
                </div>
                <div className="InputE">
                    <input
                        placeholder="Enter password to confirm"
                        type="passwordConfirm"
                        value={passwordConfirm}
                        onChange={passwordConfirmChange}
                    />
                </div>
            </div>
               
            <div className="Confirm1">
              <button onClick={handleConfirm1}>Confirm</button>
            </div>
            
          </div> 
          {showPopUp && 
          <SuccessPopUp labeledName={"E-mail changed successfully!"} navigateToHome={true}/>}
          

        </div>
        
      
    );
  
}
    
   
export default PSChangedEmail;