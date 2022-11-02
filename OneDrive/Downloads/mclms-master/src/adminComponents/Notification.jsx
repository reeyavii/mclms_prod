import { MenuItem } from "@mui/material";
import React, { useState } from "react";
import styles from "./Auth/Notification.module.css";
import Menu from "@mui/material/Menu";
import Button from "@mui/material/Button";

function Notification() {
  const [search, setSearch] = useState("");
  const [seeAll, setSeeAll] = useState(false);
  const [buttonName, setButtonName] = useState("See All");

  const searchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSeeAll = () => {
    setSeeAll(false);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={styles.container}>
      <div className={styles.notification}>
        <div className={styles.search}>
          <input
            placeholder="Search any keyword"
            value={search}
            onChange={searchChange}
          />
        </div>
        <div className={styles.content}>
          <div className={styles.table}>
            <Button
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              {buttonName}
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={() => setButtonName("See All")}>
                See All
              </MenuItem>

              <MenuItem
                onClick={() => setButtonName("Application Form Request")}
              >
                Application Form Requests
              </MenuItem>
              <MenuItem
                onClick={() => setButtonName("Edit Application Form Requests")}
              >
                Edit Application Form Requests
              </MenuItem>
              <MenuItem
                onClick={() => setButtonName("Pending Payments Confirmations")}
              >
                Pending Payment Confirmations
              </MenuItem>
            </Menu>

            {/* <p onClick={handleSeeAll}>See all</p>
          </div> */}
            <div className={styles.messages}>
              <table>
                <tr>
                  <td>Title</td>
                  <td>UserId</td>
                  <td>Message</td>
                  <td>Date</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notification;
