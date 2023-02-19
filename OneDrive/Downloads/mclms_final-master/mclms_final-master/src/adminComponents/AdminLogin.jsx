import React, { useEffect, useState } from "react";
// import "./AdminAuth.styles.css";
import styles from "./Auth/AdminLogin.module.css";
import logo from "../assets/logo-alimodian.png";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getStalls } from "../app/reducer/stallSlice";
import { authLogin } from "../app/reducer/authSlice";
// import styles from "./Auth/Login.module.css";

function AdminLogin() {
  const { stalls } = useSelector((state) => state.stall);
  const { token, error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getStalls());
    if (token !== null) {
      navigate("/admin-home");
    }
  }, [token]);

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
       navigate("/lessees-list");
    } 
   
      // if (token !== null) {
      //   navigate("/lessees-list");
      // } else {
      //   navigate("/admin-login");
      // } 
    console.log(password);
  };

  const handleCreateAccount = () => {
    //go to registration
    navigate("/admin-register");
    console.log("login clicked");
  };
  const handleForgotPassword = () => {
    //go to reset-password
    navigate("/forgot-password-enter-email");
    console.log("forgot pass clicked");
  };
  return (
    <div className={styles.BgContainer}>
      <div className={styles.BgInnerContainer}>
        <div className={styles.BGLayer}></div>
        <div className={styles.LoginLogo}>
          <img src={logo} alt="logo" />
        </div>
        {error && <p className={styles.error}>{error}</p>}
        <div className={styles.InputChange}>
          <input
            placeholder="Email"
            value={email}
            onChange={emailChange}
          />
        </div>
        <div className={styles.InputChange}>
          <input
            placeholder="Password"
            type="password"
            value={password}
            onChange={passwordChange}
          />
        </div>
        <div className={styles.AdminButtonClick}>
          {email === "" || password === "" ? (
            <button disabled={true} onClick={handleLogin}>
              LOG IN
            </button>
          ) : (
            <button onClick={handleLogin}>LOG IN</button>
          )}
        </div>

        <div className={styles.AdminButtonCreate}>
          <button onClick={handleCreateAccount}>Create account</button>
          <button onClick={handleForgotPassword}>Forgot Password</button>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
