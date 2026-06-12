import { FiEye } from "react-icons/fi";

const LeadershipMessageCard = ({
  message,
}) => {
  return (
    <div
      className="
      bg-white
      rounded-3xl
      border
      border-slate-200
      p-5
      hover:shadow-lg
      transition-all
      "
    >
      <div
        className="
        flex
        gap-4
        "
      >
        <img
          src={message.image}
          alt=""
          className="
          h-14
          w-14
          rounded-full
          "
        />

        <div>
          <h3
            className="
            font-semibold
            text-lg
            "
          >
            {message.title}
          </h3>

          <p
            className="
            text-sm
            text-slate-500
            "
          >
            {message.author}
            {" • "}
            {message.role}
          </p>
        </div>
      </div>

      <p
        className="
        mt-4
        text-slate-600
        "
      >
        {message.summary}
      </p>

      <div
        className="
        mt-5
        flex
        justify-between
        items-center
        "
      >
        <span
          className="
          text-sm
          text-slate-400
          "
        >
          {message.date}
        </span>

        <div
          className="
          flex
          items-center
          gap-2
          text-slate-500
          "
        >
          <FiEye />

          {message.views}
        </div>
      </div>
    </div>
  );
};

export default LeadershipMessageCard;