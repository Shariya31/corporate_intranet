import { useSelector } from "react-redux";

import BaseCard from "../../../shared/components/cards/BaseCard";

const CelebrationFeed = () => {
  const celebrations = useSelector(
    (state) =>
      state.recognition.data?.celebrations || [],
  );

  return (
    <BaseCard>
      <h2 className="text-xl font-semibold mb-6">
        Celebrations
      </h2>

      <div className="space-y-4">
        {celebrations.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between border rounded-2xl p-4"
          >
            <div>
              <h3 className="font-semibold">
                {item.employee}
              </h3>

              <p className="text-slate-500">
                {item.title}
              </p>
            </div>

            {item.years && (
              <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full">
                {item.years} Years
              </span>
            )}
          </div>
        ))}
      </div>
    </BaseCard>
  );
};

export default CelebrationFeed;