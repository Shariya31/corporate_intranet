import BaseCard from "../../../shared/components/cards/BaseCard";

const ForumHero = () => {
  return (
    <BaseCard
      className="
      bg-gradient-to-r
      from-cyan-500
      to-indigo-600
      text-white
      "
    >
      <h1
        className="
        text-4xl
        font-bold
        "
      >
        Community Forum
      </h1>

      <p
        className="
        mt-3
        "
      >
        Collaborate, discuss,
        learn and share ideas.
      </p>
    </BaseCard>
  );
};

export default ForumHero;