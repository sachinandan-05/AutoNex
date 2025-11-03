import React from 'react';
import { Zap } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import heroBg from '@/assets/hero.png';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroBg}
          alt="Hero Background"
          fill
          className="object-cover opacity-90"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background"></div>
      </div>

      {/* Animated Background Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden ">
        {/* Gradient orbs */}
        <div className="absolute top-1/6 left-1/6 w-30 h-30 bg-neon-green/20 rounded-full blur-[100px] animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-30 h-30 bg-neon-blue/20 rounded-full blur-[120px] animate-float" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-1/2 left-1/2 w-30 h-30 bg-neon-purple/10 rounded-full blur-[120px] animate-float" style={{ animationDelay: "4s" }}></div>
        
        {/* Floating dots */}
        <div className="absolute top-1/4 left-[10%] w-3 h-3 bg-neon-green rounded-full animate-float"></div>
        <div className="absolute top-1/3 right-[15%] w-2 h-2 bg-neon-blue rounded-full animate-float" style={{ animationDelay: "1s" }}></div>
        <div className="absolute bottom-1/3 left-[20%] w-2 h-2 bg-neon-purple rounded-full animate-float" style={{ animationDelay: "2s" }}></div>
        <div className="absolute bottom-1/4 right-[10%] w-3 h-3 bg-electric-cyan rounded-full animate-float" style={{ animationDelay: "3s" }}></div>
      </div>

      {/* Content Container */}
      <div className="relative z-20 container max-w-7xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm mb-8 animate-fade-in">
          <Zap className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-foreground">Next-Gen Workflow Automation</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <span className="block bg-gradient-to-r from-neon-green via-electric-cyan to-neon-blue bg-clip-text text-transparent">
            Automate Everything.
          </span>
          <span className="block mt-2 text-neon-purple">
            Smarter.
          </span>
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          AutoNex is the next-gen open SaaS to build and run workflows with AI superpowers. Connect any service, automate any process.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg font-semibold shadow-glow-primary"
          >
            <Link href="/signup">
              Get Started Free
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-primary/30 text-foreground hover:bg-primary/5 px-8 py-6 text-lg font-semibold"
          >
            <Link href="#features">
              Watch Demo
            </Link>
          </Button>
        </div>

        {/* Feature Badges */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 text-sm animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full animate-glow-pulse"></div>
            <span className="text-foreground font-medium">Free Forever Plan</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-neon-blue rounded-full animate-glow-pulse"></div>
            <span className="text-foreground font-medium">No Credit Card Required</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-accent rounded-full animate-glow-pulse"></div>
            <span className="text-foreground font-medium">Setup in 2 Minutes</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
