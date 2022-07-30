import React, { useState } from "react";
import "./Auth.styles.css";
import {useNavigate} from "react-router-dom";
import logo1 from "../../assets/Profile.png";
import logo2 from "../../assets/logo-alimodian.png";
import logo3 from "../../assets/User.png";



function PSChangedPhoneNumber() {
     const navigate = useNavigate();

    
     const [newPhoneNum, setNewPhoneNum] = useState("");
     const [reEnterNewPhoneNum, setReEnterNewPhoneNum] = useState("");
     const [passConfirm, setPassConfirm] = useState("");

   
  

    
     const newPhoneNumChange = (e) => {
      setNewPhoneNum(e.target.value);
    };

     const reEnterNewPhoneNumChange = (e) => {
      setReEnterNewPhoneNum(e.target.value);
     };

     const passConfirmChange = (e) => {
     setPassConfirm(e.target.value);
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
                        placeholder="Enter new phone number"
                        value={newPhoneNum}
                        onChange={newPhoneNumChange}
                     />
                </div>
                <div className="InputE">
                    <input
                        placeholder="Re-enter new phone number"
                        value={reEnterNewPhoneNum}
                        onChange={reEnterNewPhoneNumChange}
                    />
                </div>
                <div className="InputE">
                    <input
                        placeholder="Enter password to confirm"
                        type="passConfirm"
                        value={passConfirm}
                        onChange={passConfirmChange}
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
    
   
export default PSChangedPhoneNumber;