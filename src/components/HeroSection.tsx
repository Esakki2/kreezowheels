
import React from 'react';
import { Button } from '@/components/ui/button';
import { CarModel3D } from './CarModel3D';
import { Star, Shield, Zap } from 'lucide-react';

interface HeroSectionProps {
  currentCar: { name: string; color: string };
  onGetStarted: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ currentCar, onGetStarted }) => {
  return (
    <section className="pt-24 pb-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 to-purple-900/30"></div>
      <div className="container mx-auto px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[90vh]">
          <div className="space-y-8 animate-fade-in">
            <div className="flex items-center space-x-2 text-blue-400">
              <Star className="h-5 w-5 fill-current" />
              <span className="text-sm font-medium">Premium Automotive Services</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Find Your Perfect Car,
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                Effortlessly & Affordably.
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-2xl">
            Find your dream car at the best price – we link you with trusted local dealers, and you get the deal, not the drama.
            </p>
            
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center space-x-2 text-white/80">
                <Shield className="h-5 w-5 text-green-400" />
                <span>Certified & Insured</span>
              </div>
              <div className="flex items-center space-x-2 text-white/80">
                <Zap className="h-5 w-5 text-yellow-400" />
                <span>Quick Service</span>
              </div>
              <div className="flex items-center space-x-2 text-white/80">
                <Star className="h-5 w-5 text-blue-400 fill-current" />
                <span>5-Star Rated</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={onGetStarted}
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 text-lg rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Get Free Quote
              </Button>
            </div>
          </div>
          
          <div className="relative flex justify-center items-center">
            <img src="/untitled.png" alt="Placeholder Image" className="max-w-full h-auto rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};
