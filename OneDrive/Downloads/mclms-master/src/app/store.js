import { configureStore } from '@reduxjs/toolkit';
import stallReducer from "./reducer/stallSlice";
import authReducer from './reducer/authSlice';
import lesseeReducer from './reducer/lesseeSlice';

   
export const store = configureStore({
    reducer: {
        stall: stallReducer , 
        auth: authReducer,
        lessee: lesseeReducer,
  }
});
