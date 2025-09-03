import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Droplets } from 'lucide-react';

const Navigation = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Droplets className="h-8 w-8 text-water-primary" />
              <span className="text-xl font-bold text-water-primary">Smart Water Guardian</span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-1">
            <Link to="/">
              <Button 
                variant={isActive('/') ? 'default' : 'ghost'}
                className="text-sm font-medium"
              >
                Home
              </Button>
            </Link>
            
            <Link to="/demo">
              <Button 
                variant={isActive('/demo') ? 'default' : 'ghost'}
                className="text-sm font-medium"
              >
                Demo
              </Button>
            </Link>
            
            <Link to="/check-water">
              <Button 
                variant={isActive('/check-water') ? 'default' : 'ghost'}
                className="text-sm font-medium"
              >
                Check Your Water
              </Button>
            </Link>
            
            <Link to="/purchase">
              <Button 
                variant={isActive('/purchase') ? 'default' : 'ghost'}
                className="text-sm font-medium"
              >
                Purchase Tags
              </Button>
            </Link>
            
            <Link to="/about">
              <Button 
                variant={isActive('/about') ? 'default' : 'ghost'}
                className="text-sm font-medium"
              >
                About Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;