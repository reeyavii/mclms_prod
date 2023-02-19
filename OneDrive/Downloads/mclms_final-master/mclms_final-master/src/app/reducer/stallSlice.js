import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../constants";

const namespace = "stall";
const initialState = {
  stalls: [],
  stall: null,
  loading: false,
  error: null,
};
export const getStalls = createAsyncThunk(
  `${namespace}/getStalls`,
  async (payload, { rejectWithValue }) => {
    try {
      axios.defaults.headers = {
        "Content-Type": "application/json",
      };
      const response = await axios.get(`${API_URL}api/stalls/`);
      return response.data;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
  }
);
export const getStall = createAsyncThunk(
  `${namespace}/getStall`,
  async (payload, { rejectWithValue }) => {
    try {
      axios.defaults.headers = {
        "Content-Type": "application/json",
      };
      const response = await axios.get(`${API_URL}api/stalls/${payload}`);
      return response.data;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
  }
);
export const editStall = createAsyncThunk(
  `${namespace}/editStall`,
  async ({ id, formData }, { rejectWithValue }) => {
    try {
      axios.defaults.headers = {
        "Content-Type": "application/json",
      };
      const response = await axios.put(`${API_URL}api/stalls/${id}`, formData);
      return response.data;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.message);
    }
  }
);
export const addStall = createAsyncThunk(
  `${namespace}/addStall`,
  async ({ formData }, { rejectWithValue }) => {
    try {
      axios.defaults.headers = {
        "Content-Type": "application/json",
      };
      const response = await axios.post(`${API_URL}api/stalls/`, formData);
      return response.data;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.message);
    }
  }
);

export const stallSlice = createSlice({
  name: namespace,
  initialState: initialState,
  reducers: {},
  extraReducers: {
    [getStalls.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [getStalls.fulfilled]: (state, { payload }) => {
      state.stalls = payload;
      state.error = null;
      state.loading = false;
    },
    [getStalls.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
      console.log(payload);
    },
    [getStall.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [getStall.fulfilled]: (state, { payload }) => {
      state.stall = payload;
      state.error = null;
      state.loading = false;
    },
    [getStall.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },

    [editStall.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [editStall.fulfilled]: (state, { payload }) => {
      state.error = null;
      state.loading = false;
    },
    [editStall.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [addStall.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [addStall.fulfilled]: (state) => {
      state.error = null;
      state.loading = false;
    },
    [addStall.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export default stallSlice.reducer;
