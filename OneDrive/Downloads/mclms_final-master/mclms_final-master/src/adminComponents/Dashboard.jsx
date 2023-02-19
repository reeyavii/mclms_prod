import React, { useEffect, useState, useMemo } from "react";
// import "./Dashboard.styles.css";
import { useNavigate } from "react-router";
import logoAlim from "../assets/Alim_Logo.png";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Sidebar from "./Sidebar.jsx";
import styles from "./dashboard/DashBoard.module.css";
import PrintIcon from "@mui/icons-material/Print";
import { Tooltip } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
// import List from "@mui/material/List";
// import Divider from "@mui/material/Divider";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
// import InboxIcon from "@mui/icons-material/MoveToInbox";
// // import MailIcon from "@mui/icons-material/Mail";
// import ReceiptIcon from "@mui/icons-material/Receipt";
// import AssignmentIcon from "@mui/icons-material/Assignment";
// import TodayIcon from "@mui/icons-material/Today";
// import WarningIcon from "@mui/icons-material/Warning";
import { Badge } from "@mui/material";
import NotifItem from "./NotifItem";
import { useDispatch, useSelector } from "react-redux";
import { getNotifs } from "../app/reducer/notifSlice";
import { API_URL } from "../app/constants";
import axios from "axios";

function Dashboard(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { notifs } = useSelector((state) => state.notif);
  const [notifications, setNotifications] = useState([]);
  const badgeItems = useMemo(() => {
    return notifs.filter(
      (item) => item.messageStatus.toLowerCase() === "unread"
    ).length;
  }, [notifs]);
  const { children } = props;
  const handleNotif = (e) => {
    //go to verification
    navigate("/notification");
    console.log("profile clicked");
  };

  const textStyle = {
    "& > span": {
      color: "black",
    },
  };

  useEffect(() => {
    dispatch(getNotifs());
    // axios.defaults.headers = {
    //   "Content-Type": "application/json",
    // };
    // axios.get(`${API_URL}api/notifs/`).then((res) => {
    //   setNotifications(res.data);
    // });
  }, []);

  console.log(notifications);

  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <div className={styles.dashboard}>
      <div className={styles.BGLayer}>
        <div className={styles.navbar}>
          <div className={styles.logoLeft}>
            <div className={styles.DashboardLogoAlim}>
              <img src={logoAlim} alt="logo1" />
            </div>
            <div className={styles.Office}>
              <div className={styles.Econ}>ECONOMIC</div>
              <div className={styles.Dept}>DEPARTMENT</div>
            </div>
          </div>
          <div className={styles.LogoRight}>
            <button title="Print" onClick={() => navigate("/print")}>
              <PrintIcon
                sx={{
                  fontSize: 25,
                  marginTop: 3,
                  marginRight: 2,
                  color: "white",
                }}
              />
            </button>
            <button title="Print" onClick={() => navigate("/lessees-list")}>
              <HomeIcon
                sx={{
                  fontSize: 25,
                  marginTop: 3,
                  marginRight: 2,
                  color: "white",
                }}
              />
            </button>

            <IconButton onClick={toggleDrawer("right", true)}>
              <Badge
                badgeContent={badgeItems}
                color="primary"
                sx={{
                  fontSize: 25,
                  marginTop: -2,
                  marginRight: "30px",
                  marginLeft: "1px",
                  color: "white",
                }}
              >
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <Drawer
              anchor={"right"}
              open={state["right"]}
              onClose={toggleDrawer("right", false)}
              sx={{ marginTop: 20 }}
            >
              <Box
                sx={{
                  width:
                    "right" === "top" || "right" === "bottom" ? "auto" : 300,
                  maxHeight: "100vh",
                }}
                role="presentation"
                onClick={toggleDrawer("right", false)}
              >
                <h4 style={{ marginLeft: 10 }}>NOTIFICATIONS</h4>
                {notifs &&
                  notifs.map((item) => {
                    return (
                      <NotifItem
                        messageStatus={item.messageStatus}
                        message={item.message}
                        user={item.userId}
                        created={item.created}
                        title={item.title}
                        id={item.id}
                      />
                    );
                  })}

                {/* <Divider sx={{ marginTop: 40 }} /> */}
              </Box>
            </Drawer>
          </div>
        </div>

        <div className={styles.content}>
          <Sidebar />
          {children}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
