import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Programs from '@/components/Programs';
import WhyChooseUs from '@/components/WhyChooseUs';
import Features from '@/components/Features';
import Pricing from '@/components/Pricing';
import Facilities from '@/components/Facilities';
import Coaches from '@/components/Coaches';
import Gallery from '@/components/Gallery';
import Schedule from '@/components/Schedule';
import Testimonials from '@/components/Testimonials';
import SuccessStories from '@/components/SuccessStories';
import Booking from '@/components/Booking';
import Blog from '@/components/Blog';
import CTASection from '@/components/CTASection';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FloatingActions from '@/components/FloatingActions';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Programs />
        <WhyChooseUs />
        <Features />
        <Coaches />
        <Pricing />
        <Facilities />
        <Schedule />
        <Gallery />
        <SuccessStories />
        <Testimonials />
        <Booking />
        <Blog />
        <CTASection />
        <Contact />
      </main>
      <FloatingActions />
      <Footer />
    </div>
  );
};

export default Index;
