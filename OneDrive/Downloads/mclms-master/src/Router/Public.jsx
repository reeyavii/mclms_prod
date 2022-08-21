import React from 'react'
import {Routes, Route} from "react-router-dom"
import Login from '../components/Login'
import Register from '../components/Register'
import AdminLogin from '../adminComponents/AdminLogin'
import AdminRegister from '../adminComponents/AdminRegister'
import LesseesList from '../adminComponents/LesseesList'
import Dashboard from '../adminComponents/Dashboard'


function Public() {
  return (
    <Routes>
    <Route path="/" element={<Login/>} /> 
    <Route path="/Login" element={<Login/>} /> 
    <Route path="/admin-login" element={<AdminLogin/>} />
    <Route path="/admin-register" element={<AdminRegister/>} />
    <Route path="/register" element={<Register/>} /> 
    <Route path="/lessees-list" element={<LesseesList/>}/>
    <Route path="/dashboard" element={<Dashboard/>}/>
    </Routes>
    
  )
}

export default Public