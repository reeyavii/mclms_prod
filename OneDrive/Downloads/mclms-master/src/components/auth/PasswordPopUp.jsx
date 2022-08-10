import React, {useState} from "react";
import "./Application.styles.css";
import {useNavigate} from "react-router-dom";



function PasswordPopUp() {
  
    const navigate = useNavigate(); 
  
    const  [popPassword, setPopPassword] =  useState("");

    const popPasswordChange = (e) => {
        setPopPassword (e.target.value); };
    
    const handleCancel = (e) => {
        //go to Application
        navigate("/application-form");
        console.log("Cancel clicked");
        };
    const handlePopSubmit = (e) => {
            //go to Application Form Submission
            navigate("/application-form-submitted");
            console.log("Submit clicked");
        };
        
    
    return (
    
       
          <div className="PopBox">
                   
                                
               <div className="PopUp">
                  
                    <p>Enter your password to submit.</p>
                </div>

                  <div className="Pbox">
                 
                   <input
                      value={popPassword}
                      onChange={popPasswordChange}
                   />  
                  </div>
                  <div className="PopButton">
                        <div className="Cancel">
                             <button onClick={handleCancel}> Cancel </button>
                        </div>
                        <div className="PopSubmit">
                             <button onClick={handlePopSubmit}>Submit</button>
                        </div>

                      
                 
                 </div>
               
                  
         
         </div>
                    
   
       
    );
  
}
  export default PasswordPopUp;
