import BaseCard from "../../../shared/components/cards/BaseCard";

const RecognitionHero = () => {
  return (
    <BaseCard
      className="
      bg-gradient-to-r
      from-pink-500
      via-purple-500
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
        Recognition & Culture
      </h1>

      <p
        className="
        mt-3
        text-white/90
        "
      >
        Celebrating people, achievements and impact.
      </p>

      <div
        className="
        mt-8
        grid
        grid-cols-4
        gap-6
        "
      >
        <Stat label="Appreciations" value="138" />

        <Stat label="Achievements" value="24" />

        <Stat label="Celebrations" value="57" />

        <Stat label="Participation" value="92%" />
      </div>
    </BaseCard>
  );
};

const Stat = ({ label, value }) => (
  <div>
    <h2
      className="
      text-3xl
      font-bold
      "
    >
      {value}
    </h2>

    <p>{label}</p>
  </div>
);

export default RecognitionHero;
