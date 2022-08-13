import React from 'react'
import {Routes, Route} from "react-router-dom"
import Home from "../adminComponents/Home"
import StallAdmin from '../adminComponents/StallsAdmin'

import SuccessPopUp from '../components/auth/SuccessPopUp'
import StallPopUp from '../adminComponents/StallPopUp'
import SavePopUp from '../adminComponents/SavePopUp'
import Dashboard from '../adminComponents/Dashboard'
import AdminLogin from '../adminComponents/AdminLogin'


function AdminRoute(){
    return(
        <Routes>
            <Route path="/admin-login" element={<AdminLogin/>} />
            <Route path="/home" element={<Home/>} />
            <Route path="/stalls" element={<StallAdmin/>} />
            <Route path="stallPopUp" element={<StallPopUp/>}/>
            <Route path="/success-PopUp" element={<SuccessPopUp/>} />
            <Route path="/save-changed-successfully" element={<SavePopUp/>} />
            <Route path="/dashboard" element={<Dashboard/>}/>

        </Routes>

    )
}
export default AdminRoute;