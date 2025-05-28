
import { useEffect, useState, useRef } from 'react';
import { Calculator, Database, Code, TrendingUp } from 'lucide-react';

const StatisticsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    aptitude: 0,
    csBasics: 0,
    dsa: 0,
    sql: 0
  });
  const sectionRef = useRef<HTMLDivElement>(null);

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
      aptitude: 5,
      csBasics: 5,
      dsa: 5,
      sql: 5
    };

    const duration = 2000; // 2 seconds
    const steps = 50;
    const stepTime = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setCounts({
        aptitude: Math.floor(targetCounts.aptitude * progress),
        csBasics: Math.floor(targetCounts.csBasics * progress),
        dsa: Math.floor(targetCounts.dsa * progress),
        sql: Math.floor(targetCounts.sql * progress)
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setCounts(targetCounts);
      }
    }, stepTime);
  };

  const statistics = [
    {
      title: 'Aptitude Resources',
      count: counts.aptitude,
      suffix: '+',
      description: 'Comprehensive aptitude materials',
      icon: <Calculator className="w-5 h-5" />,
      color: 'from-purple-500 to-purple-700',
      bgGradient: 'from-purple-500/20 to-purple-700/20'
    },
    {
      title: 'CS Fundamentals',
      count: counts.csBasics,
      suffix: '+',
      description: 'Core computer science concepts',
      icon: <Database className="w-5 h-5" />,
      color: 'from-blue-500 to-blue-700',
      bgGradient: 'from-blue-500/20 to-blue-700/20'
    },
    {
      title: 'DSA Resources',
      count: counts.dsa,
      suffix: '+',
      description: 'Data structures and algorithms',
      icon: <Code className="w-5 h-5" />,
      color: 'from-green-500 to-green-700',
      bgGradient: 'from-green-500/20 to-green-700/20'
    },
    {
      title: 'SQL Resources',
      count: counts.sql,
      suffix: '+',
      description: 'Database and SQL queries',
      icon: <Database className="w-5 h-5" />,
      color: 'from-orange-500 to-orange-700',
      bgGradient: 'from-orange-500/20 to-orange-700/20'
    }
  ];

  return (
    <section ref={sectionRef} className="mb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <TrendingUp className="w-12 h-12 text-neon-green mr-4" />
            <h2 className="text-4xl md:text-5xl font-bold gradient-text">
              Learning Statistics
            </h2>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Track your progress with our comprehensive resource collection
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {statistics.map((stat, index) => (
            <div
              key={index}
              className={`glass rounded-xl p-4 text-center transition-all duration-500 hover:scale-105 border-white/10 bg-gradient-to-br ${stat.bgGradient}`}
              style={{
                animationDelay: `${index * 200}ms`
              }}
            >
              <div className={`inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r ${stat.color} mb-3 text-white`}>
                {stat.icon}
              </div>
              
              <div className="mb-2">
                <div className="flex items-center justify-center space-x-1">
                  <span className={`text-2xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                    {stat.count}
                  </span>
                  <span className={`text-xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                    {stat.suffix}
                  </span>
                </div>
              </div>
              
              <h3 className="text-sm font-bold text-white mb-1">
                {stat.title}
              </h3>
              <p className="text-gray-300 text-xs">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
