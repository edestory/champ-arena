import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'ru' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  ru: {
    // Header
    'header.contact.email': 'info@edestory.com',
    'header.contact.phone': '+7 (495) 123-45-67',
    'header.follow': 'Подписывайтесь:',
    'header.academy': 'СПОРТИВНАЯ АКАДЕМИЯ',
    'header.nav.home': 'ГЛАВНАЯ',
    'header.nav.programs': 'ПРОГРАММЫ',
    'header.nav.coaches': 'ТРЕНЕРЫ',
    'header.nav.schedule': 'РАСПИСАНИЕ',
    'header.nav.shop': 'МАГАЗИН',
    'header.nav.gallery': 'ГАЛЕРЕЯ',
    'header.nav.contact': 'КОНТАКТЫ',
    'header.cta': 'Пробная тренировка',
    'header.mobile.cta': 'Начать бесплатную тренировку',

    // Dropdown menus
    'dropdown.programs.boxing': 'Тренировки по боксу',
    'dropdown.programs.wrestling': 'Занятия борьбой',
    'dropdown.programs.kids': 'Детские программы (6-12)',
    'dropdown.programs.teens': 'Подростковые программы (13-17)',
    'dropdown.programs.adults': 'Взрослые программы (18+)',
    'dropdown.coaches.team': 'Наша команда',
    'dropdown.coaches.head': 'Главный тренер',
    'dropdown.coaches.trainers': 'Специализированные тренеры',
    'dropdown.schedule.timetable': 'Расписание занятий',
    'dropdown.schedule.personal': 'Персональные тренировки',
    'dropdown.schedule.groups': 'Групповые занятия',
    'dropdown.shop.boxing': 'Боксерское снаряжение',
    'dropdown.shop.wrestling': 'Борцовское снаряжение',
    'dropdown.shop.apparel': 'Одежда EDESTORY',
    'dropdown.shop.accessories': 'Тренировочные аксессуары',
    'dropdown.shop.nutrition': 'Питание и добавки',

    // Hero
    'hero.title1': 'СОЗДАЙ ДУХ',
    'hero.title2': 'ВОИНА',
    'hero.subtitle': 'Профессиональные тренировки по боксу и борьбе для чемпионов',
    'hero.description': 'Присоединяйся к EDESTORY Sports Academy и освой искусство боевых видов спорта с тренерами мирового класса',
    'hero.cta1': 'Начать тренировки',
    'hero.cta2': 'Смотреть видео',
    'hero.slide2.title': 'МАСТЕРСТВО БОКСА',
    'hero.slide2.subtitle': 'Освой благородное искусство',
    'hero.slide2.description': 'Развивай точность, силу и технику с нашей чемпионской программой бокса',
    'hero.slide2.cta1': 'Записаться на бокс',
    'hero.slide3.title': 'СИЛА БОРЬБЫ',
    'hero.slide3.subtitle': 'Освободи силу захватов',
    'hero.slide3.description': 'Развивай силу, выносливость и тактические навыки с нашей элитной программой борьбы',
    'hero.slide3.cta1': 'Начать борьбу',
    'hero.stats.students': 'Студентов обучено',
    'hero.stats.champions': 'Профессиональных чемпионов',
    'hero.stats.years': 'Лет совершенства',
    'hero.stats.medalists': 'Олимпийских медалистов в штате',
    'hero.cards.trainers.title': 'Опытные тренеры',
    'hero.cards.trainers.desc': 'Тренеры мирового класса с чемпионским опытом',
    'hero.cards.facilities.title': 'Современные залы',
    'hero.cards.facilities.desc': 'Профессиональный ринг, маты и оборудование',
    'hero.cards.schedule.title': 'Гибкое расписание',
    'hero.cards.schedule.desc': 'Утренние, дневные и вечерние занятия',
    'hero.cards.results.title': 'Проверенные результаты',
    'hero.cards.results.desc': '95% студентов достигают своих целей',

    // Common - moved to end to avoid duplicates
    'common.month': 'месяц',
    'common.session': 'занятие',
    'common.established': 'Основана'
  },
  en: {
    // Header
    'header.contact.email': 'info@edestory.com',
    'header.contact.phone': '+7 (495) 123-45-67',
    'header.follow': 'Follow Us:',
    'header.academy': 'SPORTS ACADEMY',
    'header.nav.home': 'HOME',
    'header.nav.programs': 'PROGRAMS',
    'header.nav.coaches': 'COACHES',
    'header.nav.schedule': 'SCHEDULE',
    'header.nav.shop': 'SHOP',
    'header.nav.gallery': 'GALLERY',
    'header.nav.contact': 'CONTACT',
    'header.cta': 'Free Trial',
    'header.mobile.cta': 'Start Your Free Trial',

    // English translations abbreviated for brevity
    'common.month': 'month',
    'common.session': 'session',
    'common.established': 'Established'
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('ru');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['ru']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};