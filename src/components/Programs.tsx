import { ArrowRight, Clock, Users, Star, Trophy, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const Programs = () => {
  const { t } = useLanguage();

  const programs = [
    {
      id: 1,
      title: t('programs.boxing.title'),
      image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=600&h=400&fit=crop",
      age: t('programs.boxing.age'),
      description: t('programs.boxing.desc'),
      price: t('programs.boxing.price'),
      features: [
        t('programs.boxing.features.1'),
        t('programs.boxing.features.2'), 
        t('programs.boxing.features.3')
      ],
      cta: t('programs.boxing.cta'),
      popular: false
    },
    {
      id: 2,
      title: t('programs.wrestling.title'),
      image: "https://images.unsplash.com/photo-1583473848882-f9a5c8b8c4b0?w=600&h=400&fit=crop",
      age: t('programs.wrestling.age'),
      description: t('programs.wrestling.desc'),
      price: t('programs.wrestling.price'),
      features: [
        t('programs.wrestling.features.1'),
        t('programs.wrestling.features.2'),
        t('programs.wrestling.features.3')
      ],
      cta: t('programs.wrestling.cta'),
      popular: false
    },
    {
      id: 3,
      title: t('programs.kids.title'),
      image: "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=600&h=400&fit=crop",
      age: t('programs.kids.age'),
      description: t('programs.kids.desc'),
      price: t('programs.kids.price'),
      features: [
        t('programs.kids.features.1'),
        t('programs.kids.features.2'),
        t('programs.kids.features.3')
      ],
      cta: t('programs.kids.cta'),
      popular: true
    },
    {
      id: 4,
      title: t('programs.adult.title'),
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      age: t('programs.adult.age'),
      description: t('programs.adult.desc'),
      price: t('programs.adult.price'),
      features: [
        t('programs.adult.features.1'),
        t('programs.adult.features.2'),
        t('programs.adult.features.3')
      ],
      cta: t('programs.adult.cta'),
      popular: false
    },
    {
      id: 5,
      title: t('programs.competition.title'),
      image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&h=400&fit=crop",
      age: t('programs.competition.age'),
      description: t('programs.competition.desc'),
      price: t('programs.competition.price'),
      features: [
        t('programs.competition.features.1'),
        t('programs.competition.features.2'),
        t('programs.competition.features.3')
      ],
      cta: t('programs.competition.cta'),
      popular: false
    },
    {
      id: 6,
      title: t('programs.personal.title'),
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      age: t('programs.personal.age'),
      description: t('programs.personal.desc'),
      price: t('programs.personal.price'),
      features: [
        t('programs.personal.features.1'),
        t('programs.personal.features.2'),
        t('programs.personal.features.3')
      ],
      cta: t('programs.personal.cta'),
      popular: false
    }
  ];

  return (
    <section id="programs" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
            {t('programs.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('programs.subtitle')}
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program) => (
            <div
              key={program.id}
              className={`group bg-white rounded-2xl shadow-card hover:shadow-red hover:-translate-y-2 transition-all duration-300 overflow-hidden ${
                program.popular ? 'ring-2 ring-primary' : ''
              }`}
            >
              {/* Popular Badge */}
              {program.popular && (
                <div className="bg-primary text-white text-sm font-semibold px-4 py-2 text-center">
                  САМОЕ ПОПУЛЯРНОЕ
                </div>
              )}

              {/* Image */}
              <div className="aspect-[3/2] overflow-hidden">
                <img 
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Age & Title */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {program.age}
                  </span>
                  <div className="text-2xl font-bold text-primary">
                    {program.price.split(' ')[1]}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors">
                  {program.title}
                </h3>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {program.description}
                </p>

                <div className="text-sm font-medium text-secondary mb-4">
                  {program.price}
                </div>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {program.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button 
                  className={`w-full font-semibold transition-all ${
                    program.popular 
                      ? 'bg-primary hover:bg-primary-hover text-white shadow-red'
                      : 'bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white'
                  }`}
                >
                  {program.cta}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            {t('programs.bottom.text')}
          </p>
          <Button className="bg-primary hover:bg-primary-hover text-white px-8 py-3 font-semibold shadow-red">
            {t('programs.bottom.cta')}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Programs;