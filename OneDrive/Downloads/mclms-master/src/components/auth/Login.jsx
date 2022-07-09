import React, { useState } from "react";
import "./Auth.styles.css";
import logo from "../../assets/logo-alimodian.png";
import {useNavigate} from "react-router-dom";


function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailChange = (e) => {
    setEmail(e.target.value);
  };
  const passwordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    //login code
      navigate("/register");
    console.log("login clicked");
  };

  const handleCreateAccount = () => {
    //go to registration
    console.log("create clicked");
  };
  return (
    <div className="OuterContainer">
      <div className="InnerContainer">
        <div className="BGLayer"></div>
        <div className="Logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="Input">
          <input
            placeholder="Email or Phone Number"
            value={email}
            onChange={emailChange}
          />
        </div>
        <div className="Input">
          <input
            placeholder="Password"
            type="password"
            value={password}
            onChange={passwordChange}
          />
        </div>
        <div className="Button">
          <button onClick={handleLogin}>LOG IN</button>
        </div>
        <div className="Button">
          <button onClick={handleCreateAccount}>Create account</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
