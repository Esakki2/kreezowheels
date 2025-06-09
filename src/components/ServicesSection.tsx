
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Car, Sparkles, FileText, Shield, Clock, Star } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';

export const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: Car,
      title: "Premium Car Reselling",
      description: "Get the best value for your vehicle with our expert market analysis and negotiation.",
      features: ["Market Analysis", "Professional Photography", "Negotiation Support", "Documentation"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Sparkles,
      title: "Professional Cleaning",
      description: "Complete interior and exterior detailing to make your car look brand new.",
      features: ["Interior Detailing", "Exterior Wash & Wax", "Engine Cleaning", "Paint Protection"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: FileText,
      title: "Complete Documentation",
      description: "Handle all paperwork and legal requirements for a smooth transaction.",
      features: ["Transfer Papers", "Insurance Claims", "Registration", "Legal Support"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Comprehensive inspection and certification for peace of mind.",
      features: ["Vehicle Inspection", "Quality Certification", "Warranty Support", "After-sales Service"],
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="services" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20"></div>
      <div className="container mx-auto px-6 relative">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Premium Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From expert reselling to professional cleaning, we provide comprehensive 
              automotive services tailored to your needs.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <AnimatedSection key={index} delay={index * 200}>
              <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-500 transform hover:scale-105 group h-full">
                <CardContent className="p-6 h-full flex flex-col">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 flex-grow">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={800}>
          <div className="text-center mt-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">500+</div>
                <div className="text-gray-300">Cars Sold</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">98%</div>
                <div className="text-gray-300">Customer Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">24/7</div>
                <div className="text-gray-300">Support Available</div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
