import React, { useEffect } from "react";
import { API_URL } from "../app/constants";
// import "./auth/Auth.styles.css";
import logo2 from "../assets/logo-alimodian.png";
import styles from "./auth/Header.module.css";
import HomeIcon from "@mui/icons-material/Home";
import { getProfile } from "../app/reducer/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import { deepOrange } from "@mui/material/colors";

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { imageUrl, userId, firstName, lastName } = useSelector(
    (state) => state.auth
  );

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
      <div className={styles.content}>
        <div className={styles.Logo2}>
          <div className={styles.Logo2Alim}>
            <img src={logo2} alt="logo1" />
          </div>
          <div className={styles.Economic}>
            <div className={styles.Nomic}>ECONOMIC</div>
            <div className={styles.Department}>DEPARTMENT</div>
          </div>
        </div>

        <div className={styles.Logo1}>
          <button onClick={handleHome} title="Home">
            <HomeIcon sx={{ fontSize: 25, marginTop: 1.5, color: "white" }} />
          </button>
          <div className={styles.profile}>
            <button onClick={handleProfile} title="Profile">
              {imageUrl ? (
                <img src={`${API_URL}api/profile/image/${imageUrl}`} />
              ) : (
                <Avatar
                  sx={{
                    bgcolor: deepOrange[500],
                    fontSize: 12,
                    marginTop: 1,
                    width: 35,
                    height: 35,
                  }}
                >
                  {firstName[0] + lastName[0]}
                </Avatar>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
