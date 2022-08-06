import React, {useState} from "react";
import "./Profile.styles.css";
import {useNavigate} from "react-router-dom";
import logo2 from "../../assets/logo-alimodian.png";
import logo3 from "../../assets/User.png";
import SuccessPopUp from "./SuccessPopUp";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function PSChangedAddress() {
    const navigate = useNavigate();
    const [showPopUp, setShowPopUp] = useState(false)
    const [brgy, setBrgy] =  useState("");
    const [province, setProvince] =  useState("");
    const [zipCode, setZipCode] =  useState("");
   
  

    
    const brgyChange =  (e) => { 
         setBrgy (e.target.value); };
    
    const provinceChange =  (e) => { 
         setProvince (e.target.value); };
    
    const zipCodeChange =  (e) => { 
         setZipCode (e.target.value); };
          
    const handleGoBack = (e) => {
           //go to verification
           navigate("/profile-setting");
           console.log("create clicked");
          };
    
          const handleProfile = (e) => {
            navigate("/profile-setting");
            console.log("Profile clicked");
            };
      
    const handleConfirm1 = (e) => {
          //go to verification
          setShowPopUp(true);
          console.log("LogOut clicked");
          };
  
 
    return (
    
        <div className="ContainerA">
          <div className="InnerContainer1">
            <div className="bar">
            <div className="Logo1">
            <button onClick={handleProfile}>  <AccountCircleIcon sx={{ fontSize: 60 }}/>  </button> 

            </div>
            <div className="Logo2">
             <img src={logo2} alt="logo2" />
            </div>  
         
           <div className="Economic">
            ECONOMIC<br></br>DEPARTMENT
           </div>
           </div>
           <div className="BackA">
           <button onClick={handleGoBack}>  <ArrowBackIosNewIcon sx={{ fontSize: 18, marginTop: 1 }}/>  </button> <p>BACK</p>
           </div>        
         
           <div className="Logo3">
             <img src={logo3} alt="logo3"/>   
           </div>
   
           <div className="Name">
             <p>NAME</p>
           </div>


            <div className="Profile"> 
                        
            <div className="Address">
                     <input
                        disabled = {true}
                        placeholder="Permanent Address:"
                     />
              <input
                        placeholder="Brgy."
                        value={brgy}
                        onChange={brgyChange}
                     />
              <input
                        placeholder="Municipality"
                        value={brgy}
                        onChange={brgyChange}
                    />    
            </div>
             <div className="Add1">
             <input
                        disabled = {true}
                        placeholder=""
                        
                    />
             
              <input
                        placeholder="Province"
                        value= {province}
                        onChange={provinceChange}
                    />
              <input
                        placeholder="Zip Code"
                        value= {zipCode}
                        onChange={zipCodeChange}
                    />
             </div>
            </div>   
               
             <div className="Confirm1">
                 <button onClick={handleConfirm1}>Confirm</button>
             </div>
          
          </div>
            {showPopUp &&
            <SuccessPopUp labeledName={"Address changed successfully!"} navigateToHome={true}/>}
          
         </div>
        
       
    );
  
}
  export default PSChangedAddress;
