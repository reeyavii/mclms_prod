import React, { useMemo } from "react";
import styles from "./auth/Layout.module.css";

const topBoxData = [
  33,
  34,
  "TE",
  "GA",
  35,
  36,
  37,
  38,
  39,
  40,
  41,
  42,
  43,
  44,
  45,
].reverse();

const midFirstData = [
  "computer shop",
  1,
  "vacant",
  2,
  "parlor",
  3,
  "office",
  4,
  "parlor",
  5,
  "comelec",
  6,
];

const midSecondData = [
  "parlor",
  7,
  "AWD",
  8,
  "RTW",
  9,
  "vacant",
  10,
  "vacant",
  11,
  "vacant",
  12,
];
const bottomData = () => {
  let data = [];
  for (let i = 13; i <= 26; i++) {
    if (i === 23) {
      data.push("GA");
    } else if (i === 24) {
      data.push("TE");
    } else {
      data.push(i);
    }
  }
  return data;
};

function Layout() {
  const bottom = bottomData();
  return (
    <div className={styles.container}>
      <div className={styles.topDiv}>
        <div className={styles.stallBoxesContainer}>
          {topBoxData.map((box) => {
            return <div className={styles.topMiniBox}>{box}</div>;
          })}
        </div>
      </div>
      <div className={styles.middleSection}>
        <div className={styles.midFirst}>
          <div className={styles.midFirstFront}>
            {midFirstData.map((box) => {
              return <div className={styles.midFirstBox}>{box}</div>;
            })}
          </div>
          <div className={styles.midFirstBack}></div>
        </div>
        <div className={styles.midSecond}>
          <div className={styles.midSecondFront}>
            {midSecondData.map((box) => {
              return <div className={styles.midSecondBox}>{box}</div>;
            })}
          </div>
          <div className={styles.midSecondBack}></div>
        </div>
      </div>
      <div className={styles.bottomSection}>
        <div className={styles.stallBoxesContainer}>
          {bottom.map((box) => {
            return <div className={styles.topMiniBox}>{box}</div>;
          })}
        </div>
      </div>
    </div>
  );
}

export default Layout;
