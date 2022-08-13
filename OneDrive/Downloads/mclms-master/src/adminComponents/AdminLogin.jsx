import React, { useEffect, useState } from "react";
import "./AdminAuth.styles.css";
import logo from "../assets/logo-alimodian.png";
import {useNavigate} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import { getStalls } from "../app/reducer/stallSlice";
import { authLogin } from "../app/reducer/authSlice";


function AdminLogin() {
  const {stalls} = useSelector(state=>state.stall);
  const {token} = useSelector(state=>state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(()=> {
    dispatch(getStalls());
  }, [])
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
    const data={
      userName: email,
      password: password,
    }
    dispatch(authLogin(data));
      //home page
    console.log(stalls);

    if (token !== null ){
      navigate("/home");
    }
    console.log(password);
    navigate("/home");
  };

  const handleCreateAccount = () => {
    //go to registration
    navigate("/register")
    console.log("login clicked");
  };
  const handleForgotPassword = () => {
    //go to reset-password
    navigate("/reset")
    console.log("login clicked");
  };
  return (
    <div className="BgrContainer">
      <div className="BgInnerContainer">
        <div className="BGLayer"></div>
        <div className="LoginLogo">
          <img src={logo} alt="logo" />
        </div>
        <div className="InputChange">
          <input
            placeholder="E-mail or Phone Number"
            value={email}
            onChange={emailChange}
          />
        </div>
        <div className="InputChange">
          <input
            placeholder="Password"
            type="password"
            value={password}
            onChange={passwordChange}
          />
        </div>
        <div className="ButtonClick">
          {
            email=== ""|| password === "" ? <button disabled={true} onClick={handleLogin}>LOG IN</button> : <button onClick={handleLogin}>LOG IN</button>
          
          }
          
        </div>
        <div className="ButtonClick">
          <div className="ButtonClick">
          <button onClick={handleCreateAccount}>Create account</button>
        </div>
        </div>
        <div className="ButtonClick">
          <button onClick={handleForgotPassword}>Forgot Password</button>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
