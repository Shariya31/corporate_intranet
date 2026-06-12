import { useState } from "react";

import { useSelector } from "react-redux";


import ForumHero from "../components/ForumHero";

import CreateDiscussion from "../components/CreateDiscussion";

import DiscussionFilters from "../components/DiscussionFilters";

import DiscussionFeed from "../components/DiscussionFeed";

import TrendingTopics from "../components/TrendingTopics";

import ActiveContributors from "../components/ActiveContributors";

import ModerationPanel from "../components/ModerationPanel";

import useCommunity from "../hooks/useCommunity"
const CommunityPage = () => {
  
  const [search, setSearch] = useState("");
  
  const [activeCategory, setActiveCategory] = useState("All");

  const data = useSelector((state) => state.community.data);

  const discussions = data?.discussions || [];

  const categories = data?.categories || [];
  
  const filteredDiscussions = discussions.filter((discussion) => {
    const matchesSearch = discussion.title
      .toLowerCase()
      .includes(search.toLowerCase());
      
      const matchesCategory =
      activeCategory === "All" ? true : discussion.category === activeCategory;
      
      return matchesSearch && matchesCategory;
    });
    
    useCommunity();
  return (
    <div className="space-y-6">
      <ForumHero />

      <div
        className="
    bg-white
    border
    rounded-2xl
    p-4
    "
      >
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search discussions..."
          className="
      w-full
      outline-none
      "
        />
      </div>

      <DiscussionFilters
        categories={categories}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />

      <div
        className="
    grid
    grid-cols-12
    gap-6
    "
      >
        <div
          className="
      col-span-8
      space-y-6
      "
        >
          <CreateDiscussion />

          <DiscussionFeed discussions={filteredDiscussions} />
        </div>

        <div
          className="
      col-span-4
      space-y-6
      "
        >
          <TrendingTopics />

          <ActiveContributors />

          <ModerationPanel />
        </div>
      </div>
    </div>
  );
};

export default CommunityPage;
