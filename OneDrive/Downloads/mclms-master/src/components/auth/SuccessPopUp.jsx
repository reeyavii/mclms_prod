import React from 'react'
import "./Profile.styles.css";
import {useNavigate} from "react-router-dom";
import PopLogo from "../../assets/Verified.png";


function SuccessPopUp(props) {
     const navigate = useNavigate(); 

     const handlePopSubmit = (e) => {
          //go to Home
          if (props.navigateToHome){
               navigate("/home"); 
          }
          else {
               navigate("/Login");
          }
          
          console.log("PopSubmit clicked");
      };
  return (  
       
        <div className="SuccessPop"> 
                              
             <div className="PopU">
                 <img src={PopLogo} alt='PopLogo'/>

                  <p>{props.labeledName} </p>
                </div>
                
                
                <div className="ButtonPopSuccess">
                    
                      <div className="PopSub">
                           {
                              props.navigateToHome ? <button onClick={handlePopSubmit}>go back to home </button> : <button onClick={handlePopSubmit}>Log in again </button>
                           }
                           
                      </div>
                </div>
             
    
       
       </div>
  )
}

export default SuccessPopUp;


