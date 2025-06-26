
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    setEmail('');
    // Add your newsletter logic here
  };

  return (
    <footer className="bg-power-black border-t border-charcoal/30">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-charcoal to-power-black py-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="font-bebas text-4xl md:text-5xl text-pure-white mb-4">
            STAY <span className="gradient-text">STRONG</span>
          </h3>
          <p className="text-xl text-light-gray/70 mb-8 font-inter">
            Get exclusive deals, training tips, and product updates delivered to your inbox.
          </p>
          
          <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-charcoal border border-charcoal/50 text-pure-white placeholder-light-gray/50 rounded-none focus:outline-none focus:border-intense-red font-inter"
              required
            />
            <button
              type="submit"
              className="cta-button px-6"
            >
              JOIN
            </button>
          </form>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand */}
            <div>
              <h4 className="font-bebas text-3xl text-pure-white mb-6 tracking-wide">
                ELITE<span className="text-intense-red">GYM</span>
              </h4>
              <p className="text-light-gray/70 font-inter mb-6 leading-relaxed">
                Premium gym equipment engineered for champions. 
                Transform your training with professional-grade gear.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-charcoal hover:bg-intense-red rounded-full flex items-center justify-center transition-colors duration-300">
                  <Facebook className="w-5 h-5 text-pure-white" />
                </a>
                <a href="#" className="w-10 h-10 bg-charcoal hover:bg-intense-red rounded-full flex items-center justify-center transition-colors duration-300">
                  <Instagram className="w-5 h-5 text-pure-white" />
                </a>
                <a href="#" className="w-10 h-10 bg-charcoal hover:bg-intense-red rounded-full flex items-center justify-center transition-colors duration-300">
                  <Twitter className="w-5 h-5 text-pure-white" />
                </a>
                <a href="#" className="w-10 h-10 bg-charcoal hover:bg-intense-red rounded-full flex items-center justify-center transition-colors duration-300">
                  <Youtube className="w-5 h-5 text-pure-white" />
                </a>
              </div>
            </div>

            {/* Products */}
            <div>
              <h5 className="font-bebas text-xl text-pure-white mb-6 tracking-wide">
                EQUIPMENT
              </h5>
              <ul className="space-y-3 font-inter">
                <li><a href="#" className="text-light-gray/70 hover:text-intense-red transition-colors duration-300">Power Racks</a></li>
                <li><a href="#" className="text-light-gray/70 hover:text-intense-red transition-colors duration-300">Dumbbells</a></li>
                <li><a href="#" className="text-light-gray/70 hover:text-intense-red transition-colors duration-300">Cardio Machines</a></li>
                <li><a href="#" className="text-light-gray/70 hover:text-intense-red transition-colors duration-300">Benches</a></li>
                <li><a href="#" className="text-light-gray/70 hover:text-intense-red transition-colors duration-300">Plates & Bars</a></li>
                <li><a href="#" className="text-light-gray/70 hover:text-intense-red transition-colors duration-300">Accessories</a></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h5 className="font-bebas text-xl text-pure-white mb-6 tracking-wide">
                SUPPORT
              </h5>
              <ul className="space-y-3 font-inter">
                <li><a href="#" className="text-light-gray/70 hover:text-intense-red transition-colors duration-300">Warranty</a></li>
                <li><a href="#" className="text-light-gray/70 hover:text-intense-red transition-colors duration-300">Installation</a></li>
                <li><a href="#" className="text-light-gray/70 hover:text-intense-red transition-colors duration-300">Maintenance</a></li>
                <li><a href="#" className="text-light-gray/70 hover:text-intense-red transition-colors duration-300">FAQs</a></li>
                <li><a href="#" className="text-light-gray/70 hover:text-intense-red transition-colors duration-300">Training Guides</a></li>
                <li><a href="#" className="text-light-gray/70 hover:text-intense-red transition-colors duration-300">Contact Support</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h5 className="font-bebas text-xl text-pure-white mb-6 tracking-wide">
                CONTACT
              </h5>
              <div className="space-y-4 font-inter">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-intense-red" />
                  <span className="text-light-gray/70">(555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-intense-red" />
                  <span className="text-light-gray/70">info@elitegym.com</span>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-intense-red mt-1" />
                  <span className="text-light-gray/70">
                    123 Fitness Street<br />
                    Elite City, EC 12345
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-charcoal/30 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-light-gray/50 font-inter text-sm mb-4 md:mb-0">
              © 2024 EliteGym Equipment. All rights reserved.
            </p>
            <div className="flex space-x-6 text-light-gray/50 font-inter text-sm">
              <a href="#" className="hover:text-intense-red transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="hover:text-intense-red transition-colors duration-300">Terms of Service</a>
              <a href="#" className="hover:text-intense-red transition-colors duration-300">Shipping Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
