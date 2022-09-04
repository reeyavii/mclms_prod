import React, {useEffect} from 'react'
import "./Lessees.styles.css";
import {useDispatch, useSelector} from 'react-redux';
import { getLessees } from '../app/reducer/lesseeSlice';

function StallStatus() {

  const dispatch = useDispatch();
  const {lessees} = useSelector(state=>state.lessee);

  useEffect(()=>{
    dispatch(getLessees())
},[])
console.log(lessees);

  return (
    <div className="Lessees">
    <div className="Tables"></div>  
    <div className="StatusContent">    

        <table>
             <tr>
                <th>STATUS</th>
                <th>Stall Number</th>
                <th>Section</th>
                <th>Area Leased</th>
                <th>Rate per Sq.M.</th>
                <th>Occupant</th>
                
                
             </tr>
             {

                lessees.filter(item=>item.status==="requested").map((lesseeData, index) => {
                    return(
                        <tr key={lesseeData.id}>
                        {/* <td>{index+1}</td> */}
                        <td >{lesseeData.stall.status}</td>
                        <td >{lesseeData.stall.stallNumber}</td>
                        <td>{lesseeData.stall.section}</td>
                        <td>{lesseeData.areaLeased}</td>    
                        <td>{lesseeData.ratePerSqm}</td>  
                        <td>{lesseeData.occupant}</td>       
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