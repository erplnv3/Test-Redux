import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// 🔹 ASYNC LOGIN API
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (data, thunkAPI) => {
    try {
      // fake API (replace with axios later)
      if (data.username === "admin") {
        return {
          user: { name: "Amit", role: "ADMIN" },
          token: "jwt_token_123",
        };
      } else {
        throw new Error("Invalid credentials");
      }
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: null,
    loading: false,
    error: null,
  },

  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
