import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Gift, Star, Zap, Crown, Coins, Sparkles } from "lucide-react";
import nftRewards from "@/assets/nft-rewards.jpg";

const RewardsSection = () => {
  const rewardTiers = [
    {
      tier: "Bronze",
      minGames: 10,
      guiBonus: "50",
      color: "gaming",
      icon: Star,
      rewards: ["Basic NFT Skins", "+5% $GUI Bonus", "Bronze Badge"]
    },
    {
      tier: "Silver", 
      minGames: 50,
      guiBonus: "150",
      color: "secondary",
      icon: Zap,
      rewards: ["Rare NFT Collections", "+10% $GUI Bonus", "Silver Badge", "Exclusive Emotes"]
    },
    {
      tier: "Gold",
      minGames: 100,
      guiBonus: "500",
      color: "gaming",
      icon: Crown,
      rewards: ["Legendary NFTs", "+20% $GUI Bonus", "Gold Badge", "VIP Access", "Custom Titles"]
    }
  ];

  const featuredNFTs = [
    {
      name: "Meme Master Trophy",
      rarity: "Legendary",
      description: "Awarded to trivia champions",
      value: "1,000 $GUI",
      image: nftRewards
    },
    {
      name: "Speed Demon Badge",
      rarity: "Epic",
      description: "For lightning-fast reflexes",
      value: "500 $GUI",
      image: nftRewards
    },
    {
      name: "Treasure Hunter Compass",
      rarity: "Rare",
      description: "Token hunting expertise",
      value: "250 $GUI",
      image: nftRewards
    }
  ];

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "Legendary": return "text-gaming";
      case "Epic": return "text-primary";
      case "Rare": return "text-secondary";
      default: return "text-muted-foreground";
    }
  };

  return (
    <section id="rewards" className="py-20 bg-gradient-to-b from-background to-card/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
            Epic Rewards
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Earn $GUI tokens, collect rare NFTs, and unlock exclusive rewards as you dominate the arena!
          </p>
        </div>

        {/* Reward Tiers */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {rewardTiers.map((tier, index) => {
            const IconComponent = tier.icon;
            return (
              <Card key={tier.tier} className={`gaming-card text-center relative overflow-hidden group hover:scale-105 transition-all duration-300`}>
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-${tier.color} to-${tier.color}-glow`} />
                <CardHeader className="pb-4">
                  <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-${tier.color} to-${tier.color}-glow flex items-center justify-center mb-4`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl">{tier.tier} Tier</CardTitle>
                  <p className="text-muted-foreground">
                    Play {tier.minGames}+ games to unlock
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className={`text-3xl font-bold text-${tier.color} flex items-center justify-center gap-2`}>
                    <Coins className="w-6 h-6" />
                    +{tier.guiBonus} $GUI
                  </div>
                  <div className="space-y-2">
                    {tier.rewards.map((reward, rewardIndex) => (
                      <Badge key={rewardIndex} variant="outline" className="block">
                        {reward}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Featured NFTs */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-8 gradient-text">
            Featured NFT Rewards
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredNFTs.map((nft, index) => (
              <Card key={index} className="gaming-card group overflow-hidden">
                <div className="relative">
                  <img 
                    src={nft.image} 
                    alt={nft.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className={`${getRarityColor(nft.rarity)} bg-background/80 backdrop-blur-sm`}>
                      {nft.rarity}
                    </Badge>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-gaming" />
                    {nft.name}
                  </CardTitle>
                  <p className="text-muted-foreground text-sm">
                    {nft.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-gaming font-bold">{nft.value}</span>
                    <Button variant="gaming" size="sm">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* How to Earn Section */}
        <Card className="gaming-card max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl text-center gradient-text">
              How to Earn Rewards
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-primary">$GUI Token Rewards</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Win games to earn $GUI prizes</li>
                  <li>• Complete daily challenges</li>
                  <li>• Maintain win streaks for bonuses</li>
                  <li>• Participate in tournaments</li>
                  <li>• Refer friends for bonus rewards</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-secondary">NFT Rewards</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Unlock through tier progression</li>
                  <li>• Win special tournament prizes</li>
                  <li>• Complete achievement milestones</li>
                  <li>• Participate in seasonal events</li>
                  <li>• Trade with other players</li>
                </ul>
              </div>
            </div>
            <div className="mt-8 text-center">
              <Button variant="hero" size="lg">
                <Gift className="w-5 h-5" />
                Start Earning Now
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default RewardsSection;