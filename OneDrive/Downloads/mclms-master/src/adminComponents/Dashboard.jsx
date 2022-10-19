import React from 'react'
import "./Dashboard.styles.css";
import { useNavigate } from 'react-router';
import logoAlim from "../assets/Alim_Logo.png";
import NotificationsIcon from '@mui/icons-material/Notifications';
import Sidebar from "./Sidebar.jsx";
import styles from "./dashboard/DashBoard.module.css";

function Dashboard(props) {
    const navigate = useNavigate(); 
    const {children}= props;
    const handleNotif = (e) => {
         //go to verification
         navigate("/notification");
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
                     <button onClick={handleNotif}>  <NotificationsIcon sx={{ fontSize: 30, marginTop: 3, marginRight:4, color:'white' }}/>  </button> 
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