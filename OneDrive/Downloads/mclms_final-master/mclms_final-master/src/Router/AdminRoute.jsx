import React from "react";
import { Routes, Route } from "react-router-dom";
import SuccessPopUp from "../components/SuccessPopUp";
import StallPopUp from "../adminComponents/StallPopUp";
import SavePopUp from "../adminComponents/SavePopUp";
import Redirect from "./Redirect";
import LesseesList from "../adminComponents/LesseesList";
import LesseesListUpdate from "../adminComponents/LesseesListUpdate";
import StallStatus from "../adminComponents/StallStatus";
import PendingApp from "../adminComponents/PendingApp";
import Payment from "../adminComponents/Payment";
import PendingAppForm from "../adminComponents/PendingAppForm";
import Deliquents from "../adminComponents/Deliquents";
import Archive from "../adminComponents/Archive";
import DeliquentNotice from "../adminComponents/DeliquentNotice";
import Notification from "../adminComponents/Notification";
import LesseeData from "../adminComponents/LesseeData";
import PrintPage from "../adminComponents/PrintPage";
import NotifItem from "../adminComponents/NotifItem";

function AdminRoute() {
  return (
    <Routes>
      <Route path="stallPopUp" element={<StallPopUp />} />
      <Route path="/success-PopUp" element={<SuccessPopUp />} />
      <Route path="/save-changed-successfully" element={<SavePopUp />} />
      <Route path="/lessees-list" element={<LesseesList />} />
      <Route path="/lessees-list-update" element={<LesseesListUpdate />} />
      <Route path="/stall-status" element={<StallStatus />} />
      <Route path="/pending-application" element={<PendingApp />} />
      <Route
      
        path="/pending-application-form/:id"
        element={<PendingAppForm />}
      />
      <Route path="/login" element={<Redirect />} />
      <Route path="/lessees-payment" element={<Payment />} />
      <Route path="/deliquents" element={<Deliquents />} />
     <Route path ="notice-of-deliquency/:id" element={<DeliquentNotice/>}/>
      <Route path="/archive" element={<Archive />} />
      <Route path="/notification" element={<Notification />} />
      <Route path="/lessee-data" element={<LesseeData/>} />
      <Route path="/lessee-data/:id" element={<LesseeData/>} />
      <Route path="/print" element={<PrintPage />} />
      <Route path="notif-item" element={<NotifItem/>}/>
    </Routes>
  );
}
export default AdminRoute;
