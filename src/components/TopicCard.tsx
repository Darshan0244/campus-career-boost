
import { ExternalLink, Clock, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

interface TopicCardProps {
  title: string;
  description: string;
  topics: string[];
  resources: { name: string; url: string; type: 'video' | 'article' | 'practice' }[];
  color: string;
  icon: React.ReactNode;
  topicsLimit?: number;
}

const TopicCard = ({ title, description, topics, resources, color, icon, topicsLimit = 4 }: TopicCardProps) => {
  const [showAllResources, setShowAllResources] = useState(false);
  const [showAllTopics, setShowAllTopics] = useState(false);
  
  const colorClasses = {
    purple: 'border-neon-purple/20',
    blue: 'border-neon-blue/20',
    green: 'border-neon-green/20',
    orange: 'border-neon-orange/20',
    pink: 'border-neon-pink/20',
  };

  const displayedResources = showAllResources ? resources : resources.slice(0, 3);
  const displayedTopics = showAllTopics ? topics : topics.slice(0, topicsLimit);

  return (
    <div className={`glass rounded-2xl p-8 border ${colorClasses[color as keyof typeof colorClasses]}`}>
      <div className="flex items-center space-x-3 mb-4">
        <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
          {icon}
        </div>
        <h3 className="text-2xl font-bold text-white">{title}</h3>
      </div>
      
      <p className="text-gray-300 mb-6">{description}</p>
      
      <div className="mb-6">
        <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
          <BookOpen className="w-5 h-5 mr-2" />
          Key Topics
        </h4>
        <div className="flex flex-wrap gap-2">
          {displayedTopics.map((topic, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300 border border-white/20"
            >
              {topic}
            </span>
          ))}
        </div>
        {topics.length > topicsLimit && (
          <Button 
            variant="outline" 
            className="w-full mt-3 border-white/20 text-white hover:bg-white/10"
            onClick={() => setShowAllTopics(!showAllTopics)}
          >
            {showAllTopics ? 'Show Less Topics' : `View All Topics (${topics.length})`}
          </Button>
        )}
      </div>
      
      <div className="space-y-3">
        <h4 className="text-lg font-semibold text-white flex items-center">
          <Clock className="w-5 h-5 mr-2" />
          Resources
        </h4>
        {displayedResources.map((resource, index) => (
          <a
            key={index}
            href={resource.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 glass-light rounded-lg transition-colors duration-200 group"
          >
            <div className="flex items-center justify-between">
              <span className="text-gray-300 group-hover:text-white">{resource.name}</span>
              <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-white" />
            </div>
            <span className="text-xs text-gray-500 capitalize">{resource.type}</span>
          </a>
        ))}
        {resources.length > 3 && (
          <Button 
            variant="outline" 
            className="w-full border-white/20 text-white hover:bg-white/10"
            onClick={() => setShowAllResources(!showAllResources)}
          >
            {showAllResources ? 'Show Less' : `View All Resources (${resources.length})`}
          </Button>
        )}
      </div>
    </div>
  );
};

export default TopicCard;
