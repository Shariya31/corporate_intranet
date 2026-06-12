import {
  FiMessageSquare,
  FiThumbsUp,
  FiEye,
} from "react-icons/fi";

const DiscussionCard = ({
  discussion,
}) => {
  return (
    <div
      className="
      bg-white
      border
      rounded-3xl
      p-5
      "
    >
      {discussion.pinned && (
        <span
          className="
          px-3
          py-1
          bg-yellow-100
          text-yellow-700
          rounded-full
          text-xs
          "
        >
          Pinned
        </span>
      )}

      <h3
        className="
        mt-3
        text-lg
        font-semibold
        "
      >
        {discussion.title}
      </h3>

      <p
        className="
        mt-2
        text-slate-600
        "
      >
        {discussion.content}
      </p>

      <div
        className="
        mt-4
        flex
        justify-between
        "
      >
        <span>
          {discussion.author}
        </span>

        <span>
          {discussion.createdAt}
        </span>
      </div>

      <div
        className="
        mt-5
        flex
        gap-5
        "
      >
        <span>
          <FiThumbsUp />
          {discussion.upvotes}
        </span>

        <span>
          <FiMessageSquare />
          {discussion.replies}
        </span>

        <span>
          <FiEye />
          {discussion.views}
        </span>
      </div>
    </div>
  );
};

export default DiscussionCard;