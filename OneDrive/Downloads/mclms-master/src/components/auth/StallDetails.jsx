import React, {useState} from "react";
import "./Stalls.styles.css";
import {useNavigate} from "react-router-dom";
import logo2 from "../../assets/logo-alimodian.png";

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import { green } from "@mui/material/colors";

function StallDetails() {
    const navigate = useNavigate();
  
    const [area, setArea] =  useState("");
    const [monthlyRate, setMonthlyRate] =  useState("");
    const [rate, setRate] =  useState("");

  
    
    const monthlyRateChange =  (e) => { 
        setMonthlyRate(e.target.value); };

    const areaChange =  (e) => {
         setArea (e.target.value); };

    const rateChange =  (e) => { 
         setRate (e.target.value); };
          
    const handleGoBack = (e) => {
          //go to verification
          navigate("/market-rules");
          console.log("create clicked");
          };
    const handleAcquire = () => {    
          navigate("/market-rules");
          console.log();
        }
    const handleProfile = (e) => {
         navigate("/profile-setting");
         console.log("Profile clicked");
        };
    

     
 
    return (
    
        <div className="ContainerA">
          <div className="InnerContainer1">
            <div className="bar">
            <div className="Logo1">
            <button onClick={handleProfile}>  <AccountCircleIcon sx={{ fontSize: 60 }}/>  
            </button> 

            </div>
            <div className="Logo2">
             <img src={logo2} alt="logo1" />
            </div>  
         
           <div className="Economic">
            ECONOMIC<br></br>DEPARTMENT
           </div>
           </div>
                
         
           <div className="StallDetails">
            
             <div className="Stall">
                 <p>Stall #1</p>
                 <h4><RadioButtonUncheckedIcon sx={{ fontSize: 15, marginTop:1, marginRight:2, color: green[500]}}/>Available</h4>
             </div>
             <div div className="Details">       
                <div className="Groceries">
                     <p>Groceries Section</p>
                </div>
                <div className="SD">
                    <p>Stall Details</p>
                </div>
                 <div className="Area">
                        <h5>Area Leasses:</h5>
                     <input
                        placeholder=""
                        type="areaLeasses"
                        value={area}
                        onChange={areaChange}
                 /> 
                    <h5>Monthly Rate:</h5>
                      <input
                        placeholder=""
                        type="monthlyRate"
                        value={monthlyRate}
                        onChange={monthlyRateChange}
                    />
                </div>
                <div className="Area">
                        
                        <h5>Rate per sq.m</h5>
                    <input
                        placeholder=""
                        type="rate"
                        value={rate}
                        onChange={rateChange}
                    />
                </div>
           
                <div className="click">
                   <div className="BackA">
                      <button onClick={handleGoBack}>  <ArrowBackIosNewIcon sx={{ fontSize: 18, marginTop: 5  }}/>  </button> <p>BACK</p>
                    </div>  

                    <div className="Acquire">
                     <button onClick={handleAcquire}>Acquire Now</button>
                    </div>
                </div>
            </div>
            </div>
          </div>
      </div>
       
    );
  
}
  export default StallDetails;
