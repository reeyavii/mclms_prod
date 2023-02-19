import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Auth/Archive.module.css";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import { IconButton } from "@mui/material";
import { getLessees, UpdateLesseeStatus } from "../app/reducer/lesseeSlice";
import { useNavigate } from "react-router";
import Tooltip from "@mui/material/Tooltip";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";

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
    navigate(`/lessee-data/${id}`);
    console.log("");
  };
  const handleRestore = (lessee) => {
    let id = lessee.id;
    let data = { ...lessee };
    let status = "requested";
    dispatch(UpdateLesseeStatus({ id, data, status }));
    setTimeout(() => {
      navigate("/pending-application");
    },500)
  };
  return (
    <div className={styles.archive}>
      <div className={styles.BgContent}>
        <div className={styles.Bg}></div>
        <div className={styles.search}>
          <input
            placeholder="Search any keyword"
            value={search}
            onChange={searchChange}
          />
        </div>
        <div className={styles.archiveContent}>
          <div className={styles.tables}>
            <p>ARCHIVE</p>
          </div>
          <div className={styles.contents}>
            <div className={styles.blur}></div>
            <table>
              <th>Lessee</th>
              <th>Status</th>
              <th>Date Started</th>
              <th>Date Ended</th>
              <th> </th>
              <th> </th>
              {lessees
                .filter(
                  (lessee) =>
                    lessee.status.toLowerCase() === "archived" ||
                    lessee.status.toLowerCase() === "rejected"
                )
                .map((lessee, index) => {
                  return (
                    <tr key={lessee.id}>
                      {/* <td>{index+1}</td> */}

                      <td>{`${lessee.firstName} ${lessee.lastName}`}</td>
                      <td>{lessee.status}</td>
                      <td></td>
                      <td></td>

                      <td>
                        <div onClick={() => handleRestore(lessee)}>
                          Restore Account
                        </div>
                      </td>
                      <td>
                        <Tooltip title="View">
                          <IconButton onClick={() => handleView(lessee.id)}>
                            <VisibilityOutlinedIcon
                              sx={{
                                width: 18,
                                height: 20,
                                color: "black",
                                marginTop: 0.5,
                              }}
                            />
                          </IconButton>
                        </Tooltip>
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

export default Archive;
