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

export const getPayment = createAsyncThunk(
  `${namespace}/getPayment`,
  async (payload, { rejectWithValue }) => {
    try {
      axios.defaults.headers = {
        "Content-Type": "application/json",
      };
      const response = await axios.get(`${API_URL}api/payments/${payload}`);
      console.log(payload);
      return response.data;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
  }
);
export const addPayment = createAsyncThunk(
  `${namespace}/addPayment`,
  async (payload, { rejectWithValue }) => {
    try {
      axios.defaults.headers = {
        "Content-Type": "application/json",
      };
      const response = await axios.post(`${API_URL}api/payments/`, payload);
      return response.data;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
  }
);
export const addReceipt = createAsyncThunk(
  `${namespace}/addReceipt`,
  async (payload, { rejectWithValue }) => {
    try {
      axios.defaults.headers = {
        "Content-Type": "application/json",
      };
      const response = await axios.post(`${API_URL}api/receipts/`, payload);
      return response.data;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
  }
);
export const getReceipt = createAsyncThunk(
  `${namespace}/getReceipt`,
  async (payload, { rejectWithValue }) => {
    try {
      axios.defaults.headers = {
        "Content-Type": "application/json",
      };
      const response = await axios.get(`${API_URL}api/receipts/`, payload);
      return response.data;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
  }
);

export const editPayment = createAsyncThunk(
  `${namespace}/editPayment`,
  async (payload, { rejectWithValue }) => {
    try {
      axios.defaults.headers = {
        "Content-Type": "application/json",
      };
      const response = await axios.put(
        `${API_URL}api/payments/${payload.id}`,
        payload
      );
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
    [getPayment.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [getPayment.fulfilled]: (state, { payload }) => {
      console.log(payload);
      state.payment = payload;
      state.error = null;
      state.loading = false;
    },
    [getPayment.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
      console.log(payload);
    },
    [addPayment.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [addPayment.fulfilled]: (state) => {
      state.error = null;
      state.loading = false;
    },
    [addPayment.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
      console.log(payload);
    },
    [editPayment.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [editPayment.fulfilled]: (state) => {
      state.error = null;
      state.loading = false;
    },
    [editPayment.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
      console.log(payload);
    },
    [addReceipt.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [addReceipt.fulfilled]: (state) => {
      state.error = null;
      state.loading = false;
    },
    [addReceipt.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
      console.log(payload);
    },
    [getReceipt.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [getReceipt.fulfilled]: (state, { payload }) => {
      state.error = null;
      state.loading = false;
      state.receipt = payload;
    },
    [getReceipt.rejected]: (state, { payload }) => {
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
