import React, {useState} from "react";
import "./auth/Profile.styles.css";
import {useNavigate} from "react-router-dom";
import logo2 from "../assets/logo-alimodian.png";
import logo3 from "../assets/User.png";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import EditIcon from '@mui/icons-material/Edit';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useDispatch } from "react-redux";
import { logout } from "../app/reducer/authSlice";

function ProfileSetting() {
    const navigate = useNavigate();
const dispatch = useDispatch();
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
           navigate("/Home");
           console.log("create clicked");
          };
    const handleEdit = (e) => {
          //go to verification
          navigate("/profile-setting-changed-email");
          console.log("Edit clicked");
           };
    const handlePhone = (e) => {
          //go to verification
          navigate("/profile-setting-changed-phone-number");
          console.log("Edit clicked");
         };
    const handlePass = (e) => {
           //go to verification
           navigate("/profile-setting-changed-password");
           console.log("Edit clicked");
            };
    const handleAddress = (e) => {
           //go to verification
           navigate("/profile-setting-changed-address");
           console.log("Edit clicked");
           };
    const handleLogOut = (e) => {
          //go to verification
          dispatch(logout());
          console.log("LogOut clicked");
          };
    const handleProfile = (e) => {
          navigate("/profile-setting");
          console.log("Profile clicked");
          };
      
 
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
           
            <div className="Logo1">
              <button onClick={handleProfile}>  <AccountCircleIcon sx={{ fontSize: 35, marginTop: 2, marginRight:2, color:'white' }}/>  </button> 
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
              <div className="Email">
                  <input
                      disabled = {true}
                      placeholder="E-mail:"
                   />
                   <input
                      disabled = {true}
                      placeholder="@gmail.com" 
                      value={email}
                      onChange={emailChange}
                   />  
                  <div className="edit">   
                     <button onClick={handleEdit}>  <EditIcon sx={{ fontSize: 23 }}/>  </button> 
         
                  </div>
                     
              </div> 
          
               <div className="Phone">
                     <input
                        disabled = {true}
                        placeholder="Phone Number"
                     />          
                     <input
                        disabled = {true}
                        placeholder="+63"
                        value={phoneNum}
                        onChange={phoneNumChange}
                     />
                      <div className="edit1">
                      <button onClick={handlePhone}>  <EditIcon sx={{ fontSize: 23 }}/>  </button> 
                    </div>
                     
                </div>
              

              <div className="Pass">
                    <input
                        disabled = {true}
                        placeholder="Password"
                    />

                    <input
                        disabled = {true}
                        placeholder=" "
                        value= {password}
                        onChange={passwordChange}
                    />
                     <div className="edit2">
                     <button onClick={handlePass}>  <EditIcon sx={{ fontSize: 23 }}/>  </button> 
                    </div>
             </div>
          
              <div className="Add">
                     <input
                        disabled = {true}
                        placeholder="Permanent Address"
                     />
                    <input
                        disabled = {true}
                        placeholder=""
                        value={permanentAddress}
                        onChange={permanentAddressChange}
                     />
                    <div className="edit3">
                    <button onClick={handleAddress}>  <EditIcon sx={{ fontSize: 23 }}/>  </button> 
                    </div>
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
