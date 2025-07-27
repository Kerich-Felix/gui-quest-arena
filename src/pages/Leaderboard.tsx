import Navigation from "@/components/Navigation";
import Leaderboard from "@/components/Leaderboard";
import Footer from "@/components/Footer";

const LeaderboardPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-32">
        <Leaderboard />
      </div>
      <Footer />
    </div>
  );
};

export default LeaderboardPage;