import BaseCard from "../../../shared/components/cards/BaseCard";

const KnowledgeStats = () => {
  return (
    <BaseCard>

      <div
        className="
        grid
        grid-cols-4
        gap-4
        "
      >
        <Stat
          title="Resources"
          value="124"
        />

        <Stat
          title="Policies"
          value="18"
        />

        <Stat
          title="Templates"
          value="42"
        />

        <Stat
          title="Contributors"
          value="63"
        />
      </div>

    </BaseCard>
  );
};

const Stat = ({
  title,
  value,
}) => (
  <div>
    <h3
      className="
      text-3xl
      font-bold
      "
    >
      {value}
    </h3>

    <p
      className="
      text-slate-500
      "
    >
      {title}
    </p>
  </div>
);

export default KnowledgeStats;