
import { ExternalLink, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ResumeTemplateProps {
  title: string;
  description: string;
  imageUrl: string;
  previewUrl: string;
  downloadUrl: string;
}

const ResumeTemplate = ({ title, description, imageUrl, previewUrl, downloadUrl }: ResumeTemplateProps) => {
  return (
    <div className="glass rounded-2xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-2xl border-white/10 hover:border-white/30">
      <div className="mb-4">
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-64 object-cover rounded-lg border border-white/10"
        />
      </div>
      
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-300 mb-4 text-sm">{description}</p>
      
      <div className="flex space-x-3">
        <Button 
          size="sm" 
          className="flex-1 bg-gradient-to-r from-neon-purple to-neon-blue hover:from-neon-purple/80 hover:to-neon-blue/80 text-white"
          onClick={() => window.open(previewUrl, '_blank')}
        >
          <ExternalLink className="w-4 h-4 mr-2" />
          Preview
        </Button>
        <Button 
          variant="outline" 
          size="sm" 
          className="flex-1 border-white/20 text-white hover:bg-white/10"
          onClick={() => window.open(downloadUrl, '_blank')}
        >
          <Download className="w-4 h-4 mr-2" />
          Download
        </Button>
      </div>
    </div>
  );
};

export default ResumeTemplate;
