import React from 'react'
import {Routes, Route} from "react-router-dom"
import Login from '../components/Login'
import Register from '../components/Register'
import AdminLogin from '../adminComponents/AdminLogin'

function Public() {
  return (
    <Routes>
    <Route path="/" element={<Login/>} /> 
    <Route path="/Login" element={<Login/>} /> 
    <Route path="/AdminLogin" element={<AdminLogin/>} /> 
    <Route path="/register" element={<Register/>} /> 
    
    </Routes>
  )
}

export default Public