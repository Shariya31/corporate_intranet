import { useSelector } from "react-redux";
import BaseCard from "../../../shared/components/cards/BaseCard";

const AnnouncementFeed = () => {
  const announcements =
    useSelector(
      state =>
        state.dashboard.data
          ?.announcements || []
    );

  return (
    <BaseCard className="h-full">
      <div
        className="
        flex
        justify-between
        items-center
        mb-6
      "
      >
        <h2 className="font-semibold text-lg">
          Company Updates
        </h2>

        <button
          className="
          text-indigo-600
          text-sm
        "
        >
          View All
        </button>
      </div>

      <div className="space-y-5">
        {announcements.map(item => (
          <div
            key={item.id}
            className="
            border-b
            pb-4
          "
          >
            <div
              className="
              flex
              justify-between
              mb-2
            "
            >
              <h4 className="font-medium">
                {item.title}
              </h4>

              <span
                className="
                text-xs
                text-slate-400
                "
              >
                {item.date}
              </span>
            </div>

            <p
              className="
              text-sm
              text-slate-500
              "
            >
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </BaseCard>
  );
};

export default AnnouncementFeed;