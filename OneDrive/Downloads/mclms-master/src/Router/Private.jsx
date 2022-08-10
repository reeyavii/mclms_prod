import React from 'react'
import {Routes, Route} from "react-router-dom"
import Home from "../adminComponents/Home"
import StallAdmin from '../adminComponents/StallsAdmin'
import Login from '../adminComponents/Login'
import SuccessPopUp from '../components/auth/SuccessPopUp'
import StallPopUp from '../adminComponents/StallPopUp'
import SavePopUp from '../adminComponents/SavePopUp'


function Private(){
    return(
        <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/home" element={<Home/>} />
            <Route path="/stalls" element={<StallAdmin/>} />
            <Route path="stallPopUp" element={<StallPopUp/>}/>
            <Route path="/success-PopUp" element={<SuccessPopUp/>} />
            <Route path="/save-changed-successfully" element={<SavePopUp/>} />


        </Routes>

    )
}
export default Private