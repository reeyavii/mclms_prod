import React from "react";
import "./auth/Market.styles.css";
import { useNavigate, useParams } from "react-router-dom";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";
import Header from "./Header";

function MarketRules() {
  const navigate = useNavigate();
  const {id} = useParams();

  const [check, setCheck] = useState(false);

  const handleGoBack = (e) => {
    navigate(-1);
    console.log("Home clicked");
  };
  const handleProfile = (e) => {
    navigate("/profile-setting");
    console.log("Profile clicked");
  };

  const handleApplicationForm = () => {
    navigate(`/application-form/${id}`);
    console.log("AppForm clicked");
  };
  
  const handleHome = () => {
    navigate("/home");
    console.log("");
  }
  
  const label = { inputProps: { "aria-label": "Checkbox demo" } };


  return (
    <div className="Container">
      <div className="InnerContainer1">
      <Header />        
        <div className="BackA">
          <button onClick={handleGoBack}>
            {" "}
            <ArrowBackIosNewIcon sx={{ fontSize: 18, marginTop: 1 }} />{" "}
          </button>{" "}
          <p>BACK</p>
        </div>

        <div className="Note">
          <h2>MARKET RULES</h2>
          <h4>
            Note: Read the following guidelines carefully before proceeding to
            application form.
          </h4>
        </div>
        <div className="Note">
          <p>
            1. While I am occupying or leasing this stall/space, I shall at all
            times have my picture conveniently framed and hung up conspIcuously
            in the stall. <br />
            <br />
            2. That I shall keep the stall/space at all times in good sanitary
            condition and comply strictly with all sanitary and market rules and
            regulations now existing or which may hereafter be promulgated.{" "}
            <br />
            <br />
            3. That I shall pay the corresponding rents for the stall/space in
            the manner prescribed by existing rules and regulations. <br />
            <br />
            4. That the business to be conducted in this stall/space shall
            belong exclusively to me and I shall sell only goods and commodities
            as authorized per established sectioning as indicated on the above
            list of my choice.
            <br />
            <br />
            5. That in case I engage helpers, I shall nevertheless be present at
            the stall/space and I shall promptly notify the market authorities
            of my absence, giving my reason(s) therefore, as well as specifying
            the duration thereot.
            <br />
            <br />
            6. That I shall not sell or transfer my privilege to the stall/space
            or otherwise permit another person to conduct business therein,
            without prior approval from the Market Task Force and the Municipal
            Mayor.
          </p>
        </div>

        <div className="check">
          <Checkbox checked={check} onChange={(e) => setCheck(e.target.checked)} {...label} sx={{ marginTop: -0.5, marginLeft: -1.5 }} />

          <p>I agree to Alimodian Public Market Rules</p>
{
 check ? <div className="btn1">
            <button onClick={handleApplicationForm}> APPLICATION FORM</button>
          </div> : <div className="btn1">
            <button  disabled={true} onClick={handleApplicationForm}> APPLICATION FORM</button>
          </div> 
}
          
        </div>
      </div>
    </div>
  );
}

export default MarketRules;
