import React, {useState} from "react";
import "./auth/Application.styles.css";
import {useNavigate} from "react-router-dom";



function PasswordPopUp(props) {
  
    const navigate = useNavigate(); 
  
    const  [popPassword, setPopPassword] =  useState("");
  

    const popPasswordChange = (e) => {
        setPopPassword (e.target.value); };
    
    const handleCancel = (e) => {
        //go to Application
        navigate(-1);
        console.log("Cancel clicked");
        };
      
        
    
    return (
    
       
          <div className="PopBox">   


               <div className="PopUp">
                  
                    <p>Enter your password to submit.</p>
                </div>

                  <div className="Pbox">
                 
                   <input
                   placeholder="password"
                   type="password"
                      value={popPassword}
                      onChange={popPasswordChange}
                   />  
                  </div>
                  <div className="PopButton">
                        <div className="Cancel">
                             <button onClick={props.handleCancelPopUp}> Cancel </button>
                        </div>
                      
                        <div className="PopSubmit">
                             <button onClick={props.handlePopSubmit}>Submit</button>
                        </div>

                      
                 
                 </div>

                 
                  </div>
                  
    

              
          
                    
  
       
    );
  
}
  export default PasswordPopUp;
