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
import ApplicationFormSubmission from '../components/auth/ApplicationFormSubmission'
import ProfileSetting from '../components/auth/ProfileSetting'
import PSPNVerification from '../components/auth/PSPNVerification'
import ProfileChangedSucessfully from '../components/auth/ProfileChangedSucessfully' 
import PSChangedAddress from '../components/auth/PSChangedAddress'
import PSChangedPassword from '../components/auth/PSChangedPassword'
import PSChangedEmail from '../components/auth/PSChangedEmail'
import PSChangedPhoneNumber from '../components/auth/PSChangedPhoneNumber'




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
       
        <Route path="/application-form-submission" element={<ApplicationFormSubmission/>} />
        <Route path="/profile-setting" element={<ProfileSetting/>} />
        <Route path="/profile-setting-changed-phone-number" element={<PSChangedPhoneNumber/>} />
        <Route path="/profile-setting-changed-email" element={<PSChangedEmail/>} />
        <Route path="/profile-setting-changed-password" element={<PSChangedPassword/>} />
        <Route path="/profile-setting-changed-address" element={<PSChangedAddress/>} />
        <Route path="/pspn-verification" element={<PSPNVerification/>} />
        <Route path="/profile-changed-sucessfully" element={<ProfileChangedSucessfully/>} />
    </Routes>
  )
}

export default Public