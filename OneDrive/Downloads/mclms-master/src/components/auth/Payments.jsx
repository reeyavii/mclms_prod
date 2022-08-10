import React from "react";
import "./Payments.styles.css";
import {useNavigate} from "react-router-dom";
import logo2 from "../../assets/logo-alimodian.png";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Button from '@mui/material/Button';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import logoGcash from "../../assets/gcash.png";
import ReceiptRoundedIcon from '@mui/icons-material/ReceiptRounded';
import { yellow } from "@mui/material/colors";
//import Stack from '@mui/material/Stack';

function Payments() {
    const navigate = useNavigate();
      

    const handleGoBack = (e) => {
           //go to verification
           navigate("/home");
           console.log("create clicked");
          };
    const handlePayBills = (e) => {
          //go to verification
          navigate("/");
          console.log("Edit clicked");
           };
    const handleReceipts = (e) => {
          //go to verification
          navigate("/");
          console.log("Edit clicked");
         };
    const handleAddGCash = (e) => {
           //go to verification
           navigate("/profile-setting-changed-password");
           console.log("Edit clicked");
            };
   
      
 
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

           <div className="BackA">
           <button onClick={handleGoBack}>  <ArrowBackIosNewIcon sx={{ fontSize: 18, marginTop: 1 }}/>  </button> <p>BACK</p>
           </div>        
         
          
            <div className="Reminder">
               <NotificationsActiveIcon sx={{fontSize: 55, marginTop: 2, marginLeft: -23, marginRight: 2 , color: yellow[500]  }}/><h3>Upcoming Payments</h3> 
             <p>Reminder: Payment of PHP <br/> 
             3,000 for stall rent is coming <br/>
             up on August 5, 2022. Make <br/>
             sure to pay before on time to <br/>
             avoid conflicts.</p>
           </div>
       


            <div className="Payment">
   

              <div className="Pay">
               
                      <Button onClick={handlePayBills}><img src={logoGcash} alt="logoGcash"/> Pay Bills</Button> 
              </div> 
          
               <div className="Pay"> 
                     <Button onClick={handleReceipts}><ReceiptRoundedIcon sx={{ fontSize: 60,marginLeft: -13, marginRight: 5, color:  [500] }}/>Receipts</Button>      
                </div>
              

              <div className="Pay">
                        
                        <Button onClick={handleAddGCash}> <AddCircleIcon sx={{ fontSize: 60, marginLeft: -1 ,marginRight: 3,}} /> Add G-cash Account</Button> 
                    
             </div>
          
             
                    
              </div>   
               
              </div>
          
            </div>
      
        
        
       
    );
  
}
  export default Payments;
