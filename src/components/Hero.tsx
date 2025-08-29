import { useState, useEffect } from 'react';
import { ArrowRight, Play, Users, Trophy, Calendar, Target, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "FORGE YOUR WARRIOR SPIRIT",
      subtitle: "Professional Boxing & Wrestling Training for Champions",
      description: "Join EDESTORY Sports Academy and master the art of combat sports with world-class trainers",
      cta1: "Start Training",
      cta2: "Watch Video",
      background: "from-primary via-primary-dark to-secondary"
    },
    {
      id: 2,
      title: "BOXING MASTERY",
      subtitle: "Master The Sweet Science",
      description: "Develop precision, power, and technique with our championship boxing program",
      cta1: "Join Boxing Classes",
      cta2: "Learn More",
      background: "from-primary-dark via-primary to-primary-light"
    },
    {
      id: 3,
      title: "WRESTLING POWER",
      subtitle: "Unleash Your Grappling Power",
      description: "Build strength, endurance, and tactical skills with our elite wrestling program",
      cta1: "Start Wrestling Training",
      cta2: "View Program",
      background: "from-secondary via-primary-dark to-primary"
    }
  ];

  const stats = [
    {
      icon: Users,
      number: "500+",
      label: "Students Trained",
      color: "text-primary"
    },
    {
      icon: Trophy,
      number: "15",
      label: "Professional Champions",
      color: "text-primary-light"
    },
    {
      icon: Calendar,
      number: "8",
      label: "Years of Excellence",
      color: "text-white"
    },
    {
      icon: Target,
      number: "2",
      label: "Olympic Medalists on Staff",
      color: "text-primary-light"
    }
  ];

  const quickInfoCards = [
    {
      icon: Trophy,
      title: "Expert Trainers",
      description: "World-class coaches with championship experience",
      color: "from-primary to-primary-dark"
    },
    {
      icon: Zap,
      title: "Modern Facilities",
      description: "Professional ring, mats, and equipment",
      color: "from-primary-dark to-secondary"
    },
    {
      icon: Calendar,
      title: "Flexible Schedule",
      description: "Morning, afternoon & evening classes available",
      color: "from-secondary to-primary"
    },
    {
      icon: Target,
      title: "Proven Results",
      description: "95% of students achieve their fitness goals",
      color: "from-primary to-primary-light"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32">
        {/* Background with Dynamic Gradient */}
        <div className="absolute inset-0 z-0">
          <div 
            className={`w-full h-full bg-gradient-to-br transition-all duration-1000 ${slides[currentSlide].background}`}
          />
          <div className="absolute inset-0 bg-black/20"></div>
          
          {/* Animated Combat Elements */}
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/5 rounded-full animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-white/10 rounded-full animate-bounce delay-700"></div>
          <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-primary/20 rounded-full animate-pulse delay-1000"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Main Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in-up">
                {slides[currentSlide].title.split(' ').slice(0, 2).join(' ')}
                <span className="block text-primary-light">
                  {slides[currentSlide].title.split(' ').slice(2).join(' ')}
                </span>
              </h1>
              
              <h2 className="text-2xl md:text-3xl text-white/90 mb-4 animate-fade-in-up font-semibold" style={{animationDelay: '0.2s'}}>
                {slides[currentSlide].subtitle}
              </h2>

              <p className="text-lg md:text-xl text-white/80 mb-8 animate-fade-in-up max-w-2xl" style={{animationDelay: '0.3s'}}>
                {slides[currentSlide].description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                <Button 
                  onClick={() => scrollToSection('contact')}
                  className="bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-xl font-semibold shadow-red hover:shadow-lg transition-all text-lg"
                >
                  {slides[currentSlide].cta1}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  onClick={() => scrollToSection('programs')}
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-xl font-semibold transition-all backdrop-blur-sm text-lg"
                >
                  <Play className="mr-2 w-5 h-5" />
                  {slides[currentSlide].cta2}
                </Button>
              </div>
            </div>

            {/* Right Column - Stats */}
            <div className="grid grid-cols-2 gap-6 animate-fade-in-right">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div 
                    key={index}
                    className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105"
                    style={{animationDelay: `${0.5 + index * 0.1}s`}}
                  >
                    <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center">
                      <IconComponent className={`w-7 h-7 ${stat.color}`} />
                    </div>
                    <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                    <div className="text-white/80 text-sm font-medium">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Slide Navigation */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 right-8 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Quick Info Cards */}
      <section className="py-16 bg-accent">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickInfoCards.map((card, index) => {
              const IconComponent = card.icon;
              return (
                <div
                  key={index}
                  className="group bg-white rounded-2xl p-8 text-center shadow-card hover:shadow-red hover:-translate-y-2 transition-all duration-300 cursor-pointer"
                >
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${card.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {card.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;