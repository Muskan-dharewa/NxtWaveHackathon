import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Droplets, Shield, Users, Zap } from "lucide-react";
import heroImage from "@/assets/hero-water-guardian.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-hero"></div>
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">
            Smart Water <span className="text-water-accent">Guardian</span>
          </h1>
          
          {/* Tagline */}
          <p className="text-xl md:text-2xl mb-8 drop-shadow-md opacity-90">
            Saving every drop, ensuring every sip is safe
          </p>
          
          {/* Problem statement */}
          <div className="mb-12">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-8 shadow-glow">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="text-left">
                  <div className="flex items-center mb-4">
                    <Droplets className="h-8 w-8 text-water-accent mr-3" />
                    <h3 className="text-2xl font-bold">Water Wastage Crisis</h3>
                  </div>
                  <p className="text-lg opacity-90">
                    Taps left running waste millions of liters daily. Smart detection can prevent this massive loss.
                  </p>
                </div>
                <div className="text-left">
                  <div className="flex items-center mb-4">
                    <Shield className="h-8 w-8 text-water-accent mr-3" />
                    <h3 className="text-2xl font-bold">Unsafe Drinking Water</h3>
                  </div>
                  <p className="text-lg opacity-90">
                    Millions consume contaminated water daily, especially affecting visually impaired communities.
                  </p>
                </div>
              </div>
            </Card>
          </div>
          
          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-water text-lg px-8 py-6"
              onClick={() => document.getElementById('partnership')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Droplets className="h-5 w-5 mr-2" />
              Order Smart Tags
            </Button>
            <Button 
              size="lg" 
              className="bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-water text-lg px-8 py-6"
              onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Zap className="h-5 w-5 mr-2" />
              Try Smart Tap Demo
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-accent text-accent hover:bg-accent/10 backdrop-blur-sm text-lg px-8 py-6"
              onClick={() => document.getElementById('partnership')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Users className="h-5 w-5 mr-2" />
              Partner with NGOs
            </Button>
          </div>
          
          {/* Quick stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-water-accent mb-2">80%</div>
              <div className="text-sm opacity-75">Water Waste Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-water-accent mb-2">1M+</div>
              <div className="text-sm opacity-75">Lives Impacted</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-water-accent mb-2">24/7</div>
              <div className="text-sm opacity-75">Monitoring</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-water-accent mb-2">100%</div>
              <div className="text-sm opacity-75">Accessibility</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating animation elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-water-accent rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-white/60 rounded-full animate-bounce"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-water-accent rounded-full animate-ping"></div>
      </div>
    </section>
  );
};

export default HeroSection;