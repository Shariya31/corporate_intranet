import { configureStore } from "@reduxjs/toolkit";
import dashboardReducer from "../features/dashboard/slilces/dashboardSlice";
import leadershipRedcer from "../features/leadership/slices/leadershipSlice";
import recognitionReducer from "../features/recognition/slices/recognitionSlice"
import knowledgeReducer from "../features/knowledge/slices/knowledgeSlice"
import communityReducer from "../features/community/slices/communitySlice"
import galleryReducer from "../features/gallery/slices/gallerySlice"

export const store = configureStore({
  reducer: {
    dashboard: dashboardReducer,
    leadership: leadershipRedcer,
    recognition: recognitionReducer,
    knowledge: knowledgeReducer,
    community: communityReducer,
    gallery: galleryReducer,
  },
});