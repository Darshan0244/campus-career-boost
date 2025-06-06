
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
      {/* Simplified Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-neon-purple/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-neon-blue/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10 w-full">
        {/* Main Icon */}
        <div className="mb-8 md:mb-12 animate-fade-in">
          <div className="relative inline-block">
            <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-r from-neon-purple to-neon-blue rounded-full flex items-center justify-center mb-6 md:mb-8 mx-auto shadow-2xl">
              <Wrench className="w-12 h-12 md:w-16 md:h-16 text-white" />
            </div>
            <div className="absolute top-8 md:top-10 -right-2 md:-right-3 w-8 h-8 md:w-10 md:h-10 bg-neon-green rounded-full flex items-center justify-center animate-spin shadow-lg">
              <RefreshCw className="w-4 h-4 md:w-5 md:h-5 text-white" />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="animate-fade-in space-y-8" style={{ animationDelay: '0.3s' }}>
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
              <span className="gradient-text block">Website Under</span>
              <span className="text-white block">Maintenance</span>
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
              We're making some exciting improvements to enhance your experience. 
              The website will be back after some days.
            </p>
          </div>

          {/* Status Card */}
          <div className="glass rounded-2xl p-6 md:p-8 max-w-2xl mx-auto backdrop-blur-sm">
            <div className="flex items-center justify-center mb-6">
              <Clock className="w-6 h-6 text-neon-blue mr-3" />
              <h3 className="text-xl md:text-2xl font-semibold text-white">Currently Working On</h3>
            </div>
            <p className="text-gray-300 mb-6 text-base md:text-lg leading-relaxed">
              Implementing new features and optimizations to provide you with a better learning experience
            </p>
            <div className="flex items-center justify-center text-neon-green font-medium text-base md:text-lg">
              <span>Updates in progress{dots}</span>
            </div>
          </div>

          {/* Progress Section */}
          <div className="max-w-md mx-auto space-y-4">
            <div className="bg-white/10 rounded-full h-3 overflow-hidden backdrop-blur-sm">
              <div className="bg-gradient-to-r from-neon-purple to-neon-blue h-full rounded-full w-3/4 animate-pulse"></div>
            </div>
            <p className="text-sm md:text-base text-gray-400">Estimated completion: Some days</p>
          </div>

          {/* Contact Section */}
          <div className="space-y-6">
            <p className="text-base md:text-lg text-gray-400">Thank you for your patience!</p>
            
            <div className="glass-light rounded-xl p-6 md:p-8 max-w-md mx-auto backdrop-blur-sm">
              <div className="flex items-center justify-center mb-4">
                <Mail className="w-5 h-5 md:w-6 md:h-6 text-neon-blue mr-3" />
                <span className="text-base md:text-lg font-medium text-white">Need to get in touch?</span>
              </div>
              <a 
                href="mailto:darshand4893@gmail.com" 
                className="text-neon-blue hover:text-neon-purple transition-colors text-base md:text-lg underline decoration-2 underline-offset-4 hover:decoration-neon-purple"
              >
                darshand4893@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaintenancePage;
