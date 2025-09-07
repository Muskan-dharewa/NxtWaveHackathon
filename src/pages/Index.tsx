import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ImpactSection from "@/components/ImpactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ImpactSection />
      
      {/* Copyright Footer */}
      <footer className="bg-muted/30 border-t py-6 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Smart Water Guardian. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

