// import React, {useState} from "react";
// import "./AdminAuth.styles.css";
// import {useNavigate} from "react-router-dom";
// // import logo2 from "../assets/logo-alimodian.png";
// // import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
// // import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// // import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
// // import { green } from "@mui/material/colors";
// // import StallPopUp from "./StallPopUp.jsx";
// // import img from "../assets/img.png";
// // import EditIcon from '@mui/icons-material/Edit';

// function StallAdmin() {
//     const navigate = useNavigate();
  
//     const [area, setArea] =  useState("");
//     const [monthlyRate, setMonthlyRate] =  useState("");
//     const [rate, setRate] =  useState("");
//     const [showSavePopUp, setShowSavePopUp] = useState(false);
  
    
//     const monthlyRateChange =  (e) => { 
//         setMonthlyRate(e.target.value); };

//     const areaChange =  (e) => {
//          setArea (e.target.value); };

//     const rateChange =  (e) => { 
//          setRate (e.target.value); };
          
//     const handleGoBack = (e) => {
//           //go back to home
//           navigate("/home");
//           console.log("create clicked");
//           };
//     const handleUpdate = () => {    
//           navigate("/stallPopUp");
//           // setShowSavePopUp(true);
//           console.log("update clicked");
//         }
//     const handleProfile = (e) => {
//          navigate("/profile-setting");
//          console.log("Profile clicked");
//         };
//     const handleEdit = (e) => {
//         navigate("/profile-setting");
//         console.log("Profile clicked");
//         };
   
 
//     return (
    
//         <div className="StallsContainer">
           
         
//       </div>
       
//     );
  
// }
//   export default StallAdmin;
