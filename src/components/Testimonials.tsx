import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { t } = useLanguage();

  const testimonials = [
    {
      id: 1,
      name: "Александр",
      age: 16,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      text: t('testimonials.alexander.text'),
      achievement: t('testimonials.alexander.achievement'),
      rating: 5,
      program: t('testimonials.alexander.program')
    },
    {
      id: 2,
      name: "Мария",
      age: 14,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      text: t('testimonials.maria.text'),
      achievement: t('testimonials.maria.achievement'),
      rating: 5,
      program: t('testimonials.maria.program')
    },
    {
      id: 3,
      name: "Дмитрий",
      age: 28, 
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      text: t('testimonials.dmitry.text'),
      achievement: t('testimonials.dmitry.achievement'),
      rating: 5,
      program: t('testimonials.dmitry.program')
    },
    {
      id: 4,
      name: "Елена",
      age: 12,
      image: "https://images.unsplash.com/photo-1542206395-9feb3edaa68d?w=150&h=150&fit=crop&crop=face",
      text: t('testimonials.elena.text'),
      achievement: t('testimonials.elena.achievement'),
      rating: 5,
      program: t('testimonials.elena.program')
    },
    {
      id: 5,
      name: "Виктор",
      age: 22,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      text: t('testimonials.viktor.text'),
      achievement: t('testimonials.viktor.achievement'),
      rating: 5,
      program: t('testimonials.viktor.program')
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const getVisibleTestimonials = () => {
    const result = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentSlide + i) % testimonials.length;
      result.push(testimonials[index]);
    }
    return result;
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-primary/5 to-primary-dark/5">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
            {t('testimonials.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </div>

        {/* Testimonials Slider */}
        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-8 px-16">
            {getVisibleTestimonials().map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${currentSlide}`}
                className="bg-white rounded-2xl p-8 shadow-card hover:shadow-red transition-all duration-300 hover:-translate-y-1"
                style={{ 
                  opacity: index === 1 ? 1 : 0.7,
                  transform: index === 1 ? 'scale(1.05)' : 'scale(1)'
                }}
              >
                {/* Quote Icon */}
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center mb-6">
                  <Quote className="w-6 h-6 text-white" />
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current text-yellow-400" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>

                {/* Achievement Badge */}
                <div className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6 inline-block">
                  {testimonial.achievement}
                </div>

                {/* Student Info */}
                <div className="flex items-center">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-secondary">
                      {testimonial.name}, {testimonial.age}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.program}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-primary' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-8 bg-white rounded-2xl px-8 py-6 shadow-card">
            <div>
              <div className="text-3xl font-bold text-primary">4.9/5</div>
              <div className="text-sm text-muted-foreground">{t('testimonials.stats.rating')}</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div>
              <div className="text-3xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">{t('testimonials.stats.students')}</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div>
              <div className="text-3xl font-bold text-primary">98%</div>
              <div className="text-sm text-muted-foreground">{t('testimonials.stats.recommend')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;