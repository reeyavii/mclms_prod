import { configureStore } from "@reduxjs/toolkit";
import stallReducer from "./reducer/stallSlice";
import authReducer from "./reducer/authSlice";
import lesseeReducer from "./reducer/lesseeSlice";
import paymentReducer from "./reducer/paymentSlice";
import notifReducer from "./reducer/notifSlice"

export const store = configureStore({
  reducer: {
    stall: stallReducer,
    auth: authReducer,
    lessee: lesseeReducer,
    payment: paymentReducer,
    notif: notifReducer,
  },
});
