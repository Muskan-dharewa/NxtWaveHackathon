import React from 'react';
import Navigation from '@/components/Navigation';
import SmartTapDemo from '@/components/SmartTapDemo';

const Demo = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-water-accent via-white to-water-primary/20">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-water-primary mb-4">
            Smart Tap Demo
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience our revolutionary Smart Tap Tag technology in action. See how it detects water wastage and alerts users in real-time.
          </p>
        </div>
        <SmartTapDemo />
      </main>
    </div>
  );
};

export default Demo;