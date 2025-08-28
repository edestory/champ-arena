import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-foreground text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <div>
                <h3 className="font-bold text-xl text-white">SportSchool</h3>
                <p className="text-xs text-white/70">Школа чемпионов</p>
              </div>
            </div>
            <p className="text-white/80 leading-relaxed mb-6">
              Мы помогаем детям развиваться через спорт, воспитывая чемпионов не только в спорте, но и в жизни.
            </p>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-smooth"
                aria-label="Instagram"
              >
                <span className="text-sm font-bold">IG</span>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-smooth"
                aria-label="ВКонтакте"
              >
                <span className="text-sm font-bold">VK</span>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-smooth"
                aria-label="Telegram"
              >
                <span className="text-sm font-bold">TG</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg text-white mb-4">Быстрые ссылки</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-white/80 hover:text-white transition-smooth"
                >
                  Главная
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-white/80 hover:text-white transition-smooth"
                >
                  О нас
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('programs')}
                  className="text-white/80 hover:text-white transition-smooth"
                >
                  Программы
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('coaches')}
                  className="text-white/80 hover:text-white transition-smooth"
                >
                  Тренеры
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('schedule')}
                  className="text-white/80 hover:text-white transition-smooth"
                >
                  Расписание
                </button>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-bold text-lg text-white mb-4">Наши программы</h4>
            <ul className="space-y-3">
              <li className="text-white/80">Футбол (4-18 лет)</li>
              <li className="text-white/80">Баскетбол (6-18 лет)</li>
              <li className="text-white/80">Теннис (5-18 лет)</li>
              <li className="text-white/80">ОФП (4-18 лет)</li>
              <li className="text-white/80">Персональные тренировки</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg text-white mb-4">Контакты</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-white/80">ул. Спортивная, 15</div>
                  <div className="text-white/60 text-sm">Спортивный комплекс</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-white/80">+7 (999) 123-45-67</div>
                  <div className="text-white/60 text-sm">Звоните ежедневно</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-white/80">info@sportschool.ru</div>
                  <div className="text-white/60 text-sm">Ответим в течение часа</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-white/80">Пн-Пт: 09:00-21:00</div>
                  <div className="text-white/80">Сб-Вс: 10:00-18:00</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-white/60 text-sm">
              © 2024 SportSchool. Все права защищены.
            </div>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-white/60 hover:text-white transition-smooth">
                Политика конфиденциальности
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-smooth">
                Пользовательское соглашение
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Accent Line */}
      <div className="h-1 gradient-primary"></div>
    </footer>
  );
};

export default Footer;