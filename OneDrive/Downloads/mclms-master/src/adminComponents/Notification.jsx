import React, { useState } from "react";
import styles from "./Auth/Notification.module.css";

function Notification() {
  const [search, setSearch] = useState("");
  const [seeAll, setSeeAll] = useState(false);

  const searchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSeeAll = () => {
    setSeeAll(false);
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
            <p onClick={handleSeeAll}>See all</p>
          </div>
          <div className={styles.messages}>
            <tr>
              <td>message</td>
            </tr>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notification;
