import { useSelector } from "react-redux";

import BaseCard from "../../../shared/components/cards/BaseCard";
import LeaderboardCard from "./LeaderboardCard";

const RecognitionLeaderboard = () => {
  const leaderboard = useSelector(
    (state) =>
      state.recognition.data?.leaderboard || [],
  );

  return (
    <BaseCard>
      <h2 className="text-xl font-semibold mb-6">
        Recognition Leaderboard
      </h2>

      <div className="space-y-4">
        {leaderboard.map(
          (employee, index) => (
            <LeaderboardCard
              key={employee.id}
              employee={
                employee.employee
              }
              points={
                employee.points
              }
              rank={index + 1}
            />
          ),
        )}
      </div>
    </BaseCard>
  );
};

export default RecognitionLeaderboard;