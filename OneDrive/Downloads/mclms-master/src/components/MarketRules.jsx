import React from 'react';
import "./auth/Market.styles.css";
import {useNavigate} from "react-router-dom";
import logo2 from "../assets/logo-alimodian.png";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useState } from "react";


function MarketRules() {
  const navigate = useNavigate();
  const {setChecked} = useState(true);


    const handleGoBack = (e) => {
    navigate("/home");
    console.log("Home clicked");
    };
    const handleProfile = (e) => {
      navigate("/profile-setting");
      console.log("Profile clicked");
      };


    const handleApplicationForm = () => {
    navigate("/application-form");
  console.log("AppForm clicked");
    };
    const checkedChange =  (e) => {
      setChecked(e.target.checked);
        };

  
    return (
       
    <div className="Container">

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
            <button onClick={handleGoBack}>  <ArrowBackIosNewIcon sx={{ fontSize: 18, marginTop: 1 }}/>  </button> <p>BACK</p>
           </div>


        
        <div className='Note'>
        <h2>MARKET RULES</h2>
      <h4>Note: Read the following guidelines carefully before proceeding to application form.</h4></div>
      <div className='Note'>
      <p>
      1. While I am occupying or leasing this stall/space, I shall at all times 
      have my picture conveniently framed and hung up conspIcuously in the stall. <br/><br/>
      2. That I shall keep the stall/space at all times in good sanitary 
      condition and comply strictly with all sanitary and 
      market rules and regulations now existing or which may 
      hereafter be promulgated.  <br/><br/>
      3. That I shall pay the corresponding rents for the stall/space 
      in the manner prescribed by existing rules and 
      regulations. <br/><br/>
      4. That the business to be conducted in this stall/space shall 
      belong exclusively to me and I shall sell only goods 
      and commodities as authorized per established sectioning as 
      indicated on the above list of my choice.<br/><br/>
      5. That in case I engage helpers, I shall nevertheless be present 
      at the stall/space and I shall promptly notify the 
      market authorities of my absence, giving my reason(s) 
       therefore, as well as specifying the duration thereot.<br/><br/>
       6. That I shall not sell or transfer my privilege to the stall/space 
      or otherwise permit another person to conduct 
      business therein, without prior approval from the Market Task 
      Force and the Municipal Mayor. 
      </p>
      </div>
      
     
   
        <div className="check">
            <input onClick={checkedChange} type="checkbox"/>
              <p>I agree to Alimodian Public Market Rules</p> 
              
       <div className='btn1'>
            < button onClick={handleApplicationForm}> APPLICATION FORM</button>
              </div>
        </div> 
        
        
        
        
    </div>
   </div>
    );
 
  }

export default MarketRules;