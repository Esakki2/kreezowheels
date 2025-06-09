
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';

export const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "BMW Owner",
      content: "Absolutely amazing service! They got me 15% more than I expected for my car. The cleaning service made it look brand new.",
      rating: 5,
      image: "photo-1494790108755-2616b612b829"
    },
    {
      name: "Mike Chen",
      role: "Tesla Owner",
      content: "Professional, reliable, and honest. The entire process was smooth and transparent. Highly recommend their services!",
      rating: 5,
      image: "photo-1472099645785-5658abf4ff4e"
    },
    {
      name: "Emily Davis",
      role: "Audi Owner",
      content: "The cleaning service exceeded my expectations. My car has never looked this good. The reselling process was hassle-free too.",
      rating: 5,
      image: "photo-1438761681033-6461ffad8d80"
    }
  ];

  return (
    <section id="testimonials" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20"></div>
      <div className="container mx-auto px-6 relative">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it. See what our satisfied customers have to say about our services.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection key={index} delay={index * 200}>
              <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-500 transform hover:scale-105 h-full">
                <CardContent className="p-8 h-full flex flex-col">
                  <Quote className="h-8 w-8 text-blue-400 mb-4" />
                  
                  <p className="text-gray-300 mb-6 flex-grow italic">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <div className="flex items-center">
                    <img 
                      src={`https://images.unsplash.com/${testimonial.image}?auto=format&fit=crop&w=100&h=100&q=80`}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4 object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-white">{testimonial.name}</h4>
                      <p className="text-sm text-gray-400">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
