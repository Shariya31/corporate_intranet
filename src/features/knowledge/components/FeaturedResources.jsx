import { useSelector } from "react-redux";


import { FiStar } from "react-icons/fi";
import BaseCard from "../../../shared/components/cards/BaseCard";

const FeaturedResources = () => {
  const resources = useSelector(
    (state) => state.knowledge.data?.featuredResources || [],
  );

  return (
    <BaseCard>
      <div
        className=" flex items-center gap-2 mb-5 "
      >
        <FiStar
          className=" text-yellow-500 "
        />

        <h2
          className=" text-lg font-semibold "
        >
          Featured Resources
        </h2>
      </div>

      <div className="space-y-4">
        {resources.map((resource) => (
          <div
            key={resource.id}
            className=" border rounded-2xl p-4 hover:border-indigo-500 transition-all cursor-pointer "
          >
            <div
              className=" flex justify-between items-start "
            >
              <div>
                <h3
                  className=" font-semibold "
                >
                  {resource.title}
                </h3>

                <p
                  className=" text-sm text-slate-500 mt-1 "
                >
                  {resource.category}
                </p>
              </div>

              <span
                className=" text-xs bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full "
              >
                Featured
              </span>
            </div>

            <p
              className=" text-sm text-slate-400 mt-3 "
            >
              {resource.views}
              views
            </p>
          </div>
        ))}
      </div>
    </BaseCard>
  );
};

export default FeaturedResources;

