import Navigation from "@/components/Navigation";
import CommunitySection from "@/components/CommunitySection";
import Footer from "@/components/Footer";

const Community = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-32">
        <CommunitySection />
      </div>
      <Footer />
    </div>
  );
};

export default Community;