import React from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useNavigate, useLocation } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../app/reducer/authSlice";
import { useEffect } from "react";
import styles from "./sidebar/SideBar.module.css";
import { useState } from "react";
import LogoutIcon from '@mui/icons-material/Logout';
import { fontWeight } from "@mui/system";
import LesseesList from "./LesseesList";

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
  const location = useLocation();

  useEffect(() => {
    if (token === null) {
      navigate("/admin-login");
    }
if (location.pathname === "/lessees-list"){
  setSelected(0);
}
 else if(location.pathname === "/stall-status"){
 setSelected(1);
}
else if(location.pathname === "/pending-application"){
  setSelected(2);
}else if(location.pathname === "/lessees-payment"){
  setSelected(3);
}
else if(location.pathname === "/deliquents"){
  setSelected(4);
}
else if(location.pathname === "/archive"){
  setSelected(5);
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
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <div onClick={handleGoBack} className={styles.sidebarItem}>
          {" "}
          <ArrowBackIosNewIcon
            sx={{ fontSize: 12, marginTop: 2, marginBottom:8, marginLeft: 1 }}
          />
        </div>

        {menu.map((Item, index) => {
          return (
            <div key = {index}
              onClick={() => handleNavigate(index)}
              className={styles.sidebarItem}
            >
              <p style={selected === index ? {color: "#284f8f", fontWeight:"bold"} : {color:"black"}}>{Item}</p>
              {selected === index && (
                <NavigateNextIcon
                  sx={{ fontSize: 14, marginTop: 2, marginLeft: 1 }}
                />
              )}
            </div>
          );
        })}

        <div onClick={handleLO} className={styles.LO}><p>Logout</p>
          <LogoutIcon sx={{fontSize:16,marginTop:16, marginRight:9}}/>
        </div>
      </div>

      <div className="NavContent">{props.children}</div>
    </div>
  );
}

export default Sidebar;
