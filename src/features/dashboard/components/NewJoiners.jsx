import { useSelector }
  from "react-redux";
import BaseCard from "../../../shared/components/cards/BaseCard";

const NewJoiners = () => {
  const joiners =
    useSelector(
      state =>
        state.dashboard.data
          ?.newJoiners || []
    );

  return (
    <BaseCard>
      <h2
        className="
        text-lg
        font-semibold
        mb-6
      "
      >
        Welcome Aboard 🎉
      </h2>

      <div
        className="
        flex
        gap-5
        overflow-x-auto
      "
      >
        {joiners.map(user => (
          <div
            key={user.id}
            className="
            min-w-[180px]
            text-center
            "
          >
            <img
              src={user.image}
              alt=""
              className="
              h-20
              w-20
              rounded-full
              mx-auto
              mb-3
              "
            />

            <h4
              className="
              font-medium
            "
            >
              {user.name}
            </h4>

            <p
              className="
              text-sm
              text-slate-500
            "
            >
              {user.designation}
            </p>
          </div>
        ))}
      </div>
    </BaseCard>
  );
};

export default NewJoiners;