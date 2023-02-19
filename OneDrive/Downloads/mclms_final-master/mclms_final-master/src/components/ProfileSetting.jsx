import React, { useState, useEffect } from "react";
import { API_URL } from "../app/constants";
// import "./auth/Profile.styles.css";
import styles from "./auth/ProfileSetting.module.css";
import { useNavigate } from "react-router-dom";
import logo2 from "../assets/logo-alimodian.png";
import logo3 from "../assets/User.png";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import EditIcon from "@mui/icons-material/Edit";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../app/reducer/authSlice";
import { getProfile, updateProfile } from "../app/reducer/authSlice";
// import HomeIcon from "@mui/icons-material/Home";
import Header from "./Header";
// import Header from "./auth/Header.module.css";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Avatar from "@mui/material/Avatar";
import { deepOrange } from "@mui/material/colors";

function ProfileSetting() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { email, phoneNumber } = useSelector((state) => state.auth);
  const [password, setPassword] = useState("");
  const [image, setImage] = useState(null);
  const [permanentAddress, setPermanentAddress] = useState("");
  const { imageUrl, userId, firstName, lastName, profile } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    dispatch(getProfile(userId));
  }, []);

  const passwordChange = (e) => {
    setPassword(e.target.value);
  };

  const permanentAddressChange = (e) => {
    setPermanentAddress(e.target.value);
  };

  const handleGoBack = (e) => {
    //go to verification
    navigate("/Home");
    console.log("create clicked");
  };
  const handleEdit = (e) => {
    //go to verification
    navigate("/profile-setting-changed-email");
    console.log("Edit clicked");
  };
  const handlePhone = (e) => {
    //go to verification
    navigate("/profile-setting-changed-phone-number");
    console.log("Edit clicked");
  };
  const handlePass = (e) => {
    //go to verification
    navigate("/profile-setting-changed-password");
    console.log("Edit clicked");
  };
  const handleAddress = (e) => {
    //go to verification
    navigate("/profile-setting-changed-address");
    console.log("Edit clicked");
  };
  const handleLogOut = (e) => {
    //go to verification
    dispatch(logout());
    navigate("/login");
    console.log("LogOut clicked");
  };
  const handleProfile = (e) => {
    navigate("/profile-setting");
    console.log("Profile clicked");
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    const id = profile.id;
    const formData = new FormData();
    formData.append("image", image);
    formData.append("email", profile.email);
    formData.append("address", profile.address);
    formData.append("id", profile.id);
    formData.append("userId", userId);
    formData.append("imageUrl", profile.imageUrl);
    dispatch(updateProfile({ id, formData }));
    setOpen(false);
  };
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.innerContainer}>
        <div className={styles.shapeContainer}>
          <div className={styles.shapeContainer1}>
            <div className={styles.shapeContainer2}>
              <div className={styles.BackA}>
                <button onClick={handleGoBack}>
                  {" "}
                  <ArrowBackIosNewIcon
                    sx={{ fontSize: 18, marginTop: 1, color: "white" }}
                  />{" "}
                </button>{" "}
              </div>

              <div className={styles.Logo3} onClick={handleClickOpen}>
                {imageUrl ? (
                  <img src={`${API_URL}api/profile/image/${imageUrl}`} />
                ) : (
                  <Avatar
                    sx={{
                      bgcolor: deepOrange[500],
                      fontSize: 25,
                      marginTop: 2,
                      width: 80,
                      height: 80,
                      marginLeft: 22,
                    }}
                  >
                    {firstName[0] + lastName[0]}
                  </Avatar>
                )}
              </div>
              <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Update Profile</DialogTitle>
                <DialogContent
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <IconButton
                    color="primary"
                    aria-label="upload picture"
                    component="label"
                    onChange={(e) => setImage(e.target.files[0])}
                  >
                    <input hidden accept="image/*" type="file" />
                    <PhotoCamera sx={{ height: 40, width: 40 }} />
                  </IconButton>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose}>Cancel</Button>
                  <Button onClick={handleSave}>Save</Button>
                </DialogActions>
              </Dialog>

              <div className={styles.Name}>
                <p>{`${firstName} ${lastName}`}</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.Profile}>
          <div className={styles.Email}>
            <input disabled={true} placeholder="E-mail:" />
            <input disabled={true} placeholder={email} value={email} />
          </div>

          <div className={styles.Phone}>
            <input disabled={true} placeholder="Phone Number:" />
            <input disabled={true} placeholder="+63" value={phoneNumber} />
            <div className={styles.edit1}>
              <button onClick={handlePhone}>
                {" "}
                <EditIcon sx={{ fontSize: 15, marginLeft: 7 }} />{" "}
              </button>
            </div>
          </div>

          <div className={styles.Pass}>
            <input disabled={true} placeholder="Password" />

            <input
              disabled={true}
              placeholder=" "
              value={password}
              onChange={passwordChange}
            />
            <div className={styles.edit2}>
              <button onClick={handlePass}>
                {" "}
                <EditIcon sx={{ fontSize: 15, marginLeft: 7 }} />{" "}
              </button>
            </div>
          </div>

          <div className={styles.LogOut}>
            <button onClick={handleLogOut}>Log Out</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProfileSetting;
