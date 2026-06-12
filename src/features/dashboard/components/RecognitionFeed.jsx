import { useSelector }
  from "react-redux";
import BaseCard from "../../../shared/components/cards/BaseCard";

const RecognitionFeed =
  () => {
    const recognitions =
      useSelector(
        (state) =>
          state.dashboard
            .data
            ?.recognitions ||
          []
      );

    return (
      <BaseCard>
        <h2
          className="
          text-lg
          font-semibold
          mb-5
        "
        >
          Recognition Wall
        </h2>

        <div className="space-y-5">
          {recognitions.map(
            (
              recognition
            ) => (
              <div
                key={
                  recognition.id
                }
                className="
                rounded-2xl
                bg-slate-50
                p-4
              "
              >
                <div
                  className="
                  flex
                  justify-between
                "
                >
                  <h4
                    className="
                    font-semibold
                  "
                  >
                    {
                      recognition.employee
                    }
                  </h4>

                  <span
                    className="
                    px-3
                    py-1
                    rounded-full
                    bg-indigo-100
                    text-indigo-600
                    text-xs
                  "
                  >
                    {
                      recognition.badge
                    }
                  </span>
                </div>

                <p
                  className="
                  mt-3
                  text-sm
                  text-slate-600
                "
                >
                  {
                    recognition.appreciation
                  }
                </p>
              </div>
            )
          )}
        </div>
      </BaseCard>
    );
  };

export default
  RecognitionFeed;