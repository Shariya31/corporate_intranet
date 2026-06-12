import MediaCard from "./MediaCard";

const MediaGrid = ({ media }) => {
  return (
    <div
      className="
      grid
      grid-cols-3
      gap-5
      "
    >
      {media.map((item) => (
        <MediaCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default MediaGrid;
