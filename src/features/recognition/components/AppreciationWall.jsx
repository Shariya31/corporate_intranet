import { useSelector } from "react-redux";

import AppreciationCard from "./AppreciationCard";

const AppreciationWall = () => {
  const recognitions = useSelector(
    (state) => state.recognition.data?.recognitions || [],
  );

  return (
    <div>
      <h2
        className=" text-xl font-semibold mb-5 "
      >
        Peer Appreciation Wall
      </h2>

      <div
        className=" grid grid-cols-2 gap-5 "
      >
        {recognitions.map((item) => (
          <AppreciationCard key={item.id} recognition={item} />
        ))}
      </div>
    </div>
  );
};

export default AppreciationWall;
