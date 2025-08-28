import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Programs from '@/components/Programs';
import Coaches from '@/components/Coaches';
import Schedule from '@/components/Schedule';
import Pricing from '@/components/Pricing';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Features />
        <Programs />
        <Coaches />
        <Schedule />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
