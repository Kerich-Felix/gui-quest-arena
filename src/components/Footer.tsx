import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Twitter, 
  MessageCircle, 
  Send, 
  Github, 
  ExternalLink,
  Mail,
  Shield,
  Book
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = {
    product: [
      { name: "Games", href: "#games" },
      { name: "Leaderboard", href: "#leaderboard" },
      { name: "Rewards", href: "#rewards" },
      { name: "How to Play", href: "#how-to-play" }
    ],
    community: [
      { name: "Discord", href: "https://discord.gg/guiquest", external: true },
      { name: "Twitter", href: "https://twitter.com/guiquest", external: true },
      { name: "Telegram", href: "https://t.me/guiinu", external: true },
      { name: "Community Hub", href: "#community" }
    ],
    resources: [
      { name: "Whitepaper", href: "#", external: true },
      { name: "Smart Contracts", href: "#", external: true },
      { name: "API Documentation", href: "#", external: true },
      { name: "Tokenomics", href: "#", external: true }
    ],
    support: [
      { name: "Help Center", href: "#" },
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Contact Us", href: "#" }
    ]
  };

  const socialIcons = {
    Twitter: Twitter,
    Discord: MessageCircle,
    Telegram: Send,
    Github: Github
  };

  return (
    <footer className="bg-card/50 border-t border-border">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                <span className="text-lg font-bold neon-text">GUI</span>
              </div>
              <span className="text-xl font-bold gradient-text">Quest Arena</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              The ultimate Web3 gaming arena where players use $GUI tokens to compete in epic mini-games, 
              earn rewards, and collect rare NFTs on the Aptos blockchain.
            </p>
            <div className="flex gap-4">
              <Button variant="gaming" size="sm">
                <ExternalLink className="w-4 h-4" />
                Join Community
              </Button>
              <Button variant="outline" size="sm">
                <Book className="w-4 h-4" />
                Documentation
              </Button>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Product</h4>
            <ul className="space-y-3">
              {links.product.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Community Links */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Community</h4>
            <ul className="space-y-3">
              {links.community.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-2"
                    {...(link.external && { target: "_blank", rel: "noopener noreferrer" })}
                  >
                    {link.name}
                    {link.external && <ExternalLink className="w-3 h-3" />}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Resources</h4>
            <ul className="space-y-3">
              {links.resources.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-2"
                    {...(link.external && { target: "_blank", rel: "noopener noreferrer" })}
                  >
                    {link.name}
                    {link.external && <ExternalLink className="w-3 h-3" />}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="gaming-card p-8 mb-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4 gradient-text">
              Stay Updated
            </h3>
            <p className="text-muted-foreground mb-6">
              Get the latest news about tournaments, new games, and $GUI token updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <div className="flex-1">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 rounded-lg bg-input border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <Button variant="gaming">
                <Mail className="w-4 h-4" />
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            © {currentYear} GUI Quest Arena. Built on Aptos blockchain. All rights reserved.
          </div>
          
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Shield className="w-4 h-4" />
              Secured by Aptos
            </div>
            
            <div className="flex gap-4">
              {Object.entries(socialIcons).map(([platform, IconComponent]) => (
                <Button key={platform} variant="ghost" size="icon" className="w-8 h-8">
                  <IconComponent className="w-4 h-4" />
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;