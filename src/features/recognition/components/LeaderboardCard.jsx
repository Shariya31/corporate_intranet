const LeaderboardCard = ({
  employee,
  points,
  rank,
}) => {
  return (
    <div className="flex justify-between items-center p-4 border rounded-2xl">
      <div className="flex items-center gap-4">
        <div className="font-bold text-xl">
          #{rank}
        </div>

        <div>
          <h3 className="font-medium">
            {employee}
          </h3>
        </div>
      </div>

      <div className="font-semibold text-indigo-600">
        {points}
      </div>
    </div>
  );
};

export default LeaderboardCard;