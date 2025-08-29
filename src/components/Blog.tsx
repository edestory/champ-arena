import { Clock, User, ArrowRight, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useLanguage } from '@/contexts/LanguageContext';

const Blog = () => {
  const { t } = useLanguage();

  const featuredArticle = {
    id: 1,
    title: t('blog.featured.title'),
    excerpt: t('blog.featured.excerpt'),
    author: t('blog.featured.author'),
    date: t('blog.featured.date'),
    readTime: t('blog.featured.readTime'),
    image: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=800&h=400&fit=crop',
    tags: ['Boxing', 'Beginners', 'Technique']
  };

  const recentArticles = [
    {
      id: 2,
      title: t('blog.articles.mental.title'),
      author: t('blog.articles.mental.author'),
      date: 'Jan 18, 2025',
      excerpt: t('blog.articles.mental.excerpt'),
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
      category: 'Competition'
    },
    {
      id: 3,
      title: t('blog.articles.nutrition.title'),
      author: t('blog.articles.nutrition.author'),
      date: 'Jan 15, 2025',
      excerpt: t('blog.articles.nutrition.excerpt'),
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop',
      category: 'Nutrition'
    },
    {
      id: 4,
      title: t('blog.articles.comparison.title'),
      author: t('blog.articles.comparison.author'),
      date: 'Jan 12, 2025',
      excerpt: t('blog.articles.comparison.excerpt'),
      image: 'https://images.unsplash.com/photo-1583473848882-f9a5c8b8c4b0?w=400&h=300&fit=crop',
      category: 'Training'
    },
    {
      id: 5,
      title: t('blog.articles.confidence.title'),
      author: t('blog.articles.confidence.author'),
      date: 'Jan 10, 2025',
      excerpt: t('blog.articles.confidence.excerpt'),
      image: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?w=400&h=300&fit=crop',
      category: 'Psychology'
    }
  ];

  const categories = [
    { name: t('blog.categories.training'), count: 15 },
    { name: t('blog.categories.nutrition'), count: 8 },
    { name: t('blog.categories.competition'), count: 12 },
    { name: t('blog.categories.stories'), count: 20 },
    { name: t('blog.categories.equipment'), count: 6 }
  ];

  return (
    <section id="blog" className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
            {t('blog.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('blog.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Featured Article */}
            <div className="bg-white rounded-2xl shadow-card overflow-hidden">
              <div className="aspect-[2/1] overflow-hidden">
                <img 
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {featuredArticle.tags.map((tag) => (
                    <span key={tag} className="bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full">
                      #{tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-secondary mb-4 hover:text-primary cursor-pointer transition-colors">
                  {featuredArticle.title}
                </h3>
                
                <p className="text-muted-foreground mb-6">
                  {featuredArticle.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4" />
                      <span>{featuredArticle.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>{featuredArticle.readTime}</span>
                    </div>
                    <span>{featuredArticle.date}</span>
                  </div>
                  
                  <Button className="bg-primary hover:bg-primary-hover text-white">
                    {t('blog.readMore')}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Recent Articles Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {recentArticles.map((article) => (
                <div key={article.id} className="bg-white rounded-2xl shadow-card overflow-hidden hover:shadow-red hover:-translate-y-1 transition-all duration-300">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <div className="p-6">
                    <div className="bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-3 inline-block">
                      {article.category}
                    </div>
                    
                    <h4 className="text-lg font-bold text-secondary mb-3 hover:text-primary cursor-pointer transition-colors">
                      {article.title}
                    </h4>
                    
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>{article.author}</span>
                      <span>{article.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Newsletter Signup */}
            <div className="bg-white rounded-2xl p-6 shadow-card">
              <h3 className="text-xl font-bold text-secondary mb-4">
                {t('blog.newsletter.title')}
              </h3>
              <p className="text-muted-foreground mb-4 text-sm">
                {t('blog.newsletter.description')}
              </p>
              
              <div className="flex flex-col space-y-3">
                <Input placeholder={t('blog.newsletter.placeholder')} />
                <Button className="bg-primary hover:bg-primary-hover text-white">
                  {t('blog.newsletter.subscribe')}
                </Button>
              </div>
              
              <p className="text-xs text-muted-foreground mt-3">
                {t('blog.newsletter.subscribers')}
              </p>
            </div>

            {/* Categories */}
            <div className="bg-white rounded-2xl p-6 shadow-card">
              <h3 className="text-xl font-bold text-secondary mb-4">
                {t('blog.sidebar.categories')}
              </h3>
              
              <div className="space-y-3">
                {categories.map((category) => (
                  <div key={category.name} className="flex items-center justify-between p-3 rounded-lg hover:bg-accent cursor-pointer transition-colors">
                    <span className="text-secondary">{category.name}</span>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                      {category.count}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Popular Tags */}
            <div className="bg-white rounded-2xl p-6 shadow-card">
              <h3 className="text-xl font-bold text-secondary mb-4">
                {t('blog.sidebar.tags')}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {['Boxing', 'Wrestling', 'Training', 'Nutrition', 'Competition', 'Kids', 'Fitness', 'Technique'].map((tag) => (
                  <span key={tag} className="bg-accent text-secondary text-sm px-3 py-1 rounded-full hover:bg-primary hover:text-white cursor-pointer transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;