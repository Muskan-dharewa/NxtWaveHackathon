import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ImpactSection from "@/components/ImpactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ImpactSection />
     
      <footer className="bg-background border-t py-8 mt-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-foreground font-medium">
            © {new Date().getFullYear()} Smart Water Guardian. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};
export default Index;
