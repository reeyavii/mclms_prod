import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_URL } from "../../app/constants";
import axios from "axios";

const namespace = "auth";
const initialState = {
  username: null,
  email: null,
  token: null,
  userId: null,
  firstName: null,
  lastName: null,
  isAuth: false,
  isAdmin: false,
  loading: false,
  phoneNumber: null,
  error: null,
  status: null,
  verified: false,
};

export const authLogin = createAsyncThunk(
  `${namespace}/authLogin`,

  async (payload, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_URL}auth/login`, payload);
      return response.data;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
  }
);

export const authRegister = createAsyncThunk(
  `${namespace}/authRegister`,
  async ({
    username,
    password,
    email,
    phoneNumber,
    firstName,
    lastName,
    middleInitial,
    sex,
    age,
    address,
    status,
  }) => {
    const { data } = await axios.post(`${API_URL}auth/register/`, {
      username: username,
      password: password,
      email: email,
      phoneNumber: phoneNumber,
      firstName: firstName,
      lastName: lastName,
      middleInitial: middleInitial,
      sex: sex,
      age: age,
      address: address,
      status: status,
    });
    return data;
  }
);

export const authRegisterAdmin = createAsyncThunk(
  `${namespace}/authRegisterAdmin`,
  async ({
    username,
    password,
    email,
    phoneNumber,
    firstName,
    lastName,
    employeeId,
    middleInitial,
    address,
  }) => {
    const { data } = await axios.post(`${API_URL}auth/register-admin/`, {
      username: username,
      password: password,
      email: email,
      phoneNumber: phoneNumber,
      firstName: firstName,
      lastName: lastName,
      middleInitial: middleInitial,
      employeeId: employeeId,
      address: address,
    });
    return data;
  }
);
export const updatePassword = createAsyncThunk(
  `${namespace}/updatePassword`,
  async ({ oldPassword, newPassword, token }) => {
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    const { data } = await axios.post(`${API_URL}auth/update-password/`, {
      oldPassword: oldPassword,
      newPassword: newPassword,
    });
    return data;
  }
);

export const authVerify = createAsyncThunk(
  `${namespace}/authVerify`,

  async (payload, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_URL}auth/verify`, payload);
      return response.data;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
  }
);

export const authSlice = createSlice({
  name: namespace,
  initialState: initialState,
  reducers: {
    logout: (state) => {
      state.token = null;
      state.username = null;
      state.email = null;
      state.phoneNumber = null;
      state.isAuth = false;
      state.isAdmin = false;
      state.userId = null;
      state.error = null;
      state.lastName = null;
      state.firstName = null;
      state.verified = false;
      localStorage.removeItem("user");
    },
    authSuccess: (state, { payload }) => {
      state.loading = false;
      state.token = payload.token;
      state.username = payload.username;
      state.email = payload.email;
      state.firstName = payload.firstName;
      state.lastName = payload.lastName;
      state.phoneNumber = payload.phoneNumber;
      state.isAdmin = payload.isAdmin;
      state.isAuth = true;
      state.userId = payload.id;
      state.verified = payload.verified;
      saveLocal(payload);
    },
    StatusIdle: (state) => {
      state.status = "IDLE";
    },
  },
  extraReducers: {
    [authLogin.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [authLogin.fulfilled]: (state, { payload }) => {
      console.log(payload); // remove this
      saveLocal(payload);
      state.loading = false;
      state.token = payload.token;
      state.username = payload.username;
      state.firstName = payload.firstName;
      state.lastName = payload.lastName;
      state.email = payload.email;
      state.phoneNumber = payload.phoneNumber;
      state.isAdmin = payload.isAdmin;
      state.isAuth = true;
      state.userId = payload.id;
      state.verified = payload.verified;
    },
    [authLogin.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = "Login Failed!";
    },
    [authRegister.pending]: (state) => {
      state.loading = true;
    },
    [authRegister.fulfilled]: (state) => {
      state.loading = false;
    },
    [authRegister.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [authRegisterAdmin.pending]: (state) => {
      state.loading = true;
    },
    [authRegisterAdmin.fulfilled]: (state) => {
      state.loading = false;
    },
    [authRegisterAdmin.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [updatePassword.pending]: (state) => {
      state.loading = true;
    },
    [updatePassword.fulfilled]: (state) => {
      state.loading = false;
    },
    [updatePassword.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [authVerify.pending]: (state) => {
      state.loading = true;
    },
    [authVerify.fulfilled]: (state) => {
      state.loading = false;
      state.verified = true;

      const payload = {
        token: state.token,
        id: state.userId,
        username: state.username,
        firstName: state.firstName,
        lastName: state.lastName,
        email: state.email,
        phoneNumber: state.phoneNumber,
        isAdmin: state.isAdmin,
        expiration: state.expiration,
        verified: state.verified,
      };
      saveLocal(payload);
    },
    [authVerify.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export const { authSuccess, logout, StatusIdle } = authSlice.actions;

const saveLocal = (payload) => {
  const user = {
    token: payload.token,
    id: payload.id,
    username: payload.username,
    firstName: payload.firstName,
    lastName: payload.lastName,
    email: payload.email,
    phoneNumber: payload.phoneNumber,
    isAdmin: payload.isAdmin,
    expiration: payload.expiration,
    verified: payload.verified,
  };
  localStorage.setItem("user", JSON.stringify(user));
  console.log(user);
};
export const checkAuthTimeout = (expiration) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(logout());
    }, expiration * 1000);
  };
};

export const authCheckState = () => {
  return (dispatch) => {
    console.log("AUTHCHECKSTATE => running");
    const user = JSON.parse(localStorage.getItem("user"));
    if (user === undefined || user === null) {
      dispatch(logout());
    } else {
      const expiration = new Date(user.expiration);
      if (expiration <= new Date()) {
        dispatch(logout());
      } else {
        console.log(user);
        dispatch(authSuccess(user));
        dispatch(
          checkAuthTimeout((expiration.getTime() - new Date().getTime()) / 1000)
        );
      }
    }
  };
};

export default authSlice.reducer;
