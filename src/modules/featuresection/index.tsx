import React from 'react';
import { 
  Zap, 
  Brain,
  Puzzle,
  Globe,
  Shield,
  Activity,
  BookOpen,
  CreditCard
} from 'lucide-react';
import { Card } from '@/components/ui/card';

const FeatureSection = () => {
  const features = [
    {
      icon: Brain,
      title: "AI Nodes",
      description: "Integrate OpenAI, Claude, Gemini, and more AI models directly into workflows.",
      color: "text-neon-purple",
    },
    {
      icon: Puzzle,
      title: "200+ Integrations",
      description: "Connect Slack, Notion, Google Sheets, Stripe, Discord, and more.",
      color: "text-neon-blue",
    },
    {
      icon: Zap,
      title: "High Performance",
      description: "Lightning-fast execution with automatic scaling and error handling.",
      color: "text-neon-green",
    },
    {
      icon: BookOpen,
      title: "Templates Library",
      description: "Start fast with pre-built workflows for common automation needs.",
      color: "text-neon-purple",
    },
    {
      icon: CreditCard,
      title: "Flexible Billing",
      description: "Pay with Stripe or crypto through Cryptomus. Scale as you grow.",
      color: "text-neon-blue",
    },
    {
      icon: Shield,
      title: "Secure Credential Vault",
      description: "Enterprise-grade security for API keys and sensitive data with encryption.",
      color: "text-neon-green",
    },
    {
      icon: Activity,
      title: "Live Logs & Monitoring",
      description: "Real-time execution logs, error tracking, and performance monitoring.",
      color: "text-neon-cyan",
    },
    {
      icon: Globe,
      title: "Global Edge Network",
      description: "Run workflows closer to your users with our worldwide infrastructure.",
      color: "text-neon-cyan",
    },
  ];

  return (
    <section className="relative py-24 px-6 bg-background">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-neon-green/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10 container max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Powerful Features for </span>
            <span className="bg-gradient-to-r from-neon-green to-neon-blue bg-clip-text text-transparent">
              Modern Teams
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to build, deploy, and scale automation workflows
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Card className="p-6 h-full bg-gradient-card border-primary/10 hover:border-primary/30 transition-all duration-300 group backdrop-blur-sm">
                {/* Icon with colored background */}
                <div className="mb-4">
                  <div className="w-12 h-12 bg-secondary/50 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <feature.icon className={`w-6 h-6 ${feature.color}`} />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold mb-2 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            </div>
          ))}
        </div>

        {/* Payment Solution */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 bg-secondary/30 backdrop-blur-sm px-4 py-3 rounded-full border border-border animate-fade-in" style={{ animationDelay: "0.7s" }}>
            <CreditCard className="w-5 h-5 text-primary" />
            <span className="text-sm ">
              <span className="text-muted-foreground">Payments powered by</span>
              <span className="font-semibold text-foreground ml-1">Stripe</span>
              <span className="text-muted-foreground mx-2">+</span>
              <span className="font-semibold text-foreground">Cryptomus</span>
            </span>
          </div>
        </div>

     
      </div>
    </section>
  );
};

export default FeatureSection;


