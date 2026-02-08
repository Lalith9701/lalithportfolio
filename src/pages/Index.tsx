import CustomCursor from '@/components/CustomCursor';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TechMarquee from '@/components/TechMarquee';
import BentoProjects from '@/components/BentoProjects';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <TechMarquee />
        <BentoProjects />
        <About />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
