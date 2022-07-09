import React from 'react'
import {Routes, Route} from "react-router-dom"
import Login from '../components/auth/Login'
import Register from '../components/auth/Register'
import Verification from '../components/auth/Verification'
import Verified from '../components/auth/Verified'

function Public() {
  return (
    <Routes>
        <Route path="/" element={<Login/>} /> 
        <Route path="/register" element={<Register/>} /> 
        <Route path="/verification" element={<Verification/>} /> 
        
    </Routes>
  )
}

export default Public