import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../components/Login";
import Register from "../components/Register";
import AdminLogin from "../adminComponents/AdminLogin";
import AdminRegister from "../adminComponents/AdminRegister";
import Payment from "../adminComponents/Payment";
import NotFound from "../components/NotFound";
// import ReceiptDetails from "../components/ReceiptDetails";
// import HistoryPayment from "../components/HistoryPayment";
// import Blueprint from "../components/Blueprint";

function Public() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/admin-login" element={<AdminLogin />} />
      <Route path="/admin-register" element={<AdminRegister />} />
      <Route path="/register" element={<Register />} />

      {/* <Route path="/area-blueprint" element={<Blueprint />} /> */}
      {/* <Route path="/receipt-details" element={<ReceiptDetails /> 
      } /> */}
      <Route path="/lessees-payment" element={<Payment/>}/>
      <Route path="*" element={<NotFound/>} />
  
    </Routes>

  );
}

export default Public;
