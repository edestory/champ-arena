import { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="flex items-center justify-between py-2 text-sm border-b border-border/50">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Phone className="w-4 h-4 text-primary" />
              <span>+7 (999) 123-45-67</span>
            </div>
            <div className="flex items-center gap-1">
              <Mail className="w-4 h-4 text-primary" />
              <span>info@sportschool.ru</span>
            </div>
          </div>
          <div className="hidden md:block text-muted-foreground">
            ул. Спортивная, 15 • Пн-Вс: 09:00-21:00
          </div>
        </div>

        {/* Main Navigation */}
        <nav className="flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <div>
              <h1 className="font-bold text-xl text-foreground">SportSchool</h1>
              <p className="text-xs text-muted-foreground">Школа чемпионов</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-foreground hover:text-primary transition-smooth font-medium"
            >
              Главная
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-primary transition-smooth font-medium"
            >
              О нас
            </button>
            <button 
              onClick={() => scrollToSection('programs')}
              className="text-foreground hover:text-primary transition-smooth font-medium"
            >
              Программы
            </button>
            <button 
              onClick={() => scrollToSection('coaches')}
              className="text-foreground hover:text-primary transition-smooth font-medium"
            >
              Тренеры
            </button>
            <button 
              onClick={() => scrollToSection('schedule')}
              className="text-foreground hover:text-primary transition-smooth font-medium"
            >
              Расписание
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-primary transition-smooth font-medium"
            >
              Контакты
            </button>
          </div>

          <div className="flex items-center gap-4">
            <Button 
              onClick={() => scrollToSection('contact')}
              className="hidden md:flex gradient-primary text-white hover:opacity-90 transition-smooth"
            >
              Записаться
            </Button>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-foreground hover:text-primary transition-smooth"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-border">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col gap-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-left text-foreground hover:text-primary transition-smooth font-medium py-2"
              >
                Главная
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-left text-foreground hover:text-primary transition-smooth font-medium py-2"
              >
                О нас
              </button>
              <button 
                onClick={() => scrollToSection('programs')}
                className="text-left text-foreground hover:text-primary transition-smooth font-medium py-2"
              >
                Программы
              </button>
              <button 
                onClick={() => scrollToSection('coaches')}
                className="text-left text-foreground hover:text-primary transition-smooth font-medium py-2"
              >
                Тренеры
              </button>
              <button 
                onClick={() => scrollToSection('schedule')}
                className="text-left text-foreground hover:text-primary transition-smooth font-medium py-2"
              >
                Расписание
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-left text-foreground hover:text-primary transition-smooth font-medium py-2"
              >
                Контакты
              </button>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="mt-4 gradient-primary text-white hover:opacity-90 transition-smooth w-full"
              >
                Записаться на занятие
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;