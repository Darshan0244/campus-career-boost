
import React from 'react';

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-background flex items-center justify-center z-50">
      <div className="relative">
        {/* Main rotating circle */}
        <div className="w-20 h-20 border-4 border-transparent border-t-primary rounded-full animate-spin"></div>
        
        {/* Inner pulsing dot */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
        </div>
        
        {/* Outer decorative rings */}
        <div className="absolute inset-0 w-24 h-24 border border-primary/20 rounded-full animate-ping"></div>
        <div className="absolute inset-0 w-28 h-28 border border-primary/10 rounded-full animate-ping animation-delay-75"></div>
        
        {/* Floating particles */}
        <div className="absolute -top-2 -left-2">
          <div className="w-1 h-1 bg-neon-blue rounded-full animate-float"></div>
        </div>
        <div className="absolute -top-1 -right-3">
          <div className="w-1.5 h-1.5 bg-neon-purple rounded-full animate-float animation-delay-100"></div>
        </div>
        <div className="absolute -bottom-2 -right-1">
          <div className="w-1 h-1 bg-neon-green rounded-full animate-float animation-delay-200"></div>
        </div>
        <div className="absolute -bottom-1 -left-3">
          <div className="w-1.5 h-1.5 bg-neon-pink rounded-full animate-float animation-delay-300"></div>
        </div>
      </div>
      
      {/* Loading text */}
      <div className="absolute bottom-1/3 left-1/2 transform -translate-x-1/2">
        <div className="text-primary font-semibold text-lg tracking-wider animate-pulse">
          PlacementPrep
        </div>
        <div className="text-primary/60 text-sm text-center mt-2 animate-fade-in">
          Loading your journey...
        </div>
      </div>
      
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent animate-pulse"></div>
    </div>
  );
};

export default Loader;
