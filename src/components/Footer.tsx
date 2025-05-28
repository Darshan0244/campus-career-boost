
import { Github, Linkedin, Mail, Heart, Globe, Code, Star, Users } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: Github, href: 'https://github.com/Darshan0244', label: 'GitHub', color: 'hover:text-white' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/d-darshan-36077327a/', label: 'LinkedIn', color: 'hover:text-blue-400' },
    { icon: Globe, href: 'https://ddarshanportfolio.vercel.app/', label: 'Portfolio', color: 'hover:text-green-400' },
    { icon: Mail, href: 'mailto:darshand4893@gmail.com', label: 'Email', color: 'hover:text-purple-400' },
  ];

  const features = [
    { icon: Code, title: '6 Core Topics', description: 'Comprehensive coverage' },
    { icon: Star, title: '20+ Resources', description: 'Curated materials' },
    { icon: Users, title: 'Expert Guidance', description: 'Professional support' },
  ];

  return (
    <footer className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900"></div>
      
      {/* Glass effect */}
      <div className="relative glass border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
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

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative w-12 h-12 glass-light rounded-xl flex items-center justify-center transition-all duration-300 ${social.color}`}
                    aria-label={social.label}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <social.icon className="relative w-5 h-5 text-gray-400 group-hover:scale-110 transition-all duration-300" />
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
            </div>

            {/* Contact Section */}
            <div className="lg:col-span-1">
              <h3 className="text-xl font-bold text-white mb-8 flex items-center">
                <Mail className="w-6 h-6 text-neon-purple mr-2" />
                Get In Touch
              </h3>
              
              <div className="space-y-6">
                <p className="text-gray-300 leading-relaxed">
                  Have questions, suggestions, or feedback? We're here to help you succeed in your placement journey.
                </p>
                
                <div className="glass-light rounded-lg p-4 border border-white/10">
                  <div className="flex items-center space-x-3 mb-3">
                    <Mail className="w-5 h-5 text-neon-blue" />
                    <span className="text-white font-medium">Email Support</span>
                  </div>
                  <a
                    href="mailto:darshand4893@gmail.com"
                    className="text-gray-300 hover:text-neon-blue transition-colors duration-300 text-sm"
                  >
                    darshand4893@gmail.com
                  </a>
                </div>

                <div className="bg-gradient-to-r from-neon-purple/10 to-neon-blue/10 rounded-lg p-4 border border-white/10">
                  <p className="text-sm text-gray-300">
                    <span className="text-neon-blue font-medium">Quick Response:</span> We typically respond within 24 hours
                  </p>
                </div>
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
                <div className="hidden md:block w-1 h-1 bg-gray-600 rounded-full"></div>
                <p className="text-gray-400 text-sm">
                  Empowering futures, one placement at a time
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
