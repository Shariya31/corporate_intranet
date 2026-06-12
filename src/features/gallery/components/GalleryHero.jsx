import BaseCard from "../../../shared/components/cards/BaseCard";

const GalleryHero = () => {
  return (
    <BaseCard
      className="
      bg-gradient-to-r
      from-purple-600
      via-pink-500
      to-orange-400
      text-white
      "
    >
      <h1
        className="
        text-4xl
        font-bold
        "
      >
        Media Gallery
      </h1>

      <p
        className="
        mt-3
        text-white/90
        "
      >
        Celebrating memories,
        achievements and moments
        across the organization.
      </p>
    </BaseCard>
  );
};

export default GalleryHero;