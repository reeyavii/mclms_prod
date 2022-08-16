import React , { useState }  from "react";
import "./auth/Payments.styles.css";
import {useNavigate} from "react-router-dom";
import logo2 from "../assets/logo-alimodian.png";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Button from '@mui/material/Button';
import logoGcash from "../assets/gcash.png";



function Gcash() {
    const navigate = useNavigate();
    const [gcashNumber, setGcashNumber] = useState("");
    const [gcashName, setGcashName] = useState("");
    const [amount, setAmount] = useState("");

    
     const gcashNumberChange = (e) => {
      setGcashNumber(e.target.value);
    };

     const gcashNameChange = (e) => {
      setGcashName(e.target.value);
     };

     const amountChange = (e) => {
     setAmount(e.target.value);
     };

    const handleGoBack = (e) => {
           //go to verification
           navigate("/payments");
           console.log("create clicked");
          };

    const handleVerify = (e) => {
        console.log("")
    }
   
      
 
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
          </div>

          <div className="Container3">
             <div className="BackA">
            <button onClick={handleGoBack}>  <ArrowBackIosNewIcon sx={{ fontSize: 18, marginTop: 1 }}/>  </button> <p>BACK</p>
            </div>  
          
            <div className="GcashAddAccount">
                <img src={logoGcash} alt="logoGcash"/>
              <div className="Gcash">
                <div className="GcashAccnt">
                    <p>G-Cash Number</p> <br/>
                      <input 
                       placeholder=""
                       value={gcashNumber}
                       onChange={gcashNumberChange} 
                       /> 
                </div> 
          
                <div className="GcashAccnt"> 
                       <p>G-Cash Name</p>    <br/> 
                     <input 
                       placeholder=""
                       value={gcashName}
                       onChange={gcashNameChange} 
                       /> 
                </div>
              

                <div className="GcashAccnt">
                      <p>Enter Amount</p><br/>
                        <input 
                       placeholder=" PHP 0.00"
                       value={amount}
                       onChange={amountChange} 
                       />     
                </div>

                <div className="GcashVerify">
                        
                    <Button onClick={handleVerify}> Verify</Button> 
                    
                </div>

             </div>

            </div>  
            
</div>  
                 

            
          
        </div>
      </div>
        
        
       
    );
  
}
  export default Gcash;
