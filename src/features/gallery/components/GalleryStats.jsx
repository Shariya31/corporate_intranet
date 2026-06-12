import BaseCard from "../../../shared/components/cards/BaseCard";

const GalleryStats = () => {
  const stats = [
    {
      label: "Photos",
      value: "2.4K",
    },

    {
      label: "Videos",
      value: "164",
    },

    {
      label: "Albums",
      value: "48",
    },

    {
      label: "Events",
      value: "32",
    },
  ];

  return (
    <BaseCard>
      <div
        className="
grid
grid-cols-4
gap-4
"
      >
        {stats.map((item) => (
          <div key={item.label}>
            <h2
              className="
text-3xl
font-bold
"
            >
              {item.value}
            </h2>

            <p
              className="
text-slate-500
"
            >
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </BaseCard>
  );
};

export default GalleryStats;
