import { useSelector } from "react-redux";
import BaseCard from "../../../shared/components/cards/BaseCard";

const TrendingTopics = () => {
  const topics = useSelector(
    (state) => state.community.data?.trendingTopics || [],
  );

  return (
    <BaseCard>
      <h2
        className="
text-lg
font-semibold
mb-5
"
      >
        Trending Topics
      </h2>

      <div className="space-y-4">
        {topics.map((topic) => (
          <div
            key={topic.id}
            className="
flex
justify-between
items-center
"
          >
            <div>
              <h4
                className="
font-medium
"
              >
                #{topic.title}
              </h4>
            </div>

            <span
              className="
text-indigo-600
font-medium
"
            >
              {topic.count}
              posts
            </span>
          </div>
        ))}
      </div>
    </BaseCard>
  );
};

export default TrendingTopics;
