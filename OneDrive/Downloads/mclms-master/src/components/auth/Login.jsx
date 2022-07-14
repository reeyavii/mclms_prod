import React, { useEffect, useState } from "react";
import "./Auth.styles.css";
import logo from "../../assets/logo-alimodian.png";
import {useNavigate} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import { getStalls } from "../../app/reducer/stallSlice";
import { authLogin } from "../../app/reducer/authSlice";


function Login() {
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
      username: email,
      password: password,
    }
    dispatch(authLogin(data));
      //home page
    console.log(stalls);

    if (token !== null ){
      navigate("/verified");
    }
    console.log(password);
    
    
  };

  const handleCreateAccount = () => {
    //go to registration
    navigate("/register")
    console.log("login clicked");
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
          {
            email=== ""|| password === "" ? <button disabled={true} onClick={handleLogin}>LOG IN</button> : <button onClick={handleLogin}>LOG IN</button>
          
          }
          
        </div>
        <div className="Button">
          <button onClick={handleCreateAccount}>Create account</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
