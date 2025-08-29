import { useState } from 'react';
import { X, Plus, Minus, ShoppingBag, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

interface CartItem {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
  size?: string;
  color?: string;
}

interface ShoppingCartProps {
  isOpen: boolean;
  onClose: () => void;
}

const ShoppingCart = ({ isOpen, onClose }: ShoppingCartProps) => {
  const { t } = useLanguage();
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: 'Боксерские перчатки EDESTORY Pro',
      image: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=150&h=150&fit=crop',
      price: 8500,
      quantity: 1,
      size: 'L'
    },
    {
      id: 2,
      name: 'Футболка Academy Training',
      image: 'https://images.unsplash.com/photo-1556906781-9a412961c28c?w=150&h=150&fit=crop',
      price: 2300,
      quantity: 2,
      size: 'M',
      color: 'Красный'
    }
  ]);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity === 0) {
      setCartItems(cartItems.filter(item => item.id !== id));
    } else {
      setCartItems(cartItems.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      ));
    }
  };

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/50 z-50 transition-opacity"
        onClick={onClose}
      />
      
      {/* Cart Sidebar */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-50 shadow-xl transform transition-transform">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <div className="flex items-center space-x-2">
            <ShoppingBag className="w-6 h-6 text-primary" />
            <h2 className="text-xl font-bold text-secondary">
              Корзина ({totalItems})
            </h2>
          </div>
          <button 
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {cartItems.length === 0 ? (
            <div className="text-center py-12">
              <ShoppingBag className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-secondary mb-2">
                Корзина пуста
              </h3>
              <p className="text-muted-foreground mb-6">
                Добавьте товары для продолжения покупок
              </p>
              <Button 
                onClick={onClose}
                className="bg-primary hover:bg-primary-hover text-white"
              >
                Продолжить покупки
              </Button>
            </div>
          ) : (
            <div className="space-y-6">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center space-x-4 bg-gray-50 rounded-xl p-4">
                  {/* Product Image */}
                  <img 
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  
                  {/* Product Info */}
                  <div className="flex-1">
                    <h3 className="font-semibold text-secondary text-sm mb-1">
                      {item.name}
                    </h3>
                    
                    {/* Variants */}
                    <div className="text-xs text-muted-foreground mb-2">
                      {item.size && <span>Размер: {item.size}</span>}
                      {item.size && item.color && <span> • </span>}
                      {item.color && <span>Цвет: {item.color}</span>}
                    </div>
                    
                    {/* Price */}
                    <div className="text-primary font-bold">
                      {item.price.toLocaleString()}₽
                    </div>
                  </div>
                  
                  {/* Quantity Controls */}
                  <div className="flex flex-col items-end space-y-2">
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-red-500 hover:text-red-700 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                    
                    <div className="flex items-center space-x-2 bg-white rounded-lg border">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 transition-colors"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      
                      <span className="w-8 text-center font-semibold">
                        {item.quantity}
                      </span>
                      
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer with Total and Checkout */}
        {cartItems.length > 0 && (
          <div className="border-t p-6 space-y-4">
            {/* Shipping Info */}
            <div className="bg-green-50 text-green-700 p-3 rounded-lg text-sm">
              {totalPrice >= 5000 ? (
                <span>🚚 Бесплатная доставка включена!</span>
              ) : (
                <span>
                  Добавьте товаров на {(5000 - totalPrice).toLocaleString()}₽ для бесплатной доставки
                </span>
              )}
            </div>
            
            {/* Total */}
            <div className="flex items-center justify-between text-lg font-bold">
              <span>Итого:</span>
              <span className="text-primary">{totalPrice.toLocaleString()}₽</span>
            </div>
            
            {/* Checkout Buttons */}
            <div className="space-y-3">
              <Button className="w-full bg-primary hover:bg-primary-hover text-white font-semibold py-3">
                Оформить заказ
              </Button>
              
              <Button 
                variant="outline" 
                onClick={onClose}
                className="w-full border-primary text-primary hover:bg-primary hover:text-white"
              >
                Продолжить покупки
              </Button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ShoppingCart;