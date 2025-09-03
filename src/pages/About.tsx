import React from 'react';
import Navigation from '@/components/Navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Droplets, Target, Users, Award, Heart, Globe } from 'lucide-react';

const About = () => {
  const teamMembers = [
    {
      name: "Dr. Priya Sharma",
      role: "Founder & CEO",
      expertise: "Water Conservation Technology",
      description: "15+ years in environmental engineering and IoT solutions"
    },
    {
      name: "Rajesh Kumar",
      role: "CTO",
      expertise: "IoT & AI Development",
      description: "Former tech lead at major water management companies"
    },
    {
      name: "Anita Patel",
      role: "Head of Partnerships",
      expertise: "Community Outreach",
      description: "Expert in scaling accessibility initiatives across rural India"
    }
  ];

  const values = [
    {
      icon: <Droplets className="w-6 h-6" />,
      title: "Water Conservation",
      description: "Every drop counts. We're committed to reducing water wastage through innovative technology."
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Accessibility First",
      description: "Making water safety technology affordable and accessible to all communities."
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Sustainable Impact",
      description: "Creating long-term solutions that benefit both people and the environment."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-water-accent via-white to-water-primary/20">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-water-primary mb-4">
            About Smart Water Guardian
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We're on a mission to revolutionize water conservation and safety through accessible IoT technology, 
            ensuring every drop is saved and every sip is safe for communities across India and beyond.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-5 h-5 text-water-primary" />
                Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                To democratize water conservation and safety technology by making it affordable, 
                accessible, and easy to use for every household, school, and community center in India. 
                We believe that technology should serve everyone, not just the privileged few.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="w-5 h-5 text-water-primary" />
                Our Vision
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                A world where water scarcity is eliminated through smart conservation, 
                and every person has access to safe drinking water through intelligent monitoring systems. 
                We envision communities empowered with the tools to manage their most precious resource.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Our Values */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center text-water-primary mb-8">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-water-primary/10 rounded-full flex items-center justify-center text-water-primary mb-4">
                    {value.icon}
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center text-water-primary mb-8">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="w-16 h-16 bg-water-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-water-primary" />
                  </div>
                  <CardTitle className="text-center">{member.name}</CardTitle>
                  <CardDescription className="text-center">
                    <Badge variant="secondary" className="mb-2">
                      {member.role}
                    </Badge>
                    <br />
                    <span className="text-water-primary font-medium">{member.expertise}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground text-center">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Impact Statistics */}
        <Card className="bg-water-primary text-white">
          <CardHeader>
            <CardTitle className="text-center text-2xl">Our Impact So Far</CardTitle>
            <CardDescription className="text-center text-white/80">
              Making a difference, one drop at a time
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold mb-2">50,000+</div>
                <div className="text-white/80">Liters Saved Daily</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">1,200+</div>
                <div className="text-white/80">Households Protected</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">150+</div>
                <div className="text-white/80">Schools & Centers</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">25</div>
                <div className="text-white/80">States Covered</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Info */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold text-water-primary mb-4">Get in Touch</h2>
          <p className="text-muted-foreground mb-4">
            Have questions about our technology or want to partner with us?
          </p>
          <div className="space-y-2 text-sm text-muted-foreground">
            <p>Email: info@smartwaterguardian.com</p>
            <p>Phone: +91-9876543210</p>
            <p>Address: Innovation Hub, Bangalore, Karnataka, India</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;