import React, {useState} from "react";
import "./Profile.styles.css";
import {useNavigate} from "react-router-dom";
import logo1 from "../../assets/Profile.png";
import logo2 from "../../assets/logo-alimodian.png";
import logo3 from "../../assets/User.png";

function ProfileSetting() {
    const navigate = useNavigate();

    const [email, setEmail] =  useState("");
    const [phoneNum, setPhoneNum] =  useState("");
    const [password, setPassword] =  useState("");
    const [permanentAddress, setPermanentAddress] =  useState("");
   
  

    const emailChange = (e) => {
         setEmail (e.target.value); };

    const phoneNumChange =  (e) => { 
        setPhoneNum (e.target.value); };

    const passwordChange =  (e) => { 
        setPassword (e.target.value); };

    const permanentAddressChange =  (e) => { 
         setPermanentAddress (e.target.value); };
          
    const handleGoBack = (e) => {
           //go to verification
           navigate("/login");
           console.log("create clicked");
          };

    const handleLogOut = (e) => {
          //go to verification
          navigate("/login");
          console.log("LogOut clicked");
          };
  
 
    return (
    
        <div className="ContainerA">
          <div className="InnerContainer1">
            <div className="bar">
            <div className="Logo1">
             <img src={logo1} alt="logo1" />

            </div>
            <div className="Logo2">
             <img src={logo2} alt="logo2" />
            </div>  
         
           <div className="Economic">
            ECONOMIC<br></br>DEPARTMENT
           </div>
           </div>
           <div className="BackA">
            <button onClick={handleGoBack}> Back </button>
           </div>        
         
           <div className="Logo3">
             <img src={logo3} alt="logo3"/>   
           </div>
   
           <div className="Name">
             <p>NAME</p>
           </div>


            <div className="Profile">
              <div className="Email">
                  <input
                      disabled = {true}
                      placeholder="E-mail:"
                   />
                   <input
                      placeholder="abc@gmail.com"
                      value={email}
                      onChange={emailChange}
                   />  
              </div>
         
          
          
               <div className="Phone">
                     <input
                        disabled = {true}
                        placeholder="Phone Number"
                     />          
                     <input
                        placeholder="+63"
                        value={phoneNum}
                        onChange={phoneNumChange}
                     />
              </div>

              <div className="Pass">
                    <input
                        disabled = {true}
                        placeholder="Password"
                    />

                    <input
                        placeholder="********"
                        value= {password}
                        onChange={passwordChange}
                    />
             </div>
          
              <div className="Add">
                     <input
                        disabled = {true}
                        placeholder="Permanent Address"
                     />
                    <input
                        placeholder="Alibango, Alimodian, Iloilo"
                        value={permanentAddress}
                        onChange={permanentAddressChange}
                     />
           
              </div>   
               
             <div className="LogOut">
                 <button onClick={handleLogOut}>Log Out</button>
             </div>
          
            </div>
         </div>
         </div>
       
    );
  
}
  export default ProfileSetting;
