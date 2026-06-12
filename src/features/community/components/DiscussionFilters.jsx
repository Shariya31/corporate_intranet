const DiscussionFilters = ({
  categories,
  activeCategory,
  setActiveCategory,
}) => {
  return (
    <div
      className="
      flex
      flex-wrap
      gap-3
      "
    >
      {categories.map(
        (category) => (
          <button
            key={category}
            onClick={() =>
              setActiveCategory(
                category
              )
            }
            className={`
            px-4
            py-2
            rounded-full
            transition-all

            ${
              activeCategory === category
                ? "bg-indigo-600 text-white"
                : "bg-white border border-slate-200"
            }
            `}
          >
            {category}
          </button>
        )
      )}
    </div>
  );
};

export default DiscussionFilters;