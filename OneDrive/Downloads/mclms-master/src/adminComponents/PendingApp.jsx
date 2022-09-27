import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLessees } from "../app/reducer/lesseeSlice";
import { useNavigate } from "react-router";
import styles from "./Auth/Pending.module.css";

function PendingApp() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { lessee, lessees } = useSelector((state) => state.lessee);
  const [search, setSearch] = useState("");

  const searchChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    dispatch(getLessees());
  }, []);
  console.log(lessees);

  const handleView = (id) => {
    // setView(true);
    // dispatch(({}));
    navigate(`/pending-application-form/${id}`);
    console.log("");
  };

  return (
    <div className={styles.pending}>
      <div className={styles.search}>
          <input
            placeholder="Search any keyword"
            value={search}
            onChange={searchChange}
          />
        </div>
      <div className={styles.tables}></div>
      <div className={styles.contents}>
        <table>
          <th>Name</th>
          <th>Stall #</th>
          <th>Section</th>
          {/* <th>Stall Status</th> */}
          <th> </th>

          {lessees.filter(lessee => (lessee.status.toLowerCase() === "requested")).map((lessee, index) => {
            return (
              <tr key={lessee.id}>
                {/* <td>{index+1}</td> */}
                <td>{`${lessee.firstName} ${lessee.lastName}`}</td>
                <td>{lessee.stall.stallNumber}</td>
                <td>{lessee.stall.stallType}</td>
                {/* <td>{stallData.status}</td> */}
                
                <td>
                  <button onClick={() => handleView(lessee.id)}>View</button>
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
