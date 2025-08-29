import { Link } from 'react-router-dom';
import { Home, Search, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    // In production, this would be logged to an error tracking service
    // like Sentry or LogRocket instead of console
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEOHead
        meta={{
          title: 'Страница не найдена - EDESTORY Sports Academy',
          description: 'Запрашиваемая страница не найдена. Вернитесь на главную или воспользуйтесь навигацией сайта.',
          noindex: true
        }}
      />
      <Header />
      
      <main className="flex-1 flex items-center justify-center py-16">
        <div className="text-center max-w-2xl mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-8xl md:text-9xl font-bold text-primary mb-4">404</h1>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              Страница не найдена
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Извините, запрашиваемая страница не существует или была перемещена
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary-hover text-white">
              <Link to="/">
                <Home className="w-5 h-5 mr-2" />
                На главную
              </Link>
            </Button>
            
            <Button asChild variant="outline" size="lg">
              <Link to="/shop">
                <Search className="w-5 h-5 mr-2" />
                Магазин
              </Link>
            </Button>
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">Популярные разделы:</p>
            <div className="flex flex-wrap gap-2 justify-center">
              <Button asChild variant="ghost" size="sm">
                <Link to="/#programs">Программы тренировок</Link>
              </Button>
              <Button asChild variant="ghost" size="sm">
                <Link to="/#coaches">Наши тренеры</Link>
              </Button>
              <Button asChild variant="ghost" size="sm">
                <Link to="/#contact">Контакты</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
