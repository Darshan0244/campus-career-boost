
import { Wrench, Clock, RefreshCw, Mail } from 'lucide-react';
import { useEffect, useState } from 'react';

const MaintenancePage = () => {
  const [dots, setDots] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => prev.length >= 3 ? '' : prev + '.');
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center relative overflow-hidden px-4">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-48 md:w-72 h-48 md:h-72 bg-neon-purple/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-64 md:w-96 h-64 md:h-96 bg-neon-blue/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 md:w-64 h-48 md:h-64 bg-neon-green/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10 w-full">
        {/* Main Icon */}
        <div className="mb-6 md:mb-8 animate-fade-in">
          <div className="relative inline-block">
            <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-r from-neon-purple to-neon-blue rounded-full flex items-center justify-center mb-4 md:mb-6 mx-auto">
              <Wrench className="w-10 h-10 md:w-12 md:h-12 text-white animate-pulse" />
            </div>
            <div className="absolute top-2 md:top-4 -right-1 md:-right-2 w-6 h-6 md:w-8 md:h-8 bg-neon-green rounded-full flex items-center justify-center animate-spin">
              <RefreshCw className="w-3 h-3 md:w-4 md:h-4 text-white" />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6">
            <span className="gradient-text">Website Under</span>
            <br />
            <span className="text-white">Maintenance</span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed">
            We're making some exciting improvements to enhance your experience. 
            The website will be back after some days.
          </p>

          <div className="glass rounded-2xl p-6 md:p-8 mb-6 md:mb-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <Clock className="w-5 h-5 md:w-6 md:h-6 text-neon-blue mr-3" />
              <h3 className="text-lg md:text-xl font-semibold text-white">Currently Working On</h3>
            </div>
            <p className="text-gray-300 mb-4 text-sm md:text-base">
              Implementing new features and optimizations to provide you with a better learning experience
            </p>
            <div className="flex items-center justify-center text-neon-green font-medium text-sm md:text-base">
              <span>Updates in progress{dots}</span>
            </div>
          </div>

          {/* Progress Animation */}
          <div className="max-w-md mx-auto mb-6 md:mb-8">
            <div className="bg-white/10 rounded-full h-2 overflow-hidden">
              <div className="bg-gradient-to-r from-neon-purple to-neon-blue h-full rounded-full animate-pulse w-3/4"></div>
            </div>
            <p className="text-xs md:text-sm text-gray-400 mt-2">Estimated completion: Some days</p>
          </div>

          {/* Contact Info */}
          <div className="text-gray-400 space-y-3 md:space-y-4">
            <p className="text-sm md:text-base">Thank you for your patience!</p>
            <div className="glass-light rounded-xl p-4 md:p-6 max-w-md mx-auto">
              <div className="flex items-center justify-center mb-2">
                <Mail className="w-4 h-4 md:w-5 md:h-5 text-neon-blue mr-2" />
                <span className="text-sm md:text-base font-medium text-white">Need to get in touch?</span>
              </div>
              <a 
                href="mailto:darshand4893@gmail.com" 
                className="text-neon-blue hover:text-neon-purple transition-colors text-sm md:text-base underline"
              >
                darshand4893@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1.5 h-1.5 md:w-2 md:h-2 bg-neon-blue/30 rounded-full animate-float"
              style={{
                top: `${20 + Math.sin(i * Math.PI / 3) * 30}%`,
                left: `${20 + Math.cos(i * Math.PI / 3) * 30}%`,
                animationDelay: `${i * 500}ms`,
                animationDuration: '4s'
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MaintenancePage;
