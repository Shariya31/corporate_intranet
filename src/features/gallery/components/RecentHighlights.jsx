import BaseCard from "../../../shared/components/cards/BaseCard";

const RecentHighlights = () => {
  return (
    <BaseCard>

      <h2
        className="
        text-xl
        font-semibold
        mb-5
        "
      >
        Recent Highlights
      </h2>

      <ul className="space-y-3">
        <li>
          Innovation Week 2026
        </li>

        <li>
          CSR Outreach Program
        </li>

        <li>
          Sports Day Finals
        </li>

        <li>
          Leadership Townhall
        </li>
      </ul>

    </BaseCard>
  );
};

export default RecentHighlights;