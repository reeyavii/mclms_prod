import React, { useState } from "react";
import "./Auth.styles.css";
import {useNavigate} from "react-router-dom";
import logo1 from "../../assets/Profile.png";
import logo2 from "../../assets/logo-alimodian.png";
import logo3 from "../../assets/User.png";



function PSChangedPassword() {
     const navigate = useNavigate();

    
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
          navigate("/reset-sucessful");
          console.log("confirm clicked");
     };
    const handleForgotPassword = () => {
          //go to reset-password**
          navigate("/reset-password")
          console.log("login clicked");
     };
        
 
    return (
    
        <div className="ContainerA">
          <div className="InnerContainer1">
            <div className="bar">
            <div className="Logo1">
             <img src={logo1} alt="logo1" />

            </div>
            <div className="Logo2">
             <img src={logo2} alt="logo2" />
            </div>  
         
           <div className="Economic">
            ECONOMIC<br></br>DEPARTMENT
           </div>
           </div>
           <div className="BackA">
            <button onClick={handleGoBack}> Back </button>
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
        </div>
        
       
    );
  
}
    
   
export default PSChangedPassword;