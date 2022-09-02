import React from 'react'
import {Routes, Route} from "react-router-dom"
import SuccessPopUp from '../components/SuccessPopUp'
import StallPopUp from '../adminComponents/StallPopUp'
import SavePopUp from '../adminComponents/SavePopUp'
import AdminLogin from '../adminComponents/AdminLogin'
import AdminRegister from '../adminComponents/AdminRegister'
import LesseesList from '../adminComponents/LesseesList'
import LesseesListUpdate from "../adminComponents/LesseesListUpdate"
// import StallStatus from '../adminComponents/StallStatus'


function AdminRoute(){
    return(
        <Routes>
            <Route path="/admin-login" element={<AdminLogin/>} />
            <Route path="/admin-register" element={<AdminRegister/>} />
            <Route path="stallPopUp" element={<StallPopUp/>}/>
            <Route path="/success-PopUp" element={<SuccessPopUp/>} />
            <Route path="/save-changed-successfully" element={<SavePopUp/>} />
            <Route path="/lessees-list" element={<LesseesList/>}/>
            <Route path="/lessees-list-update" element={<LesseesListUpdate/>}/>
            {/* <Route path="/stall-status" element={<StallStatus/>}/> */}
        </Routes>

    )
}
export default AdminRoute;