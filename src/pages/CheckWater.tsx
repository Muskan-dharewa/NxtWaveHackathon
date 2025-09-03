import React from 'react';
import Navigation from '@/components/Navigation';
import WaterSafetyChecker from '@/components/WaterSafetyChecker';

const CheckWater = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-water-accent via-white to-water-primary/20">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-water-primary mb-4">
            Check Your Water Quality
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get instant AI-powered analysis of your water quality. Upload a photo or describe your water source to receive personalized safety recommendations.
          </p>
        </div>
        <WaterSafetyChecker />
      </main>
    </div>
  );
};

export default CheckWater;