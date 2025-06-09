
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';

interface ContactSectionProps {
  onGetStarted: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onGetStarted }) => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      content: "+1 (555) 123-4567",
      subtext: "Mon-Sat 8AM-8PM"
    },
    {
      icon: Mail,
      title: "Email Us", 
      content: "info@autopro.com",
      subtext: "24/7 Support"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "123 Auto Street",
      subtext: "Downtown, City 12345"
    },
    {
      icon: Clock,
      title: "Working Hours",
      content: "Mon-Sat 8AM-8PM",
      subtext: "Sunday Closed"
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
      <div className="container mx-auto px-6 relative">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Contact us today for a free quote and experience the difference of professional automotive services.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-lg">
                          <info.icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-white mb-1">{info.title}</h4>
                          <p className="text-gray-300">{info.content}</p>
                          <p className="text-sm text-gray-400">{info.subtext}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="bg-gradient-to-r from-blue-500/20 to-purple-600/20 backdrop-blur-md border-blue-400/30">
                <CardContent className="p-8 text-center">
                  <MessageCircle className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Get Your Free Quote Today
                  </h3>
                  <p className="text-gray-300 mb-6">
                    Fill out our quick form and get a personalized quote for your vehicle within 24 hours.
                  </p>
                  <Button 
                    onClick={onGetStarted}
                    size="lg"
                    className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 text-lg rounded-full transition-all duration-300 transform hover:scale-105 w-full md:w-auto"
                  >
                    Get Free Quote Now
                  </Button>
                </CardContent>
              </Card>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={400}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-3xl blur-3xl"></div>
              <Card className="relative bg-white/10 backdrop-blur-md border-white/20">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Why Choose AutoPro?</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span className="text-gray-300">10+ Years of Experience</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span className="text-gray-300">500+ Satisfied Customers</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-gray-300">Best Market Prices Guaranteed</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <span className="text-gray-300">Professional & Certified Team</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                      <span className="text-gray-300">Complete Insurance Coverage</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
