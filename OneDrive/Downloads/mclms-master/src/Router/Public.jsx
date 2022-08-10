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
import ResetSuccessful from '../components/auth/ResetSuccessful'

import ProfileSetting from '../components/auth/ProfileSetting'
import PSPNVerification from '../components/auth/PSPNVerification'

import PSChangedAddress from '../components/auth/PSChangedAddress'
import PSChangedPassword from '../components/auth/PSChangedPassword'
import PSChangedEmail from '../components/auth/PSChangedEmail'
import PSChangedPhoneNumber from '../components/auth/PSChangedPhoneNumber'
import ApplicationFormSubmission from '../components/auth/ApplicationFormSubmission'
import Payments from '../components/auth/Payments'
import Sample from '../components/auth/Sample'
import Gcash from '../components/auth/Gcash'
import AddGCash from '../components/auth/AddGCash'
import StallDetails from '../components/auth/StallDetails'
import AboutUs from '../components/auth/AboutUs'



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
        <Route path="/stall-details" element={<StallDetails/>} />
        <Route path="/reset-successful" element={<ResetSuccessful/>} />
        <Route path="/application-form-submitted" element={<ApplicationFormSubmission/>} />
        <Route path="/profile-setting" element={<ProfileSetting/>} />
        <Route path="/profile-setting-changed-phone-number" element={<PSChangedPhoneNumber/>} />
        <Route path="/profile-setting-changed-email" element={<PSChangedEmail/>} />
        <Route path="/profile-setting-changed-password" element={<PSChangedPassword/>} />
        <Route path="/profile-setting-changed-address" element={<PSChangedAddress/>} />
        <Route path="/profile-setting-verification" element={<PSPNVerification/>} />
        <Route path="/payments" element={<Payments/>} />
        <Route path="/gcash" element={<Gcash/>} />
        <Route path="/add-GCash" element={<AddGCash/>} />
        <Route path="/about-us" element={<AboutUs/>} />


        <Route path="/sample" element={<Sample/>} />
   
    </Routes>
  )
}

export default Public