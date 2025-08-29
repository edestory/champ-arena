import { useState } from 'react';
import { Calendar, MessageCircle, Phone, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FloatingActions = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show/hide scroll to top button based on scroll position
  useState(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed right-6 bottom-6 z-40 flex flex-col space-y-3">
      {/* Quick Booking */}
      <Button
        onClick={() => scrollToSection('booking')}
        className="w-14 h-14 rounded-full bg-primary hover:bg-primary-hover text-white shadow-lg hover:shadow-xl transition-all duration-300 group"
        aria-label="Быстрая запись"
      >
        <Calendar className="w-6 h-6 group-hover:scale-110 transition-transform" />
      </Button>

      {/* Live Chat */}
      <Button
        onClick={() => window.open('https://t.me/edestory_news', '_blank')}
        className="w-14 h-14 rounded-full bg-blue-500 hover:bg-blue-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 group"
        aria-label="Написать в чат"
      >
        <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
      </Button>

      {/* Call Us */}
      <Button
        onClick={() => window.open('tel:+74951234567', '_self')}
        className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 group"
        aria-label="Позвонить"
      >
        <Phone className="w-6 h-6 group-hover:scale-110 transition-transform" />
      </Button>

      {/* Scroll to Top */}
      {isVisible && (
        <Button
          onClick={scrollToTop}
          className="w-14 h-14 rounded-full bg-gray-600 hover:bg-gray-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 group"
          aria-label="Наверх"
        >
          <ArrowUp className="w-6 h-6 group-hover:scale-110 transition-transform" />
        </Button>
      )}
    </div>
  );
};

export default FloatingActions;