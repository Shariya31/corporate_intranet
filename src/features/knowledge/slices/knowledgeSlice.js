import { createSlice }
  from "@reduxjs/toolkit";

const initialState = {
  loading: false,

  data: null,
};

const knowledgeSlice =
  createSlice({
    name: "knowledge",

    initialState,

    reducers: {
      setKnowledgeLoading(state, action) {
        state.loading = action.payload;
      },

      setKnowledgeData(state, action) {
        state.data = action.payload;
      },
    },
  });

export const {
  setKnowledgeLoading,
  setKnowledgeData,
} = knowledgeSlice.actions;

export default knowledgeSlice.reducer;