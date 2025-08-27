import HeroSection from "@/components/HeroSection";
import SmartTapDemo from "@/components/SmartTapDemo";
import WaterSafetyChecker from "@/components/WaterSafetyChecker";
import ImpactSection from "@/components/ImpactSection";
import PartnershipSection from "@/components/PartnershipSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <div id="demo">
        <SmartTapDemo />
      </div>
      <WaterSafetyChecker />
      <ImpactSection />
      <div id="partnership">
        <PartnershipSection />
      </div>
    </div>
  );
};

export default Index;
