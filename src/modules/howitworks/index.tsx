import React from 'react';
import { Webhook, Workflow, PlayCircle, BarChart3 } from 'lucide-react';
import { Card } from '@/components/ui/card';

const HowItWorks = () => {
  const steps = [
    {
      icon: Webhook,
      title: "Trigger",
      description: "Start workflows from webhooks, schedules, forms, or any event",
      details: [
        "Webhooks",
        "Cron Jobs",
        "Stripe Events",
        "Gmail",
        "HTTP Requests",
      ],
    },
    {
      icon: Workflow,
      title: "Build Workflow",
      description: "Drag-and-drop visual editor with 200+ integrations",
      details: [
        "Visual Editor",
        "AI Nodes",
        "Code Blocks",
        "Conditions",
        "Loops",
      ],
    },
    {
      icon: PlayCircle,
      title: "Run & Monitor",
      description: "Execute workflows with real-time logs and error handling",
      details: [
        "Live Execution",
        "Error Retry",
        "Debug Logs",
        "Performance",
        "Alerts",
      ],
    },
    {
      icon: BarChart3,
      title: "Scale & Optimize",
      description: "Monitor performance and scale workflows automatically",
      details: [
        "Analytics",
        "Auto-Scale",
        "Load Balancing",
        "Team Collaboration",
        "API Access",
      ],
    },
  ];

  return (
    <section className="relative py-10 bg-background overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-neon-blue/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-neon-purple/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10 container max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">How It </span>
            <span className="bg-gradient-to-r from-neon-green to-neon-blue bg-clip-text text-transparent">
              Works
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From trigger to deployment - automate your entire workflow in minutes
          </p>
        </div>

        {/* Steps Grid */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="animate-fade-in relative"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary/50 to-transparent"></div>
              )}

              <Card className="relative p-6 h-full bg-card/50 border border-border hover:border-primary hover:shadow-glow-primary transition-all duration-300 group backdrop-blur-sm">
                {/* Step Label */}
               

                {/* Icon */}
                <div className="mb-2">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors border border-primary/20">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <div className="">
                  <span className="text-xs font-sm text-primary">Step {index + 1}</span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-6">
                  {step.description}
                </p>

                {/* Details List */}
                <ul className="space-y-2">
                  {step.details.map((detail, detailIndex) => (
                    <li
                      key={detailIndex}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
       
      </div>
    </section>
  );
};

export default HowItWorks;
