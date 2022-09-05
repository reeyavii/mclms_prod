import React from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../app/reducer/authSlice";
import { useEffect } from "react";
import styles from "./sidebar/SideBar.module.css";
import { useState } from "react";

const menu = [
  "Lessee List",
  "Stall Status",
  "Pending Applications",
  "Payments",
  "Notice of Deliquencies",
  "Archive",
];
function Sidebar(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (token === null) {
      navigate("/admin-login");
    }
  }, [token]);
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
      navigate("/");
    } else if (index === 3) {
      navigate("/");
    } else if (index === 4) {
      navigate("/");
    } else if (index === 5) {
      navigate("/");
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
            sx={{ fontSize: 12, marginTop: 2, marginLeft: 4 }}
          />
        </div>

        {menu.map((Item, index) => {
          return (
            <div
              onClick={() => handleNavigate(index)}
              className={styles.sidebarItem}
            >
              <p>{Item}</p>
              {selected === index && (
                <NavigateNextIcon
                  sx={{ fontSize: 14, marginTop: 2, marginLeft: 2 }}
                />
              )}
            </div>
          );
        })}

        <div onClick={handleLO} className={styles.sidebarItem}>
          <p>Logout</p>
        </div>
      </div>

      <div className="NavContent">{props.children}</div>
    </div>
  );
}

export default Sidebar;
