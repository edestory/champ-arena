import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote, Trophy, TrendingUp, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

interface SuccessStory {
  id: number;
  name: string;
  age: number;
  program: string;
  period: string;
  beforeImage: string;
  afterImage: string;
  story: string;
  results: string[];
  quote: string;
  category: 'transformation' | 'achievement' | 'confidence';
  icon: any;
}

const SuccessStories = () => {
  const { t } = useLanguage();
  const [currentStory, setCurrentStory] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const stories: SuccessStory[] = [
    {
      id: 1,
      name: 'Михаил',
      age: 14,
      program: 'Программа подросткового бокса',
      period: 'Тренируется с: 2023',
      beforeImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop&crop=face',
      afterImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop&crop=face',
      story: 'Михаил пришел к нам как застенчивый подросток, страдающий от травли в школе. Через последовательные тренировки и поддержку наших тренеров и товарищей по команде он развил невероятную уверенность в себе и самоуважение. Недавно он выиграл свое первое любительское соревнование и планирует участвовать на национальном уровне.',
      results: [
        'Сбросил 15 кг лишнего веса',
        'Набрал значительную мышечную массу',
        'Выиграл 3 любительских боксерских матча',
        'Резко повысил самооценку'
      ],
      quote: 'EDESTORY не просто научила меня боксу - она научила меня верить в себя.',
      category: 'confidence',
      icon: Heart
    },
    {
      id: 2,
      name: 'Елена',
      age: 34,
      program: 'Фитнес-бокс для взрослых',
      period: 'Тренируется с: 2022',
      beforeImage: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=400&fit=crop&crop=face',
      afterImage: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=400&fit=crop&crop=face',
      story: 'Как занятая мать двоих детей, Елена боролась с фитнесом и управлением стрессом. Наша программа фитнес-бокса для взрослых обеспечила идеальный выход как для физической формы, так и для снятия стресса.',
      results: [
        'Сбросила 22 кг за 18 месяцев',
        'Значительно снизила уровень стресса',
        'Улучшила общие показатели здоровья',
        'Построила длительные дружеские отношения'
      ],
      quote: 'Бокс стал моей терапией. Я сильнее физически и морально, чем когда-либо была.',
      category: 'transformation',
      icon: TrendingUp
    },
    {
      id: 3,
      name: 'Дмитрий',
      age: 16,
      program: 'Соревновательная борьба',
      period: 'Тренируется с: 2020',
      beforeImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=400&fit=crop&crop=face',
      afterImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=400&fit=crop&crop=face',
      story: 'Дмитрий присоединился к нашей программе борьбы как новичок и благодаря преданности делу и экспертному коучингу развился в соревнующегося национального уровня.',
      results: [
        'Чемпион региона 2024',
        'Бронзовый призер национального первенства 2024',
        'Получил стипендию по борьбе',
        'Является наставником для младших учеников'
      ],
      quote: 'Дисциплина, которую я изучил здесь, изменила весь мой подход к жизни.',
      category: 'achievement',
      icon: Trophy
    },
    {
      id: 4,
      name: 'Анна',
      age: 28,
      program: 'Персональные тренировки',
      period: 'Тренируется с: 2023',
      beforeImage: 'https://images.unsplash.com/photo-1542206395-9feb3edaa68d?w=300&h=400&fit=crop&crop=face',
      afterImage: 'https://images.unsplash.com/photo-1542206395-9feb3edaa68d?w=300&h=400&fit=crop&crop=face',
      story: 'Анна начала персональные тренировки после травмы, чтобы восстановить силу и уверенность в себе. Индивидуальный подход позволил ей не только восстановиться, но и стать сильнее, чем когда-либо.',
      results: [
        'Полностью восстановилась после травмы',
        'Увеличила силу на 40%',
        'Улучшила координацию и баланс',
        'Вернула уверенность в физических возможностях'
      ],
      quote: 'Персональные тренировки дали мне не только силу, но и веру в свое тело.',
      category: 'transformation',
      icon: TrendingUp
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentStory((prev) => (prev + 1) % stories.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, stories.length]);

  const nextStory = () => {
    setCurrentStory((prev) => (prev + 1) % stories.length);
    setIsAutoPlaying(false);
  };

  const prevStory = () => {
    setCurrentStory((prev) => (prev - 1 + stories.length) % stories.length);
    setIsAutoPlaying(false);
  };

  const currentData = stories[currentStory];
  const IconComponent = currentData.icon;

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'transformation':
        return 'from-green-500 to-emerald-600';
      case 'achievement':
        return 'from-yellow-500 to-orange-600';
      case 'confidence':
        return 'from-pink-500 to-red-600';
      default:
        return 'from-primary to-primary-dark';
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'transformation':
        return 'Трансформация';
      case 'achievement':
        return 'Достижение';
      case 'confidence':
        return 'Уверенность';
      default:
        return 'История';
    }
  };

  return (
    <section id="success-stories" className="py-20 bg-gradient-to-br from-accent to-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
            Истории трансформации учеников
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Реальные люди, реальные результаты
          </p>
        </div>

        {/* Story Display */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
            <div className="relative">
              {/* Category Badge */}
              <div className="absolute top-6 left-6 z-10">
                <div className={`bg-gradient-to-r ${getCategoryColor(currentData.category)} text-white px-4 py-2 rounded-full flex items-center space-x-2`}>
                  <IconComponent className="w-4 h-4" />
                  <span className="font-semibold text-sm">{getCategoryLabel(currentData.category)}</span>
                </div>
              </div>

              {/* Navigation Buttons */}
              <button
                onClick={prevStory}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 hover:bg-white shadow-lg rounded-full flex items-center justify-center transition-all duration-300"
              >
                <ChevronLeft className="w-6 h-6 text-secondary" />
              </button>

              <button
                onClick={nextStory}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 hover:bg-white shadow-lg rounded-full flex items-center justify-center transition-all duration-300"
              >
                <ChevronRight className="w-6 h-6 text-secondary" />
              </button>

              {/* Main Content */}
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Images Section */}
                <div className="relative p-8 lg:p-12 bg-gradient-to-br from-gray-50 to-gray-100">
                  <div className="grid grid-cols-2 gap-6 max-w-md mx-auto">
                    {/* Before Image */}
                    <div className="text-center">
                      <div className="relative">
                        <img 
                          src={currentData.beforeImage}
                          alt={`${currentData.name} до`}
                          className="w-full aspect-[3/4] object-cover rounded-2xl shadow-md"
                        />
                        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-gray-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                          До
                        </div>
                      </div>
                    </div>

                    {/* After Image */}
                    <div className="text-center">
                      <div className="relative">
                        <img 
                          src={currentData.afterImage}
                          alt={`${currentData.name} после`}
                          className="w-full aspect-[3/4] object-cover rounded-2xl shadow-md ring-4 ring-primary/20"
                        />
                        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold">
                          После
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Student Info */}
                  <div className="text-center mt-8">
                    <h3 className="text-2xl font-bold text-secondary mb-2">
                      {currentData.name}, {currentData.age} лет
                    </h3>
                    <p className="text-muted-foreground mb-1">{currentData.program}</p>
                    <p className="text-sm text-muted-foreground">{currentData.period}</p>
                  </div>
                </div>

                {/* Story Content */}
                <div className="p-8 lg:p-12">
                  {/* Quote Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-2xl flex items-center justify-center mb-8">
                    <Quote className="w-8 h-8 text-white" />
                  </div>

                  {/* Story */}
                  <div className="mb-8">
                    <h4 className="text-xl font-semibold text-secondary mb-4">История изменений</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {currentData.story}
                    </p>
                  </div>

                  {/* Results */}
                  <div className="mb-8">
                    <h4 className="text-xl font-semibold text-secondary mb-4">Результаты:</h4>
                    <ul className="space-y-3">
                      {currentData.results.map((result, index) => (
                        <li key={index} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="text-muted-foreground">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Quote */}
                  <div className="bg-primary/5 rounded-2xl p-6 border-l-4 border-primary">
                    <p className="text-secondary font-medium italic text-lg">
                      "{currentData.quote}"
                    </p>
                    <div className="mt-3 text-right">
                      <span className="text-sm text-muted-foreground">— {currentData.name}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Story Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {stories.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentStory(index);
                  setIsAutoPlaying(false);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentStory ? 'bg-primary w-8' : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          {/* Auto-play Control */}
          <div className="text-center mt-4">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {isAutoPlaying ? 'Остановить автопрокрутку' : 'Включить автопрокрутку'}
            </button>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-8 bg-white rounded-2xl px-8 py-6 shadow-card">
            <div>
              <div className="text-3xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">Успешных трансформаций</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div>
              <div className="text-3xl font-bold text-primary">95%</div>
              <div className="text-sm text-muted-foreground">Достигают своих целей</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div>
              <div className="text-3xl font-bold text-primary">8</div>
              <div className="text-sm text-muted-foreground">Лет изменения жизней</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold text-secondary mb-4">
            Готовы написать свою историю успеха?
          </h3>
          <p className="text-muted-foreground mb-6">
            Присоединяйтесь к сотням людей, которые изменили свою жизнь в EDESTORY
          </p>
          <Button className="bg-primary hover:bg-primary-hover text-white px-8 py-4 text-lg">
            Начать свою трансформацию
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;