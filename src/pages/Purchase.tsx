import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Droplets, Package, Star, Check } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Purchase = () => {
  const { toast } = useToast();
  const [selectedPackage, setSelectedPackage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    quantity: '1',
    specialRequests: ''
  });

  const packages = [
    {
      id: 'basic',
      name: 'Basic Pack',
      price: '₹2,999',
      description: 'Perfect for small households',
      features: ['5 Smart Tap Tags', 'Basic Mobile App', '6 Months Warranty', 'Email Support'],
      popular: false
    },
    {
      id: 'standard',
      name: 'Standard Pack',
      price: '₹4,999',
      description: 'Ideal for medium-sized homes',
      features: ['10 Smart Tap Tags', 'Premium Mobile App', '1 Year Warranty', 'Priority Support', 'Advanced Analytics'],
      popular: true
    },
    {
      id: 'premium',
      name: 'Premium Pack',
      price: '₹7,999',
      description: 'Best for large families or offices',
      features: ['20 Smart Tap Tags', 'Premium Mobile App', '2 Years Warranty', '24/7 Phone Support', 'Advanced Analytics', 'Installation Service'],
      popular: false
    }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedPackage) {
      toast({
        title: "Please select a package",
        description: "Choose a package before submitting your order.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Order Submitted Successfully!",
      description: "We'll contact you within 24 hours to confirm your order and arrange delivery.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      address: '',
      quantity: '1',
      specialRequests: ''
    });
    setSelectedPackage('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-water-accent via-white to-water-primary/20">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-water-primary mb-4">
            Purchase Smart Tap Tags
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect package for your needs and start saving water today. Free delivery across India!
          </p>
        </div>

        {/* Package Selection */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {packages.map((pkg) => (
            <Card 
              key={pkg.id}
              className={`relative cursor-pointer transition-all hover:shadow-lg ${
                selectedPackage === pkg.id ? 'ring-2 ring-water-primary shadow-lg' : ''
              }`}
              onClick={() => setSelectedPackage(pkg.id)}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-water-primary text-white px-4 py-1">
                    <Star className="w-3 h-3 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center">
                <Package className={`w-12 h-12 mx-auto mb-4 ${selectedPackage === pkg.id ? 'text-water-primary' : 'text-muted-foreground'}`} />
                <CardTitle className="text-xl">{pkg.name}</CardTitle>
                <div className="text-3xl font-bold text-water-primary">{pkg.price}</div>
                <CardDescription>{pkg.description}</CardDescription>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-2">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm">
                      <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Order Form */}
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Droplets className="w-5 h-5 text-water-primary" />
              Order Details
            </CardTitle>
            <CardDescription>
              Fill in your details to place your order. We'll contact you to confirm delivery details.
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="quantity">Quantity</Label>
                  <Select value={formData.quantity} onValueChange={(value) => handleInputChange('quantity', value)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {[1, 2, 3, 4, 5].map(num => (
                        <SelectItem key={num} value={num.toString()}>{num}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">Delivery Address *</Label>
                <Textarea
                  id="address"
                  value={formData.address}
                  onChange={(e) => handleInputChange('address', e.target.value)}
                  required
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="requests">Special Requests (Optional)</Label>
                <Textarea
                  id="requests"
                  value={formData.specialRequests}
                  onChange={(e) => handleInputChange('specialRequests', e.target.value)}
                  rows={2}
                  placeholder="Any special installation requirements or delivery instructions..."
                />
              </div>

              {selectedPackage && (
                <div className="bg-water-accent/20 p-4 rounded-lg">
                  <h3 className="font-semibold text-water-primary mb-2">Selected Package:</h3>
                  <p className="text-sm text-muted-foreground">
                    {packages.find(p => p.id === selectedPackage)?.name} - {packages.find(p => p.id === selectedPackage)?.price}
                  </p>
                </div>
              )}

              <Button type="submit" className="w-full bg-water-primary hover:bg-water-primary/90">
                Place Order
              </Button>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Purchase;