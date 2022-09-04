import React from "react";
import "./auth/About.styles.css";
import "./auth/Application.styles.css";
import logo from "../assets/Alim_Logo.png";
import {useNavigate} from "react-router-dom";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';



function AboutUs() {
  const navigate = useNavigate();

  const handleGoBack = (e) => {
    navigate(-1);
    console.log("Home clicked");
    };
  
  return (
    <div className="OuterContainer">
      <div className="InnerContainer">
        <div className="BGLayer"></div>
        
        <div className="Content">
        <div className='BackAbout'>
            <button onClick={handleGoBack}>  <ArrowBackIosNewIcon sx={{ fontSize: 18, marginTop: 3 }}/>  </button> <p>BACK</p>
            </div>
            <div className="Alimodian">   
                 <img src={logo} alt="Logo"/>
            </div>

            <div className="About">
                <h1>ABOUT US</h1>
            </div>

            <div className="Lgu">
                <p>LGU: Alimodian</p>
                <p>Office: Municipal Economic Enterprise</p>
            </div>
           
            <div className="Mandate">
                <p>Mandate: Economic enterprise</p>
            </div>

            <div className="Org">
                <p>Organizational:  Good Governance, Empowered<br/> Citizens, Transparency, Accountability and Sustainable Economic Growth</p>
            </div>

            <div className="Vision">
                <p>Vision</p>
            </div>
            <div className="Enhance">
                <p>Enhancing aid effectiveness to support economic growth.</p>
            </div>

            <div className="Mission">
                <p>Mission</p>
            </div>
            <div className="MissionContent">
                <p>To enhance sustainable economic growth and financial stability for the welfare of the people of Alimodian through promotion	of appropriate economic and financial management methods and  systems, computerized accounting and control systems, tax administration, customs enforcement and  provision of accurate and quality national statistical informatio. We aim to promote entrepreneurship, foster  businessstart-ups and develop existing micro and small business to drive job creation and to provide  accessible high quality supports for your business ideas.</p>
            </div>
        </div>
    </div>
    </div>   
            
          
           
            
   
  );
}

export default AboutUs;
