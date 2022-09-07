import React from 'react'
import {Routes, Route} from "react-router-dom"
import Login from '../components/Login'
import Register from '../components/Register'
import AdminLogin from '../adminComponents/AdminLogin'
import AdminRegister from '../adminComponents/AdminRegister'


import StallStatus from '../adminComponents/StallStatus'
import Layout from '../components/Layout'


function Public() {
  return (
    <Routes>
    <Route path="/" element={<Login/>} /> 
    <Route path="/Login" element={<Login/>} /> 
    <Route path="/admin-login" element={<AdminLogin/>} />
    <Route path="/admin-register" element={<AdminRegister/>} />
    <Route path="/register" element={<Register/>} /> 


    <Route path="/area-blue-print" element={<Layout/>} />
    </Routes>
    
  )
}

export default Public