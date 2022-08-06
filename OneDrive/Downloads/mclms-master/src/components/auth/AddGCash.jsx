import React , { useState }  from "react";
import "./Payments.styles.css";
import {useNavigate} from "react-router-dom";
import logo2 from "../../assets/logo-alimodian.png";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Button from '@mui/material/Button';
import logoGcash from "../../assets/gcash.png";



function AddGCash() {
    const navigate = useNavigate();
   
    const [gcashName, setGcashName] = useState("");
    const [amount, setAmount] = useState("");

    

     const gcashNameChange = (e) => {
      setGcashName(e.target.value);
     };

     const amountChange = (e) => {
     setAmount(e.target.value);
     };

    const handleGoBack = (e) => {
           //go to verification
           navigate("/login");
           console.log("create clicked");
          };

    const handleVerify = (e) => {
        console.log("")
    }
   
      
 
    return (
    
        <div className="ContainerA">
          <div className="InnerContainer1">
            <div className="bar">
            <div className="Logo1">
                   
                </div> 
                
                <div className="Logo2">
                     <img src={logo2} alt="logo2" />
                </div> 
                <div className="Econimic">
                     
                </div> 
           </div>

            <div className="Container3">
           <div className="BackA">
           <button onClick={handleGoBack}>  <ArrowBackIosNewIcon sx={{ fontSize: 18, marginTop: 1 }}/>  </button> <p>BACK</p>
           </div>        

            <div className="GcashAddAccount">
                <img src={logoGcash} alt="logoGcash"/>

            <div className="Gcash">
              <div className="Pay1">
                <div className="AccntDefault">
                <input
                        disabled = {true}
                        placeholder="NAME"
                    />

                    <input
                        disabled = {true}
                        placeholder="09*********"
                        
                    />
                   
                </div>
                <div className="AccntDefault">
                <input
                        disabled = {true}
                        placeholder="Delete"
                    />

                    <input
                        disabled = {true}
                        placeholder="Set as Default"
                        
                    />
                     
                </div>
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
             </div>
                <div className="GcashVerify">
                        
                    <Button onClick={handleVerify}> Confirm</Button> 
                    
                </div>
                    
              </div>   
               
              </div>
          
            </div>
            </div>
        
        
       
    );
  
}
  export default AddGCash;
