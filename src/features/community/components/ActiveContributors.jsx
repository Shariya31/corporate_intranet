import { useSelector } from "react-redux";
import BaseCard from "../../../shared/components/cards/BaseCard";


const ActiveContributors = () => {
  const contributors = useSelector(
    (state) => state.community.data?.contributors || [],
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
        Top Contributors
      </h2>

      <div className="space-y-4">
        {contributors.map((user, index) => (
          <div
            key={user.id}
            className="
flex
justify-between
items-center
"
          >
            <div>
              <p
                className="
font-medium
"
              >
                #{index + 1} {user.name}
              </p>
            </div>

            <span
              className="
text-indigo-600
font-semibold
"
            >
              {user.contributions}
            </span>
          </div>
        ))}
      </div>
    </BaseCard>
  );
};

export default ActiveContributors;
