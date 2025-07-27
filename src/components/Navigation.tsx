import { Button } from "@/components/ui/button";
import { Wallet, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useWallet } from "@/contexts/WalletContext";
import { useToast } from "@/hooks/use-toast";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isConnected, address, connectWallet, disconnectWallet } = useWallet();
  const { toast } = useToast();
  const location = useLocation();

  const handleWalletClick = () => {
    if (isConnected) {
      disconnectWallet();
      toast({
        title: "Wallet Disconnected",
        description: "Your wallet has been disconnected successfully.",
      });
    } else {
      connectWallet();
      toast({
        title: "Wallet Connected!",
        description: "Your wallet is now connected and ready to play.",
      });
    }
  };

  const formatAddress = (addr: string) => {
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border shadow-lg">
      <div className="container mx-auto px-4 py-4 md:py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
              <span className="text-lg font-bold neon-text">GUI</span>
            </div>
            <span className="text-xl font-bold gradient-text">Quest Arena</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/games" className={`text-foreground hover:text-primary transition-colors ${location.pathname === '/games' ? 'text-primary' : ''}`}>
              Games
            </Link>
            <Link to="/leaderboard" className={`text-foreground hover:text-primary transition-colors ${location.pathname === '/leaderboard' ? 'text-primary' : ''}`}>
              Leaderboard
            </Link>
            <Link to="/rewards" className={`text-foreground hover:text-primary transition-colors ${location.pathname === '/rewards' ? 'text-primary' : ''}`}>
              Rewards
            </Link>
            <Link to="/howtoplay" className={`text-foreground hover:text-primary transition-colors ${location.pathname === '/howtoplay' ? 'text-primary' : ''}`}>
              How to Play
            </Link>
            <Link to="/community" className={`text-foreground hover:text-primary transition-colors ${location.pathname === '/community' ? 'text-primary' : ''}`}>
              Community
            </Link>
          </div>

          {/* Wallet Connection */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="wallet" size="lg" onClick={handleWalletClick}>
              <Wallet className="w-4 h-4" />
              {isConnected ? formatAddress(address!) : "Connect Wallet"}
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
            <Link to="/games" className="block text-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
              Games
            </Link>
            <Link to="/leaderboard" className="block text-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
              Leaderboard
            </Link>
            <Link to="/rewards" className="block text-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
              Rewards
            </Link>
            <Link to="/howtoplay" className="block text-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
              How to Play
            </Link>
            <Link to="/community" className="block text-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
              Community
            </Link>
            <Button variant="wallet" size="lg" className="w-full mt-4" onClick={handleWalletClick}>
              <Wallet className="w-4 h-4" />
              {isConnected ? formatAddress(address!) : "Connect Wallet"}
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;