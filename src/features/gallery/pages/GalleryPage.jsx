import { useState } from "react";
import { useSelector } from "react-redux";

import useGallery from "../hooks/useGallery";

import GalleryHero from "../components/GalleryHero";
import GalleryStats from "../components/GalleryStats";
import GalleryFilters from "../components/GalleryFilters";
import FeaturedAlbum from "../components/FeaturedAlbum";
import MediaGrid from "../components/MediaGrid";
import EventAlbums from "../components/EventAlbums";
import VideoGallery from "../components/VideoGallery";
import RecentHighlights from "../components/RecentHighlights";

const GalleryPage = () => {
  useGallery();

  const [activeCategory, setActiveCategory] =
    useState("All");

  const data = useSelector(
    (state) => state.gallery.data
  );

  const categories =
    data?.categories || [];

  const media =
    data?.media || [];

  const filteredMedia =
    media.filter((item) =>
      activeCategory === "All"
        ? true
        : item.category === activeCategory
    );

  return (
    <div className="space-y-6">

      <GalleryHero />

      <GalleryStats />

      <FeaturedAlbum />

      <GalleryFilters
        categories={categories}
        activeCategory={activeCategory}
        setActiveCategory={
          setActiveCategory
        }
      />

      <div
        className="
        grid
        grid-cols-12
        gap-6
        "
      >
        <div className="col-span-8">

          <MediaGrid
            media={filteredMedia}
          />

        </div>

        <div
          className="
          col-span-4
          space-y-6
          "
        >
          <EventAlbums />

          <VideoGallery />

          <RecentHighlights />
        </div>

      </div>

    </div>
  );
};

export default GalleryPage;