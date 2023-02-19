import React from "react";
import styles from "./Auth/NotifItem.module.css";
import ReceiptIcon from "@mui/icons-material/Receipt";
import AssignmentIcon from "@mui/icons-material/Assignment";
import TodayIcon from "@mui/icons-material/Today";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import { useNavigate } from "react-router-dom";
import { readNotif } from "../app/reducer/notifSlice";
import { useDispatch } from "react-redux";

const returnIcon = (title) => {
  if (title === "Request Application Approval") {
    return (
      <AssignmentIcon
        sx={{
          fontSize: 40,
          marginTop: 2,
          marginLeft: 1,
          color: " rgb(162, 203, 108)",
        }}
      />
    );
  }
  //  else if (title === "Edit Application Form") {
  //   return (
  //     <AssignmentIndIcon
  //       sx={{
  //         fontSize: 40,
  //         marginTop: 2,
  //         marginLeft: 1,
  //         color: " rgb(162, 203, 108)",
  //       }}
  //     />
  //   );
  // }
  else if (title === "Request Payment Confirmation") {
    return (
      <ReceiptIcon
        sx={{
          fontSize: 40,
          marginTop: 2,
          marginLeft: 1,
          color: " rgb(205, 144, 70)",
        }}
      />
    );
  } else if (title === "Due Date Notification") {
    return (
      <TodayIcon
        sx={{
          fontSize: 40,
          marginTop: 2,
          marginLeft: 1,
          color: "rgba(18, 18, 18, 0.84)",
        }}
      />
    );
  }
};
//add notif type in API

function NotifItem({
  notifType,
  user,
  created,
  messageStatus,
  title,
  message,
  id,
}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleNavigate = (title) => {
    var payload = {
      id: id,
      title: title,
      message: message,
      messageStatus: "Read",
      created: created,
      userId: user,
    };
    // newData.messageStatus = "Read";
    dispatch(readNotif({ payload, id }));
    setTimeout(() => {
      if (title === "Request Application Approval") {
        navigate("/pending-application");
      }
      // else if (title === "Edit Application Form") {}
      else if (title === "Request Payment Confirmation") {
        navigate("/lessees-payment");
      } else if (title === "Due Date Notification") {
        navigate("/deliquents");
      }
    }, 500);
  };

  console.log(messageStatus);
  return (
    <div className={styles.notifItem} onClick={() => handleNavigate(title)}>
      {/* <div className={styles.container}> */}
      {/* <div className={styles.Today}>Today</div> */}
      <div
        className={styles.message}
        style={{
          backgroundColor:
            messageStatus.toLowerCase() === "unread"
              ? "rgba(240, 235, 228, 0.977)"
              : "white",
        }}
      >
        <div className={styles.icon}>{returnIcon(title)}</div>

        <div className={styles.content}>
          <div className={styles.mainContent}>{message}</div>
          <div className={styles.subContent}>{created}</div>
        </div>
      </div>
    </div>
    // </div>
  );
}

export default NotifItem;
