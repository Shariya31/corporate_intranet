import BaseCard from "../../../shared/components/cards/BaseCard";

const ContentGrid = () => {
  return (
    <div
      className="
      grid
      grid-cols-12
      gap-6
    "
    >
      <BaseCard
        className="
        col-span-8
        h-[450px]
      "
      >
        Leadership Updates
      </BaseCard>

      <BaseCard
        className="
        col-span-4
        h-[450px]
      "
      >
        Upcoming Events
      </BaseCard>

      <BaseCard
        className="
        col-span-6
        h-[400px]
      "
      >
        Recognition Feed
      </BaseCard>

      <BaseCard
        className="
        col-span-6
        h-[400px]
      "
      >
        Department Impact
      </BaseCard>
    </div>
  );
};

export default ContentGrid;