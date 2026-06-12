import BaseCard from "../../../shared/components/cards/BaseCard";

const ModerationPanel = () => {
  const moderationStats = [
    {
      label: "Flagged Posts",
      value: 4,
    },

    {
      label: "Pending Review",
      value: 7,
    },

    {
      label: "Spam Reports",
      value: 2,
    },
  ];

  return (
    <BaseCard>
      <h2
        className="
text-lg
font-semibold
mb-5
"
      >
        Moderation Overview
      </h2>

      <div className="space-y-4">
        {moderationStats.map((item) => (
          <div
            key={item.label}
            className="
flex
justify-between
"
          >
            <p>{item.label}</p>

            <span
              className="
font-semibold
"
            >
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </BaseCard>
  );
};

export default ModerationPanel;
