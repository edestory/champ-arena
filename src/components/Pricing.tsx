import { Check, Star, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Pricing = () => {
  const plans = [
    {
      name: "Стартовый",
      subtitle: "Для новичков",
      price: "6000",
      period: "месяц",
      sessions: "8 занятий",
      frequency: "2 раза в неделю",
      popular: false,
      features: [
        "Пробное занятие бесплатно",
        "Медицинский контроль",
        "Базовое оборудование",
        "Группа до 8 человек",
        "Консультации тренера",
        "Родительские чаты"
      ],
      buttonText: "Начать заниматься",
      color: "border-border"
    },
    {
      name: "Стандарт",
      subtitle: "Популярный выбор",
      price: "8500",
      period: "месяц",
      sessions: "12 занятий",
      frequency: "3 раза в неделю",
      popular: true,
      savings: "Экономия 500₽",
      features: [
        "Все из тарифа Стартовый",
        "Индивидуальные рекомендации",
        "Участие в соревнованиях",
        "Дополнительная ОФП",
        "Анализ прогресса",
        "Спортивная экипировка"
      ],
      buttonText: "Выбрать тариф",
      color: "border-primary"
    },
    {
      name: "Премиум",
      subtitle: "Максимальный результат",
      price: "10500",
      period: "месяц",
      sessions: "16 занятий",
      frequency: "4 раза в неделю",
      popular: false,
      savings: "Экономия 1500₽",
      features: [
        "Все из тарифа Стандарт",
        "Персональный план развития",
        "Индивидуальные тренировки",
        "Спортивные сборы",
        "Видеоанализ техники",
        "Консультации спортивного психолога"
      ],
      buttonText: "Стать чемпионом",
      color: "border-accent"
    }
  ];

  return (
    <section className="py-20 bg-surface">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Выберите свой <span className="text-gradient">тариф</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Гибкие тарифные планы для всех уровней подготовки. 
            Первое занятие всегда бесплатно!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative bg-white rounded-3xl p-8 shadow-md hover:shadow-card transition-smooth card-hover animate-fade-in-up ${
                plan.popular ? 'ring-2 ring-primary scale-105' : ''
              }`}
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="gradient-primary text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    Популярный
                  </div>
                </div>
              )}

              {/* Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                <p className="text-muted-foreground mb-6">{plan.subtitle}</p>
                
                <div className="mb-4">
                  <span className="text-4xl md:text-5xl font-bold text-foreground">{plan.price}₽</span>
                  <span className="text-muted-foreground">/{plan.period}</span>
                </div>
                
                <div className="space-y-1 text-sm text-muted-foreground">
                  <p className="font-semibold">{plan.sessions}</p>
                  <p>{plan.frequency}</p>
                  {plan.savings && (
                    <p className="text-secondary font-semibold">{plan.savings}</p>
                  )}
                </div>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-muted-foreground text-sm leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Button */}
              <Button 
                className={`w-full transition-smooth ${
                  plan.popular 
                    ? 'gradient-primary text-white hover:opacity-90' 
                    : 'border-2 border-primary text-primary hover:bg-primary hover:text-white'
                }`}
                variant={plan.popular ? 'default' : 'outline'}
              >
                {plan.buttonText}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>

              {/* Additional Info */}
              <div className="mt-6 pt-6 border-t border-border text-center">
                <p className="text-xs text-muted-foreground">
                  Оплата ежемесячно • Отмена в любое время
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Information */}
        <div className="mt-16 bg-white rounded-3xl p-8 md:p-12 shadow-card">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Что входит во все тарифы
            </h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Профессиональное оборудование",
                description: "Современные залы и спортивный инвентарь"
              },
              {
                title: "Медицинское сопровождение",
                description: "Контроль состояния здоровья на каждой тренировке"
              },
              {
                title: "Страховка",
                description: "Все занятия проходят под страховым покрытием"
              },
              {
                title: "Родительский контроль",
                description: "Регулярные отчеты о прогрессе ребенка"
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;