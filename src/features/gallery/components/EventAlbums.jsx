import { useSelector } from "react-redux";
import BaseCard from "../../../shared/components/cards/BaseCard";

const EventAlbums = () => {
  const albums = useSelector((state) => state.gallery.data?.albums || []);

  return (
    <BaseCard>
      <h2
        className="
text-xl
font-semibold
mb-5
"
      >
        Event Albums
      </h2>

      <div className="space-y-4">
        {albums.map((album) => (
          <div
            key={album.id}
            className="
flex
justify-between
"
          >
            <p>{album.title}</p>

            <span>
              {album.items}
              items
            </span>
          </div>
        ))}
      </div>
    </BaseCard>
  );
};

export default EventAlbums;
