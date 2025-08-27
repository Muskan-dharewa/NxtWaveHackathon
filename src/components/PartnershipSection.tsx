import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  HandHeart, 
  Package, 
  Mail, 
  Phone, 
  Building, 
  Users,
  CheckCircle,
  Star,
  Globe,
  Target
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const PartnershipSection = () => {
  const [preOrderForm, setPreOrderForm] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    quantity: '',
    notes: ''
  });
  
  const [partnerForm, setPartnerForm] = useState({
    orgName: '',
    contactName: '',
    email: '',
    phone: '',
    focus: '',
    message: ''
  });

  const { toast } = useToast();

  const handlePreOrder = () => {
    toast({
      title: "Pre-order Submitted!",
      description: "Thank you for your interest. We'll contact you soon with details.",
    });
    setPreOrderForm({
      name: '',
      email: '',
      phone: '',
      organization: '',
      quantity: '',
      notes: ''
    });
  };

  const handlePartnerSubmit = () => {
    toast({
      title: "Partnership Request Sent!",
      description: "We'll review your application and get back to you within 48 hours.",
    });
    setPartnerForm({
      orgName: '',
      contactName: '',
      email: '',
      phone: '',
      focus: '',
      message: ''
    });
  };

  const pricingTiers = [
    {
      name: "Household",
      price: "₹2,999",
      description: "Perfect for homes and small families",
      features: [
        "Smart Tap Tag device",
        "Mobile app access",
        "Basic water quality testing",
        "SMS/Voice alerts",
        "1-year warranty"
      ],
      popular: false
    },
    {
      name: "Community",
      price: "₹24,999",
      description: "Ideal for schools and community centers",
      features: [
        "10x Smart Tap Tag devices",
        "Advanced analytics dashboard",
        "Bulk water quality testing",
        "Multi-language support",
        "Training and setup",
        "3-year warranty"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For municipalities and large organizations",
      features: [
        "Unlimited devices",
        "Custom integration",
        "API access",
        "Dedicated support",
        "Government partnerships",
        "Lifetime updates"
      ],
      popular: false
    }
  ];

  const partners = [
    {
      name: "WaterAid India",
      type: "NGO Partner",
      focus: "Rural water access",
      impact: "50,000+ people reached"
    },
    {
      name: "Municipal Corporation",
      type: "Government Partner",
      focus: "Smart city initiatives",
      impact: "15 cities covered"
    },
    {
      name: "Schools Network",
      type: "Education Partner",
      focus: "Student awareness",
      impact: "200+ schools enrolled"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Join the <span className="text-water-primary">Movement</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Be part of the solution. Pre-order your Smart Water Guardian device or partner with us 
            to bring safe water monitoring to communities that need it most.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {pricingTiers.map((tier, index) => (
            <Card key={index} className={`shadow-card relative ${tier.popular ? 'border-water-primary border-2' : ''}`}>
              {tier.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-water-primary text-white">
                  <Star className="h-3 w-3 mr-1" />
                  Most Popular
                </Badge>
              )}
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">{tier.name}</CardTitle>
                <div className="text-3xl font-bold text-water-primary">{tier.price}</div>
                <CardDescription>{tier.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-water-safe mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  className={`w-full ${tier.popular ? 'bg-water-primary hover:bg-water-primary/90' : ''}`}
                  variant={tier.popular ? 'default' : 'outline'}
                >
                  <Package className="h-4 w-4 mr-2" />
                  {tier.price === 'Custom' ? 'Contact Us' : 'Pre-Order Now'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Pre-order Form */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Package className="h-6 w-6 text-water-primary mr-2" />
                Pre-Order Your Device
              </CardTitle>
              <CardDescription>
                Be among the first to receive Smart Water Guardian technology
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    value={preOrderForm.name}
                    onChange={(e) => setPreOrderForm({...preOrderForm, name: e.target.value})}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={preOrderForm.email}
                    onChange={(e) => setPreOrderForm({...preOrderForm, email: e.target.value})}
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    value={preOrderForm.phone}
                    onChange={(e) => setPreOrderForm({...preOrderForm, phone: e.target.value})}
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div>
                  <Label htmlFor="quantity">Quantity</Label>
                  <Input
                    id="quantity"
                    type="number"
                    value={preOrderForm.quantity}
                    onChange={(e) => setPreOrderForm({...preOrderForm, quantity: e.target.value})}
                    placeholder="1"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="organization">Organization (Optional)</Label>
                <Input
                  id="organization"
                  value={preOrderForm.organization}
                  onChange={(e) => setPreOrderForm({...preOrderForm, organization: e.target.value})}
                  placeholder="Company/School/NGO name"
                />
              </div>

              <div>
                <Label htmlFor="notes">Special Requirements</Label>
                <Textarea
                  id="notes"
                  value={preOrderForm.notes}
                  onChange={(e) => setPreOrderForm({...preOrderForm, notes: e.target.value})}
                  placeholder="Any specific requirements or questions..."
                />
              </div>

              <Button onClick={handlePreOrder} className="w-full bg-water-primary hover:bg-water-primary/90">
                <Mail className="h-4 w-4 mr-2" />
                Submit Pre-Order
              </Button>
            </CardContent>
          </Card>

          {/* Partnership Form */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <HandHeart className="h-6 w-6 text-water-primary mr-2" />
                Partner with Us
              </CardTitle>
              <CardDescription>
                NGOs, governments, and organizations - let's work together
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="orgName">Organization Name</Label>
                <Input
                  id="orgName"
                  value={partnerForm.orgName}
                  onChange={(e) => setPartnerForm({...partnerForm, orgName: e.target.value})}
                  placeholder="Your organization"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="contactName">Contact Person</Label>
                  <Input
                    id="contactName"
                    value={partnerForm.contactName}
                    onChange={(e) => setPartnerForm({...partnerForm, contactName: e.target.value})}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <Label htmlFor="partnerEmail">Email</Label>
                  <Input
                    id="partnerEmail"
                    type="email"
                    value={partnerForm.email}
                    onChange={(e) => setPartnerForm({...partnerForm, email: e.target.value})}
                    placeholder="contact@organization.org"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="partnerPhone">Phone</Label>
                  <Input
                    id="partnerPhone"
                    value={partnerForm.phone}
                    onChange={(e) => setPartnerForm({...partnerForm, phone: e.target.value})}
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div>
                  <Label htmlFor="focus">Focus Area</Label>
                  <Input
                    id="focus"
                    value={partnerForm.focus}
                    onChange={(e) => setPartnerForm({...partnerForm, focus: e.target.value})}
                    placeholder="Rural water, Education, etc."
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="message">Partnership Proposal</Label>
                <Textarea
                  id="message"
                  value={partnerForm.message}
                  onChange={(e) => setPartnerForm({...partnerForm, message: e.target.value})}
                  placeholder="Tell us about your organization and how we can collaborate..."
                />
              </div>

              <Button onClick={handlePartnerSubmit} variant="outline" className="w-full">
                <Building className="h-4 w-4 mr-2" />
                Submit Partnership Request
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Current Partners */}
        <div className="bg-water-accent/10 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-center text-water-primary mb-8">
            Current Partners Making Impact
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {partners.map((partner, index) => (
              <Card key={index} className="shadow-card">
                <CardContent className="p-6 text-center">
                  <Badge className="mb-4 bg-water-secondary text-white">
                    {partner.type}
                  </Badge>
                  <h4 className="font-bold text-lg mb-2">{partner.name}</h4>
                  <p className="text-sm text-muted-foreground mb-2">{partner.focus}</p>
                  <Badge variant="outline" className="text-water-primary border-water-primary">
                    <Target className="h-3 w-3 mr-1" />
                    {partner.impact}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipSection;