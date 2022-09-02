// import React, {useEffect} from 'react'
// import "./Lessees.styles.css";
// import {useDispatch, useSelector} from 'react-redux';
// import { getLessees } from '../app/reducer/lesseeSlice';

// function StallStatus() {

//   const dispatch = useDispatch();
//   const {lessees} = useSelector(state=>state.lessee);

//   useEffect(()=>{
//     dispatch(getLessees())
// },[])
// console.log(lessees);

//   return (
//     <div className="Lessees">
//     <div className="Tables"></div>  
//     <div className="TableContent">    

//         <table>
//              <tr>
//                 <th>#</th>
//                 <th>STALL NUMBER</th>
//                 <th>STALL TYPE</th>
//                 <th>ACCOUNT NAME</th>
                
                
//              </tr>
//              {

//                 lessees.filter(item=>item.status==="requested").map((lesseeData, index) => {
//                     return(
//                         <tr key={lesseeData.id}>
//                         <td>{index+1}</td>
//                         <td >{lesseeData.stall.stallNumber}</td>
//                         <td>{lesseeData.stall.stallType}</td>
//                         <td>{lesseeData.firstName}</td>    
                       
//                      </tr>
//                     )
//                 })
//              }
//         </table>
//         </div> 
//         </div>
//   )
// }

// export default StallStatus;