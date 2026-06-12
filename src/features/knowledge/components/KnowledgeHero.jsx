import BaseCard from "../../../shared/components/cards/BaseCard";

const KnowledgeHero = () => {
  return (
    <BaseCard
      className="
      bg-gradient-to-r
      from-indigo-600
      to-cyan-500
      text-white
      "
    >
      <h1
        className="
        text-4xl
        font-bold
        "
      >
        Knowledge Hub
      </h1>

      <p
        className="
        mt-3
        "
      >
        Discover policies,
        handbooks,
        learning resources
        and organizational knowledge.
      </p>
    </BaseCard>
  );
};

export default KnowledgeHero;