import DiscussionCard
from "./DiscussionCard";

const DiscussionFeed = ({
  discussions,
}) => {
  return (
    <div className="space-y-5">
      {discussions.map(
        (discussion) => (
          <DiscussionCard
            key={discussion.id}
            discussion={discussion}
          />
        )
      )}
    </div>
  );
};

export default DiscussionFeed;