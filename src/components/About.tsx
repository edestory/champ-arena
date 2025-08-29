import { Award, Users, Target, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  const keyPoints = [
    {
      icon: Award,
      title: t('about.points.coaching'),
      description: t('about.points.coaching.desc')
    },
    {
      icon: TrendingUp,
      title: t('about.points.results'), 
      description: t('about.points.results.desc')
    },
    {
      icon: Target,
      title: t('about.points.focus'),
      description: t('about.points.focus.desc')
    },
    {
      icon: Users,
      title: t('about.points.development'),
      description: t('about.points.development.desc')
    }
  ];

  return (
    <section id="about" className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
            {t('about.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('about.subtitle')}
          </p>
        </div>

        {/* Content Split */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className="relative">
            <div className="aspect-[4/3] bg-gradient-to-br from-primary to-primary-dark rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=800&h=600&fit=crop"
                alt="Modern training facility with coach and students"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <div className="text-3xl font-bold">2016</div>
                <div className="text-sm">{t('common.established')}</div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <h3 className="text-3xl font-bold text-secondary mb-6">
              {t('about.hero.title')}
            </h3>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {t('about.description')}
            </p>

            {/* Key Points */}
            <div className="space-y-6 mb-8">
              {keyPoints.map((point, index) => {
                const IconComponent = point.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-dark rounded-xl flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-secondary mb-1">
                        {point.title}
                      </h4>
                      <p className="text-muted-foreground">
                        {point.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <Button className="bg-primary hover:bg-primary-hover text-white px-8 py-3 font-semibold shadow-red">
              {t('about.cta')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;