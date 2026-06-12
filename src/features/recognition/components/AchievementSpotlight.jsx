import { useSelector } from "react-redux";

import BaseCard from "../../../shared/components/cards/BaseCard";

const AchievementSpotlight = () => {
  const achievements = useSelector(
    (state) =>
      state.recognition.data?.achievements || [],
  );

  return (
    <BaseCard>
      <h2 className="text-xl font-semibold mb-6">
        Achievement Spotlight
      </h2>

      <div className="space-y-4">
        {achievements.map((item) => (
          <div
            key={item.id}
            className="border rounded-2xl p-4"
          >
            <h3 className="font-semibold">
              {item.title}
            </h3>

            <p className="text-slate-500 mt-1">
              {item.employee}
            </p>

            <p className="text-sm text-slate-400 mt-2">
              {item.date}
            </p>
          </div>
        ))}
      </div>
    </BaseCard>
  );
};

export default AchievementSpotlight;