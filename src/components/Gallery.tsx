import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Share2, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
  title: string;
  description: string;
  date: string;
  event: string;
}

const Gallery = () => {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightboxImage, setLightboxImage] = useState<GalleryImage | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const filters = [
    { id: 'all', label: 'Все', labelEn: 'All' },
    { id: 'competitions', label: 'Соревнования', labelEn: 'Competitions' },
    { id: 'training', label: 'Тренировки', labelEn: 'Training' },
    { id: 'facilities', label: 'Залы', labelEn: 'Facilities' },
    { id: 'champions', label: 'Чемпионы', labelEn: 'Champions' },
    { id: 'events', label: 'Мероприятия', labelEn: 'Events' }
  ];

  const images: GalleryImage[] = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=400&h=600&fit=crop',
      alt: 'Боксерская тренировка',
      category: 'training',
      title: 'Интенсивная тренировка',
      description: 'Групповая тренировка по боксу в нашем основном зале',
      date: '15 января 2025',
      event: 'Вечерняя тренировка'
    },
    {
      id: 2,  
      src: 'https://images.unsplash.com/photo-1583473848882-f9a5c8b8c4b0?w=600&h=400&fit=crop',
      alt: 'Соревнования по борьбе',
      category: 'competitions',
      title: 'Региональный чемпионат',
      description: 'Наши спортсмены на региональных соревнованиях по борьбе',
      date: '10 декабря 2024',
      event: 'Чемпионат Москвы'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=700&fit=crop',
      alt: 'Современный боксерский ринг',
      category: 'facilities',
      title: 'Профессиональный ринг',
      description: 'Наш основной боксерский ринг соревновательного размера',
      date: '1 января 2025',
      event: 'Обновление залов'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?w=600&h=400&fit=crop',
      alt: 'Детская тренировка',
      category: 'training',
      title: 'Детская группа',
      description: 'Занятие детской группы по основам боевых искусств',
      date: '12 января 2025',
      event: 'Детские программы'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1607827448387-a67db1383b59?w=400&h=600&fit=crop',
      alt: 'Чемпион с медалью',
      category: 'champions',
      title: 'Новый чемпион',
      description: 'Дмитрий Соколов - победитель регионального первенства',
      date: '5 декабря 2024',
      event: 'Награждение'
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500&h=600&fit=crop',
      alt: 'Борцовские маты',
      category: 'facilities',
      title: 'Борцовская зона',
      description: 'Профессиональные маты для тренировок по борьбе',
      date: '20 ноября 2024',
      event: 'Новое оборудование'
    },
    {
      id: 7,
      src: 'https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?w=600&h=400&fit=crop',
      alt: 'Открытый день',
      category: 'events',
      title: 'День открытых дверей',
      description: 'Мастер-класс для новых учеников и их родителей',
      date: '15 ноября 2024',
      event: 'День открытых дверей'
    },
    {
      id: 8,
      src: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=600&fit=crop',
      alt: 'Тренировка спарринга',
      category: 'training',
      title: 'Спарринг',
      description: 'Контролируемый спарринг между опытными учениками',
      date: '8 января 2025',
      event: 'Продвинутая группа'
    },
    {
      id: 9,
      src: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=500&h=700&fit=crop',
      alt: 'Женская чемпионка',
      category: 'champions',
      title: 'Женский бокс',
      description: 'Анна Иванова - чемпионка молодежного первенства',
      date: '28 ноября 2024',
      event: 'Молодежное первенство'
    },
    {
      id: 10,
      src: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&h=400&fit=crop',
      alt: 'Соревновательная подготовка',
      category: 'competitions',
      title: 'Подготовка к турниру',
      description: 'Финальная подготовка перед важными соревнованиями',
      date: '3 декабря 2024',
      event: 'Предсоревновательные сборы'
    },
    {
      id: 11,
      src: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=400&h=500&fit=crop',
      alt: 'Церемония награждения',
      category: 'events',
      title: 'Церемония награждения',
      description: 'Торжественное награждение лучших спортсменов года',
      date: '20 декабря 2024',
      event: 'Новогодняя церемония'
    },
    {
      id: 12,
      src: 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=600&h=400&fit=crop',
      alt: 'Функциональная зона',
      category: 'facilities',
      title: 'Зона кондиционирования',
      description: 'Современное оборудование для физической подготовки',
      date: '10 января 2025',
      event: 'Обновление оборудования'
    }
  ];

  const filteredImages = activeFilter === 'all' 
    ? images 
    : images.filter(img => img.category === activeFilter);

  const openLightbox = (image: GalleryImage) => {
    setLightboxImage(image);
    setLightboxIndex(filteredImages.findIndex(img => img.id === image.id));
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  const navigateLightbox = (direction: 'prev' | 'next') => {
    const newIndex = direction === 'prev' 
      ? (lightboxIndex - 1 + filteredImages.length) % filteredImages.length
      : (lightboxIndex + 1) % filteredImages.length;
    
    setLightboxIndex(newIndex);
    setLightboxImage(filteredImages[newIndex]);
  };

  const getGridClasses = (index: number) => {
    // Создаем интересную masonry-like сетку
    const patterns = [
      'md:col-span-1 md:row-span-2', // высокий
      'md:col-span-2 md:row-span-1', // широкий
      'md:col-span-1 md:row-span-1', // обычный
      'md:col-span-1 md:row-span-1', // обычный
      'md:col-span-1 md:row-span-2', // высокий
      'md:col-span-2 md:row-span-1', // широкий
    ];
    return patterns[index % patterns.length];
  };

  return (
    <section id="gallery" className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
            Наши истории успеха
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Галерея чемпионов и моментов
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-primary text-white shadow-red'
                  : 'bg-white text-secondary hover:bg-primary hover:text-white'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[200px]">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer bg-white shadow-card hover:shadow-red transition-all duration-300 ${getGridClasses(index)}`}
              onClick={() => openLightbox(image)}
            >
              <img 
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-lg font-bold mb-2">{image.title}</h3>
                <p className="text-sm opacity-90 mb-2">{image.description}</p>
                <div className="flex justify-between items-center text-xs opacity-75">
                  <span>{image.date}</span>
                  <span>{image.event}</span>
                </div>
              </div>
              
              {/* Category Badge */}
              <div className="absolute top-4 left-4 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
                {filters.find(f => f.id === image.category)?.label}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-8 bg-white rounded-2xl px-8 py-6 shadow-card">
            <div>
              <div className="text-3xl font-bold text-primary">{filteredImages.length}</div>
              <div className="text-sm text-muted-foreground">Фотографий в галерее</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div>
              <div className="text-3xl font-bold text-primary">50+</div>
              <div className="text-sm text-muted-foreground">Соревнований проведено</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div>
              <div className="text-3xl font-bold text-primary">200+</div>
              <div className="text-sm text-muted-foreground">Медалей завоевано</div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-60 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {/* Navigation Buttons */}
          <button
            onClick={() => navigateLightbox('prev')}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-60 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          
          <button
            onClick={() => navigateLightbox('next')}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-60 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* Image */}
          <div className="max-w-5xl max-h-[80vh] mx-auto">
            <img 
              src={lightboxImage.src}
              alt={lightboxImage.alt}
              className="w-full h-full object-contain rounded-lg"
            />
          </div>

          {/* Image Info */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
            <div className="max-w-5xl mx-auto text-white">
              <h3 className="text-2xl font-bold mb-2">{lightboxImage.title}</h3>
              <p className="text-lg opacity-90 mb-4">{lightboxImage.description}</p>
              <div className="flex justify-between items-center">
                <div className="flex space-x-6 text-sm opacity-75">
                  <span>📅 {lightboxImage.date}</span>
                  <span>🎯 {lightboxImage.event}</span>
                  <span>📸 {lightboxIndex + 1} из {filteredImages.length}</span>
                </div>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" className="border-white text-white hover:bg-white hover:text-black">
                    <Share2 className="w-4 h-4 mr-2" />
                    Поделиться
                  </Button>
                  <Button variant="outline" size="sm" className="border-white text-white hover:bg-white hover:text-black">
                    <Download className="w-4 h-4 mr-2" />
                    Скачать
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;