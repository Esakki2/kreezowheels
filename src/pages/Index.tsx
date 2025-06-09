
import React, { useState, useEffect } from 'react';
import { Car, Sparkles, Shield, Clock, Star, ChevronRight, Phone, Mail, MapPin, FileText, Users, Truck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimatedCard } from '@/components/AnimatedCard';
import { AnimatedSection } from '@/components/AnimatedSection';
import { HeroSection } from '@/components/HeroSection';

const Index = () => {
  const [currentCarIndex, setCurrentCarIndex] = useState(0);
  
  const carModels = [
    { name: "Maruti 800", color: "#1a1a2e" },
    { name: "Swift Dzire", color: "#dc2626" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCarIndex((prev) => (prev + 1) % carModels.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleGetStarted = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSdcTgfleMC_gZjXsSxTcsyJ5SVWhiKlYJOxNHFKOQYg3-mIbQ/viewform?usp=dialog', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
  <div className="container mx-auto px-6 py-3">
    <div className="flex items-center justify-center">
      {/* Logo and Name */}
      <a href="/" className="flex flex-row items-center space-x-3"> {/* Changed to flex-row and added spacing */}
        <img src="/1.png" alt="Krezzo Wheels Logo" className="h-10 rounded-lg" /> {/* Logo first */}
        <div className="flex flex-col items-start"> {/* Text block, items-start for left alignment of text lines */}
          <span className="text-xl font-bold text-white">KREEZO WHEELS</span>
          <span className="text-xs text-gray-300">Your Free Gateway to Affordable Car Dealers</span>
        </div>
      </a>
      {/* Navigation Links and Mobile Menu Button can be added here if needed, or removed if logo is truly standalone center */}
    </div>
  </div>
</nav>

      {/* Hero Section */}
      <HeroSection 
        currentCar={carModels[currentCarIndex]} 
        onGetStarted={handleGetStarted} 
      />

      {/* Services Section */}


      {/* Feature Cards Section */}
      <AnimatedSection>
        <section className="py-20 bg-gradient-to-b from-gray-100 to-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <AnimatedCard
                initialBgColor="#ffffff"
                hoverBgColor="#ffffff"
                textColor="#1e293b"
              >
                <FileText className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <div className="text-blue-600 text-xl font-bold mb-2">Submit Your Needs</div>
                <div className="text-gray-700 text-sm">Tell us your desired car and specs via our simple online form.</div>
              </AnimatedCard>
              
              <AnimatedCard
                initialBgColor="#ffffff"
                hoverBgColor="#ffffff"
                textColor="#1e293b"
              >
                <Phone className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <div className="text-green-600 text-xl font-bold mb-2">We Confirm & Connect</div>
                <div className="text-gray-700 text-sm">Our team calls to confirm details and understand your preferences.</div>
              </AnimatedCard>
              
              <AnimatedCard
                initialBgColor="#ffffff"
                hoverBgColor="#ffffff"
                textColor="#1e293b"
              >
                <Users className="w-12 h-12 text-purple-500 mx-auto mb-4" />
                <div className="text-purple-600 text-xl font-bold mb-2">Best Dealer Research</div>
                <div className="text-gray-700 text-sm">We find the best local dealers offering your car at affordable prices.</div>
              </AnimatedCard>
              
              <AnimatedCard
                initialBgColor="#ffffff"
                hoverBgColor="#ffffff"
                textColor="#1e293b"
              >
                <Truck className="w-12 h-12 text-red-500 mx-auto mb-4" />
                <div className="text-red-600 text-xl font-bold mb-2">Genuine Delivery & Docs</div>
                <div className="text-gray-700 text-sm">Enjoy hassle-free delivery with all proper documentation handled.</div>
              </AnimatedCard>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Process Section */}
      <AnimatedSection>
        <section id="process" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <div className="text-orange-500 text-sm font-medium mb-2">— Kreezowheels —</div>
              <h2 className="text-4xl font-bold text-gray-800 hover:text-orange-600 transition-colors duration-300">How Things Work</h2>
            </div>

            <div className="space-y-16">
              {/* NOTE: Added hover effects to the following four sections */}
              {/* 1. Submit Your Request */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center p-6 rounded-lg group">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-slate-900 transition-colors duration-300">1. Tell Us What You Need</h3>
                  <p className="text-gray-600 mb-4 group-hover:text-slate-700 transition-colors duration-300">
                    Start by filling out our simple online form. Let us know the make, model, year, and any specific features you're looking for in your next car. The more details you provide, the better we can assist you.
                  </p>
                  <p className="text-gray-600 group-hover:text-slate-700 transition-colors duration-300">
                    This initial step is quick, easy, and gets you on the path to your dream car without any hassle. Our Google Form is secure and user-friendly.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl hover:bg-yellow-300 hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ease-in-out">
                  <div className="flex justify-center">
                    <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center">
                      <FileText className="w-16 h-16 text-white" />
                    </div>
                  </div>
                </div>
              </div>

              {/* 2. Confirmation & Consultation */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center p-6 rounded-lg group">
                <div className="bg-gradient-to-br from-green-50 to-teal-50 p-8 rounded-2xl order-2 lg:order-1 hover:bg-yellow-300 hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ease-in-out">
                  <div className="flex justify-center">
                    <div className="w-32 h-32 bg-gradient-to-br from-green-400 to-teal-500 rounded-full flex items-center justify-center">
                      <Phone className="w-16 h-16 text-white" />
                    </div>
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-slate-900 transition-colors duration-300">2. We Reach Out & Refine</h3>
                  <p className="text-gray-600 mb-4 group-hover:text-slate-700 transition-colors duration-300">
                    Once we receive your request, one of our friendly car experts will give you a call. We'll confirm the details you provided, answer any initial questions, and get a deeper understanding of your needs and budget.
                  </p>
                  <p className="text-gray-600 group-hover:text-slate-700 transition-colors duration-300">
                    This personal touch ensures we're perfectly aligned with your expectations before we start searching for your ideal vehicle.
                  </p>
                </div>
              </div>

              {/* 3. Dealer Search & Best Price */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center p-6 rounded-lg group">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-slate-900 transition-colors duration-300">3. Finding Your Ideal Dealer</h3>
                  <p className="text-gray-600 mb-4 group-hover:text-slate-700 transition-colors duration-300">
                    With your confirmed requirements, our team gets to work. We tap into our extensive network of trusted local car dealers to find the ones that have your desired vehicle and offer the most competitive pricing.
                  </p>
                  <p className="text-gray-600 group-hover:text-slate-700 transition-colors duration-300">
                    We do the legwork, comparing options and negotiating on your behalf to ensure you get the best possible deal without the usual stress of car shopping.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl hover:bg-yellow-300 hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ease-in-out">
                  <div className="flex justify-center">
                    <div className="w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center">
                      <Users className="w-16 h-16 text-white" />
                    </div>
                  </div>
                </div>
              </div>

              {/* 4. Smooth Delivery & Paperwork */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center p-6 rounded-lg group">
                <div className="bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-2xl order-2 lg:order-1 hover:bg-yellow-300 hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ease-in-out">
                  <div className="flex justify-center">
                    <div className="w-32 h-32 bg-gradient-to-br from-red-400 to-orange-500 rounded-full flex items-center justify-center">
                      <Truck className="w-16 h-16 text-white" />
                    </div>
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-slate-900 transition-colors duration-300">4. Genuine Car, Seamless Process</h3>
                  <p className="text-gray-600 mb-4 group-hover:text-slate-700 transition-colors duration-300">
                    Once you're happy with the chosen dealer and price, we facilitate a smooth handover. We ensure the car is delivered genuinely, and all necessary paperwork and documentation are handled correctly and efficiently.
                  </p>
                  <p className="text-gray-600 group-hover:text-slate-700 transition-colors duration-300">
                    Our goal is to make your car buying experience transparent, trustworthy, and completely problem-free, from your initial request to driving your new car.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Contact Section */}
      <AnimatedSection>
        <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">Get in touch</h2>
                <p className="text-gray-300 mb-8">
                  We're here to assist you! Submit a support ticket and our dedicated team 
                  will promptly address your concerns and provide the help you need.
                </p>
                <Button 
                  onClick={() => window.open('https://wa.me/9176079118', '_blank')}
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg"
                >
                  GET SUPPORT
                </Button>
              </div>
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8">
                  <div className="flex justify-center">
                    <div className="w-64 h-64 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                      <Phone className="w-24 h-24 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Footer */}
      <footer className="bg-black py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-orange-400 font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>→ About us</li>
                <li>→ Terms & Condition</li>
              </ul>
            </div>
            <div>
              <h4 className="text-orange-400 font-semibold mb-4">Contact Us</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>+91 7010968125</li>
                <li>+91 9176079118</li>
                <li>kreezowheels@gmail.com</li>
              </ul>
            </div>
            <div>
              <h4 className="text-orange-400 font-semibold mb-4">Opening</h4>
              <div className="text-gray-400 text-sm space-y-1">
                <div>Monday - Saturday</div>
                <div>09:00AM - 7:30PM</div>
                <div className="mt-2">Sunday</div>
                <div>09:00AM - 06:00PM</div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
            <p>© Kreezowheels. All Right Reserved. Designed by Kreezowheels</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
