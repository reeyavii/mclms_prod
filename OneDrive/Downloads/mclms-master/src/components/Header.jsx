import React, { useEffect } from "react";
import { API_URL } from "../app/constants";
// import "./auth/Auth.styles.css";
import logo2 from "../assets/logo-alimodian.png";
import styles from "./auth/Header.module.css";
import HomeIcon from "@mui/icons-material/Home";
import { getProfile } from "../app/reducer/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
 const { imageUrl, userId } = useSelector((state) => state.auth);
 
  useEffect(() => {
    dispatch(getProfile(userId));
  }, []);
  const handleProfile = (e) => {
    navigate("/profile-setting");
    console.log("profile clicked");
  };
  const handleHome = (e) => {
    navigate("/home");
    console.log("");
  };
  return (
    <div className={styles.bar}>
      <div className={styles.Logo2}>
        <div className={styles.Logo2Alim}>
          <img src={logo2} alt="logo1" />
        </div>
      </div>

      <div className={styles.Economic}>
        <div className={styles.Nomic}>ECONOMIC</div>
        <div className={styles.Department}>DEPARTMENT</div>
      </div>

      <div className={styles.Logo1}>
        <button onClick={handleHome}>
          <HomeIcon sx={{ fontSize: 30, marginTop: 2, color: "white" }} />
        </button>
        <div className={styles.profile}>
          <button onClick={handleProfile}>
            {imageUrl && (
              <img src={`${API_URL}api/profile/image/${imageUrl}`} />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
