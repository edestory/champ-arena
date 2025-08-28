import { ArrowRight, Clock, Users, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import footballImage from '@/assets/football-kids.jpg';
import basketballImage from '@/assets/basketball-kids.jpg';
import tennisImage from '@/assets/tennis-kids.jpg';

const Programs = () => {
  const programs = [
    {
      sport: "Футбол",
      image: footballImage,
      groups: [
        { name: "Малыши (4-6 лет)", price: "6000₽/мес", schedule: "2 раза в неделю" },
        { name: "Детская группа (7-10 лет)", price: "8000₽/мес", schedule: "3 раза в неделю" },
        { name: "Подростки (11-15 лет)", price: "9500₽/мес", schedule: "3 раза в неделю" }
      ],
      description: "Развитие координации, техники владения мячом, тактического мышления",
      features: ["Профессиональное поле", "Современные мячи", "Участие в турнирах"]
    },
    {
      sport: "Баскетбол",
      image: basketballImage,
      groups: [
        { name: "Начинающие (6-9 лет)", price: "7500₽/мес", schedule: "2 раза в неделю" },
        { name: "Средняя группа (10-14 лет)", price: "9000₽/мес", schedule: "3 раза в неделю" },
        { name: "Продвинутые (15-18 лет)", price: "10500₽/мес", schedule: "4 раза в неделю" }
      ],
      description: "Развитие ловкости, координации, командной игры и лидерских качеств",
      features: ["Полноразмерная площадка", "Профессиональные кольца", "Командные игры"]
    },
    {
      sport: "Теннис",
      image: tennisImage,
      groups: [
        { name: "Мини-теннис (5-8 лет)", price: "8500₽/мес", schedule: "2 раза в неделю" },
        { name: "Юниоры (9-13 лет)", price: "10000₽/мес", schedule: "3 раза в неделю" },
        { name: "Турнирная группа (14-18 лет)", price: "12000₽/мес", schedule: "4 раза в неделю" }
      ],
      description: "Техника ударов, тактика игры, развитие реакции и концентрации",
      features: ["Крытые корты", "Профессиональные ракетки", "Индивидуальные занятия"]
    }
  ];

  const additionalServices = [
    { name: "Персональные тренировки", price: "2500₽/занятие", duration: "60 минут" },
    { name: "Общефизическая подготовка", price: "6000₽/мес", duration: "8 занятий" },
    { name: "Спортивные сборы", price: "15000₽/неделя", duration: "7 дней" }
  ];

  return (
    <section id="programs" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Программы <span className="text-gradient">тренировок</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Выберите подходящую программу для вашего ребенка. 
            Все группы формируются по возрасту и уровню подготовки
          </p>
        </div>

        {/* Main Programs */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {programs.map((program, index) => (
            <div 
              key={index}
              className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-card transition-smooth card-hover animate-fade-in-up"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={program.image} 
                  alt={`${program.sport} тренировки`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-2xl font-bold text-white">{program.sport}</h3>
                </div>
              </div>

              <div className="p-8">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {program.description}
                </p>

                {/* Groups and Prices */}
                <div className="space-y-4 mb-6">
                  {program.groups.map((group, groupIndex) => (
                    <div key={groupIndex} className="flex justify-between items-center p-4 bg-surface rounded-xl">
                      <div>
                        <div className="font-semibold text-foreground">{group.name}</div>
                        <div className="text-sm text-muted-foreground flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          {group.schedule}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-lg text-primary">{group.price}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-3">Что включено:</h4>
                  <ul className="space-y-2">
                    {program.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-muted-foreground">
                        <Star className="w-4 h-4 text-accent" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button className="w-full gradient-primary text-white hover:opacity-90 transition-smooth">
                  Записаться в группу
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Services */}
        <div className="bg-surface rounded-3xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-8">
            Дополнительные услуги
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-6 text-center hover:shadow-card transition-smooth card-hover"
              >
                <h4 className="font-bold text-lg text-foreground mb-2">{service.name}</h4>
                <div className="text-2xl font-bold text-primary mb-2">{service.price}</div>
                <div className="text-muted-foreground text-sm">{service.duration}</div>
                <Button 
                  variant="outline" 
                  className="mt-4 w-full border-primary text-primary hover:bg-primary hover:text-white transition-smooth"
                >
                  Узнать подробнее
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;