import { Outlet }
  from "react-router-dom";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

const MainLayout = () => {
  return (
    <div
      className="
      h-screen
      flex
      bg-slate-50
    "
    >
      <Sidebar />

      <div
        className="
        flex-1
        flex
        flex-col
      "
      >
        <Topbar />

        <main
          className="
          flex-1
          overflow-y-auto
          p-8
        "
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;