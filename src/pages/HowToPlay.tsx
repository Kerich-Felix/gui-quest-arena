import Navigation from "@/components/Navigation";
import HowToPlay from "@/components/HowToPlay";
import Footer from "@/components/Footer";

const HowToPlayPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-32">
        <HowToPlay />
      </div>
      <Footer />
    </div>
  );
};

export default HowToPlayPage;