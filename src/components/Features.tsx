import { Award, Target, Users, Zap } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Award,
      title: "Мастера спорта",
      description: "Тренеры с многолетним опытом работы и высокими достижениями в спорте",
      color: "text-primary"
    },
    {
      icon: Target,
      title: "Проверенная методика",
      description: "Авторская программа подготовки. От новичка до спортивного разряда за 2 года",
      color: "text-secondary"
    },
    {
      icon: Users,
      title: "Индивидуальный подход",
      description: "Малые группы до 8 человек, персональные планы тренировок для каждого",
      color: "text-accent"
    },
    {
      icon: Zap,
      title: "Современная база",
      description: "Профессиональное оборудование, просторные залы, комфортные условия",
      color: "text-primary"
    }
  ];

  return (
    <section id="about" className="py-20 bg-surface">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Почему выбирают <span className="text-gradient">нашу школу</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Мы создаем условия для всестороннего развития юных спортсменов, 
            помогая им достигать высоких результатов в спорте и жизни
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-card transition-smooth card-hover animate-fade-in-up"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className={`w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-smooth`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-smooth">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Stats Section */}
        <div className="mt-20 bg-white rounded-3xl p-8 md:p-12 shadow-card">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-smooth">
                95%
              </div>
              <div className="text-muted-foreground">
                Родителей рекомендуют нашу школу друзьям
              </div>
            </div>
            
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold text-secondary mb-2 group-hover:scale-110 transition-smooth">
                24/7
              </div>
              <div className="text-muted-foreground">
                Поддержка и консультации для родителей
              </div>
            </div>
            
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2 group-hover:scale-110 transition-smooth">
                100%
              </div>
              <div className="text-muted-foreground">
                Безопасность на всех тренировках
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;