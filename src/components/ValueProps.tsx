
import React from 'react';
import { Shield, Truck, Wrench, Award } from 'lucide-react';

const ValueProps = () => {
  const values = [
    {
      icon: Shield,
      title: "LIFETIME WARRANTY",
      description: "Built to last with premium materials and engineering excellence."
    },
    {
      icon: Truck,
      title: "FREE DELIVERY",
      description: "White-glove delivery and setup service nationwide."
    },
    {
      icon: Wrench,
      title: "EXPERT INSTALLATION",
      description: "Professional assembly by our certified technicians."
    },
    {
      icon: Award,
      title: "TRUSTED BY PROS",
      description: "Used by Olympic athletes and professional sports teams."
    }
  ];

  return (
    <section className="py-20 px-6 lg:px-8 bg-charcoal relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-intense-red/20 to-transparent transform rotate-12"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="section-title mb-6">
            WHY CHOOSE <span className="gradient-text">ELITE</span>
          </h2>
          <p className="text-xl text-light-gray/70 max-w-3xl mx-auto font-inter">
            We don't just sell equipment – we deliver complete fitness solutions 
            backed by unmatched quality and service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="text-center group animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="mb-6 relative">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-intense-red to-intense-red/70 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-10 h-10 text-pure-white" />
                </div>
                <div className="absolute inset-0 w-20 h-20 mx-auto bg-intense-red/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              </div>
              
              <h3 className="font-bebas text-2xl text-pure-white mb-4 tracking-wide">
                {value.title}
              </h3>
              
              <p className="text-light-gray/70 font-inter leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="glass-card p-8 max-w-4xl mx-auto">
            <h3 className="font-bebas text-3xl text-pure-white mb-4">
              READY TO TRANSFORM YOUR FITNESS JOURNEY?
            </h3>
            <p className="text-light-gray/70 mb-6 font-inter text-lg">
              Get a personalized consultation with our fitness equipment experts.
            </p>
            <button className="cta-button mr-4">
              START YOUR JOURNEY
            </button>
            <button className="border-2 border-intense-red text-intense-red hover:bg-intense-red hover:text-pure-white font-inter font-bold px-8 py-4 rounded-none uppercase tracking-wide transition-all duration-300">
              CALL (555) 123-4567
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProps;
