import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Map, Zap, Users, Clock, Coins } from "lucide-react";
import { Link } from "react-router-dom";
import triviaGameMockup from "@/assets/trivia-game-mockup.jpg";

const GameShowcase = () => {
  const games = [
    {
      id: "meme-trivia",
      title: "Meme Trivia Battle",
      description: "Test your meme knowledge in fast-paced trivia duels. Answer questions about crypto culture, internet memes, and Web3 trends.",
      entryFee: "50 $GUI",
      prize: "200 $GUI + Rare NFT",
      players: "1v1 or Battle Royale",
      duration: "5-10 mins",
      icon: Brain,
      image: triviaGameMockup,
      difficulty: "Easy",
      category: "PvP",
      features: ["Real-time multiplayer", "Meme categories", "Daily challenges", "Streak bonuses"]
    },
    {
      id: "token-quest",
      title: "Token Collection Quest",
      description: "Explore interactive maps to find hidden $GUI tokens and rare NFT treasures. Use strategy and speed to outpace other hunters.",
      entryFee: "75 $GUI",
      prize: "300 $GUI + Epic NFT",
      players: "Up to 20",
      duration: "15-30 mins",
      icon: Map,
      image: triviaGameMockup,
      difficulty: "Medium",
      category: "PvE",
      features: ["Procedural maps", "Power-ups", "Team mode", "Boss encounters"]
    },
    {
      id: "pvp-battle",
      title: "PvP Battle Arena",
      description: "Quick reaction mini-games with crypto-themed challenges. Perfect your timing to earn massive $GUI rewards.",
      entryFee: "100 $GUI",
      prize: "500 $GUI + Legendary NFT",
      players: "Solo or Duo",
      duration: "2-5 mins",
      icon: Zap,
      image: triviaGameMockup,
      difficulty: "Hard",
      category: "PvP",
      features: ["Split-second timing", "Combo multipliers", "Daily tournaments", "Skill rankings"]
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy": return "bg-accent text-accent-foreground";
      case "Medium": return "bg-gaming text-gaming-foreground";
      case "Hard": return "bg-destructive text-destructive-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "PvP": return "bg-primary text-primary-foreground";
      case "PvE": return "bg-secondary text-secondary-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section id="games" className="py-20 bg-gradient-to-b from-background to-card/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
            Epic Mini-Games
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose your adventure! Each game offers unique challenges, rewards, and ways to earn $GUI tokens.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game) => {
            const IconComponent = game.icon;
            return (
              <Card key={game.id} className="gaming-card group hover:scale-105 transition-all duration-300">
                <CardHeader className="relative">
                  <div className="relative overflow-hidden rounded-lg mb-4">
                    <img 
                      src={game.image} 
                      alt={game.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <Badge className={getDifficultyColor(game.difficulty)}>
                        {game.difficulty}
                      </Badge>
                      <Badge className={getCategoryColor(game.category)}>
                        {game.category}
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <div className="bg-background/80 backdrop-blur-sm rounded-full p-2">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                  </div>
                  
                  <CardTitle className="flex items-center gap-2 text-xl">
                    {game.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {game.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  {/* Game Stats */}
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Coins className="w-4 h-4 text-gaming" />
                      <span className="text-muted-foreground">Entry:</span>
                      <span className="font-semibold text-gaming">{game.entryFee}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-secondary" />
                      <span className="text-muted-foreground">Players:</span>
                      <span className="font-semibold">{game.players}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-accent" />
                      <span className="text-muted-foreground">Duration:</span>
                      <span className="font-semibold">{game.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-muted-foreground">Prize:</span>
                      <span className="font-semibold text-primary">{game.prize}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="font-semibold mb-2 text-sm">Features:</h4>
                    <div className="flex flex-wrap gap-1">
                      {game.features.map((feature, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 pt-4">
                    <Link to={`/game/${game.id}`}>
                      <Button variant="gaming" className="flex-1" size="sm">
                        Play Now
                      </Button>
                    </Link>
                    <Link to={`/game/${game.id}`}>
                      <Button variant="outline" size="sm">
                        Demo
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button variant="hero" size="lg">
            View All Games
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GameShowcase;