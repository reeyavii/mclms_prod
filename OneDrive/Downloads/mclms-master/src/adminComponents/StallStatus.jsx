import React, {useEffect} from 'react'
import "./Lessees.styles.css";
import {useDispatch, useSelector} from 'react-redux';
import { getStalls } from '../app/reducer/stallSlice';

function StallStatus() {

  const dispatch = useDispatch();
  const {lessees} = useSelector(state=>state.lessee);
  const {stalls, stall} = useSelector(state=>state.stall);

  useEffect(()=>{
    dispatch(getStalls())
},[])
console.log(stalls);



  return (
    <div className="Lessee">
    <div className="Tables"></div>  
    <div className="StatusContent">    

        <table>
             <tr>
                <th>STATUS</th>
                <th>Stall Number</th>
                <th>Section</th>
                <th>Area Leased</th>
                <th>Monthly Payment</th>
                <th>Occupant</th>
                
                
             </tr>
             {

                stalls.map((stallData, index) => {
                    return(
                        <tr key={stallData.id}>
                        {/* <td>{index+1}</td> */}
                        <td >{stallData.status}</td>
                        <td >{stallData.stallNumber}</td>
                        <td>{stallData.stallType}</td>
                        <td>{stallData.dimension}</td>    
                        <td>{stallData.monthlyPayment}</td>  
                        <td>{stallData.user}</td>       
                     </tr>
                    )
                })
             }
        </table>
        </div> 
        </div>
  )
}

export default StallStatus;