import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStalls } from "../app/reducer/stallSlice";
import { useNavigate } from "react-router";
import styles from "./Auth/Pending.module.css";

function PendingApp() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { stalls, stall } = useSelector((state) => state.stall);

  useEffect(() => {
    dispatch(getStalls());
  }, []);
  console.log(stalls);

  const handleView = () => {
    // setView(true);
    // dispatch(({}));
    navigate("/pending-application-form");
    console.log("");
  };

  return (
    <div className={styles.pending}>
      <div className={styles.tables}></div>
      <div className={styles.contents}>
        <table>
          <th>Date</th>
          <th>Stall #</th>
          <th>Section</th>
          <th>Status</th>
          <th> </th>

          {stalls.map((stallData, index) => {
            return (
              <tr key={stallData.id}>
                {/* <td>{index+1}</td> */}
                <td>{stallData.date}</td>
                <td>{stallData.stallNumber}</td>
                <td>{stallData.stallType}</td>
                <td>{stallData.status}</td>
                <td>
                  <button onClick={() => handleView(stallData.id)}>View</button>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
}

export default PendingApp;
