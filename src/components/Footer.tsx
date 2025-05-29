
import { Github, Linkedin, Mail, Heart, Globe, Code, Star, Users } from 'lucide-react';
import ContactForm from './ContactForm';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: Github, href: 'https://github.com/Darshan0244', label: 'GitHub', color: 'hover:text-white', bgGradient: 'from-gray-800 to-black' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/d-darshan-36077327a/', label: 'LinkedIn', color: 'hover:text-blue-400', bgGradient: 'from-blue-600 to-blue-800' },
    { icon: Globe, href: 'https://ddarshanportfolio.vercel.app/', label: 'Portfolio', color: 'hover:text-green-400', bgGradient: 'from-green-500 to-emerald-600' },
    { icon: Mail, href: 'mailto:darshand4893@gmail.com', label: 'Email', color: 'hover:text-purple-400', bgGradient: 'from-purple-500 to-purple-700' },
  ];

  const features = [
    { icon: Code, title: '6 Core Topics', description: 'Comprehensive coverage' },
    { icon: Star, title: '30+ Resources', description: 'Curated materials' },
    { icon: Users, title: 'Expert Resource', description: 'Quality content' },
  ];

  return (
    <footer className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900"></div>
      
      {/* Contact Form Section */}
      <div className="relative py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm />
        </div>
      </div>
      
      {/* Glass effect */}
      <div className="relative glass border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-neon-purple to-neon-blue rounded-xl flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-neon-purple/20 to-neon-blue/20 blur-sm"></div>
                  <span className="relative text-white font-bold text-xl">P</span>
                </div>
                <span className="text-2xl font-bold gradient-text">PlacementPrep</span>
              </div>
              
              <p className="text-gray-300 mb-8 leading-relaxed">
                Your comprehensive platform for placement and internship preparation. Master every aspect from aptitude to technical skills with our curated resources and expert guidance.
              </p>

              {/* Enhanced Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500 transform hover:scale-110 hover:-translate-y-1"
                    aria-label={social.label}
                  >
                    {/* Background with gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 rounded-xl border border-white/20 group-hover:border-white/40 transition-all duration-500"></div>
                    
                    {/* Hover gradient background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${social.bgGradient} rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                    
                    {/* Glow effect */}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500"></div>
                    
                    {/* Icon */}
                    <social.icon className="relative w-5 h-5 text-gray-400 group-hover:text-white transition-all duration-500 group-hover:drop-shadow-lg z-10" />
                    
                    {/* Ripple effect */}
                    <div className="absolute inset-0 rounded-xl bg-white/20 scale-0 group-hover:scale-110 opacity-0 group-hover:opacity-30 transition-all duration-300"></div>
                  </a>
                ))}
              </div>
            </div>

            {/* Features Section */}
            <div className="lg:col-span-1">
              <h3 className="text-xl font-bold text-white mb-8 flex items-center">
                <Star className="w-6 h-6 text-neon-blue mr-2" />
                Platform Features
              </h3>
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div className="w-10 h-10 glass-light rounded-lg flex items-center justify-center group-hover:bg-white/20 transition-all duration-300">
                      <feature.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium group-hover:text-neon-blue transition-colors duration-300">
                        {feature.title}
                      </h4>
                      <p className="text-gray-400 text-sm">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-gradient-to-r from-neon-purple/10 to-neon-blue/10 rounded-lg p-4 border border-white/10">
                <p className="text-sm text-gray-300">
                  <span className="text-neon-blue font-medium">Response Time:</span> Queries will be responded within 1-2 days
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-white/10 mt-16 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center space-x-2">
                <p className="text-gray-400 text-sm flex items-center">
                  Made with <Heart className="w-4 h-4 mx-2 text-red-500 animate-pulse" /> for students
                </p>
              </div>
              
              <div className="flex items-center space-x-4">
                <p className="text-gray-400 text-sm">
                  © {currentYear} PlacementPrep. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
