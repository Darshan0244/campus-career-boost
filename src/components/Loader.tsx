
import React from 'react';

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-background flex items-center justify-center z-50 overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-12 gap-4 h-full w-full transform rotate-12 scale-150">
          {Array.from({ length: 48 }).map((_, i) => (
            <div
              key={i}
              className="bg-primary/20 rounded-lg animate-pulse"
              style={{
                animationDelay: `${i * 100}ms`,
                animationDuration: '3s'
              }}
            />
          ))}
        </div>
      </div>

      {/* Main loader container */}
      <div className="relative z-10">
        {/* Outer orbital rings */}
        <div className="absolute inset-0 w-32 h-32 -m-6">
          <div className="absolute inset-0 border-2 border-neon-blue/30 rounded-full animate-spin" style={{ animationDuration: '8s' }}></div>
          <div className="absolute inset-2 border-2 border-neon-purple/30 rounded-full animate-spin" style={{ animationDuration: '6s', animationDirection: 'reverse' }}></div>
          <div className="absolute inset-4 border-2 border-neon-green/30 rounded-full animate-spin" style={{ animationDuration: '4s' }}></div>
        </div>

        {/* Central spinner with gradient */}
        <div className="relative w-20 h-20">
          {/* Main rotating gradient ring */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink p-1 animate-spin">
            <div className="w-full h-full bg-background rounded-full"></div>
          </div>
          
          {/* Inner glow effect */}
          <div className="absolute inset-2 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 rounded-full animate-pulse blur-sm"></div>
          
          {/* Central logo/icon area */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 bg-gradient-to-br from-neon-blue to-neon-purple rounded-lg animate-pulse shadow-lg shadow-neon-purple/50">
              <div className="w-full h-full bg-gradient-to-tr from-white/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>

        {/* Floating particles with trails */}
        <div className="absolute -inset-8">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 rounded-full animate-float"
              style={{
                background: `var(--neon-${['blue', 'purple', 'pink', 'green'][i % 4]})`,
                top: `${Math.sin(i * Math.PI / 4) * 40 + 50}%`,
                left: `${Math.cos(i * Math.PI / 4) * 40 + 50}%`,
                animationDelay: `${i * 200}ms`,
                animationDuration: '4s',
                boxShadow: `0 0 10px var(--neon-${['blue', 'purple', 'pink', 'green'][i % 4]})`
              }}
            >
              <div className="absolute inset-0 rounded-full bg-current opacity-60 animate-ping"></div>
            </div>
          ))}
        </div>

        {/* Progress indicators */}
        <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 bg-primary/30 rounded-full animate-pulse"
              style={{
                animationDelay: `${i * 300}ms`,
                animationDuration: '1.5s'
              }}
            />
          ))}
        </div>
      </div>
      
      {/* Loading text with typewriter effect */}
      <div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 text-center">
        <div className="text-primary font-bold text-2xl tracking-wider mb-2 neon-text">
          PlacementPrep
        </div>
        <div className="text-primary/70 text-sm font-medium tracking-wide animate-pulse">
          Preparing your success journey
        </div>
        <div className="mt-4 flex justify-center space-x-1">
          <span className="animate-bounce" style={{ animationDelay: '0ms' }}>.</span>
          <span className="animate-bounce" style={{ animationDelay: '150ms' }}>.</span>
          <span className="animate-bounce" style={{ animationDelay: '300ms' }}>.</span>
        </div>
      </div>
      
      {/* Dynamic background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-neon-blue/5 rounded-full blur-3xl animate-float" style={{ animationDuration: '8s' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-neon-purple/5 rounded-full blur-3xl animate-float" style={{ animationDuration: '10s', animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-neon-pink/5 rounded-full blur-3xl animate-float" style={{ animationDuration: '6s', animationDelay: '4s' }}></div>
      </div>

      {/* Scanning line effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-1 bg-gradient-to-r from-transparent via-neon-blue to-transparent animate-pulse opacity-30" 
             style={{ 
               top: '50%',
               animation: 'slide-up 3s ease-in-out infinite'
             }}></div>
      </div>
    </div>
  );
};

export default Loader;
