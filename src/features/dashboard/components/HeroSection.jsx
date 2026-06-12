import BaseCard from "../../../shared/components/cards/BaseCard";

const HeroSection = () => {
  return (
    <BaseCard
      className="
      bg-gradient-to-r
      from-indigo-600
      to-cyan-500
      text-white
      overflow-hidden
    "
    >
      <div
        className="
        flex
        justify-between
        items-center
      "
      >
        <div>
          <p className="uppercase text-sm">
            Quarterly Focus
          </p>

          <h2
            className="
            text-4xl
            font-bold
            mt-3
          "
          >
            Customer First
            Transformation
          </h2>

          <p
            className="
            mt-4
            max-w-xl
            text-indigo-100
          "
          >
            Driving innovation,
            collaboration and
            customer success
            across every vertical.
          </p>
        </div>

        <div>
          <button
            className="
            px-6
            py-3
            rounded-2xl
            bg-white
            text-indigo-600
            font-semibold
          "
          >
            Watch CEO Address
          </button>
        </div>
      </div>
    </BaseCard>
  );
};

export default HeroSection;