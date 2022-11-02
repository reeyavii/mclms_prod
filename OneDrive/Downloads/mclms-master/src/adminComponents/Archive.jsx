import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Auth/Archive.module.css";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import { IconButton } from "@mui/material";
import { getLessees } from "../app/reducer/lesseeSlice";
import { useNavigate } from "react-router";

function Archive() {
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
    navigate(`/deliquentLetter/${id}`);
    console.log("");
  };

  return (
    <div className={styles.archive}>
      {/*<div className={styles.deliquentContent}> */}
      <div className={styles.search}>
        <input
          placeholder="Search any keyword"
          value={search}
          onChange={searchChange}
        />
      </div>
      <div className={styles.tables}>
        <p>ARCHIVE</p>
      </div>
      <div className={styles.contents}>
        <table>
          <th>Lessee</th>
          <th>Date Started</th>
          <th>Date Ended</th>
          <th> </th>

          {lessees
            .filter((lessee) => lessee.status.toLowerCase() === "archive")
            .map((lessee, index) => {
              return (
                <tr key={lessee.id}>
                  {/* <td>{index+1}</td> */}
                  
                  <td>{`${lessee.firstName} ${lessee.lastName}`}</td>
                  <td></td>
                  <td></td>

                  <td>
                    <div onClick={() => handleView(lessee.id)}>Restore Account</div>
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

export default Archive;
