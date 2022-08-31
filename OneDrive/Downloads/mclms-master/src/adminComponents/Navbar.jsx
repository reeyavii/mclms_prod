import React from 'react'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useNavigate } from 'react-router';

function Navbar(props) {
    const navigate = useNavigate();
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
    const handleLO = (e) => {
        navigate("/home");
        console.log("Home clicked");
            };
  return (
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
               
             
          <div className='NavContent'>
               {props.children}
          </div>  
    </div>
  )
}

export default Navbar