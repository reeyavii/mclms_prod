import React from 'react'
import "./Dashboard.styles.css";
import { useNavigate } from 'react-router';
import logoAlim from "../assets/Alim_Logo.png";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Sidebar from "./Sidebar.jsx";
import styles from "./dashboard/DashBoard.module.css";

function Dashboard(props) {
    const navigate = useNavigate(); 
    const {children}= props;
    const handleProfile = (e) => {
         //go to verification
         navigate("/profile-setting");
         console.log("profile clicked");
         };

        


  return (
    <div className={styles.dashboard}> 
        <div className={styles.navbar}>
            <div className={styles.logoLeft}>
                <div className='LogoAlim'>
                     <img src={logoAlim} alt="logo1" />
                </div>
                <div className='Office'>
                    <div className='Econ'>
                        ECONOMIC
                    </div>
                    <div className='Dept'>
                        DEPARTMENT
                    </div>
                </div>

            </div>
            <div className='LogoRight'>
                     <button onClick={handleProfile}>  <AccountCircleIcon sx={{ fontSize: 35, marginTop: 2, marginRight:2, color:'white' }}/>  </button> 
            </div>
           
        </div>

        <div className='content'>
        <Sidebar/>
        {children}

        </div>

    </div>
  );
}

export default Dashboard;