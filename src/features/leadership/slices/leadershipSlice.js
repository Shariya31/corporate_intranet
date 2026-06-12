import {
  createSlice,
}
from "@reduxjs/toolkit";

const initialState = {
  loading: false,

  data: null,
};

const leadershipSlice =
  createSlice({
    name: "leadership",

    initialState,

    reducers: {
      setLeadershipLoading(
        state,
        action
      ) {
        state.loading =
          action.payload;
      },

      setLeadershipData(
        state,
        action
      ) {
        state.data =
          action.payload;
      },
    },
  });

export const {
  setLeadershipLoading,
  setLeadershipData,
} =
  leadershipSlice.actions;

export default
  leadershipSlice.reducer;