import { useSelector } from "react-redux";
import BaseCard from "../../../shared/components/cards/BaseCard";

const VideoGallery = () => {
  const videos = useSelector((state) => state.gallery.data?.videos || []);

  return (
    <BaseCard>
      <h2
        className="
text-xl
font-semibold
mb-5
"
      >
        Videos
      </h2>

      <div className="space-y-4">
        {videos.map((video) => (
          <div key={video.id}>
            <p
              className="
font-medium
"
            >
              {video.title}
            </p>

            <p
              className="
text-sm
text-slate-500
"
            >
              {video.duration}
            </p>
          </div>
        ))}
      </div>
    </BaseCard>
  );
};

export default VideoGallery;
