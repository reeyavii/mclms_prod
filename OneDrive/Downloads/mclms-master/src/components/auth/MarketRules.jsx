import React from 'react';
import "./Market.styles.css";
import {useNavigate} from "react-router-dom";
import logo1 from "../../assets/Profile.png";
import logo2 from "../../assets/logo-alimodian.png";

function MarketRules() {
  const navigate = useNavigate();


    const handleGoBack = (e) => {
    navigate("/Home");
    console.log("Home clicked");
    };

    const handleApplicationForm = () => {
    navigate("/application-form");
  console.log("AppForm clicked");
    };
    const handleCheckbox = (e) => {
        navigate("/Home");
        console.log("Home clicked");
        };
  
    return (
       
    <div className="Container">

        <div className="InnerContainer1">
            <div className="bar">
            <div className="Logo1">
             <img src={logo1} alt="logo1" />

            </div>
            <div className="Logo2">
             <img src={logo2} alt="logo1" />
            </div>  
         
          <div className="Economic">
            ECONOMIC<br></br>DEPARTMENT
          </div>
          </div>
            <div className='ButtonB'>
            < button onClick={handleGoBack}> Back </button>
            </div>


        <h2>MARKET RULES</h2>
      Note: Read the following guidelines carefully before proceeding to 
        application form. <br/>
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
      
      
     
   
        <div className="check">
            <input onClick={handleCheckbox} type="checkbox"/>
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