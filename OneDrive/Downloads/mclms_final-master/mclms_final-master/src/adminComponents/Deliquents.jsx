import React, { useEffect, useState, useMemo } from "react";
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

  const formatDate = () => {
    const current = new Date();
    const day = "10";
    const month = current.getMonth() + 1;
    const year = current.getFullYear();
    return `${month}-${day}-${year}`;
  };
  //useMemo here
  const searchChange = (e) => {
    setSearch(e.target.value);
  };
  useEffect(() => {
    dispatch(getLessees());
  }, []);
  console.log(lessees);

  const handleSendNotice = (e, id) => {
    navigate(`/notice-of-deliquency/${id}`);
    console.log("");
  };

  return (
    <div className={styles.deliquent}>
      <div className={styles.innerContainer}>
        <div className={styles.Bg}></div>
        <div className={styles.search}>
          <input
            placeholder="Search any keyword"
            value={search}
            onChange={searchChange}
          />
        </div>
        <div className={styles.deliquentContent}>
          <div className={styles.tables}>
            <p>OVER DUE</p>
          </div>
          <div className={styles.contents}>
            <div className={styles.blur}></div>
            <table>
              <th>Date</th>
              <th>Occupant</th>
              <th>Stall #</th>
              <th> </th>

              {lessees
                .filter((item) => {
                  if (
                    item.delinquent.toLowerCase() === "yes" &&
                    search !== ""
                  ) {
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
                  } else if (item.delinquent.toLowerCase() === "yes") {
                    return item;
                  }
                })
                .map((lessee, index) => {
                  return (
                    <tr key={lessee.id}>
                      {/* <td>{index+1}</td> */}
                      <td>{formatDate()}</td>
                      <td>{`${lessee.firstName} ${lessee.lastName}`}</td>
                      <td>{lessee.stall.stallNumber}</td>

                      <td>
                        <div
                          className={styles.sendNotice}
                          onClick={(e, id) => handleSendNotice(e, lessee.id)}
                          style={{}}
                        >
                          Send Notice
                        </div>
                      </td>
                    </tr>
                  );
                })}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Deliquents;
