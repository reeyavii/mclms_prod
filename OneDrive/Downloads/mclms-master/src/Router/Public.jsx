import React from 'react'
import {Routes, Route} from "react-router-dom"
import Login from '../components/auth/Login'
import Register from '../components/auth/Register'
import Verification from '../components/auth/Verification'
import Verified from '../components/auth/Verified'
import Reset from '../components/auth/Reset'
import Home from '../components/auth/Home'
import MarketRules from '../components/auth/MarketRules'
import ApplicationForm from '../components/auth/ApplicationForm'
import ResetSucessful from '../components/auth/ResetSucessful'

function Public() {
  return (
    <Routes>
        <Route path="/" element={<Login/>} /> 
        <Route path="/Login" element={<Login/>} /> 
        <Route path="/register" element={<Register/>} /> 
        <Route path="/verification" element={<Verification/>} /> 
        <Route path="/verified" element={<Verified/>} /> 
        <Route path="/reset" element={<Reset/>} /> 
        
        <Route path="/home" element={<Home/>} />
        <Route path="/application-form" element={<ApplicationForm/>} />
        <Route path="/market-rules" element={<MarketRules/>} />
        <Route path="/reset-sucessful" element={<ResetSucessful/>} />

    </Routes>
  )
}

export default Public