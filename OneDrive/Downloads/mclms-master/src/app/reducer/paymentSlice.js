import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../constants";

const namespace = "payment";
const initialState = {
  payments: [],
  payment: null,
  loading: false,
  error: null,
};
export const getPayments = createAsyncThunk(
  `${namespace}/getPayments`,
  async (payload, { rejectWithValue }) => {
    try {
      axios.defaults.headers = {
        "Content-Type": "application/json",
      };
      const response = await axios.get(`${API_URL}api/payments/`);
      return response.data;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
  }
);
export const paymentSlice = createSlice({
  name: namespace,
  initialState: initialState,
  reducers: {},
  extraReducers: {
    [getPayments.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [getPayments.fulfilled]: (state, { payload }) => {
      state.payments = payload;
      state.error = null;
      state.loading = false;
    },
    [getPayments.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
      console.log(payload);
    },
    // [getStallDetail.pending]: (state) => {
    //     state.loading = true;
    //     state.error = null;
    // },
    // [getStallDetail.fulfilled]: (state, { payload}) => {
    //     state.stall = payload;
    //     state.error = null;
    //     state.loading = false;
    // },
    // [getStallDetail.rejected]: (state, {payload}) => {
    //     state.loading = false;
    //     state.error = payload;
    // },
  },
});

export default paymentSlice.reducer;
