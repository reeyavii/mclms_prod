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
    
        
          
               
            <div className="Adminboxes">
            <div className=" Adminbox1">
                
                <div onClick={handleLessee} className="AStalls">
                    <img src={logoF} alt="logoF"/>
                    <p>Lessee's List</p>
               </div>  

               <div onClick={handleStalls} className="AStalls">
                  <img src={logoA} alt="logoA"/>
                  <p>Stalls Status</p>
               </div>

               <div onClick={handleApplicationForm} className="AStalls">
                    <img src={logoB} alt="logoB"/>
                    <p>Application Form</p>
               </div>
               <div onClick={handlePayments} className="AStalls">
                   <img src={logoC} alt="logoC"/>
                   <p>Payments</p> 
                  
               </div>
               <div onClick={handleNotice} className="AStalls">
                    <img src={logoE} alt="logoE"/>
                    <p>Notice of Deliquencies</p>
                   
               </div>
               
            </div>
           
          </div>
        
              
  
       
    );
  
}
  export default Home;
