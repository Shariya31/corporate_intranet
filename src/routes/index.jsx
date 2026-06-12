import {
  createBrowserRouter,
} from "react-router-dom";

import DashboardPage from "../features/dashboard/pages/DashboardPage";
import MainLayout from "../shared/components/layout/MainLayout";
import LeadershipPage from "../features/leadership/pages/LeadershipPage";
import RecognitionPage from "../features/recognition/pages/RecognitionPage";
import KnowledgePage from "../features/knowledge/pages/KnowledgePage";
import CommunityPage from "../features/community/pages/CommunityPage";
import GalleryPage from "../features/gallery/pages/GalleryPage";


const router = createBrowserRouter([
  {
    path: "/",

    element: <MainLayout />,

    children: [
      {
        index: true,

        element: <DashboardPage />,
      },

      {
        path: "/leadership",
        element: <LeadershipPage/>
      },

      {
        path: "/recognition",
        element: <RecognitionPage/>
      },

      {
        path: "/knowledge",
        element: <KnowledgePage/>
      },

      {
        path: "/community",
        element: <CommunityPage/>
      },

      {
        path: "/gallery",
        element: <GalleryPage/>
      },
    ],
  },
]);

export default router;