
import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  const testimonials = [
    {
      name: "Jake Rodriguez",
      title: "Personal Trainer",
      rating: 5,
      text: "This equipment has completely transformed my home gym. The build quality is exceptional, and my clients notice the difference immediately. Worth every penny!",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Emma Thompson",
      title: "Fitness Enthusiast",
      rating: 5,
      text: "I've been training for 15 years and this is hands down the best equipment I've ever used. The durability and smooth operation are unmatched.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Mike Chen",
      title: "Gym Owner",
      rating: 5,
      text: "We equipped our entire facility with this brand. Our members love it, and the minimal maintenance required has saved us thousands in operating costs.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Lisa Parker",
      title: "Former Olympic Athlete",
      rating: 5,
      text: "As someone who's trained with equipment worldwide, I can confidently say this meets Olympic standards. It's what I use for my personal training.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < rating ? 'text-intense-red fill-current' : 'text-light-gray/30'
        }`}
      />
    ));
  };

  return (
    <section className="py-20 px-6 lg:px-8 bg-power-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-intense-red/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-intense-red/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="section-title mb-6">
            WHAT OUR <span className="gradient-text">CHAMPIONS</span> SAY
          </h2>
          <p className="text-xl text-light-gray/70 max-w-3xl mx-auto font-inter">
            Real feedback from real athletes, trainers, and fitness enthusiasts 
            who have transformed their training with our equipment.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <div className="glass-card p-8 md:p-12 mb-8 animate-scale-in">
            <div className="flex items-center mb-6">
              {renderStars(testimonials[currentTestimonial].rating)}
            </div>
            
            <blockquote className="text-2xl md:text-3xl font-inter font-light text-pure-white mb-8 leading-relaxed">
              "{testimonials[currentTestimonial].text}"
            </blockquote>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <img
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bebas text-xl text-pure-white tracking-wide">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-intense-red font-inter font-semibold">
                    {testimonials[currentTestimonial].title}
                  </p>
                </div>
              </div>
              
              <div className="flex gap-2">
                <button
                  onClick={prevTestimonial}
                  className="w-12 h-12 bg-charcoal hover:bg-intense-red border border-charcoal hover:border-intense-red rounded-full flex items-center justify-center transition-all duration-300"
                >
                  <ChevronLeft className="w-6 h-6 text-pure-white" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="w-12 h-12 bg-charcoal hover:bg-intense-red border border-charcoal hover:border-intense-red rounded-full flex items-center justify-center transition-all duration-300"
                >
                  <ChevronRight className="w-6 h-6 text-pure-white" />
                </button>
              </div>
            </div>
          </div>

          {/* Testimonial Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {testimonials.map((testimonial, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`p-4 rounded-lg transition-all duration-300 text-left ${
                  index === currentTestimonial
                    ? 'bg-intense-red/20 border-2 border-intense-red'
                    : 'bg-charcoal/30 border-2 border-transparent hover:bg-charcoal/50'
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <h5 className="font-inter font-semibold text-pure-white text-sm">
                      {testimonial.name}
                    </h5>
                    <div className="flex">
                      {renderStars(testimonial.rating).slice(0, 5)}
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
