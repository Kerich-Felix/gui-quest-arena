import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import GameShowcase from "@/components/GameShowcase";
import Leaderboard from "@/components/Leaderboard";
import RewardsSection from "@/components/RewardsSection";
import HowToPlay from "@/components/HowToPlay";
import CommunitySection from "@/components/CommunitySection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <GameShowcase />
      <Leaderboard />
      <RewardsSection />
      <HowToPlay />
      <CommunitySection />
      <Footer />
    </div>
  );
};

export default Index;
