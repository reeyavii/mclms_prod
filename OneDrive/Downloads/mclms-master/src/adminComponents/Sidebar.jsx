import React from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useNavigate, useLocation } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../app/reducer/authSlice";
import { useEffect } from "react";
import styles from "./sidebar/SideBar.module.css";
import { useState } from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import { fontWeight } from "@mui/system";
import LesseesList from "./LesseesList";
import { Button } from "@mui/material";

const menu = [
  "Lessee List",
  "Lessee Data",
  "Stall Status",
  "Pending Applications",
  "Payments",
  "Delinquents",
  "Archive",
  "Notification",
];
function Sidebar(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const [selected, setSelected] = useState(0);
  const location = useLocation();

  useEffect(() => {
    if (token === null) {
      navigate("/admin-login");
    }
    if (location.pathname === "/lessees-list") {
      setSelected(0);
    } else if (location.pathname === "/lessees-data") {
      setSelected(1);
    } else if (location.pathname === "/stall-status") {
      setSelected(2);
    } else if (location.pathname === "/pending-application") {
      setSelected(3);
    } else if (location.pathname === "/lessees-payment") {
      setSelected(4);
    } else if (location.pathname === "/deliquents") {
      setSelected(5);
    } else if (location.pathname === "/archive") {
      setSelected(6);
    } else if (location.pathname === "/notification") {
      setSelected(7);
    }
  }, [token, location.path]);
  console.log(location.pathname);

  const handleGoBack = (e) => {
    navigate(-1);
    console.log("Home clicked");
  };
  const handleNavigate = (index) => {
    setSelected(index);
    if (index === 0) {
      navigate("/lessees-list");
    } else if (index === 1) {
      navigate("/lessee-data");
    } else if (index === 2) {
      navigate("/stall-status");
    } else if (index === 3) {
      navigate("/pending-application");
    } else if (index === 4) {
      navigate("/lessees-payment");
    } else if (index === 5) {
      navigate("/deliquents");
    } else if (index === 6) {
      navigate("/archive");
    } else if (index === 7) {
      navigate("/notification");
    }

    console.log(index);
  };

  const handleLO = (e) => {
    dispatch(logout());
  };

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <div className={styles.back}>
          {" "}
          <Button
            onClick={handleGoBack}
            sx={{
              fontSize: 10,
              color: "white",
              marginTop: 1,
              marginBottom: 0.5,
            }}
          >
            <ArrowBackIosNewIcon
              sx={{
                fontSize: 10,
                // marginTop: 2,
                // marginBottom: 5,
                // marginLeft: 1,
                color: "white",
              }}
            />
            Back
          </Button>
        </div>
        <div className={styles.name}>
          <h2>MCLMS</h2>
        </div>
        {menu.map((Item, index) => {
          return (
            <div
              key={index}
              onClick={() => handleNavigate(index)}
              className={styles.sidebarItem}
            >
              <p
                style={
                  selected === index
                    ? { color: "#284f8f", fontWeight: "bold" }
                    : { color: "black" }
                }
              >
                {Item}
              </p>
              {selected === index && (
                <NavigateNextIcon
                  sx={{ fontSize: 14, marginTop: 2, marginLeft: 1 }}
                />
              )}
            </div>
          );
        })}

        <div onClick={handleLO} className={styles.LO}>
          <p>Logout</p>
          <LogoutIcon sx={{ fontSize: 16, marginTop: 16, marginRight: 9 }} />
        </div>
      </div>

      <div className="NavContent">{props.children}</div>
    </div>
  );
}

export default Sidebar;
