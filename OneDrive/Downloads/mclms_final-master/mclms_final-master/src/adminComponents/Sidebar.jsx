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
  "Stall Status",
  "Pending Applications",
  "Payments",
  "Delinquents",
  "Archive",
];
function Sidebar(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const [selected, setSelected] = useState(0);
  const [currentPath, setCurrentPath] = useState("");
  const location = useLocation();

  useEffect(() => {
    setCurrentPath(location.pathname);
    if (token === null) {
      navigate("/admin-login");
    }
    if (location.pathname === "/lessees-list") {
      setSelected(0);
    } else if (location.pathname === "/stall-status") {
      setSelected(1);
    } else if (location.pathname === "/pending-application") {
      setSelected(2);
    } else if (location.pathname === "/lessees-payment") {
      setSelected(3);
    } else if (location.pathname === "/deliquents") {
      setSelected(4);
    } else if (location.pathname === "/archive") {
      setSelected(5);
    }
  }, [token, location.pathname]);
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
      navigate("/stall-status");
    } else if (index === 2) {
      navigate("/pending-application");
    } else if (index === 3) {
      navigate("/lessees-payment");
    } else if (index === 4) {
      navigate("/deliquents");
    } else if (index === 5) {
      navigate("/archive");
    }

    console.log(index);
  };

  const handleLO = (e) => {
    dispatch(logout());
  };

  return (
    <>
      {currentPath === "/print" ? null : (
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
                    fontSize: 18,
                    // marginTop: 2,
                    // marginBottom: 5,
                    marginLeft: -2,
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
                        ? {
                            color: "rgba(33, 34, 35, 0.776)",
                            backgroundColor: "white",
                            padding: 5,
                            borderRadius: 15,
                            width: 180,
                            fontWeight: "bolder",
                        
                          }
                        : { color: "white" }
                    }
                  >
                    {Item}
                  </p>
                  {selected === index && (
                    <NavigateNextIcon
                      sx={{ fontSize: 16, marginTop: 2.6, marginLeft: -5 }}
                    />
                  )}
                </div>
              );
            })}

            <div onClick={handleLO} className={styles.LO}>
              <p>Logout</p>
              <LogoutIcon
                sx={{
                  fontSize: 16,
                  marginTop: 9,
                  marginRight: 9,
                  color: "white",
                }}
              />
            </div>
          </div>

          <div className="NavContent">{props.children}</div>
        </div>
      )}
    </>
  );
}

export default Sidebar;
