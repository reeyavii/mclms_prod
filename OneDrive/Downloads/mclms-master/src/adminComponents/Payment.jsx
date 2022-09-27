import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLessees } from "../app/reducer/lesseeSlice";
import { getStalls } from "../app/reducer/stallSlice";
import styles from "./Auth/Payment.module.css";

function Payment() {
  const dispatch = useDispatch();
  const { lessees } = useSelector((state) => state.lessee);
  const { stalls, stall } = useSelector((state) => state.stall);

  useEffect(() => {
    dispatch(getLessees());
  }, []);
  console.log(lessees);

  return (
    <div className={styles.lessee}>
      <div className={styles.tables}></div>
      <div className={styles.tableContent}>
      <div className={styles.Payment}>
        <table>
          <th>Stall Number</th>
          <th>Occupant</th>

          {stalls.map((stallData, index) => {
            return (
              <tr key={stallData.id}>
                <td>{stallData.stallNumber}</td>
                {/* <td>{`${lesseeData.firstName} ${lesseeData.lastName}`} </td> */}
              </tr>
            );
          })}
        </table>
      </div>
    
      
      <div className={styles.PaymentDetails}>
        
        <table>

          <th>Date</th>
          <th>O.R No.</th>
          <th>Amount</th>
          <th>Penalty</th>
          <th>TOTAL</th>  
          </table> 

          {stalls.map((stallData, index) => {
            return (
<tr key={stallData.id}>
  
  <td>{stallData.date}</td>
                <td>{stallData.OR}</td>
                <td>{stallData.Amount}</td>
                <td>{stallData.Penalty}</td>
                <td>{stallData.Total}</td>
</tr>
            );

          })}

          </div> 
          </div>

          
             
{/* data not recognize */}
      
     
    </div>
  );
}

export default Payment;
