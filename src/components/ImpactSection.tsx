import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Droplets, 
  Shield, 
  School, 
  Home, 
  Building,
  TrendingUp,
  Globe,
  Heart
} from "lucide-react";

const ImpactSection = () => {
  const stats = [
    {
      icon: <Droplets className="h-8 w-8 text-water-primary" />,
      title: "Water Saved",
      value: "50M+",
      description: "Liters saved through smart monitoring",
      trend: "+23% this month"
    },
    {
      icon: <Users className="h-8 w-8 text-water-primary" />,
      title: "Lives Impacted",
      value: "1.2M+",
      description: "People with access to safe water alerts",
      trend: "+15% growth"
    },
    {
      icon: <Shield className="h-8 w-8 text-water-primary" />,
      title: "Safety Checks",
      value: "500K+",
      description: "Water quality tests performed",
      trend: "+40% accuracy"
    },
    {
      icon: <Globe className="h-8 w-8 text-water-primary" />,
      title: "Communities",
      value: "2,500+",
      description: "Rural and urban areas covered",
      trend: "50 cities"
    }
  ];

  const useCases = [
    {
      icon: <Home className="h-6 w-6 text-water-primary" />,
      title: "Households",
      description: "Smart taps prevent daily water waste",
      impact: "80% reduction in waste"
    },
    {
      icon: <School className="h-6 w-6 text-water-primary" />,
      title: "Schools",
      description: "Educating next generation on water conservation",
      impact: "10,000+ students reached"
    },
    {
      icon: <Building className="h-6 w-6 text-water-primary" />,
      title: "Rural Areas",
      description: "Safe water access for remote communities",
      impact: "95% satisfaction rate"
    }
  ];

  return (
    <section className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Real-World <span className="text-water-primary">Impact</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our Smart Water Guardian technology is already making a difference across communities, 
            preventing waste and ensuring water safety for millions.
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="shadow-card hover:shadow-glow transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-water-primary mb-2">
                  {stat.value}
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  {stat.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {stat.description}
                </p>
                <Badge variant="secondary" className="text-xs">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  {stat.trend}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Use Cases */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">
            Transforming <span className="text-water-primary">Communities</span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="shadow-card hover:shadow-water transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    {useCase.icon}
                    <span className="ml-3">{useCase.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {useCase.description}
                  </p>
                  <Badge className="bg-water-safe text-white">
                    <Heart className="h-3 w-3 mr-1" />
                    {useCase.impact}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Environmental Impact */}
        <div className="mt-16 bg-water-primary/5 rounded-2xl p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-water-primary mb-6">
              Environmental Impact Goals by 2025
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-water-primary mb-2">100M</div>
                <div className="text-sm text-muted-foreground">Liters of Water Saved</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-water-primary mb-2">5M</div>
                <div className="text-sm text-muted-foreground">People with Safe Water Access</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-water-primary mb-2">1000</div>
                <div className="text-sm text-muted-foreground">Communities Transformed</div>
              </div>
            </div>
          </div>
        </div>

        {/* Accessibility Impact */}
        <div className="mt-12 bg-water-accent/10 rounded-2xl p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-water-primary mb-4">
              Inclusive Technology for All
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
              Our accessibility-first design ensures that visually impaired users can independently 
              monitor water safety through voice alerts, haptic feedback, and local language support.
            </p>
            <div className="flex justify-center space-x-8 text-sm">
              <div className="text-center">
                <div className="text-2xl font-bold text-water-primary">15</div>
                <div className="text-muted-foreground">Languages Supported</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-water-primary">100%</div>
                <div className="text-muted-foreground">Voice Navigation</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-water-primary">24/7</div>
                <div className="text-muted-foreground">Audio Alerts</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;