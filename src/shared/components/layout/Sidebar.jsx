import { NavLink } from "react-router-dom";
import { NAV_ITEMS } from "../../constants/navigation";

const Sidebar = () => {
  return (
    <aside
      className="w-72 bg-white border-r border-slate-200 flex flex-col"
    >
      <div
        className=" px-6 py-8 border-b border-slate-200
      "
      >
        <h1
          className=" text-2xl font-bold text-indigo-600
        "
        >
          PulseHub
        </h1>

        <p
          className="
          text-sm
          text-slate-500
          mt-1
        "
        >
          Corporate Intranet
        </p>
      </div>

      <nav className="p-4 space-y-2">
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `
                flex
                items-center
                gap-3
                px-4
                py-3
                rounded-2xl
                transition-all

                ${
                  isActive
                    ? "bg-indigo-50 text-indigo-600"
                    : "hover:bg-slate-100 text-slate-700"
                }
              `
              }
            >
              <Icon size={18} />

              {item.label}
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;