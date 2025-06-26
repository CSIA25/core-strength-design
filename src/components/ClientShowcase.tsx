
import React, { useState, useEffect } from 'react';

const ClientShowcase = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const clients = [
    {
      name: "Elite Performance Gym",
      type: "Commercial Gym",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=300&fit=crop&crop=center",
      quote: "The equipment quality is unmatched. Our members love the smooth operation and durability."
    },
    {
      name: "Marcus Johnson",
      type: "Olympic Weightlifter",
      image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&h=300&fit=crop&crop=center",
      quote: "Training with this equipment gives me the confidence to push my limits every session."
    },
    {
      name: "FitLife Home Gyms",
      type: "Home Fitness Retailer",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&crop=center",
      quote: "Our customers consistently rate this brand as the best investment they've made."
    },
    {
      name: "Sarah Mitchell",
      type: "Fitness Influencer",
      image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=400&h=300&fit=crop&crop=center",
      quote: "Professional grade equipment that delivers results. My home gym is now my sanctuary."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % clients.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 px-6 lg:px-8 bg-gradient-to-b from-charcoal to-power-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="section-title mb-6">
            TRUSTED BY <span className="gradient-text">CHAMPIONS</span>
          </h2>
          <p className="text-xl text-light-gray/70 max-w-3xl mx-auto font-inter">
            From Olympic athletes to home fitness enthusiasts, see why professionals 
            choose our equipment for their training.
          </p>
        </div>

        {/* Main Showcase */}
        <div className="relative h-96 mb-8 overflow-hidden rounded-lg">
          {clients.map((client, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={client.image}
                alt={client.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-power-black via-power-black/50 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="max-w-4xl">
                  <p className="text-2xl md:text-3xl font-inter font-light text-pure-white mb-4 leading-relaxed">
                    "{client.quote}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div>
                      <h4 className="font-bebas text-xl text-pure-white tracking-wide">
                        {client.name}
                      </h4>
                      <p className="text-intense-red font-inter font-semibold">
                        {client.type}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center space-x-3 mb-12">
          {clients.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-intense-red scale-125' 
                  : 'bg-pure-white/30 hover:bg-pure-white/60'
              }`}
            />
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center animate-fade-in">
            <div className="font-bebas text-4xl md:text-5xl text-intense-red mb-2">
              500+
            </div>
            <p className="text-light-gray/70 font-inter">Professional Gyms</p>
          </div>
          <div className="text-center animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="font-bebas text-4xl md:text-5xl text-intense-red mb-2">
              10K+
            </div>
            <p className="text-light-gray/70 font-inter">Home Installations</p>
          </div>
          <div className="text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="font-bebas text-4xl md:text-5xl text-intense-red mb-2">
              50+
            </div>
            <p className="text-light-gray/70 font-inter">Olympic Athletes</p>
          </div>
          <div className="text-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="font-bebas text-4xl md:text-5xl text-intense-red mb-2">
              98%
            </div>
            <p className="text-light-gray/70 font-inter">Satisfaction Rate</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientShowcase;
