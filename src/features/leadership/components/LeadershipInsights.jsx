
import { useSelector } from "react-redux";
import BaseCard from "../../../shared/components/cards/BaseCard";

const LeadershipInsights = () => {
  const insights = useSelector(
    (state) => state.leadership.data?.insights || [],
  );

  return (
    <BaseCard>
      <h2 className=" text-xl font-semibold mb-6 ">Leadership Insights</h2>

      <div className=" grid grid-cols-2 gap-4 ">
        {insights.map((item) => (
          <div key={item.label} className=" bg-slate-50 rounded-2xl p-5 ">
            <h4 className=" text-slate-500 text-sm ">{item.label}</h4>

            <p className=" text-3xl font-bold mt-2 text-indigo-600 ">
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </BaseCard>
  );
};

export default LeadershipInsights;
