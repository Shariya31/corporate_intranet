import ResourceCard
from "./ResourceCard";

const KnowledgeLibrary = ({
  resources,
}) => {
  return (
    <div
      className="
      grid
      grid-cols-3
      gap-5
      "
    >
      {resources.map(
        resource => (
          <ResourceCard
            key={resource.id}
            resource={resource}
          />
        )
      )}
    </div>
  );
};

export default KnowledgeLibrary;