import React from 'react'
import {Routes, Route} from "react-router-dom"
import Login from '../components/Login'
import Register from '../components/Register'
import AdminLogin from '../adminComponents/AdminLogin'
import AdminRegister from '../adminComponents/AdminRegister'


import StallStatus from '../adminComponents/StallStatus'


function Public() {
  return (
    <Routes>
    <Route path="/" element={<Login/>} /> 
    <Route path="/Login" element={<Login/>} /> 
    <Route path="/admin-login" element={<AdminLogin/>} />
    <Route path="/admin-register" element={<AdminRegister/>} />
    <Route path="/register" element={<Register/>} /> 


    {/* <Route path="/stall-status" element={<StallStatus/>}/> */}
    </Routes>
    
  )
}

export default Public