import { useSelector } from "react-redux";

import BaseCard from "../../../shared/components/cards/BaseCard";

const HallOfFame = () => {
  const hallOfFame = useSelector(
    (state) =>
      state.recognition.data?.hallOfFame || [],
  );

  return (
    <BaseCard>
      <h2 className="text-xl font-semibold mb-6">
        Hall Of Fame
      </h2>

      <div className="space-y-4">
        {hallOfFame.map((item) => (
          <div
            key={item.id}
            className="rounded-2xl border p-5 text-center"
          >
            <div className="text-4xl mb-3">
              🏆
            </div>

            <h3 className="font-semibold">
              {item.employee}
            </h3>

            <p className="text-indigo-600 mt-2">
              {item.badge}
            </p>
          </div>
        ))}
      </div>
    </BaseCard>
  );
};

export default HallOfFame;