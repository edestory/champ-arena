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
import SEOHead from '@/components/SEOHead';
import { generateFAQSchema } from '@/lib/seo';

const Index = () => {
  const faqData = [
    {
      question: 'Подходят ли тренировки для начинающих?',
      answer: 'Да, у нас есть специальные программы для новичков с индивидуальным подходом. Наши тренеры помогут освоить основы техники безопасно и эффективно.'
    },
    {
      question: 'Какое снаряжение нужно для первой тренировки?',
      answer: 'Для первого занятия достаточно спортивной одежды и обуви. Все необходимое снаряжение предоставляется академией бесплатно.'
    },
    {
      question: 'Есть ли программы для детей?',
      answer: 'Да, мы проводим тренировки для детей от 6 лет. Детские программы включают изучение основ самообороны, развитие координации и дисциплины.'
    },
    {
      question: 'Как записаться на пробное занятие?',
      answer: 'Можно записаться через сайт, по телефону +7 (495) 123-45-67 или приехать лично в академию. Первое занятие бесплатное.'
    }
  ];

  return (
    <div className="min-h-screen">
      <SEOHead
        meta={{
          title: 'EDESTORY Спортивная Академия - Боевые виды спорта в Москве',
          description: 'Профессиональные тренировки по боксу и борьбе в Москве. Опытные тренеры, современные залы, результативные программы. Запишитесь на бесплатное занятие!',
          keywords: 'бокс тренировки, академия борьбы, боевые виды спорта, единоборства, профессиональные тренировки, спортивная академия, занятия боксом, занятия борьбой, Москва'
        }}
        og={{
          title: 'EDESTORY Спортивная Академия - Боевые виды спорта',
          description: 'Профессиональные тренировки по боксу и борьбе с опытными тренерами в современных залах',
          type: 'website'
        }}
        twitter={{
          title: 'EDESTORY - Боевые виды спорта',
          description: 'Тренировки мирового класса в Москве'
        }}
        structuredData={[
          generateFAQSchema(faqData)
        ]}
      />
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
