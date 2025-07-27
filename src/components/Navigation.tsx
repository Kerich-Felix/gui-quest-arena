import { Button } from "@/components/ui/button";
import { Wallet, Menu, X } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border shadow-lg">
      <div className="container mx-auto px-4 py-4 md:py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
              <span className="text-lg font-bold neon-text">GUI</span>
            </div>
            <span className="text-xl font-bold gradient-text">Quest Arena</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#games" className="text-foreground hover:text-primary transition-colors">
              Games
            </a>
            <a href="#leaderboard" className="text-foreground hover:text-primary transition-colors">
              Leaderboard
            </a>
            <a href="#rewards" className="text-foreground hover:text-primary transition-colors">
              Rewards
            </a>
            <a href="#how-to-play" className="text-foreground hover:text-primary transition-colors">
              How to Play
            </a>
            <a href="#community" className="text-foreground hover:text-primary transition-colors">
              Community
            </a>
          </div>

          {/* Wallet Connection */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="wallet" size="lg">
              <Wallet className="w-4 h-4" />
              Connect Petra Wallet
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <a href="#games" className="block text-foreground hover:text-primary transition-colors">
              Games
            </a>
            <a href="#leaderboard" className="block text-foreground hover:text-primary transition-colors">
              Leaderboard
            </a>
            <a href="#rewards" className="block text-foreground hover:text-primary transition-colors">
              Rewards
            </a>
            <a href="#how-to-play" className="block text-foreground hover:text-primary transition-colors">
              How to Play
            </a>
            <a href="#community" className="block text-foreground hover:text-primary transition-colors">
              Community
            </a>
            <Button variant="wallet" size="lg" className="w-full mt-4">
              <Wallet className="w-4 h-4" />
              Connect Petra Wallet
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;