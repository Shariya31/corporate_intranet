import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,

  data: null,
};

const gallerySlice = createSlice({
  name: "gallery",

  initialState,

  reducers: {
    setGalleryLoading(state, action) {
      state.loading = action.payload;
    },

    setGalleryData(state, action) {
      state.data = action.payload;
    },
  },
});

export const { setGalleryLoading, setGalleryData, setGalleryError } =
  gallerySlice.actions;

export default gallerySlice.reducer;
