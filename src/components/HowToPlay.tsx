import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Wallet, 
  Coins, 
  Gamepad2, 
  Trophy, 
  ArrowRight, 
  Download,
  Shield,
  Zap
} from "lucide-react";

const HowToPlay = () => {
  const steps = [
    {
      step: 1,
      title: "Connect Your Wallet",
      description: "Install and connect your Petra wallet to start playing",
      icon: Wallet,
      color: "primary",
      details: [
        "Download Petra wallet from the official website",
        "Create a new wallet or import existing one",
        "Add Aptos network to your wallet",
        "Click 'Connect Wallet' on GUI Quest Arena"
      ]
    },
    {
      step: 2,
      title: "Get $GUI Tokens",
      description: "Acquire $GUI tokens to participate in games",
      icon: Coins,
      color: "gaming",
      details: [
        "Purchase $GUI from supported exchanges",
        "Transfer tokens to your Petra wallet",
        "Verify your $GUI balance in the game",
        "Start with our demo mode to practice"
      ]
    },
    {
      step: 3,
      title: "Choose Your Game",
      description: "Select from various mini-games and game modes",
      icon: Gamepad2,
      color: "secondary",
      details: [
        "Browse available games in the lobby",
        "Check entry fees and prize pools",
        "Choose between PvP and PvE modes",
        "Read game rules and strategies"
      ]
    },
    {
      step: 4,
      title: "Play & Earn",
      description: "Compete, win, and collect your rewards",
      icon: Trophy,
      color: "accent",
      details: [
        "Pay entry fee using $GUI tokens",
        "Play the game and compete",
        "Win matches to earn $GUI rewards",
        "Collect NFTs and achievement badges"
      ]
    }
  ];

  const gameTypes = [
    {
      title: "Meme Trivia Battle",
      description: "Test your knowledge of crypto memes and Web3 culture",
      entryFee: "10-50 $GUI",
      duration: "5-10 minutes",
      maxPlayers: "2-8 players",
      tips: ["Study popular memes", "Stay updated on crypto trends", "Practice with daily quizzes"]
    },
    {
      title: "Token Treasure Hunt",
      description: "Explore maps and collect hidden $GUI tokens",
      entryFee: "25-100 $GUI",
      duration: "15-30 minutes", 
      maxPlayers: "Up to 20 players",
      tips: ["Learn map layouts", "Use power-ups strategically", "Team up with friends"]
    },
    {
      title: "Lightning Reflexes",
      description: "Quick reaction games with crypto-themed challenges",
      entryFee: "5-25 $GUI",
      duration: "2-5 minutes",
      maxPlayers: "Solo or Duo",
      tips: ["Practice timing", "Use good equipment", "Stay focused and calm"]
    }
  ];

  const walletInfo = {
    name: "Petra Wallet",
    features: ["Aptos Native", "Secure Storage", "DApp Integration", "NFT Support"],
    downloadLink: "https://petra.app/",
    setupSteps: [
      "Visit petra.app and download the extension",
      "Create a new wallet and save your seed phrase",
      "Add the Aptos network to your wallet",
      "Fund your wallet with APT for transaction fees"
    ]
  };

  return (
    <section id="how-to-play" className="py-20 bg-gradient-to-b from-background to-card/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
            How to Play
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get started in GUI Quest Arena in just 4 simple steps. No Web3 experience required!
          </p>
        </div>

        {/* Main Steps */}
        <div className="space-y-8 mb-16">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <Card key={step.step} className="gaming-card max-w-4xl mx-auto">
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row items-start gap-8">
                    <div className="flex items-center gap-4 lg:w-1/3">
                      <div className={`w-16 h-16 rounded-full bg-${step.color} flex items-center justify-center`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <Badge className={`bg-${step.color} text-white mb-2`}>
                          Step {step.step}
                        </Badge>
                        <h3 className="text-xl font-bold">{step.title}</h3>
                        <p className="text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                    
                    <div className="lg:w-2/3">
                      <ul className="space-y-3">
                        {step.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-center gap-3 text-muted-foreground">
                            <ArrowRight className="w-4 h-4 text-primary" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Wallet Setup Guide */}
        <Card className="gaming-card max-w-4xl mx-auto mb-16">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Shield className="w-6 h-6 text-primary" />
              Petra Wallet Setup Guide
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold mb-4">Why Petra Wallet?</h4>
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {walletInfo.features.map((feature, index) => (
                    <Badge key={index} variant="outline">
                      {feature}
                    </Badge>
                  ))}
                </div>
                <Button variant="gaming" className="w-full">
                  <Download className="w-4 h-4" />
                  Download Petra Wallet
                </Button>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Setup Steps:</h4>
                <ol className="space-y-2">
                  {walletInfo.setupSteps.map((step, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span className="w-6 h-6 rounded-full bg-primary text-white text-xs flex items-center justify-center mt-0.5">
                        {index + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Game Types Guide */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-8 gradient-text">
            Game Types & Strategies
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {gameTypes.map((game, index) => (
              <Card key={index} className="gaming-card">
                <CardHeader>
                  <CardTitle className="text-lg">{game.title}</CardTitle>
                  <p className="text-muted-foreground text-sm">{game.description}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <span className="text-muted-foreground">Entry:</span>
                      <div className="font-semibold text-gaming">{game.entryFee}</div>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Duration:</span>
                      <div className="font-semibold">{game.duration}</div>
                    </div>
                  </div>
                  <div>
                    <span className="text-muted-foreground text-sm">Players:</span>
                    <div className="font-semibold">{game.maxPlayers}</div>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-2 text-sm">Pro Tips:</h5>
                    <ul className="space-y-1">
                      {game.tips.map((tip, tipIndex) => (
                        <li key={tipIndex} className="text-xs text-muted-foreground flex items-center gap-2">
                          <Zap className="w-3 h-3 text-accent" />
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Quick Start CTA */}
        <Card className="gaming-card text-center max-w-2xl mx-auto">
          <CardContent className="pt-8 pb-8">
            <h3 className="text-2xl font-bold mb-4 gradient-text">
              Ready to Start Your Quest?
            </h3>
            <p className="text-muted-foreground mb-6">
              Join thousands of players already earning $GUI tokens and collecting NFTs!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                <Gamepad2 className="w-5 h-5" />
                Play Demo Mode
              </Button>
              <Button variant="wallet" size="lg">
                <Wallet className="w-5 h-5" />
                Connect Wallet
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default HowToPlay;