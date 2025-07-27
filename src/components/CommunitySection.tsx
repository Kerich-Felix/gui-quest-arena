import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  MessageCircle, 
  Users, 
  Calendar, 
  Share2, 
  Trophy, 
  Gamepad2,
  ExternalLink,
  Bell
} from "lucide-react";

const CommunitySection = () => {
  const communityStats = [
    { label: "Active Players", value: "12.5K", icon: Users, color: "primary" },
    { label: "Daily Games", value: "5.2K", icon: Gamepad2, color: "secondary" },
    { label: "Community Posts", value: "850", icon: MessageCircle, color: "accent" },
    { label: "Live Tournaments", value: "24", icon: Trophy, color: "gaming" }
  ];

  const socialLinks = [
    {
      platform: "Discord",
      handle: "GUI Quest Arena",
      members: "8.5K members",
      description: "Join real-time chat, find teammates, and get game updates",
      color: "primary",
      link: "https://discord.gg/guiquest"
    },
    {
      platform: "Twitter",
      handle: "@GUIQuestArena",
      members: "15K followers",
      description: "Latest news, tournaments, and community highlights",
      color: "secondary",
      link: "https://twitter.com/guiquest"
    },
    {
      platform: "Telegram",
      handle: "GUI INU Community",
      members: "22K members",
      description: "Official announcements and $GUI token updates",
      color: "accent",
      link: "https://t.me/guiinu"
    }
  ];

  const upcomingEvents = [
    {
      title: "Weekly Trivia Championship",
      date: "Every Friday 8PM UTC",
      prize: "5,000 $GUI + Legendary NFT",
      participants: "500+ players"
    },
    {
      title: "Monthly Token Hunt",
      date: "First Saturday of Month",
      prize: "10,000 $GUI Pool",
      participants: "1000+ players"
    },
    {
      title: "Community NFT Drop",
      date: "Every 2 weeks",
      prize: "Exclusive Community NFTs",
      participants: "All members"
    }
  ];

  const achievements = [
    {
      title: "Friend Referral",
      description: "Refer 5 friends to earn bonus $GUI",
      reward: "+200 $GUI",
      icon: Share2
    },
    {
      title: "Community Champion",
      description: "Active community participation",
      reward: "Special NFT Badge",
      icon: MessageCircle
    },
    {
      title: "Tournament Winner",
      description: "Win a community tournament",
      reward: "Exclusive Title + NFT",
      icon: Trophy
    }
  ];

  return (
    <section id="community" className="py-20 bg-gradient-to-b from-card/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
            Join the Community
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Connect with thousands of players, share strategies, and stay updated on the latest tournaments and rewards!
          </p>
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {communityStats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card key={index} className="gaming-card text-center group hover:scale-105 transition-all duration-300">
                <CardContent className="pt-6">
                  <div className={`w-12 h-12 mx-auto rounded-full bg-${stat.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Social Links */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {socialLinks.map((social, index) => (
            <Card key={index} className="gaming-card group hover:scale-105 transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>{social.platform}</span>
                  <ExternalLink className="w-5 h-5 opacity-50 group-hover:opacity-100 transition-opacity" />
                </CardTitle>
                <div className="space-y-1">
                  <p className="font-semibold">{social.handle}</p>
                  <p className="text-sm text-muted-foreground">{social.members}</p>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{social.description}</p>
                <Button variant="gaming" className="w-full">
                  Join {social.platform}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Upcoming Events */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <Card className="gaming-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-6 h-6 text-primary" />
                Upcoming Events
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="border-l-4 border-primary pl-4 py-2">
                  <h4 className="font-semibold text-lg">{event.title}</h4>
                  <p className="text-sm text-muted-foreground mb-2">{event.date}</p>
                  <div className="flex items-center gap-4 text-sm">
                    <Badge variant="outline" className="text-gaming">
                      {event.prize}
                    </Badge>
                    <span className="text-muted-foreground">{event.participants}</span>
                  </div>
                </div>
              ))}
              <Button variant="neon" className="w-full">
                <Bell className="w-4 h-4" />
                Get Event Notifications
              </Button>
            </CardContent>
          </Card>

          {/* Community Achievements */}
          <Card className="gaming-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="w-6 h-6 text-gaming" />
                Community Achievements
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {achievements.map((achievement, index) => {
                const IconComponent = achievement.icon;
                return (
                  <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-muted/20 hover:bg-muted/40 transition-colors">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold">{achievement.title}</h4>
                      <p className="text-sm text-muted-foreground mb-2">{achievement.description}</p>
                      <Badge variant="outline" className="text-accent">
                        {achievement.reward}
                      </Badge>
                    </div>
                  </div>
                );
              })}
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <Card className="gaming-card text-center max-w-2xl mx-auto">
          <CardContent className="pt-8 pb-8">
            <h3 className="text-2xl font-bold mb-4 gradient-text">
              Ready to Join the Arena?
            </h3>
            <p className="text-muted-foreground mb-6">
              Connect your wallet, start playing, and become part of the most exciting Web3 gaming community!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                <Gamepad2 className="w-5 h-5" />
                Start Playing
              </Button>
              <Button variant="outline" size="lg">
                <MessageCircle className="w-5 h-5" />
                Join Discord
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CommunitySection;