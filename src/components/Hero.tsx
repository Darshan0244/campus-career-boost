
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
    <section ref={sectionRef} className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24 md:pt-16">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-neon-purple/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-blue/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-neon-green/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="gradient-text">Master Your</span>
              <br />
              <span className="text-white">Placement Journey</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Everything you need for placements & internships - Aptitude, CS Fundamentals, 
              DSA, and Interview Preparation in one comprehensive platform
            </p>
          </div>

          {/* Fixed height container for buttons to prevent layout shift */}
          <div className="h-20 flex items-center justify-center mb-12">
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-neon-purple to-neon-blue hover:from-neon-purple/80 hover:to-neon-blue/80 text-white px-8 py-3 text-lg group"
                onClick={scrollToResources}
              >
                Start Learning
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white/20 text-white hover:bg-white/10 px-8 py-3 text-lg"
                onClick={scrollToResources}
              >
                View Resources
              </Button>
            </div>
          </div>

          {/* Fixed height container for stats to prevent layout shift */}
          <div className="min-h-[200px] flex items-center justify-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.5s' }}>
              {stats.map((stat, index) => (
                <div key={index} className="glass rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-neon-blue mx-auto mb-3" />
                  <div className="text-3xl font-bold text-white mb-1">
                    {stat.value}{stat.suffix}
                  </div>
                  <div className="text-gray-400">{stat.label}</div>
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
