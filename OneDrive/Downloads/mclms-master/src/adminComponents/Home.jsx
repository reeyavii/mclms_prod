import React from "react";
import "./AdminAuth.styles.css";

import {useNavigate} from "react-router-dom";
import logo2 from "../assets/logo-alimodian.png";
import logoA from "../assets/Stalls.png";
import logoB from "../assets/Form.png";
import logoC from "../assets/Payment.png";
import logoE from "../assets/Notice.png"; 
import logoF from "../assets/List.png";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Home() {
  
    const navigate = useNavigate(); 
   
    
    
 
    const handleProfile = (e) => {
         //go to verification
         navigate("/profile-setting");
         console.log("profile clicked");
         };
    const handleLessee = (e) => {
         //go to verification
         navigate("/");
         console.log("profile clicked");
         };

    const handleStalls = (e) => {
         //go to verification
         navigate("/stalls");
         console.log("stalls clicked");
         };
    
    const handleApplicationForm = (e) => {
         //go to verification
         navigate("/");
         console.log("AF clicked");
         };

    const handlePayments = (e) => {
         //go to verification
         navigate("/");
         console.log("payments clicked");
         };
    const handleNotice = (e) => {
         //go to verification
         navigate("/");
         console.log("about clicked");
         };
        
    return (
    
        <div className="InnerContainer1">
            <div className="bar1">
            <div className="Logo1">

             <button onClick={handleProfile}>  <AccountCircleIcon sx={{ fontSize: 60 }}/>  </button> 

            </div>
            <div className="Logo2">
             <img src={logo2} alt="logo1" />
            </div>  
         
          <div className="Economic">
            ECONOMIC<br></br>DEPARTMENT
          </div>
          </div>
        
          <div className="Input-item">
            <div className="InputContainer">
               
            <div className="boxes">
            <div className=" box1">
                
                <div onClick={handleLessee} className="Stalls">
                    <img src={logoF} alt="logoF"/>
                    <p>Lessee's List</p>
               </div>  

               <div onClick={handleStalls} className="Stalls">
                  <img src={logoA} alt="logoA"/>
                  <p>Stalls Status</p>
               </div>

               
            </div>
            <div className=" box2">

                <div onClick={handleApplicationForm} className="Stalls">
                    <img src={logoB} alt="logoB"/>
                    <p>Application Form</p>
               </div>

               <div onClick={handlePayments} className="Stalls">
                   <img src={logoC} alt="logoC"/>
                   <p>Payments</p> 
                   <div className="smalltext">MOP and receipts</div>
               </div>
                </div>
            <div className="box3">

               <div onClick={handleNotice} className="Stalls">
                    <img src={logoE} alt="logoE"/>
                    <p>Notice of Deliquencies</p>
                   
               </div>
               </div>
               </div>
         </div>
     </div>    
     </div>            
   
       
    );
  
}
  export default Home;
