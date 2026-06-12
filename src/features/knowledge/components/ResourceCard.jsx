import { FiEye } from "react-icons/fi";
import BaseCard from "../../../shared/components/cards/BaseCard";

const ResourceCard = ({
  resource,
}) => {
  return (
    <BaseCard>

      <div
        className="
        flex
        justify-between
        "
      >
        <span
          className="
          px-3
          py-1
          bg-indigo-100
          text-indigo-600
          rounded-full
          text-xs
          "
        >
          {resource.category}
        </span>
      </div>

      <h3
        className="
        mt-4
        text-lg
        font-semibold
        "
      >
        {resource.title}
      </h3>

      <p
        className="
        mt-3
        text-slate-500
        "
      >
        {resource.description}
      </p>

      <div
        className="
        mt-5
        flex
        items-center
        gap-2
        text-slate-400
        "
      >
        <FiEye />

        {resource.views}
      </div>

    </BaseCard>
  );
};

export default ResourceCard;