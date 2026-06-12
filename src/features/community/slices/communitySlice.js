import {
  createSlice,
}
from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  data: null,
};

const communitySlice =
createSlice({
  name:"community",

  initialState,

  reducers:{
    setCommunityLoading(
      state,
      action
    ){
      state.loading =
      action.payload;
    },

    setCommunityData(
      state,
      action
    ){
      state.data =
      action.payload;
    },
  },
});

export const {
  setCommunityLoading,
  setCommunityData,
} =
communitySlice.actions;

export default
communitySlice.reducer;