import React, { useState, useEffect } from 'react'
import "./Lessees.styles.css";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useNavigate } from 'react-router';
import {useDispatch, useSelector} from 'react-redux';
import { getLessees } from '../app/reducer/lesseeSlice';

function LesseesList() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {lessees} = useSelector(state=>state.lessee);
    const {fName, setFName} = useState(" ");
    
    useEffect(()=>{
        dispatch(getLessees())
    },[])
    console.log(lessees);

    const fNameChange =  (e) => { 
        setFName (e.target.value); };

    const handleGoBack = (e) => {
        navigate("/home");
        console.log("Home clicked");
        };
    const handleAccountList = (e) => {
        navigate("/");
        console.log("Home clicked");
        };
    const handleStallStatus = (e) => {
        navigate("/home");
        console.log("Home clicked");
        };
    const handlePending = (e) => {
        navigate("/home");
        console.log("Home clicked");
        };
    const handlePayment = (e) => {
        navigate("/home");
        console.log("Home clicked");
        };
    const handleNotice = (e) => {
        navigate("/home");
        console.log("Home clicked");
        };
    const handleArchive = (e) => {
        navigate("/home");
        console.log("Home clicked");
        };
  return (
    <div className="Lessee">
        <div className="LesseeBar">
            <div className='List'>
                <div className='LesseesList'>
                  <div className="Return">
                      <button onClick={handleGoBack}>  <ArrowBackIosNewIcon sx={{ fontSize: 12, marginTop: 2, marginLeft:4}}/>  </button> <p>BACK</p>
                 </div>
                     <p>LESSEE'S LIST</p>
               </div>
               
            </div>
            <div className="ListItem">
                
                <button onClick={handleAccountList} >
                    <div className="Inside"><p>Lessee List</p>
                    <NavigateNextIcon sx={{ fontSize: 14, marginTop: 2, marginLeft: 2
          }} /> </div> </button>

          <button onClick={handleStallStatus} >
                    <div className="Inside"><p>Stall Status </p>
                    <NavigateNextIcon sx={{ fontSize: 14, marginTop: 2, marginLeft: 2
          }} /> </div> </button> 
           <button onClick={handlePending} >
                    <div className="Inside"><p>Pending Applications </p>
                    <NavigateNextIcon sx={{ fontSize: 14, marginTop: 2, marginLeft: 2
          }} /> </div> </button> 
           <button onClick={handlePayment} >
                    <div className="Inside"><p>Payments </p>
                    <NavigateNextIcon sx={{ fontSize: 14, marginTop: 2, marginLeft: 2
          }} /> </div> </button> 
           <button onClick={handleNotice} >
                    <div className="Inside"><p>Notice of Deliquencies </p>
                    <NavigateNextIcon sx={{ fontSize: 14, marginTop: 2, marginLeft: 2
          }} /> </div> </button> 

          <button onClick={handleArchive} >
                    <div className="Inside"><p>Archive</p>
                    <NavigateNextIcon sx={{ fontSize: 14, marginTop: 2, marginLeft: 2
          }} /> </div> </button>   
               </div>
               </div>
        <div className="Tables"></div>       
         <div className="TableContent">    

        <table>
             <tr>
                <th>#</th>
                <th>ACCOUNT NAME</th>
                <th>STALL NUMBER</th>
                <th>STALL TYPE</th>
             </tr>
             {

                lessees.filter(item=>item.status==="requested").map((lesseeData, index) => {
                    return(
                        <tr key={lesseeData.id}>
                        <td>{index+1}</td>
                        <td>{lesseeData.firstName}</td>    
                        <td >{lesseeData.stall.stallNumber}</td>
                        <td>{lesseeData.stall.stallType}</td>
                     </tr>
                    )
                })
             }
        </table>
        </div> 
             <div className="Details">
                <div className="DetailsContent">
                    <h2>Details</h2>
                    <div className="FName">
                        <input
                         placeholder="First Name"
                         value={fName}
                         onChange={fNameChange}
                         />
                    </div>

                </div>
             </div>

       
            
        </div>
  );
}
export default LesseesList;