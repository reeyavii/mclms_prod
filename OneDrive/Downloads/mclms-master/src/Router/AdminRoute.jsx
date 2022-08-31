import React from 'react'
import {Routes, Route} from "react-router-dom"
import StallAdmin from '../adminComponents/StallsAdmin'
import SuccessPopUp from '../components/SuccessPopUp'
import StallPopUp from '../adminComponents/StallPopUp'
import SavePopUp from '../adminComponents/SavePopUp'
import Dashboard from '../adminComponents/Dashboard'
import AdminLogin from '../adminComponents/AdminLogin'
import AdminRegister from '../adminComponents/AdminRegister'
import LesseesList from '../adminComponents/LesseesList'
import Navbar from '../adminComponents/Navbar'
import AdminHome from "../adminComponents/AdminHome"
import LesseesListUpdate from "../adminComponents/LesseesListUpdate"


function AdminRoute(){
    return(
        <Routes>
            <Route path="/admin-login" element={<AdminLogin/>} />
            <Route path="/admin-register" element={<AdminRegister/>} />
            <Route path="/stalls" element={<StallAdmin/>} />
            <Route path="stallPopUp" element={<StallPopUp/>}/>
            <Route path="/success-PopUp" element={<SuccessPopUp/>} />
            <Route path="/save-changed-successfully" element={<SavePopUp/>} />
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/lessees-list" element={<LesseesList/>}/>
            <Route path="/lessees-list-update" element={<LesseesListUpdate/>}/>
            <Route path="/navBar" element={<Navbar/>}/>
            <Route path="/admin-home" element={<AdminHome/>}/>
        </Routes>

    )
}
export default AdminRoute;