import React from 'react'
import {Routes, Route} from "react-router-dom"
import Login from '../components/Login'
import Register from '../components/Register'
import Verification from '../components/Verification'
import Verified from '../components/Verified'
import Reset from '../components/Reset'
import Home from '../components/Home'
import MarketRules from '../components/MarketRules'
import ApplicationForm from '../components/ApplicationForm'
import ResetSuccessful from '../components/ResetSuccessful'
import ProfileSetting from '../components/ProfileSetting'
import PSPNVerification from '../components/PSPNVerification'
import PSChangedAddress from '../components/PSChangedAddress'
import PSChangedPassword from '../components/PSChangedPassword'
import PSChangedEmail from '../components/PSChangedEmail'
import PSChangedPhoneNumber from '../components/PSChangedPhoneNumber'
import ApplicationFormSubmission from '../components/ApplicationFormSubmission'
import Payments from '../components/Payments'
import Gcash from '../components/Gcash'
import AddGCash from '../components/AddGCash'
import StallDetails from '../components/StallDetails'
import AboutUs from '../components/AboutUs'
import AdminLogin from '../adminComponents/AdminLogin'
import Layout from '../components/Layout'


function UserRoute() {
  return (
    <Routes>
        <Route path="/" element={<Login/>} /> 
        <Route path="/Login" element={<Login/>} /> 
        <Route path="/admin-login" element={<AdminLogin/>} /> 
       
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
        <Route path="/area-blue-print" element={<Layout/>} />


   
    </Routes>
  )
}

export default UserRoute;