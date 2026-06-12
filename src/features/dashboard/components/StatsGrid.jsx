import BaseCard from "../../../shared/components/cards/BaseCard";

const stats = [
  {
    title: "Announcements",
    value: "24",
  },
  {
    title: "Recognitions",
    value: "138",
  },
  {
    title: "Projects Won",
    value: "18",
  },
  {
    title: "Events",
    value: "12",
  },
];

const StatsGrid = () => {
  return (
    <div
      className="
      grid
      grid-cols-4
      gap-6
    "
    >
      {stats.map((item) => (
        <BaseCard key={item.title}>
          <p
            className="
            text-slate-500
          "
          >
            {item.title}
          </p>

          <h3
            className="
            text-4xl
            font-bold
            mt-3
          "
          >
            {item.value}
          </h3>
        </BaseCard>
      ))}
    </div>
  );
};

export default StatsGrid;