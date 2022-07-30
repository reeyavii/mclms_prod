import React, { useState } from "react";
import "./Auth.styles.css";
import {useNavigate} from "react-router-dom";
import logo1 from "../../assets/Profile.png";
import logo2 from "../../assets/logo-alimodian.png";
import logo3 from "../../assets/User.png";



function PSChangedEmail() {
     const navigate = useNavigate();

    
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
          navigate("/reset-sucessful");
          console.log("confirm clicked");
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
        </div>
        
       
    );
  
}
    
   
export default PSChangedEmail;