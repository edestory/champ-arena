import { ShoppingCart, Star, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

interface ProductCardProps {
  id: number;
  name: string;
  image: string;
  price: string;
  oldPrice?: string;
  rating: number;
  reviews: number;
  badge?: string;
  badgeColor?: string;
  category: string;
  inStock: boolean;
}

const ProductCard = ({ 
  id, 
  name, 
  image, 
  price, 
  oldPrice, 
  rating, 
  reviews, 
  badge, 
  badgeColor = 'bg-primary',
  category,
  inStock
}: ProductCardProps) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isAddingToCart, setIsAddingToCart] = useState(false);

  const handleAddToCart = async () => {
    setIsAddingToCart(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsAddingToCart(false);
  };

  const toggleWishlist = () => {
    setIsWishlisted(!isWishlisted);
  };

  return (
    <div className="group bg-white rounded-2xl shadow-card hover:shadow-red hover:-translate-y-2 transition-all duration-300 overflow-hidden">
      {/* Image Section */}
      <div className="relative aspect-square overflow-hidden">
        <img 
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Badge */}
        {badge && (
          <div className={`absolute top-3 left-3 ${badgeColor} text-white text-xs font-semibold px-3 py-1 rounded-full`}>
            {badge}
          </div>
        )}
        
        {/* Wishlist Button */}
        <button
          onClick={toggleWishlist}
          className={`absolute top-3 right-3 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
            isWishlisted 
              ? 'bg-primary text-white' 
              : 'bg-white/80 text-secondary hover:bg-white'
          }`}
        >
          <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-current' : ''}`} />
        </button>
        
        {/* Quick View Overlay */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Button 
            variant="outline" 
            className="border-white text-white hover:bg-white hover:text-primary"
          >
            Быстрый просмотр
          </Button>
        </div>
        
        {/* Stock Status */}
        {!inStock && (
          <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
            <span className="text-white font-semibold text-lg">Нет в наличии</span>
          </div>
        )}
      </div>
      
      {/* Content Section */}
      <div className="p-6">
        {/* Category */}
        <div className="text-sm text-muted-foreground mb-2 uppercase tracking-wide">
          {category}
        </div>
        
        {/* Rating */}
        <div className="flex items-center mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`w-4 h-4 ${
                  i < Math.floor(rating) 
                    ? 'fill-current text-yellow-400' 
                    : 'text-gray-300'
                }`} 
              />
            ))}
          </div>
          <span className="text-sm text-muted-foreground ml-2">({reviews})</span>
        </div>
        
        {/* Product Name */}
        <h3 className="font-bold text-secondary mb-3 group-hover:text-primary transition-colors line-clamp-2">
          {name}
        </h3>
        
        {/* Price */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-primary">{price}</span>
            {oldPrice && (
              <span className="text-sm text-muted-foreground line-through">{oldPrice}</span>
            )}
          </div>
          
          {oldPrice && (
            <div className="bg-red-100 text-red-600 text-xs font-semibold px-2 py-1 rounded">
              -{Math.round((1 - parseInt(price.replace(/[^\d]/g, '')) / parseInt(oldPrice.replace(/[^\d]/g, ''))) * 100)}%
            </div>
          )}
        </div>
        
        {/* Add to Cart Button */}
        <Button 
          onClick={handleAddToCart}
          disabled={!inStock || isAddingToCart}
          className={`w-full font-semibold transition-all ${
            inStock 
              ? 'bg-primary hover:bg-primary-hover text-white' 
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          {isAddingToCart ? (
            <div className="flex items-center">
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
              Добавление...
            </div>
          ) : (
            <>
              <ShoppingCart className="w-4 h-4 mr-2" />
              {inStock ? 'В корзину' : 'Нет в наличии'}
            </>
          )}
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;