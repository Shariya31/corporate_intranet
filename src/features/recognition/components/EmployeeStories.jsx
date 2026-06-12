import { useSelector } from "react-redux";

import BaseCard from "../../../shared/components/cards/BaseCard";

const EmployeeStories = () => {
  const stories = useSelector(
    (state) =>
      state.recognition.data?.stories || [],
  );

  return (
    <BaseCard>
      <h2 className="text-xl font-semibold mb-6">
        Employee Stories
      </h2>

      <div className="space-y-5">
        {stories.map((story) => (
          <div
            key={story.id}
            className="border-l-4 border-indigo-500 pl-4"
          >
            <p className="italic text-slate-600">
              "{story.story}"
            </p>

            <div className="mt-3">
              <h4 className="font-medium">
                {story.employee}
              </h4>

              <p className="text-sm text-slate-500">
                {story.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </BaseCard>
  );
};

export default EmployeeStories;