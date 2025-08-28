import { useState } from 'react';
import { ChevronLeft, ChevronRight, Award, Users, Calendar } from 'lucide-react';
// Временные изображения для демонстрации
const aleksandrImage = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face";
const mariaImage = "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=500&fit=crop&crop=face";
const dmitriyImage = "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop&crop=face";

const Coaches = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const coaches = [
    {
      name: "Александр Петров",
      sport: "Футбол",
      image: aleksandrImage,
      title: "Главный тренер по футболу",
      experience: "15 лет тренерского стажа",
      achievements: "КМС по футболу, воспитал 12 призеров региональных соревнований",
      specialization: "Техника игры, тактическая подготовка",
      students: "45+ учеников"
    },
    {
      name: "Мария Сидорова",
      sport: "Теннис",
      image: mariaImage,
      title: "Тренер по теннису",
      experience: "10 лет в большом спорте",
      achievements: "Мастер спорта, экс-игрок сборной области",
      specialization: "Техника ударов, психологическая подготовка",
      students: "30+ учеников"
    },
    {
      name: "Дмитрий Козлов",
      sport: "Баскетбол", 
      image: dmitriyImage,
      title: "Тренер по баскетболу",
      experience: "12 лет профессиональной карьеры",
      achievements: "Экс-игрок команды мастеров, рост 198 см",
      specialization: "Развитие координации, командная игра",
      students: "35+ учеников"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % coaches.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + coaches.length) % coaches.length);
  };

  return (
    <section id="coaches" className="py-20 bg-surface">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Наши <span className="text-gradient">тренеры</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Профессионалы своего дела с многолетним опытом работы и высокими достижениями в спорте
          </p>
        </div>

        {/* Desktop View - All Cards */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8">
          {coaches.map((coach, index) => (
            <CoachCard key={index} coach={coach} index={index} />
          ))}
        </div>

        {/* Mobile/Tablet View - Slider */}
        <div className="lg:hidden relative">
          <div className="overflow-hidden rounded-3xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {coaches.map((coach, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <CoachCard coach={coach} index={index} />
                </div>
              ))}
            </div>
          </div>

          {/* Slider Controls */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-primary hover:text-white transition-smooth"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-primary hover:text-white transition-smooth"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {coaches.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-smooth ${
                  index === currentSlide ? 'bg-primary' : 'bg-muted-foreground/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const CoachCard = ({ coach, index }: { coach: any; index: number }) => (
  <div 
    className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-card transition-smooth card-hover animate-fade-in-up"
    style={{animationDelay: `${index * 0.1}s`}}
  >
    {/* Image */}
    <div className="relative h-80 overflow-hidden">
      <img 
        src={coach.image} 
        alt={coach.name}
        className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
      <div className="absolute bottom-6 left-6 text-white">
        <h3 className="text-2xl font-bold mb-1">{coach.name}</h3>
        <p className="text-accent font-semibold">{coach.sport}</p>
      </div>
    </div>

    <div className="p-8">
      <div className="mb-6">
        <h4 className="font-bold text-lg text-foreground mb-2">{coach.title}</h4>
        <p className="text-muted-foreground mb-4">{coach.achievements}</p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          <strong>Специализация:</strong> {coach.specialization}
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
        <div className="text-center">
          <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-primary/10 flex items-center justify-center">
            <Award className="w-5 h-5 text-primary" />
          </div>
          <div className="text-sm text-muted-foreground">Опыт</div>
          <div className="font-semibold text-foreground text-sm">{coach.experience.split(' ')[0]} лет</div>
        </div>

        <div className="text-center">
          <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-secondary/10 flex items-center justify-center">
            <Users className="w-5 h-5 text-secondary" />
          </div>
          <div className="text-sm text-muted-foreground">Учеников</div>
          <div className="font-semibold text-foreground text-sm">{coach.students}</div>
        </div>

        <div className="text-center">
          <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-accent/10 flex items-center justify-center">
            <Calendar className="w-5 h-5 text-accent" />
          </div>
          <div className="text-sm text-muted-foreground">Занятий</div>
          <div className="font-semibold text-foreground text-sm">Ежедневно</div>
        </div>
      </div>
    </div>
  </div>
);

export default Coaches;