import { Button } from "@/components/ui/button";
import { Play, Trophy, Coins } from "lucide-react";
import { Link } from "react-router-dom";
import guiTokenHero from "@/assets/gui-token-hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 md:pt-40">
      {/* Background with animated overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-primary/5 to-transparent" />
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary rounded-full opacity-20 floating-animation"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-8xl font-bold mb-8 gradient-text leading-tight">
            GUI Quest Arena
          </h1>
          
          {/* Token Visual */}
          <div className="flex justify-center mb-12">
            <div className="relative">
              <img 
                src={guiTokenHero} 
                alt="GUI Token" 
                className="w-32 h-32 md:w-48 md:h-48 object-cover rounded-full token-spin"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/50 to-secondary/50 rounded-full blur-xl animate-pulse" />
            </div>
          </div>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Enter the ultimate Web3 gaming arena! Use <span className="text-primary font-bold">$GUI tokens</span> to compete in epic PvP battles, solve meme trivia, and collect rare NFT rewards.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16 max-w-2xl mx-auto">
            <div className="gaming-card p-4 text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2">
                <Coins className="w-8 h-8 mx-auto mb-2" />
                10K+
              </div>
              <p className="text-sm text-muted-foreground">$GUI Distributed</p>
            </div>
            <div className="gaming-card p-4 text-center">
              <div className="text-2xl md:text-3xl font-bold text-secondary mb-2">
                <Play className="w-8 h-8 mx-auto mb-2" />
                5+
              </div>
              <p className="text-sm text-muted-foreground">Mini Games</p>
            </div>
            <div className="gaming-card p-4 text-center">
              <div className="text-2xl md:text-3xl font-bold text-accent mb-2">
                <Trophy className="w-8 h-8 mx-auto mb-2" />
                500+
              </div>
              <p className="text-sm text-muted-foreground">NFT Rewards</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/games">
              <Button variant="hero" size="xl" className="group">
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Start Playing Now
              </Button>
            </Link>
            <Link to="/leaderboard">
              <Button variant="outline" size="xl" className="border-primary/50 hover:bg-primary/10">
                <Trophy className="w-5 h-5" />
                View Leaderboard
              </Button>
            </Link>
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-sm text-muted-foreground">
            <p>Built on <span className="text-secondary font-semibold">Aptos Blockchain</span> • Powered by <span className="text-primary font-semibold">$GUI Tokens</span></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;