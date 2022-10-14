import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Auth/Deliquents.module.css";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import { IconButton } from "@mui/material";
import { getLessees } from "../app/reducer/lesseeSlice";
import { useNavigate } from "react-router";

function Deliquents() {
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

  const handleSendNotice = (e) => {
    navigate("/notice-of-deliquency");
    console.log("");
}

  return (
    <div className={styles.deliquent}>
      {/*<div className={styles.deliquentContent}> */}
      <div className={styles.search}>
        <input
          placeholder="Search any keyword"
          value={search}
          onChange={searchChange}
        />
      </div>
      <div className={styles.tables}>
        <p>INCOMING DUE</p>
      </div>
      <div className={styles.contents}>
        <table>
          <th>Date</th>
          <th>Occupant</th>
          <th>Stall #</th>
          <th> </th>

          {lessees
            .filter((item) => {
              if (item.status.toLowerCase() === "approved" && search !== "") {
                if (
                  `${item.firstName.toLowerCase()} ${item.lastName.toLowerCase()}`.includes(
                    search.toLowerCase()
                  ) ||
                  item.stall.stallNumber === parseInt(search)
                ) {
                  return item;
                } else {
                  return null;
                }
              } else if (item.status.toLowerCase() === "approved") {
                return item;
              }
            })
            .map((lessee, index) => {
              return (
                <tr key={lessee.id}>
                  {/* <td>{index+1}</td> */}
                  <td></td>
                  <td>{`${lessee.firstName} ${lessee.lastName}`}</td>
                  <td>{lessee.stall.stallNumber}</td>

                  <td>
                    <div onClick={handleSendNotice}>Send Notice</div>
                  </td>
                </tr>
              );
            })}
        </table>
      </div>
    </div>

    // </div>
  );
}

export default Deliquents;
