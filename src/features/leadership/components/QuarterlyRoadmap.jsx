import { useSelector } from "react-redux";
import BaseCard from "../../../shared/components/cards/BaseCard";

const statusColors = {
  completed: "bg-green-500",

  active: "bg-indigo-600",

  planned: "bg-slate-300",
};

const QuarterlyRoadmap = () => {
  const roadmap = useSelector((state) => state.leadership.data?.roadmap || []);

  return (
    <BaseCard>
      <h2 className=" text-xl font-semibold mb-8 ">Quarterly Roadmap</h2>

      <div className=" flex justify-between items-center ">
        {roadmap.map((item) => (
          <div key={item.quarter} className=" flex flex-col items-center ">
            <div
              className={` w-14 h-14 rounded-full ${statusColors[item.status]} `}
            ></div>

            <h4 className=" mt-3 font-medium ">{item.quarter}</h4>

            <p className=" text-xs capitalize text-slate-500 ">{item.status}</p>
          </div>
        ))}
      </div>
    </BaseCard>
  );
};

export default QuarterlyRoadmap;
