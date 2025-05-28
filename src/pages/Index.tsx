
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import MainContent from '@/components/MainContent';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <TooltipProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <Hero />
        <MainContent />
        <Footer />
      </div>
    </TooltipProvider>
  );
};

export default Index;
