import { Phone, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const CTASection = () => {
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary-dark to-secondary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border-4 border-white rounded-full"></div>
        <div className="absolute top-1/4 right-20 w-24 h-24 border-4 border-white rotate-45"></div>
        <div className="absolute bottom-20 left-1/4 w-20 h-20 border-4 border-white"></div>
        <div className="absolute bottom-10 right-10 w-28 h-28 border-4 border-white rounded-full"></div>
        
        {/* Boxing gloves pattern */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="text-9xl text-white opacity-5">🥊</div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('cta.title')}
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            {t('cta.subtitle')}
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">500+</div>
            <div className="text-white/80 font-medium">Студентов обучено</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">85%</div>
            <div className="text-white/80 font-medium">Уровень успеха</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">15</div>
            <div className="text-white/80 font-medium">Тренеров-чемпионов</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">8</div>
            <div className="text-white/80 font-medium">Лет опыта</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button 
            onClick={() => scrollToSection('contact')}
            className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            {t('cta.btn1')}
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          
          <Button 
            className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 backdrop-blur-sm"
            variant="outline"
          >
            <Phone className="mr-2 w-5 h-5" />
            {t('cta.btn2')}
          </Button>
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-white/80 text-lg mb-4">
            {t('cta.info')}
          </p>
          <p className="text-white/60">
            {t('cta.note')}
          </p>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-4 h-4 bg-white/20 rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-32 w-6 h-6 bg-white/15 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute bottom-32 left-16 w-3 h-3 bg-white/25 rounded-full animate-pulse delay-500"></div>
      <div className="absolute bottom-20 right-20 w-5 h-5 bg-white/20 rounded-full animate-pulse delay-1500"></div>
    </section>
  );
};

export default CTASection;