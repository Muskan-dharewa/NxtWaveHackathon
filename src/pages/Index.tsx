import HeroSection from "@/components/HeroSection";
import SmartTapDemo from "@/components/SmartTapDemo";
import WaterSafetyChecker from "@/components/WaterSafetyChecker";
import ImpactSection from "@/components/ImpactSection";
import PartnershipSection from "@/components/PartnershipSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <SmartTapDemo />
      <WaterSafetyChecker />
      <ImpactSection />
      <PartnershipSection />
    </div>
  );
};

export default Index;
