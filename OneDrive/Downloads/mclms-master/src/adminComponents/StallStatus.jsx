import React, { useEffect, useState } from "react";
import "./Lessees.styles.css";
import { useDispatch, useSelector } from "react-redux";
import { getStalls } from "../app/reducer/stallSlice";
import styles from "./Auth/StallStatus.module.css";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";

function StallStatus() {
  const dispatch = useDispatch();
  const { lessees } = useSelector((state) => state.lessee);
  const { stalls, stall } = useSelector((state) => state.stall);
  const [search, setSearch] = useState("");

  const searchChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    dispatch(getStalls());
  }, []);
  console.log(stalls);

  return (
    <div className={styles.lessee}>
      <div className={styles.tables}></div>
      <div className={styles.statusContent}>
        <div className={styles.search}>
          <input
            placeholder="Search any keyword"
            value={search}
            onChange={searchChange}
          />
        </div>
        <table>
          <th>STATUS</th>
          <th>Stall #</th>
          <th>Section</th>
          <th>Description</th>
          <th>Area Leased</th>
          <th>Rate per Sq.M</th>
          <th>Monthly Payment</th>
          <th></th>

          {stalls
            .filter((item) => {
              if (search !== "") {
                if (item.stallNumber === parseInt(search) )
                {
                return item;
              } else {
                return null;
              }
            
              }
              else {return item;}
        
            })

            .map((stallData, index) => {
              return (
                <tr key={stallData.id}>
                  {/* <td>{index+1}</td> */}
                  <td>{stallData.status}</td>
                  <td>{stallData.stallNumber}</td>
                  <td>{stallData.stallType}</td>
                  <td>{stallData.description}</td>
                  <td>{stallData.dimension}</td>
                  <td>x (5.00 x 30days) = </td>
                  <td>{stallData.monthlyPayment}</td>
                  <td>
                    <BorderColorOutlinedIcon
                      sx={{ fontSize: 12, padding: 0.1 }}
                    />
                  </td>
                </tr>
              );
            })}
        </table>
      </div>
    </div>
  );
}

export default StallStatus;
