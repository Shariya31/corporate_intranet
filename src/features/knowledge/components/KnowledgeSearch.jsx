import {
  FiSearch,
} from "react-icons/fi";

const KnowledgeSearch = ({
  search,
  setSearch,
}) => {
  return (
    <div
      className="
      bg-white
      rounded-2xl
      border
      p-4
      flex
      items-center
      gap-3
      "
    >
      <FiSearch />

      <input
        value={search}
        onChange={(e)=>
          setSearch(
            e.target.value
          )
        }
        placeholder="Search resources..."
        className="
        flex-1
        outline-none
        "
      />
    </div>
  );
};

export default KnowledgeSearch;