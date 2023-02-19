import React, { useEffect, useState } from "react";
import styles from "./auth/Login.module.css";
import logo from "../assets/logo-alimodian.png";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getStalls } from "../app/reducer/stallSlice";
import { authLogin } from "../app/reducer/authSlice";
import MapIcon from "@mui/icons-material/Map";

function Login() {
  const { stalls } = useSelector((state) => state.stall);
  const { token, error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getStalls());
  }, []);
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
    const data = {
      userName: email,
      password: password,
    };
    dispatch(authLogin(data));
    //home page
    console.log(stalls);

    if (token !== null) {
      navigate("/Home");
    } else {
    }
    console.log(password);
  };

  const handleCreateAccount = () => {
    //go to registration
    navigate("/register");
    console.log("create clicked");
  };
  const handleForgotPassword = () => {
    //go to reset-password
    navigate("/forgot-password-enter-email");
    console.log("forgot pass clicked");
  };
  const handleUrl = () => {
    navigate("/area-blueprint");
  };
  return (
    <div className={styles.OuterContainer}>
      <div className={styles.InnerContainer}>
        <div className={styles.BGLayer}></div>
        <div className={styles.Url}>
          <button onClick={handleUrl}>
            <MapIcon sx={{ marginBottom: -1 }} />
            Public Market Map
          </button>
        </div>
        <div className={styles.Logo}>
          <img src={logo} alt="logo" />
        </div>
        {error && <p className={styles.error}>{error}</p>}
        <div className={styles.Input}>
          <input placeholder="Email " value={email} onChange={emailChange} />
        </div>
        <div className={styles.Input}>
          <input
            placeholder="Password"
            type="password"
            value={password}
            onChange={passwordChange}
          />
        </div>
        <div className={styles.Button}>
          {email === "" || password === "" ? (
            <button disabled={true} onClick={handleLogin}>
              LOG IN
            </button>
          ) : (
            <button onClick={handleLogin}>LOG IN</button>
          )}
        </div>
        <div className={styles.Button}>
          <div className={styles.Button1}>
            <button onClick={handleCreateAccount}>Create account</button>
          </div>
          <div className={styles.Button1}>
            <button onClick={handleForgotPassword}>Forgot Password</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
