import React from 'react'
import {Routes, Route} from "react-router-dom"
import Home from "../adminComponents/Home"
import Login from '../components/auth/Login'


function Private(){
    return(
        <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/" element={<Home/>} />





        </Routes>

    )
}
export default Private