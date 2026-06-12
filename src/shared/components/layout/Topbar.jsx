import {
  FiBell,
  FiSearch,
} from "react-icons/fi";

const Topbar = () => {
  return (
    <header
      className=" h-20 bg-white border-b border-slate-200 px-8 flex items-center justify-between
    "
    >
      <div
        className="
        flex
        items-center
        gap-4
      "
      >
        <div
          className=" flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-xl w-96
        "
        >
          <FiSearch />

          <input
            placeholder="Search announcements, people, events..."
            className=" bg-transparent outline-none w-full
          "
          />
        </div>
      </div>

      <div
        className="
        flex
        items-center
        gap-5
      "
      >
        <button
          className="
          relative
          p-2
          rounded-xl
          hover:bg-slate-100
        "
        >
          <FiBell size={22} />

          <span className=" absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500
          "
          />
        </button>

        <div
          className="
          flex
          items-center
          gap-3
        "
        >
          <img
            src="https://i.pravatar.cc/150?img=8"
            alt=""
            className="
            h-10
            w-10
            rounded-full
          "
          />

          <div>
            <p className="font-medium">
              John Carter
            </p>

            <p
              className="
              text-xs
              text-slate-500
            "
            >
              Engineering
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Topbar;