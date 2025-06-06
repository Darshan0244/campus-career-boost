
import { Wrench, Clock, RefreshCw } from 'lucide-react';
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
    <div className="min-h-screen bg-background flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-neon-purple/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-blue/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-neon-green/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      </div>

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        {/* Main Icon */}
        <div className="mb-8 animate-fade-in">
          <div className="relative inline-block">
            <div className="w-24 h-24 bg-gradient-to-r from-neon-purple to-neon-blue rounded-full flex items-center justify-center mb-6 mx-auto">
              <Wrench className="w-12 h-12 text-white animate-pulse" />
            </div>
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-neon-green rounded-full flex items-center justify-center animate-spin">
              <RefreshCw className="w-4 h-4 text-white" />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Website Under</span>
            <br />
            <span className="text-white">Maintenance</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            We're making some exciting improvements to enhance your experience. 
            The website will be back online shortly.
          </p>

          <div className="glass rounded-2xl p-8 mb-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <Clock className="w-6 h-6 text-neon-blue mr-3" />
              <h3 className="text-xl font-semibold text-white">Currently Working On</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Implementing new features and optimizations to provide you with a better learning experience
            </p>
            <div className="flex items-center justify-center text-neon-green font-medium">
              <span>Updates in progress{dots}</span>
            </div>
          </div>

          {/* Progress Animation */}
          <div className="max-w-md mx-auto mb-8">
            <div className="bg-white/10 rounded-full h-2 overflow-hidden">
              <div className="bg-gradient-to-r from-neon-purple to-neon-blue h-full rounded-full animate-pulse w-3/4"></div>
            </div>
            <p className="text-sm text-gray-400 mt-2">Estimated completion: Soon</p>
          </div>

          {/* Contact Info */}
          <div className="text-gray-400">
            <p className="mb-2">Thank you for your patience!</p>
            <p className="text-sm">
              If you have any urgent questions, please check back in a few moments.
            </p>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-neon-blue/30 rounded-full animate-float"
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
