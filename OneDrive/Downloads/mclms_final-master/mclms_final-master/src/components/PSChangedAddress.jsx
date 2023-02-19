import React, { useState } from "react";
import "./auth/Profile.styles.css";
import { useNavigate } from "react-router-dom";
import logo2 from "../assets/logo-alimodian.png";
import logo3 from "../assets/User.png";
import SuccessPopUp from "./SuccessPopUp";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Header from "./Header";
import { getLessee } from "../app/reducer/lesseeSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

function PSChangedAddress() {
  const navigate = useNavigate();
  const { lessee } = useSelector((state) => state.lessee);
  const dispatch = useDispatch();
  const { userId } = useSelector((state) => state.auth);
  const [showPopUp, setShowPopUp] = useState(false);
  const [address, setAddress] =  useState("");
  const [brgy, setBrgy] = useState("");
  const [municipality, setMunicipality] = useState("");
  const [province, setProvince] = useState("");
  const [zipCode, setZipCode] = useState("");

  useEffect(() => {
    dispatch(getLessee({ userId }));
  }, []);

  useEffect(() => {
    if (lessee) {
      setAddress(lessee.address);
      setBrgy(lessee.brgy);
      setProvince(lessee.province);
      setZipCode(lessee.zipCode);
      setMunicipality(lessee.municipality);
    }
  }, [lessee]);
  const addressChange = (e) => {
    setAddress(e.target.value);
  };
  const brgyChange = (e) => {
    setBrgy(e.target.value);
  };

  const provinceChange = (e) => {
    setProvince(e.target.value);
  };

  const zipCodeChange = (e) => {
    setZipCode(e.target.value);
  };

  const handleGoBack = (e) => {
    //go to verification
    navigate("/profile-setting");
    console.log("create clicked");
  };

  const handleProfile = (e) => {
    navigate("/profile-setting");
    console.log("Profile clicked");
  };

  const handleConfirm1 = (e) => {
    //go to verification
    setShowPopUp(true);
    console.log("LogOut clicked");
  };

  return (
    <div className="ContainerA">
      <div className="InnerContainer1">
        <Header />
        <div className="BackA">
          <button onClick={handleGoBack}>
            {" "}
            <ArrowBackIosNewIcon sx={{ fontSize: 20, marginTop: 1 }} />{" "}
          </button>{" "}
          {/* <p>BACK</p> */}
        </div>

        <div className="Name">
          <h1>Update Address</h1>
        </div>

        <div className="Profile">
          <div className="Address">
            <input placeholder="Permanent Address:"  value={address} onChange={(e) => setAddress(e.target.value)}/>

            <input placeholder="Brgy." value={brgy} onChange={brgyChange} />
            <input
              placeholder="Municipality"
              value={municipality}
              onChange={(e) => setMunicipality(e.target.value)}
            />
          </div>
          <div className="Add1">
            <input disabled={true} placeholder="" />

            <input
              placeholder="Province"
              value={province}
              onChange={(e) => setProvince(e.target.value)}
            />
            <input
              placeholder="Zip Code"
              value={zipCode}
              onChange={zipCodeChange}
            />
          </div>
        </div>

        <div className="Confirm1">
          <button onClick={handleConfirm1}>Confirm</button>
        </div>
      </div>
      {showPopUp && (
        <SuccessPopUp
          labeledName={"Address changed successfully!"}
          navigateToHome={true}
        />
      )}
    </div>
  );
}
export default PSChangedAddress;
