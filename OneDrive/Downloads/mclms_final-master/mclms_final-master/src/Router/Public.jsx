import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../components/Login";
import Register from "../components/Register";
import AdminLogin from "../adminComponents/AdminLogin";
import AdminRegister from "../adminComponents/AdminRegister";
import Payment from "../adminComponents/Payment";
import NotFound from "../components/NotFound";
import Verification from "../components/Verification";
import PSPNVerification from "../components/PSPNVerification";
import ForgotPass from "../components/ForgotPass";
import ForgotPassVerification from "../components/ForgotPassVerification";
import ForgotPassEmail from "../components/ForgotPassEmail";

// import ReceiptDetails from "../components/ReceiptDetails";
// import HistoryPayment from "../components/HistoryPayment";
import Blueprint from "../components/Blueprint";
import CustomTable from "../adminComponents/CustomTable";
import PrintPage from "../adminComponents/PrintPage";
import NotifItem from "../adminComponents/NotifItem";

function Public() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Login />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/admin-login" element={<AdminLogin />} />
      <Route path="/admin-register" element={<AdminRegister />} />
      <Route path="/table" element={<CustomTable />} />
      <Route path="/register" element={<Register />} />

      <Route
        path="/forgot-password-verification"
        element={<ForgotPassVerification />}
      ></Route>
      <Route
        path="/forgot-password-enter-email"
        element={<ForgotPassEmail />}
      ></Route>

      <Route
        path="/profile-setting-verification"
        element={<PSPNVerification />}
      />
      <Route path="/area-blueprint" element={<Blueprint />} />
      {/* <Route path="/receipt-details" element={<ReceiptDetails /> 
      } /> */}
      <Route path="/lessees-payment" element={<Payment />} />
      <Route path="/print" element={<PrintPage />} />
      <Route path="*" element={<NotFound />} />
      <Route path="notif-item" element={<NotifItem/>}/>
    
    </Routes>
    
  );
}

export default Public;
