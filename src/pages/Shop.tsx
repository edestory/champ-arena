import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Star, ShoppingCart, Heart, Filter, Grid, List, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Shop = () => {
  const { category } = useParams();
  const { t } = useLanguage();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('popularity');

  const categories = [
    {
      id: 'boxing',
      title: 'Боксерское снаряжение',
      titleEn: 'Boxing Equipment',
      image: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=600&h=400&fit=crop',
      products: 45,
      priceFrom: '2,500₽',
      popular: ['Перчатки', 'Мешки', 'Бинты']
    },
    {
      id: 'wrestling',
      title: 'Борцовское снаряжение',
      titleEn: 'Wrestling Gear',
      image: 'https://images.unsplash.com/photo-1583473848882-f9a5c8b8c4b0?w=600&h=400&fit=crop',
      products: 32,
      priceFrom: '3,200₽',
      popular: ['Трико', 'Борцовки', 'Шлемы']
    },
    {
      id: 'apparel',
      title: 'Спортивная одежда',
      titleEn: 'Training Apparel',
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=400&fit=crop',
      products: 68,
      priceFrom: '1,800₽',
      popular: ['Футболки', 'Шорты', 'Худи']
    },
    {
      id: 'accessories',
      title: 'Фитнес аксессуары',
      titleEn: 'Fitness Accessories',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop',
      products: 29,
      priceFrom: '800₽',
      popular: ['Бутылки', 'Полотенца', 'Сумки']
    },
    {
      id: 'protection',
      title: 'Защитное снаряжение',
      titleEn: 'Protective Gear',
      image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&h=400&fit=crop',
      products: 23,
      priceFrom: '1,500₽',
      popular: ['Капы', 'Щитки', 'Шлемы']
    },
    {
      id: 'supplements',
      title: 'Спортивное питание',
      titleEn: 'Supplements',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=400&fit=crop',
      products: 15,
      priceFrom: '1,200₽',
      popular: ['Протеин', 'Предтреник', 'Восстановление']
    }
  ];

  const featuredProducts = [
    {
      id: 1,
      name: 'Профессиональные боксерские перчатки EDESTORY',
      nameEn: 'EDESTORY Pro Boxing Gloves',
      image: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=400&h=300&fit=crop',
      price: 8500,
      originalPrice: 10200,
      badge: 'ВЫБОР ТРЕНЕРА',
      badgeEn: 'COACH\'S CHOICE',
      rating: 4.9,
      reviews: 89,
      category: 'boxing'
    },
    {
      id: 2,
      name: 'Соревновательное борцовское трико',
      nameEn: 'Wrestling Competition Singlet',
      image: 'https://images.unsplash.com/photo-1583473848882-f9a5c8b8c4b0?w=400&h=300&fit=crop',
      price: 4200,
      badge: 'ХИТ ПРОДАЖ',
      badgeEn: 'BESTSELLER',
      rating: 4.7,
      reviews: 134,
      category: 'wrestling'
    },
    {
      id: 3,
      name: 'Тренировочная футболка Академии',
      nameEn: 'Academy Training T-Shirt',
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=300&fit=crop',
      price: 2300,
      badge: 'НОВИНКА',
      badgeEn: 'NEW',
      rating: 5.0,
      reviews: 45,
      category: 'apparel',
      colors: ['Красный', 'Черный', 'Белый']
    },
    {
      id: 4,
      name: 'Профессиональный боксерский мешок',
      nameEn: 'Professional Heavy Bag',
      image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=300&fit=crop',
      price: 15800,
      badge: 'PRO GRADE',
      badgeEn: 'PRO GRADE',
      rating: 4.8,
      reviews: 67,
      category: 'boxing'
    },
    {
      id: 5,
      name: 'Борцовские ботинки Elite',
      nameEn: 'Elite Wrestling Shoes',
      image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=300&fit=crop',
      price: 6900,
      badge: 'ПОПУЛЯРНО',
      badgeEn: 'POPULAR',
      rating: 4.6,
      reviews: 78,
      category: 'wrestling'
    },
    {
      id: 6,
      name: 'Спортивная сумка EDESTORY',
      nameEn: 'EDESTORY Sports Bag',
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop',
      price: 3400,
      rating: 4.5,
      reviews: 92,
      category: 'accessories'
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < Math.floor(rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  if (!category) {
    // Shop homepage
    return (
      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-primary/10 to-primary-dark/10">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl md:text-6xl font-bold text-secondary mb-6">
                  ЭКИПИРУЙСЯ
                  <span className="block text-primary">КАК ЧЕМПИОН</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Официальная экипировка и одежда для тренировок EDESTORY
                </p>
                <p className="text-lg text-muted-foreground mb-8">
                  Профессиональное снаряжение, которое используют наши спортсмены и тренеры
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                  <Button className="bg-primary hover:bg-primary-hover text-white px-8 py-3 font-semibold">
                    Снаряжение для тренировок
                  </Button>
                  <Button variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 font-semibold">
                    Посмотреть одежду
                  </Button>
                </div>

                {/* Features */}
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Бесплатная доставка от 5,000₽</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>30 дней на возврат</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Скидки для студентов</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Официальная продукция</span>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=800&h=600&fit=crop"
                  alt="Спортивная экипировка"
                  className="w-full h-96 object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-secondary mb-4">Категории товаров</h2>
              <p className="text-xl text-muted-foreground">Найди все необходимое для тренировок</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((cat) => (
                <div
                  key={cat.id}
                  className="group bg-white rounded-2xl shadow-card hover:shadow-red hover:-translate-y-2 transition-all duration-300 overflow-hidden cursor-pointer"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={cat.image}
                      alt={cat.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-secondary mb-2 group-hover:text-primary transition-colors">
                      {cat.title}
                    </h3>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-muted-foreground">{cat.products} товаров</span>
                      <span className="text-primary font-semibold">{cat.priceFrom}</span>
                    </div>
                    
                    <div className="mb-4">
                      <p className="text-sm text-muted-foreground mb-2">Популярные:</p>
                      <div className="flex flex-wrap gap-2">
                        {cat.popular.map((item, index) => (
                          <span key={index} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <Button className="w-full bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white">
                      Смотреть товары
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-20 bg-accent">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-secondary mb-4">Рекомендуемые товары</h2>
              <p className="text-xl text-muted-foreground">Выбрано нашими тренерами</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProducts.slice(0, 6).map((product) => (
                <div
                  key={product.id}
                  className="group bg-white rounded-2xl shadow-card hover:shadow-red hover:-translate-y-2 transition-all duration-300 overflow-hidden"
                >
                  {/* Badge */}
                  {product.badge && (
                    <div className="absolute top-4 left-4 z-10 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {product.badge}
                    </div>
                  )}

                  {/* Image */}
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img 
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors">
                        <Heart className="w-5 h-5 text-gray-600" />
                      </button>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-bold text-secondary mb-2 group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>

                    {/* Rating */}
                    <div className="flex items-center space-x-2 mb-3">
                      <div className="flex">
                        {renderStars(product.rating)}
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {product.rating} ({product.reviews} отзывов)
                      </span>
                    </div>

                    {/* Price */}
                    <div className="flex items-center space-x-2 mb-4">
                      <span className="text-2xl font-bold text-primary">
                        {product.price.toLocaleString()}₽
                      </span>
                      {product.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">
                          {product.originalPrice.toLocaleString()}₽
                        </span>
                      )}
                    </div>

                    {/* Colors */}
                    {product.colors && (
                      <div className="mb-4">
                        <p className="text-sm text-muted-foreground mb-2">Цвета:</p>
                        <div className="flex space-x-2">
                          {product.colors.map((color, index) => (
                            <span key={index} className="text-xs bg-gray-100 px-2 py-1 rounded">
                              {color}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Add to Cart */}
                    <Button className="w-full bg-primary hover:bg-primary-hover text-white font-semibold">
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      В корзину
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    );
  }

  // Category page would be rendered here
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-secondary mb-8">
            Категория: {category}
          </h1>
          <p className="text-muted-foreground">Страница категории в разработке...</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Shop;