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

        </Routes>

    )
}
export default AdminRoute;