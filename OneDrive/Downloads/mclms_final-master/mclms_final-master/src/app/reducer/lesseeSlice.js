import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../constants";

const namespace = "lessees";
const initialState = {
  lessees: [],
  lessee: null,
  loading: false,
  error: null,
  showAlert: false,
  result: "",
};

export const addLessees = createAsyncThunk(
  `${namespace}/addLessees`,
  async (data, { rejectWithValue }) => {
    try {
      axios.defaults.headers = {
        "Content-Type": "application/json",
      };
      const response = await axios.post(`${API_URL}api/userinfo/`, data);
      return response.data;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
  }
);
export const getLessees = createAsyncThunk(
  `${namespace}/getLessees`,
  async (payload, { rejectWithValue }) => {
    try {
      axios.defaults.headers = {
        "Content-Type": "application/json",
      };
      const response = await axios.get(`${API_URL}api/userinfo/`);
      return response.data;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
  }
);
export const getLessee = createAsyncThunk(
  `${namespace}/getLessee`,
  async ({ userId }, { rejectWithValue }) => {
    try {
      axios.defaults.headers = {
        "Content-Type": "application/json",
      };
      const response = await axios.get(`${API_URL}api/userinfo/${userId}`);
      return response.data;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
  }
);
export const getLesseeId = createAsyncThunk(
  `${namespace}/getLesseeId`,
  async (id, { rejectWithValue }) => {
    try {
      axios.defaults.headers = {
        "Content-Type": "application/json",
      };
      const response = await axios.get(`${API_URL}api/userinfo/lessee/${id}`);
      return response.data;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
  }
);
export const EditLessee = createAsyncThunk(
  `${namespace}/EditLessee`,
  async ({ id, data }, { rejectWithValue }) => {
    try {
      axios.defaults.headers = {
        "Content-Type": "application/json",
      };
      const response = await axios.put(`${API_URL}api/userinfo/${id}`, data);
      return response.data;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
  }
);
export const UpdateLesseeStatus = createAsyncThunk(
  `${namespace}/UpdateLesseeStatus`,
  async ({ id, data, status }, { rejectWithValue }) => {
    try {
      axios.defaults.headers = {
        "Content-Type": "application/json",
      };
      const response = await axios.put(`${API_URL}api/userinfo/${id}`, {
        ...data,
        status: status,
      });
      return response.data;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
  }
);

export const SentNotice = createAsyncThunk(
  `${namespace}/SentNotice`,
  async ({ id, data, status }, { rejectWithValue }) => {
    try {
      axios.defaults.headers = {
        "Content-Type": "application/json",
      };
      const response = await axios.put(`${API_URL}api/userinfo/${id}`, {
        ...data,
        EditRequested: status,
      });
      return response.data;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
  }
);


export const lesseeSlice = createSlice({
  name: namespace,
  initialState: initialState,
  reducers: {
    hideAlert: (state) => {
      state.showAlert = false;
    },
  },
  extraReducers: {
    [addLessees.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [addLessees.fulfilled]: (state, { payload }) => {
      state.lessees = payload;
      state.error = null;
      state.loading = false;
      state.result = "Application Form Submitted Successfully";
    },
    [addLessees.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
      console.log(payload);
      state.result = "Application Form Failed";
    },

    [getLessees.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [getLessees.fulfilled]: (state, { payload }) => {
      state.lessees = payload;
      state.error = null;
      state.loading = false;
    },
    [getLessees.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
      console.log(payload);
    },

    [getLessee.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [getLessee.fulfilled]: (state, { payload }) => {
      state.lessee = payload;
      state.error = null;
      state.loading = false;
    },
    [getLessee.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
      console.log(payload);
    },

    [EditLessee.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [EditLessee.fulfilled]: (state, { payload }) => {
      state.showAlert = true;
      state.lessee = payload;
      state.error = null;
      state.loading = false;
    },
    [EditLessee.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
      console.log(payload);
    },
    [UpdateLesseeStatus.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [UpdateLesseeStatus.fulfilled]: (state, { payload }) => {
      state.showAlert = true;
      state.lessee = payload;
      state.error = null;
      state.loading = false;
    },
    [UpdateLesseeStatus.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
      console.log(payload);
    },
    [SentNotice.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [SentNotice.fulfilled]: (state, { payload }) => {
      state.showAlert = true;
      state.lessee = payload;
      state.error = null;
      state.loading = false;
    },
    [SentNotice.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
      console.log(payload);
    },
    [getLesseeId.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [getLesseeId.fulfilled]: (state, { payload }) => {
      state.lessee = payload;
      state.error = null;
      state.loading = false;
    },
    [getLesseeId.rejected]: (state, { payload }) => {
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

export const { hideAlert } = lesseeSlice.actions;
export default lesseeSlice.reducer;
