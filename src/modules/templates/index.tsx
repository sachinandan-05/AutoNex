import React from 'react';
import { 
  Bot, 
  Webhook, 
  Database, 
  FileText, 
  Mail, 
  CreditCard,
  ArrowRight
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const templates = [
  {
    icon: CreditCard,
    title: "Stripe → Notion CRM",
    description: "Automatically create customer records in Notion when Stripe payments succeed.",
    tags: ["E-commerce", "CRM", "Popular"],
    color: "border-neon-green/30 hover:border-neon-green/50"
  },
  {
    icon: FileText,
    title: "Google Form → Sheets → Slack",
    description: "Process form submissions and notify your team with formatted messages.",
    tags: ["Forms", "Team", "Notifications"],
    color: "border-neon-blue/30 hover:border-neon-blue/50"
  },
  {
    icon: Mail,
    title: "Gmail → AI Summarize → Discord",
    description: "Summarize important emails with AI and send alerts to Discord channels.",
    tags: ["AI", "Email", "Communication"],
    color: "border-neon-purple/30 hover:border-neon-purple/50"
  },
  {
    icon: Webhook,
    title: "Webhook → HTTP → Email",
    description: "Transform webhook data and send customized email notifications automatically.",
    tags: ["Webhooks", "API", "Email"],
    color: "border-neon-cyan/30 hover:border-neon-cyan/50"
  },
  {
    icon: Database,
    title: "CSV Import → Validation → CRM",
    description: "Import and validate CSV data before syncing to your CRM system seamlessly.",
    tags: ["Data", "Validation", "CRM"],
    color: "border-neon-green/30 hover:border-neon-green/50"
  },
  {
    icon: Bot,
    title: "Social Media Monitor",
    description: "Track brand mentions across platforms and get AI-powered sentiment analysis.",
    tags: ["Social", "AI", "Monitoring"],
    color: "border-neon-blue/30 hover:border-neon-blue/50"
  },
];

const TemplatesSection = () => {
  return (
    <section id="templates" className="relative py-24 px-6 bg-background">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-neon-purple/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-neon-cyan/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10 container max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Start from </span>
            <span className="bg-gradient-secondary bg-clip-text text-transparent">
              Templates
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Launch your automation journey with battle-tested templates. One-click setup, instant results.
          </p>
        </div>

        {/* Templates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {templates.map((template, index) => (
            <div
              key={index}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Card className={`p-6 h-full bg-card/50 border transition-all duration-300 group backdrop-blur-sm cursor-pointer hover:shadow-glass ${template.color}`}>
                {/* Icon */}
                <div className="mb-4">
                  <div className="w-12 h-12 bg-secondary/50 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <template.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold mb-2 text-foreground">
                  {template.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {template.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {template.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tagIndex}
                      variant="secondary"
                      className="text-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Ready to use footer */}
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/50">
                  <span className="text-sm text-muted-foreground">
                    Ready to use
                  </span>
                  <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* 200+ More Templates Card */}
        <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <div className="bg-gradient-card p-8 rounded-2xl border border-primary/20">
            <h3 className="text-2xl font-bold mb-4">200+ More Templates</h3>
            <p className="text-muted-foreground mb-6">
              Explore our complete library of workflow templates for every use case imaginable.
            </p>
            <Button size="lg" variant="default" className="text-lg px-8">
              Browse All Templates
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TemplatesSection;
