import { useSelector }
  from "react-redux";
import BaseCard from "../../../shared/components/cards/BaseCard";


const EventsTimeline =
  () => {
    const events =
      useSelector(
        (state) =>
          state.dashboard
            .data?.events ||
          []
      );

    return (
      <BaseCard>
        <h2
          className="
          text-lg
          font-semibold
          mb-6
        "
        >
          Upcoming Events
        </h2>

        <div className="space-y-6">
          {events.map(
            (event) => (
              <div
                key={
                  event.id
                }
                className="
                flex
                gap-4
              "
              >
                <div
                  className="
                  w-3
                  h-3
                  rounded-full
                  bg-indigo-500
                  mt-2
                "
                />

                <div>
                  <p
                    className="
                    font-medium
                  "
                  >
                    {
                      event.title
                    }
                  </p>

                  <p
                    className="
                    text-sm
                    text-slate-500
                  "
                  >
                    {
                      event.date
                    }
                    {" • "}
                    {
                      event.time
                    }
                  </p>
                </div>
              </div>
            )
          )}
        </div>
      </BaseCard>
    );
  };

export default
  EventsTimeline;