const GalleryFilters = ({
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
        category => (
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

            ${
              activeCategory === category
                ? "bg-purple-600 text-white"
                : "bg-white border"
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

export default GalleryFilters;