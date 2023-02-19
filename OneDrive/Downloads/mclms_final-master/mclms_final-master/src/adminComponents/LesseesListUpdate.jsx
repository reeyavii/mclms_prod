import React, { useState, useEffect } from 'react'
import "./Lessees.styles.css";
import { useNavigate } from 'react-router';
import {useDispatch, useSelector} from 'react-redux';
import { getLessees } from '../app/reducer/lesseeSlice';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

function LesseesListUpdate() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {lessees} = useSelector(state=>state.lessee);
    const {fName, setFName} = useState(" ");
    const {lName, setLName} = useState(" ");
    const {middleInitial, setMiddleInitial} = useState(" ");
    const {birthDate, setBirthDate} = useState(" ");
    const {contNum, setContNum} = useState(" ");
    const {status, setStatus} = useState(" ");
    const {address, setAddress} = useState(" ");
    const {email, setEmail} = useState(" ");
    const {dateAcquired, setDateAcquired} = useState(" ");


    useEffect(()=>{
        dispatch(getLessees())
    },[])
    console.log(lessees);


    const fNameChange =  (e) => { 
        setFName (e.target.value); };
    const lNameChange =  (e) => { 
        setLName (e.target.value); };
    const middleInitialChange =  (e) => { 
        setMiddleInitial (e.target.value); };   
    const birthDateChange =  (e) => { 
        setBirthDate (e.target.value); };  
    const contNumChange =  (e) => { 
        setContNum (e.target.value); }; 
    const statusChange =  (e) => { 
        setStatus(e.target.value); }; 
    const addressChange =  (e) => { 
        setAddress (e.target.value); }; 
    const emailChange =  (e) => { 
        setEmail (e.target.value); }; 
    const dateAcquiredChange =  (e) => { 
        setDateAcquired (e.target.value); }; 

    //navBar
        const handleGoBack = (e) => {
            navigate("/admin-home");
            console.log("Home clicked");
            };
        const handleAccountList = (e) => {
            navigate("/lessees-list");
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
        const handleLO = (e) => {
            navigate("/login");
            console.log("Home clicked");
                };
//
    const handleDiscardDetails = (e) => {
        navigate("/home");
        console.log("Home clicked");
        };
    const handleSaveDetails = (e) => {
        navigate("/home");
        console.log("Home clicked");
        };

  return (
    <div className="Lessee">
    <div className="LesseeBar">
    <div className='List'>
        <div className='LesseesList'>
          <div className="Return">
              <button onClick={handleGoBack}>  <ArrowBackIosNewIcon sx={{ fontSize: 12, marginTop: 2, marginLeft:4}}/>  </button> 
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

<button onClick={handleLO} >
            <div className="LO"><p>Logout</p>
             </div> </button> 
             
       </div>
       </div>

    
             
        <div className="Tables"></div>       
         <div className="TableContent">    

        <table>
             <tr>
                <th>#</th>
                <th>STALL NUMBER</th>
                <th>STALL TYPE</th>
                <th>ACCOUNT NAME</th>
                
                
             </tr>
             {

                lessees.filter(item=>item.status==="requested").map((lesseeData, index) => {
                    return(
                        <tr key={lesseeData.id}>
                        <td>{index+1}</td>
                        <td >{lesseeData.stall.stallNumber}</td>
                        <td>{lesseeData.stall.stallType}</td>
                        <td>{lesseeData.firstName}</td>    
                       
                     </tr>
                    )
                })
             }
        </table>
        </div> 
             <div className="Details">
                <div className="DetailsContent">
                    <h2>Details</h2>
                    <div className="DetailsForm">
                        <input
                         placeholder="First Name"
                         value={fName}
                         onChange={fNameChange}
                         />
                    </div>
                    <div className="DetailsForm">
                        <input
                         placeholder="Last Name"
                         value={lName}
                         onChange={lNameChange}
                         />
                    </div>
                    <div className="DetailsForm">
                        <input
                         placeholder="Middle Initial"
                         value={middleInitial}
                         onChange={middleInitialChange}
                         />
                    </div>
                    <div className="DetailsForm">
                        <input
                         placeholder="Birthdate"
                         value={birthDate}
                         onChange={birthDateChange}
                         />
                    </div>
                    <div className="DetailsForm">
                        <input
                         placeholder="Contact Number"
                         value={contNum}
                         onChange={contNumChange}
                         />
                    </div>
                    <div className="DetailsForm">
                        <input
                         placeholder="Status"
                         value={status}
                         onChange={statusChange}
                         />
                    </div>
                    <div className="DetailsForm">
                        <input
                         placeholder="Address"
                         value={address}
                         onChange={addressChange}
                         />
                    </div>
                    <div className="DetailsForm">
                        <input
                         placeholder="Email"
                         value={email}
                         onChange={emailChange}
                         />
                    </div>
                    <div className="DetailsForm">
                        <input
                         placeholder="Date Acquired"
                         value={dateAcquired}
                         onChange={dateAcquiredChange}
                         />
                    </div>
                      </div>
                    <div className='DetailsButton'>
                    <button onClick={handleDiscardDetails} >
                        <div className="CancelDetails"> DISCARD CHANGES</div>
                    </button>
                    <button onClick={handleSaveDetails} >
                        <div className="AddDetails"> SAVE</div>
                    </button>
                    </div>
              
             </div>
             
        </div>
  );
}
export default LesseesListUpdate;