
import { Wrench, Clock, RefreshCw, Mail, Linkedin, Github, Globe, ArrowUpRight, Zap, Code2, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';

const MaintenancePage = () => {
  const [dots, setDots] = useState('');
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => prev.length >= 3 ? '' : prev + '.');
    }, 500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timeInterval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timeInterval);
  }, []);

  const socialLinks = [
    { 
      icon: Linkedin, 
      href: 'https://www.linkedin.com/in/d-darshan-36077327a/', 
      label: 'LinkedIn',
      color: 'from-blue-500 to-blue-600',
      hoverColor: 'hover:from-blue-400 hover:to-blue-500'
    },
    { 
      icon: Github, 
      href: 'https://github.com/Darshan0244', 
      label: 'GitHub',
      color: 'from-gray-700 to-gray-800',
      hoverColor: 'hover:from-gray-600 hover:to-gray-700'
    },
    { 
      icon: Globe, 
      href: 'https://ddarshanportfolio.vercel.app/', 
      label: 'Portfolio',
      color: 'from-emerald-500 to-emerald-600',
      hoverColor: 'hover:from-emerald-400 hover:to-emerald-500'
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      
      {/* Floating Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/6 w-32 h-32 bg-gradient-to-r from-neon-purple/20 to-neon-blue/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '0s' }} />
        <div className="absolute top-3/4 right-1/4 w-40 h-40 bg-gradient-to-r from-neon-blue/15 to-neon-green/15 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/3 left-1/3 w-24 h-24 bg-gradient-to-r from-neon-green/25 to-neon-purple/25 rounded-full blur-xl animate-pulse" style={{ animationDelay: '4s' }} />
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-8">
        <div className="max-w-5xl mx-auto text-center space-y-12">
          
          {/* Hero Section */}
          <div className="space-y-8 animate-fade-in">
            {/* Main Icon with Enhanced Design */}
            <div className="relative inline-block group">
              <div className="absolute inset-0 bg-gradient-to-r from-neon-purple via-neon-blue to-neon-green rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-all duration-500 animate-pulse" />
              <div className="relative w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/20 shadow-2xl group-hover:scale-105 transition-all duration-500">
                <div className="absolute inset-2 bg-gradient-to-br from-neon-purple/20 to-neon-blue/20 rounded-full animate-pulse" />
                <Wrench className="w-16 h-16 md:w-20 md:h-20 text-white relative z-10 group-hover:rotate-12 transition-transform duration-500" />
                
                {/* Rotating Settings Icon */}
                <div className="absolute top-2 md:top-4 -right-2 md:-right-4 w-12 h-12 md:w-14 md:h-14 bg-gradient-to-r from-neon-green to-neon-blue rounded-full flex items-center justify-center shadow-lg animate-spin border border-white/30">
                  <RefreshCw className="w-6 h-6 md:w-7 md:h-7 text-white" />
                </div>
                
                {/* Sparkle Effects */}
                <Sparkles className="absolute -top-4 -left-4 w-6 h-6 text-neon-purple animate-pulse" style={{ animationDelay: '0.5s' }} />
                <Sparkles className="absolute -bottom-4 -right-4 w-4 h-4 text-neon-blue animate-pulse" style={{ animationDelay: '1.5s' }} />
              </div>
            </div>

            {/* Enhanced Title */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight tracking-tight">
                <span className="block bg-gradient-to-r from-neon-purple via-neon-blue to-neon-green bg-clip-text text-transparent animate-pulse">
                  Under
                </span>
                <span className="block text-white mt-2">
                  Maintenance
                </span>
              </h1>
              
              <div className="flex items-center justify-center space-x-3 text-lg md:text-xl text-gray-300">
                <Zap className="w-6 h-6 text-neon-green animate-pulse" />
                <span>Upgrading Experience</span>
                <Code2 className="w-6 h-6 text-neon-blue animate-pulse" />
              </div>
            </div>
          </div>

          {/* Status Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            
            {/* Progress Card */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-white/10 p-6 hover:border-white/20 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-neon-purple/5 to-neon-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <Clock className="w-8 h-8 text-neon-blue" />
                  <span className="text-sm text-gray-400">In Progress</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Development</h3>
                <p className="text-gray-300 text-sm mb-4">Implementing new features and optimizations</p>
                <div className="w-full bg-slate-700/50 rounded-full h-2 overflow-hidden">
                  <div className="bg-gradient-to-r from-neon-purple to-neon-blue h-full rounded-full w-3/4 animate-pulse" />
                </div>
              </div>
            </div>

            {/* Timeline Card */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-white/10 p-6 hover:border-white/20 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-neon-green/5 to-neon-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <RefreshCw className="w-8 h-8 text-neon-green" />
                  <span className="text-sm text-gray-400">Timeline</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Completion</h3>
                <p className="text-gray-300 text-sm mb-4">The website will be back after some days</p>
                <div className="flex items-center text-neon-green font-medium">
                  <span>Updates in progress{dots}</span>
                </div>
              </div>
            </div>

            {/* Contact Card */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-white/10 p-6 hover:border-white/20 transition-all duration-500 md:col-span-2 lg:col-span-1">
              <div className="absolute inset-0 bg-gradient-to-r from-neon-purple/5 to-neon-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <Mail className="w-8 h-8 text-neon-purple" />
                  <span className="text-sm text-gray-400">Contact</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Get in Touch</h3>
                <p className="text-gray-300 text-sm mb-4">Need assistance or have questions?</p>
                <a 
                  href="mailto:darshand4893@gmail.com" 
                  className="inline-flex items-center space-x-2 text-neon-purple hover:text-neon-blue transition-colors group/link"
                >
                  <span className="text-sm font-medium">darshand4893@gmail.com</span>
                  <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* Social Links Section */}
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="flex items-center justify-center space-x-3">
              <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent flex-1" />
              <span className="text-gray-400 text-sm font-medium px-4">Connect with me</span>
              <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent flex-1" />
            </div>
            
            <div className="flex items-center justify-center space-x-6">
              {socialLinks.map((social, index) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-20 rounded-xl blur-xl transition-all duration-500" />
                  <div className={`relative flex items-center space-x-3 px-6 py-3 rounded-xl bg-gradient-to-r ${social.color} ${social.hoverColor} shadow-lg transform group-hover:scale-105 group-hover:-translate-y-1 transition-all duration-300`}>
                    <social.icon className="w-5 h-5 text-white" />
                    <span className="text-white font-medium hidden sm:block">{social.label}</span>
                    <ArrowUpRight className="w-4 h-4 text-white/80 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Footer Section */}
          <div className="pt-8 border-t border-white/10 animate-fade-in" style={{ animationDelay: '0.9s' }}>
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div className="flex items-center space-x-4 text-gray-400 text-sm">
                <span>Current Time:</span>
                <span className="font-mono text-neon-blue">
                  {currentTime.toLocaleTimeString()}
                </span>
              </div>
              <p className="text-gray-400 text-sm">
                Thank you for your patience! 🚀
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaintenancePage;
