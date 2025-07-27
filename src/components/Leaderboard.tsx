import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Medal, Award, Coins, TrendingUp } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Leaderboard = () => {
  const topPlayers = [
    {
      rank: 1,
      username: "MemeLord_69",
      avatar: "/placeholder.svg",
      guiEarned: "15,420",
      nftsWon: 23,
      gamesPlayed: 156,
      winRate: 89,
      specialty: "Trivia Master"
    },
    {
      rank: 2,
      username: "CryptoHunter",
      avatar: "/placeholder.svg",
      guiEarned: "12,890",
      nftsWon: 19,
      gamesPlayed: 134,
      winRate: 85,
      specialty: "Treasure Expert"
    },
    {
      rank: 3,
      username: "ReflexKing",
      avatar: "/placeholder.svg",
      guiEarned: "11,240",
      nftsWon: 17,
      gamesPlayed: 189,
      winRate: 78,
      specialty: "Speed Demon"
    },
    {
      rank: 4,
      username: "AptosAce",
      avatar: "/placeholder.svg",
      guiEarned: "9,680",
      nftsWon: 14,
      gamesPlayed: 98,
      winRate: 92,
      specialty: "All-Rounder"
    },
    {
      rank: 5,
      username: "TokenSlayer",
      avatar: "/placeholder.svg",
      guiEarned: "8,550",
      nftsWon: 12,
      gamesPlayed: 145,
      winRate: 73,
      specialty: "PvP Legend"
    }
  ];

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className="w-6 h-6 text-gaming" />;
      case 2:
        return <Medal className="w-6 h-6 text-muted-foreground" />;
      case 3:
        return <Award className="w-6 h-6 text-gaming" />;
      default:
        return <span className="w-6 h-6 flex items-center justify-center text-lg font-bold text-muted-foreground">#{rank}</span>;
    }
  };

  const getRankStyle = (rank: number) => {
    switch (rank) {
      case 1:
        return "bg-gradient-to-r from-gaming to-gaming-glow border-2 border-gaming";
      case 2:
        return "bg-gradient-to-r from-muted to-muted/80 border-2 border-muted";
      case 3:
        return "bg-gradient-to-r from-gaming/50 to-gaming/30 border-2 border-gaming/50";
      default:
        return "gaming-card border-border";
    }
  };

  return (
    <section id="leaderboard" className="py-20 bg-gradient-to-b from-card/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
            Hall of Champions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See who's dominating the GUI Quest Arena! Compete for the top spots and earn legendary status.
          </p>
        </div>

        {/* Top 3 Podium */}
        <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
          {topPlayers.slice(0, 3).map((player) => (
            <Card key={player.rank} className={`text-center ${getRankStyle(player.rank)} transform hover:scale-105 transition-all duration-300`}>
              <CardHeader className="pb-4">
                <div className="flex justify-center mb-4">
                  {getRankIcon(player.rank)}
                </div>
                <Avatar className="w-20 h-20 mx-auto mb-4">
                  <AvatarImage src={player.avatar} alt={player.username} />
                  <AvatarFallback className="text-lg font-bold">
                    {player.username.slice(0, 2).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <CardTitle className="text-lg">{player.username}</CardTitle>
                <Badge variant="secondary" className="mx-auto">
                  {player.specialty}
                </Badge>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-center gap-2 text-gaming font-bold">
                  <Coins className="w-4 h-4" />
                  {player.guiEarned} $GUI
                </div>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <div className="text-muted-foreground">NFTs</div>
                    <div className="font-semibold">{player.nftsWon}</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground">Win Rate</div>
                    <div className="font-semibold text-accent">{player.winRate}%</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Full Leaderboard */}
        <Card className="gaming-card max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <TrendingUp className="w-6 h-6 text-primary" />
              Global Leaderboard
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topPlayers.map((player) => (
                <div 
                  key={player.rank} 
                  className="flex items-center gap-4 p-4 rounded-lg bg-muted/20 hover:bg-muted/40 transition-colors"
                >
                  <div className="flex items-center justify-center w-12">
                    {getRankIcon(player.rank)}
                  </div>
                  
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={player.avatar} alt={player.username} />
                    <AvatarFallback>
                      {player.username.slice(0, 2).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold truncate">{player.username}</div>
                    <div className="text-sm text-muted-foreground">{player.specialty}</div>
                  </div>
                  
                  <div className="text-right">
                    <div className="flex items-center gap-1 text-gaming font-bold">
                      <Coins className="w-4 h-4" />
                      {player.guiEarned}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {player.nftsWon} NFTs • {player.winRate}% WR
                    </div>
                  </div>
                  
                  <div className="text-sm text-muted-foreground">
                    {player.gamesPlayed} games
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Statistics Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
          <Card className="gaming-card text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-primary mb-2">50,000+</div>
              <div className="text-muted-foreground">Total $GUI Distributed</div>
            </CardContent>
          </Card>
          <Card className="gaming-card text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-secondary mb-2">1,200+</div>
              <div className="text-muted-foreground">Active Players</div>
            </CardContent>
          </Card>
          <Card className="gaming-card text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-accent mb-2">5,000+</div>
              <div className="text-muted-foreground">Games Played Today</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Leaderboard;