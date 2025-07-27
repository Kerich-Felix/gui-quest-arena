import Navigation from "@/components/Navigation";
import GameShowcase from "@/components/GameShowcase";
import Footer from "@/components/Footer";

const Games = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-32">
        <GameShowcase />
      </div>
      <Footer />
    </div>
  );
};

export default Games;