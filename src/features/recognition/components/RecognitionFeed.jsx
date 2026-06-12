import { useSelector } from "react-redux";

import RecognitionCard from "./RecognitionCard";

const RecognitionFeed = () => {
  const recognitions = useSelector(
    (state) =>
      state.recognition.data?.recognitions || [],
  );

  return (
    <div className="space-y-6">
      {recognitions.map((recognition) => (
        <RecognitionCard
          key={recognition.id}
          recognition={recognition}
        />
      ))}
    </div>
  );
};

export default RecognitionFeed;