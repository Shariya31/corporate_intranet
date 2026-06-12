import { useSelector } from "react-redux";

import LeadershipMessageCard from "./LeadershipMessageCard";

const LeadershipMessages = () => {
  const messages = useSelector(
    (state) => state.leadership.data?.leadershipMessages || [],
  );

  return (
    <div>
      <div className=" not-last-of-type:flex not-last-of-type:justify-between not-last-of-type:items-center not-last-of-type:mb-5 not-last-of-type:">
        <h2 className=" not-last-of-type:text-xl not-last-of-type:font-semibold not-last-of-type:">
          Latest Leadership Messages
        </h2>

        <button className=" not-last-of-type:text-indigo-600 not-last-of-type:text-sm not-last-of-type:">
          View All
        </button>
      </div>

      <div className=" not-last-of-type:grid not-last-of-type:grid-cols-2 not-last-of-type:gap-5 not-last-of-type:">
        {messages.map((message) => (
          <LeadershipMessageCard key={message.id} message={message} />
        ))}
      </div>
    </div>
  );
};

export default LeadershipMessages;
