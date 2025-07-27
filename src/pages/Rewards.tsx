import Navigation from "@/components/Navigation";
import RewardsSection from "@/components/RewardsSection";
import Footer from "@/components/Footer";

const Rewards = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-32">
        <RewardsSection />
      </div>
      <Footer />
    </div>
  );
};

export default Rewards;