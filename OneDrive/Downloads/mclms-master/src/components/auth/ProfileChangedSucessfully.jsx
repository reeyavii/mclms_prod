import React from "react";
import "./Auth.styles.css";
import {useNavigate} from "react-router-dom";
import logo1 from "../../assets/Profile.png";
import logo2 from "../../assets/logo-alimodian.png";
import logoCheck from "../../assets/Verified.png";
 


function ProfileChangedSucessfully () {
    const navigate = useNavigate();

    const handleBacktoHome = () => {
        //go to HomePage
        navigate("/Home");
        console.log("Home clicked");
      };

return (

    <div className="InnerContainerE">   
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

          <div className="LogoCheck">
             <img src={logoCheck} alt="logoCheck" />
            </div> 

       <div className="ResetPasswordF">
            Password Changed Sucessfully!
          </div>
      
        <div className="ButtonF">
          {
           <button onClick={handleBacktoHome}>Go back to Home</button>
          }
        </div>
       
    </div> 
    </div>
    
);
}

export default ProfileChangedSucessfully;