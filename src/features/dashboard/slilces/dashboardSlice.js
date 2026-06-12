import { createSlice }
  from "@reduxjs/toolkit";

const initialState = {
  loading: false,

  data: null,
};

const dashboardSlice =
  createSlice({
    name: "dashboard",

    initialState,

    reducers: {
      setLoading(state, action) {
        state.loading = action.payload;
      },

      setDashboardData(state, action) {
        state.data = action.payload;
      },
    },
  });

export const {
  setLoading,
  setDashboardData,
} = dashboardSlice.actions;

export default dashboardSlice.reducer;