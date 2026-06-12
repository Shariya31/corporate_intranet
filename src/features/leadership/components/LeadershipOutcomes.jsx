
import { useSelector } from "react-redux";
import BaseCard from "../../../shared/components/cards/BaseCard";

const LeadershipOutcomes = () => {
  const outcomes = useSelector(
    (state) => state.leadership.data?.outcomes || [],
  );

  return (
    <BaseCard>
      <h2 className=" text-xl font-semibold mb-6 ">Leadership Outcomes</h2>

      <div className="space-y-6">
        {outcomes.map((meeting) => (
          <div key={meeting.id} className=" border rounded-2xl p-4 ">
            <h3 className=" font-semibold ">{meeting.title}</h3>

            <p className=" text-sm text-slate-500 mt-1 ">{meeting.date}</p>

            <ul className=" mt-4 space-y-2 ">
              {meeting.decisions.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </BaseCard>
  );
};

export default LeadershipOutcomes;
