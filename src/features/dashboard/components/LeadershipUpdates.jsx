import { useSelector }
  from "react-redux";
import BaseCard from "../../../shared/components/cards/BaseCard";

const LeadershipUpdates =
  () => {
    const data =
      useSelector(
        (state) =>
          state.dashboard.data
      );

    const messages =
      data
        ?.leadershipMessages ||
      [];

    return (
      <BaseCard
        className="
        h-full
      "
      >
        <div
          className="
          flex
          justify-between
          mb-5
        "
        >
          <h2
            className="
            text-lg
            font-semibold
          "
          >
            Leadership Updates
          </h2>

          <button
            className="
            text-indigo-600
          "
          >
            View All
          </button>
        </div>

        <div className="space-y-5">
          {messages.map(
            (message) => (
              <div
                key={
                  message.id
                }
                className="
                flex
                gap-4
                border-b
                pb-4
              "
              >
                <img
                  src={
                    message.image
                  }
                  alt=""
                  className="
                  h-14
                  w-14
                  rounded-full
                  "
                />

                <div>
                  <h4
                    className="
                    font-semibold
                  "
                  >
                    {
                      message.title
                    }
                  </h4>

                  <p
                    className="
                    text-sm
                    text-slate-500
                    mt-1
                  "
                  >
                    {
                      message.message
                    }
                  </p>

                  <div
                    className="
                    mt-2
                    text-xs
                    text-slate-400
                  "
                  >
                    {
                      message.name
                    }
                    {" • "}
                    {
                      message.date
                    }
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </BaseCard>
    );
  };

export default
  LeadershipUpdates;