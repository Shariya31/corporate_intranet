const MediaCard = ({
  item,
}) => {
  return (
    <div
      className="
      overflow-hidden
      rounded-3xl
      bg-white
      border
      "
    >
      <img
        src={item.image}
        alt=""
        className="
        h-64
        w-full
        object-cover
        "
      />

      <div className="p-4">

        <h3
          className="
          font-semibold
          "
        >
          {item.title}
        </h3>

        <p
          className="
          text-sm
          text-slate-500
          mt-1
          "
        >
          {item.category}
        </p>

      </div>

    </div>
  );
};

export default MediaCard;