import { useSelector } from "react-redux";
import BaseCard from "../../../shared/components/cards/BaseCard";

const FeaturedAlbum = () => {
  const album = useSelector((state) => state.gallery.data?.featuredAlbum);

  if (!album) return null;

  return (
    <BaseCard>
      <div
        className="
relative
overflow-hidden
rounded-3xl
"
      >
        <img
          src={album.cover}
          alt=""
          className="
w-full
h-80
object-cover
"
        />

        <div
          className="
absolute
bottom-0
left-0
right-0
bg-black/60
text-white
p-6
"
        >
          <h2
            className="
text-2xl
font-bold
"
          >
            {album.title}
          </h2>

          <p>
            {album.photos}
            Photos • {album.videos}
            Videos
          </p>
        </div>
      </div>
    </BaseCard>
  );
};

export default FeaturedAlbum;
