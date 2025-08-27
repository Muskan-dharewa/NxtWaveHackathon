import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { 
  Shield, 
  AlertCircle, 
  CheckCircle, 
  AlertTriangle,
  Thermometer,
  Droplets,
  FileText,
  Volume2,
  Vibrate
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface WaterTestResult {
  status: 'SAFE' | 'CAUTION' | 'UNSAFE';
  ph: number;
  turbidity: number;
  bacteria: number;
  chemicals: number;
  recommendations: string[];
  accessibility: {
    voiceAlert: string;
    hapticPattern: string;
  };
}

const WaterSafetyChecker = () => {
  const [testData, setTestData] = useState({
    location: '',
    source: '',
    temperature: '',
    color: '',
    odor: '',
    taste: '',
    additionalNotes: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<WaterTestResult | null>(null);
  const { toast } = useToast();

  const runWaterTest = async () => {
    setIsLoading(true);
    
    // Simulate AI analysis with realistic delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Mock AI analysis based on inputs
    const mockResult: WaterTestResult = {
      status: Math.random() > 0.7 ? 'UNSAFE' : Math.random() > 0.4 ? 'CAUTION' : 'SAFE',
      ph: 6.5 + Math.random() * 2,
      turbidity: Math.random() * 5,
      bacteria: Math.random() * 100,
      chemicals: Math.random() * 50,
      recommendations: [],
      accessibility: {
        voiceAlert: '',
        hapticPattern: ''
      }
    };

    // Generate recommendations based on status
    if (mockResult.status === 'UNSAFE') {
      mockResult.recommendations = [
        'Boil water for 10+ minutes before consumption',
        'Use water purification tablets',
        'Consider using a UV sterilizer',
        'File complaint with local municipality',
        'Use bottled water for drinking'
      ];
      mockResult.accessibility.voiceAlert = 'DANGER: Water is unsafe for consumption. Immediate treatment required.';
      mockResult.accessibility.hapticPattern = 'Strong vibration - 3 long pulses';
    } else if (mockResult.status === 'CAUTION') {
      mockResult.recommendations = [
        'Boil water before drinking as precaution',
        'Use basic water filter',
        'Monitor water quality regularly',
        'Consider alternative source if available'
      ];
      mockResult.accessibility.voiceAlert = 'CAUTION: Water quality requires attention. Basic treatment recommended.';
      mockResult.accessibility.hapticPattern = 'Medium vibration - 2 pulses';
    } else {
      mockResult.recommendations = [
        'Water is safe for consumption',
        'Continue regular monitoring',
        'Maintain source cleanliness',
        'No immediate action required'
      ];
      mockResult.accessibility.voiceAlert = 'SAFE: Water quality is good for consumption.';
      mockResult.accessibility.hapticPattern = 'Gentle vibration - 1 pulse';
    }

    setResult(mockResult);
    setIsLoading(false);

    // Show toast notification
    toast({
      title: `Water Status: ${mockResult.status}`,
      description: mockResult.accessibility.voiceAlert,
      variant: mockResult.status === 'UNSAFE' ? 'destructive' : 'default',
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'SAFE': return 'bg-water-safe text-white';
      case 'CAUTION': return 'bg-water-caution text-white';
      case 'UNSAFE': return 'bg-water-unsafe text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'SAFE': return <CheckCircle className="h-5 w-5" />;
      case 'CAUTION': return <AlertTriangle className="h-5 w-5" />;
      case 'UNSAFE': return <AlertCircle className="h-5 w-5" />;
      default: return <Shield className="h-5 w-5" />;
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Water Safety <span className="text-water-primary">Checker</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            AI-powered water quality analysis with instant results and accessibility features for everyone.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Input Form */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Droplets className="h-6 w-6 text-water-primary mr-2" />
                  Water Test Input
                </CardTitle>
                <CardDescription>
                  Provide water sample details for AI analysis
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="location">Location</Label>
                    <Input
                      id="location"
                      placeholder="e.g., Kitchen tap, Well"
                      value={testData.location}
                      onChange={(e) => setTestData({...testData, location: e.target.value})}
                    />
                  </div>
                  <div>
                    <Label htmlFor="source">Water Source</Label>
                    <Input
                      id="source"
                      placeholder="e.g., Municipal, Borewell"
                      value={testData.source}
                      onChange={(e) => setTestData({...testData, source: e.target.value})}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="temperature">Temperature (°C)</Label>
                  <Input
                    id="temperature"
                    type="number"
                    placeholder="e.g., 25"
                    value={testData.temperature}
                    onChange={(e) => setTestData({...testData, temperature: e.target.value})}
                  />
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="color">Color</Label>
                    <Input
                      id="color"
                      placeholder="e.g., Clear, Yellow"
                      value={testData.color}
                      onChange={(e) => setTestData({...testData, color: e.target.value})}
                    />
                  </div>
                  <div>
                    <Label htmlFor="odor">Odor</Label>
                    <Input
                      id="odor"
                      placeholder="e.g., None, Chlorine"
                      value={testData.odor}
                      onChange={(e) => setTestData({...testData, odor: e.target.value})}
                    />
                  </div>
                  <div>
                    <Label htmlFor="taste">Taste</Label>
                    <Input
                      id="taste"
                      placeholder="e.g., Normal, Metallic"
                      value={testData.taste}
                      onChange={(e) => setTestData({...testData, taste: e.target.value})}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="notes">Additional Notes</Label>
                  <Textarea
                    id="notes"
                    placeholder="Any other observations about the water..."
                    value={testData.additionalNotes}
                    onChange={(e) => setTestData({...testData, additionalNotes: e.target.value})}
                  />
                </div>

                <Button 
                  onClick={runWaterTest}
                  disabled={isLoading}
                  className="w-full bg-water-primary hover:bg-water-primary/90"
                  size="lg"
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Analyzing Water...
                    </>
                  ) : (
                    <>
                      <Shield className="h-4 w-4 mr-2" />
                      Run AI Analysis
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>

            {/* Results */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="h-6 w-6 text-water-primary mr-2" />
                  Analysis Results
                </CardTitle>
                <CardDescription>
                  AI-powered safety assessment with recommendations
                </CardDescription>
              </CardHeader>
              <CardContent>
                {!result ? (
                  <div className="flex flex-col items-center justify-center h-64 text-center text-muted-foreground">
                    <Shield className="h-12 w-12 mb-4 opacity-50" />
                    <p>Complete the form and run analysis to see results</p>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {/* Status Badge */}
                    <div className="text-center">
                      <Badge className={`${getStatusColor(result.status)} text-2xl px-6 py-3 font-bold`}>
                        {getStatusIcon(result.status)}
                        <span className="ml-2">{result.status}</span>
                      </Badge>
                    </div>

                    {/* Metrics */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-muted p-4 rounded-lg">
                        <div className="text-sm text-muted-foreground">pH Level</div>
                        <div className="text-2xl font-bold text-water-primary">{result.ph.toFixed(1)}</div>
                      </div>
                      <div className="bg-muted p-4 rounded-lg">
                        <div className="text-sm text-muted-foreground">Turbidity</div>
                        <div className="text-2xl font-bold text-water-primary">{result.turbidity.toFixed(1)} NTU</div>
                      </div>
                      <div className="bg-muted p-4 rounded-lg">
                        <div className="text-sm text-muted-foreground">Bacteria Count</div>
                        <div className="text-2xl font-bold text-water-primary">{result.bacteria.toFixed(0)}/ml</div>
                      </div>
                      <div className="bg-muted p-4 rounded-lg">
                        <div className="text-sm text-muted-foreground">Chemicals</div>
                        <div className="text-2xl font-bold text-water-primary">{result.chemicals.toFixed(1)} ppm</div>
                      </div>
                    </div>

                    {/* Recommendations */}
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center">
                        <AlertTriangle className="h-4 w-4 mr-2" />
                        Recommendations
                      </h4>
                      <ul className="space-y-2">
                        {result.recommendations.map((rec, index) => (
                          <li key={index} className="flex items-start text-sm">
                            <span className="text-water-primary mr-2">•</span>
                            {rec}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Accessibility Features */}
                    <div className="bg-water-accent/10 p-4 rounded-lg">
                      <h4 className="font-semibold mb-3 text-water-primary">Accessibility Features</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center">
                          <Volume2 className="h-4 w-4 mr-2 text-water-primary" />
                          <span className="font-medium">Voice Alert:</span>
                        </div>
                        <p className="text-muted-foreground ml-6">{result.accessibility.voiceAlert}</p>
                        
                        <div className="flex items-center mt-3">
                          <Vibrate className="h-4 w-4 mr-2 text-water-primary" />
                          <span className="font-medium">Haptic Feedback:</span>
                        </div>
                        <p className="text-muted-foreground ml-6">{result.accessibility.hapticPattern}</p>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaterSafetyChecker;