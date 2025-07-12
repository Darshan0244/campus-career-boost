
import { ArrowRight, Star, TrendingUp, Users, Clock, BookOpen, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useState, useRef } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    resources: 0,
    readingTime: 0,
    successRate: 0
  });
  const sectionRef = useRef<HTMLDivElement>(null);

  const stats = [
    { icon: BookOpen, value: counts.resources, suffix: '+', label: 'Resources' },
    { icon: Clock, value: counts.readingTime, suffix: 'hrs/day', label: 'Min Reading Time' },
    { icon: GraduationCap, value: counts.successRate, suffix: '%', label: 'Success Tutors' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          startCountAnimation();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isVisible]);

  const startCountAnimation = () => {
    const targetCounts = {
      resources: 30,
      readingTime: 4,
      successRate: 90
    };

    const duration = 2000;
    const steps = 50;
    const stepTime = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setCounts({
        resources: Math.floor(targetCounts.resources * progress),
        readingTime: Math.floor(targetCounts.readingTime * progress),
        successRate: Math.floor(targetCounts.successRate * progress)
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setCounts(targetCounts);
      }
    }, stepTime);
  };

  const scrollToResources = () => {
    const resourcesSection = document.getElementById('resources');
    if (resourcesSection) {
      resourcesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={sectionRef} className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 px-4">
      {/* Minimalist Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-purple/50 to-transparent" />
        <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-l from-transparent via-neon-blue/50 to-transparent" />
        <div className="absolute top-1/2 left-0 w-px h-full bg-gradient-to-b from-transparent via-neon-green/30 to-transparent" />
        <div className="absolute top-1/2 right-0 w-px h-full bg-gradient-to-b from-transparent via-neon-purple/30 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="text-center">
          <div className="animate-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-8 sm:mb-6 px-4 mt-16 sm:mt-8">
              <span className="gradient-text">Master Your</span>
              <br />
              <span className="text-white">Placement Journey</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 sm:mb-8 max-w-3xl mx-auto px-4">
              Everything you need for placements & internships - Aptitude, CS Fundamentals, 
              DSA, and Interview Preparation in one comprehensive platform
            </p>
          </div>

          {/* Buttons container with proper mobile spacing */}
          <div className="mb-16 sm:mb-12 px-4">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-slide-up justify-center items-center">
              <Button 
                size="lg" 
                className="w-full sm:w-auto bg-gradient-to-r from-neon-purple to-neon-blue text-white px-8 py-4 text-lg font-semibold rounded-xl border-0 transition-all duration-200"
                onClick={scrollToResources}
              >
                Start Learning
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full sm:w-auto bg-transparent border-2 border-white/30 text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-200"
                onClick={scrollToResources}
              >
                View Resources
              </Button>
            </div>
          </div>

          {/* Stats container with equal spacing for all cards */}
          <div className="px-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 md:gap-8 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.5s' }}>
              {stats.map((stat, index) => (
                <div key={index} className="glass rounded-2xl p-8 border border-white/10">
                  <stat.icon className="w-8 h-8 text-neon-blue mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white mb-2">
                    {stat.value}{stat.suffix}
                  </div>
                  <div className="text-base text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
