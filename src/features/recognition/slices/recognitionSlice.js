import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  data: null,
};

const recognitionSlice = createSlice({
  name: "recognition",

  initialState,

  reducers: {
    setRecognitionLoading(state, action) {
      state.loading = action.payload;
    },

    setRecognitionData(state, action) {
      state.data = action.payload;
    },
  },
});

export const { setRecognitionLoading, setRecognitionData } =
  recognitionSlice.actions;

export default recognitionSlice.reducer;
