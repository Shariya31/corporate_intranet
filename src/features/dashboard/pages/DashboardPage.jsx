import AnnouncementFeed from "../components/AnnouncementFeed";
import DepartmentImpact from "../components/DepartmentImpact";
import EngagementChart from "../components/EngagementChart";
import EventsTimeline from "../components/EventsTimeline";
import HeroSection from "../components/HeroSection";
import Leaderboard from "../components/Leaderboard";
import LeadershipUpdates from "../components/LeadershipUpdates";
import NewJoiners from "../components/NewJoiners";
import RecognitionFeed from "../components/RecognitionFeed";
import StatsGrid from "../components/StatsGrid";
import useDashboard from "../hooks/useDashboard";

const DashboardPage = () => {
  useDashboard();

  return (
    <div className="space-y-6">
      <HeroSection />

      <StatsGrid />

      <section
        className="
        grid
        grid-cols-12
        gap-6
      "
      >
        <div className="col-span-8">
          <AnnouncementFeed />
        </div>

        <div className="col-span-4">
          <EventsTimeline />
        </div>
      </section>

      <section
        className="
        grid
        grid-cols-12
        gap-6
      "
      >
        <div className="col-span-7">
          <LeadershipUpdates />
        </div>

        <div className="col-span-5">
          <RecognitionFeed />
        </div>
      </section>

      <section
        className="
        grid
        grid-cols-12
        gap-6
      "
      >
        <div className="col-span-8">
          <DepartmentImpact />
        </div>

        <div className="col-span-4">
          <Leaderboard />
        </div>
      </section>

      <section
        className="
        grid
        grid-cols-12
        gap-6
      "
      >
        <div className="col-span-6">
          <NewJoiners />
        </div>

        {/* <div className="col-span-6">
          <TrendingDiscussions />
        </div> */}
      </section>
      <EngagementChart />
    </div>
  );
};

export default DashboardPage;