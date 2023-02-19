import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../constants";

const namespace = "notif";
const initialState = {
  notifs: [],
  loading: false,
  error: null,
};

export const getNotifs = createAsyncThunk(
  `${namespace}/getNotifs`,
  async (payload, { rejectWithValue }) => {
    try {
      axios.defaults.headers = {
        "Content-Type": "application/json",
      };
      const response = await axios.get(`${API_URL}api/notifs/`);
      console.log(response.data);
      return response.data;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
  }
);

export const readNotif = createAsyncThunk(
  `${namespace}/readNotif`,
  async ({ payload, id }, { rejectWithValue }) => {
    try {
      axios.defaults.headers = {
        "Content-Type": "application/json",
      };
      const response = await axios.put(`${API_URL}api/notifs/${id}`, payload);
      console.log(response.data);
      return response.data;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
  }
);

export const notifSlice = createSlice({
  name: namespace,
  initialState: initialState,
  reducers: {},
  extraReducers: {
    [getNotifs.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [getNotifs.fulfilled]: (state, { payload }) => {
      state.notifs = payload;
      console.log(payload);
      state.error = null;
      state.loading = false;
    },
    [getNotifs.rejected]: (state, { payload }) => {
      state.loading = false;
      console.log(payload);
      state.error = payload;
    },
    [readNotif.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [readNotif.fulfilled]: (state, { payload }) => {
      state.notifs = payload;
      state.error = null;
      state.loading = false;
    },
    [readNotif.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export default notifSlice.reducer;
