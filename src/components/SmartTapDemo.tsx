import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Droplets, Hand, AlertTriangle, CheckCircle, Volume2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const SmartTapDemo = () => {
  const [isWaterRunning, setIsWaterRunning] = useState(false);
  const [handsDetected, setHandsDetected] = useState(false);
  const [wasteDetected, setWasteDetected] = useState(false);
  const [waterWasted, setWaterWasted] = useState(0);
  const { toast } = useToast();

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isWaterRunning && !handsDetected) {
      setWasteDetected(true);
      interval = setInterval(() => {
        setWaterWasted(prev => prev + 0.5);
      }, 100);
      
      // Alert after 2 seconds of waste
      setTimeout(() => {
        if (isWaterRunning && !handsDetected) {
          toast({
            title: "🚨 Water Waste Alert!",
            description: "Tap is running without hands detected. Turn off to save water!",
            variant: "destructive",
          });
        }
      }, 2000);
    } else {
      setWasteDetected(false);
    }

    return () => clearInterval(interval);
  }, [isWaterRunning, handsDetected, toast]);

  const startWaterFlow = () => {
    setIsWaterRunning(true);
    setWaterWasted(0);
  };

  const stopWaterFlow = () => {
    setIsWaterRunning(false);
    setWasteDetected(false);
  };

  const toggleHandsDetection = () => {
    setHandsDetected(!handsDetected);
  };

  return (
    <section className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Smart Tap Tag <span className="text-water-primary">Demo</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience how our IoT device detects water wastage and prevents unnecessary loss through smart monitoring.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Visual Demo */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Droplets className="h-6 w-6 text-water-primary mr-2" />
                  Tap Simulation
                </CardTitle>
                <CardDescription>
                  Interactive demo showing smart detection in action
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative bg-gradient-to-b from-water-accent/20 to-water-primary/10 rounded-lg p-8 h-64 flex flex-col items-center justify-center">
                  {/* Tap visual */}
                  <div className="relative mb-8">
                    <div className="w-16 h-8 bg-gray-300 rounded-t-lg border-4 border-gray-400"></div>
                    <div className="w-4 h-6 bg-gray-400 mx-auto"></div>
                    
                    {/* Water flow animation */}
                    {isWaterRunning && (
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2">
                        <div className={`w-2 bg-water-primary rounded-full animate-pulse ${wasteDetected ? 'h-32 bg-water-unsafe' : 'h-20'}`}></div>
                      </div>
                    )}
                  </div>

                  {/* Hands detection area */}
                  <div className={`w-20 h-12 border-2 border-dashed rounded-lg flex items-center justify-center ${
                    handsDetected ? 'border-water-safe bg-water-safe/10' : 'border-gray-400'
                  }`}>
                    <Hand className={`h-8 w-8 ${handsDetected ? 'text-water-safe' : 'text-gray-400'}`} />
                  </div>

                  {/* Status indicators */}
                  <div className="absolute top-4 right-4 flex flex-col gap-2">
                    <Badge variant={isWaterRunning ? "default" : "secondary"}>
                      {isWaterRunning ? "Running" : "Off"}
                    </Badge>
                    {wasteDetected && (
                      <Badge variant="destructive" className="animate-pulse">
                        <AlertTriangle className="h-3 w-3 mr-1" />
                        Waste!
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Controls */}
                <div className="flex gap-4 mt-6">
                  <Button 
                    onClick={startWaterFlow}
                    disabled={isWaterRunning}
                    className="flex-1"
                  >
                    <Droplets className="h-4 w-4 mr-2" />
                    Turn On Tap
                  </Button>
                  <Button 
                    onClick={stopWaterFlow}
                    variant="outline"
                    disabled={!isWaterRunning}
                    className="flex-1"
                  >
                    Stop Flow
                  </Button>
                </div>
                
                <Button 
                  onClick={toggleHandsDetection}
                  variant={handsDetected ? "secondary" : "outline"}
                  className="w-full mt-2"
                >
                  <Hand className="h-4 w-4 mr-2" />
                  {handsDetected ? "Remove Hands" : "Place Hands"}
                </Button>
              </CardContent>
            </Card>

            {/* Analytics */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Volume2 className="h-6 w-6 text-water-primary mr-2" />
                  Smart Monitoring
                </CardTitle>
                <CardDescription>
                  Real-time analytics and waste prevention
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Water waste counter */}
                  <div className="text-center p-6 bg-gradient-to-r from-water-primary/10 to-water-secondary/10 rounded-lg">
                    <div className="text-3xl font-bold text-water-primary mb-2">
                      {waterWasted.toFixed(1)}L
                    </div>
                    <div className="text-sm text-muted-foreground">Water Wasted This Session</div>
                  </div>

                  {/* Status indicators */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                      <span className="text-sm font-medium">Water Flow Status</span>
                      <Badge variant={isWaterRunning ? "default" : "secondary"}>
                        {isWaterRunning ? "Active" : "Inactive"}
                      </Badge>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                      <span className="text-sm font-medium">Hands Detection</span>
                      <Badge variant={handsDetected ? "default" : "outline"}>
                        {handsDetected ? (
                          <><CheckCircle className="h-3 w-3 mr-1" /> Detected</>
                        ) : (
                          "Not Detected"
                        )}
                      </Badge>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                      <span className="text-sm font-medium">Waste Alert</span>
                      <Badge variant={wasteDetected ? "destructive" : "default"}>
                        {wasteDetected ? (
                          <><AlertTriangle className="h-3 w-3 mr-1" /> Active</>
                        ) : (
                          "Normal"
                        )}
                      </Badge>
                    </div>
                  </div>

                  {/* Features list */}
                  <div className="mt-6 p-4 bg-water-accent/10 rounded-lg">
                    <h4 className="font-semibold mb-3 text-water-primary">Key Features:</h4>
                    <ul className="text-sm space-y-2 text-muted-foreground">
                      <li>• Motion sensor detection</li>
                      <li>• Audio & visual alerts</li>
                      <li>• IoT data logging</li>
                      <li>• Mobile app integration</li>
                      <li>• Water usage analytics</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartTapDemo;