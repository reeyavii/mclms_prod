import React, {useState} from "react";
import "./Auth.styles.css";
import {useNavigate} from "react-router-dom";
import logo1 from "../../assets/Profile.png";
import logo2 from "../../assets/logo-alimodian.png";
import logoA from "../../assets/Stalls.png";
import logoB from "../../assets/Application Form.png";
import logoC from "../../assets/Payment.png";
import logoD from "../../assets/About Us.png"; 

function Home() {
  
    const navigate = useNavigate(); 
    const [search, setSearch] = useState("");   
    
    
    const searchChange = (e) => {
        setSearch(e.target.value); };

    const handleStalls = (e) => {
          //go to verification
          navigate("/");
          console.log("stalls clicked");
          };
    
    const handleApplicationForm = (e) => {
            //go to verification
            navigate("/market-rules");
            console.log("AF clicked");
            };

    const handlePayments = (e) => {
                //go to verification
                navigate("/");
                console.log("payments clicked");
                };
    const handleAboutUs = (e) => {
                    //go to verification
                    navigate("/");
                    console.log("about clicked");
                    };
        
    return (
    
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
        
          <div className="Input-item">
            <div className="InputContainer">
                <div className="Search">
                 <input
                     placeholder="Search any keyword"
                     value={search}
                     onChange={searchChange}
                 />
                </div>
                </div>
            <div className=" box1">
                                
               <div onClick={handleStalls} className="Stalls">
                  <img src={logoA} alt="logoA"/>
                  <p>Stalls</p>
                  <div className="smalltext">See available stalls here</div>
               </div>

               <div onClick={handleApplicationForm} className="Stalls">
                    <img src={logoB} alt="logoB"/>
                    <p>Application Form</p>
                    <div className="smalltext">Fill up to acquire stall</div>
               </div>
            </div>
            <div className=" box2">
               <div onClick={handlePayments} className="Stalls">
                   <img src={logoC} alt="logoC"/>
                   <p>Payments</p> 
                   <div className="smalltext">MOP and receipts</div>
               </div>

               <div onClick={handleAboutUs} className="Stalls">
                    <img src={logoD} alt="logoD"/>
                    <p>About Us</p>
                    <div className="smalltext">Contact Information</div>
               </div>
               </div>
         </div>
     </div>                
   
       
    );
  
}
  export default Home;
