
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import MainContent from '@/components/MainContent';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <MainContent />
      <Footer />
    </div>
  );
};

export default Index;
