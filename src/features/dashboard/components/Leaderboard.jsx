import { useSelector }
  from "react-redux";
import BaseCard from "../../../shared/components/cards/BaseCard";

const Leaderboard = () => {
  const leaders =
    useSelector(
      state =>
        state.dashboard.data
          ?.leaderboard || []
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
        Culture Champions
      </h2>

      <div className="space-y-4">
        {leaders.map(
          (leader, index) => (
            <div
              key={leader.id}
              className="
              flex
              justify-between
              items-center
              "
            >
              <div>
                <p className="font-medium">
                  #{index + 1}
                  {" "}
                  {leader.name}
                </p>
              </div>

              <span
                className="
                font-semibold
                text-indigo-600
              "
              >
                {leader.points}
              </span>
            </div>
          )
        )}
      </div>
    </BaseCard>
  );
};

export default Leaderboard;