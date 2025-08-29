import { useState } from 'react';
import { Filter, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

interface FilterOption {
  id: string;
  label: string;
  count?: number;
}

interface FilterGroup {
  id: string;
  title: string;
  options: FilterOption[];
  type: 'checkbox' | 'radio' | 'range';
}

interface ProductFiltersProps {
  isOpen: boolean;
  onClose: () => void;
  onFiltersChange: (filters: any) => void;
}

const ProductFilters = ({ isOpen, onClose, onFiltersChange }: ProductFiltersProps) => {
  const { t } = useLanguage();
  const [selectedFilters, setSelectedFilters] = useState<Record<string, any>>({});
  const [priceRange, setPriceRange] = useState({ min: 0, max: 50000 });
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    category: true,
    price: true,
    brand: true,
    size: false,
    color: false
  });

  const filterGroups: FilterGroup[] = [
    {
      id: 'category',
      title: 'Категория',
      type: 'checkbox',
      options: [
        { id: 'boxing', label: 'Боксерское оборудование', count: 45 },
        { id: 'wrestling', label: 'Борцовская экипировка', count: 32 },
        { id: 'apparel', label: 'Одежда', count: 68 },
        { id: 'accessories', label: 'Аксессуары', count: 29 },
        { id: 'protective', label: 'Защита', count: 23 },
        { id: 'supplements', label: 'Питание', count: 15 }
      ]
    },
    {
      id: 'brand',
      title: 'Бренд',
      type: 'checkbox',
      options: [
        { id: 'edestory', label: 'EDESTORY', count: 89 },
        { id: 'everlast', label: 'Everlast', count: 34 },
        { id: 'adidas', label: 'Adidas Combat', count: 28 },
        { id: 'venum', label: 'Venum', count: 22 },
        { id: 'title', label: 'Title Boxing', count: 19 }
      ]
    },
    {
      id: 'size',
      title: 'Размер',
      type: 'checkbox',
      options: [
        { id: 'xs', label: 'XS', count: 12 },
        { id: 's', label: 'S', count: 28 },
        { id: 'm', label: 'M', count: 45 },
        { id: 'l', label: 'L', count: 38 },
        { id: 'xl', label: 'XL', count: 25 },
        { id: 'xxl', label: 'XXL', count: 14 }
      ]
    },
    {
      id: 'color',
      title: 'Цвет',
      type: 'checkbox',
      options: [
        { id: 'red', label: 'Красный', count: 42 },
        { id: 'black', label: 'Черный', count: 67 },
        { id: 'white', label: 'Белый', count: 33 },
        { id: 'blue', label: 'Синий', count: 28 },
        { id: 'gray', label: 'Серый', count: 21 }
      ]
    }
  ];

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const handleFilterChange = (groupId: string, optionId: string, checked: boolean) => {
    setSelectedFilters(prev => {
      const groupFilters = prev[groupId] || [];
      const newFilters = checked 
        ? [...groupFilters, optionId]
        : groupFilters.filter((id: string) => id !== optionId);
      
      const updated = { ...prev, [groupId]: newFilters };
      onFiltersChange(updated);
      return updated;
    });
  };

  const clearAllFilters = () => {
    setSelectedFilters({});
    setPriceRange({ min: 0, max: 50000 });
    onFiltersChange({});
  };

  const getActiveFilterCount = () => {
    return Object.values(selectedFilters).reduce((count: number, filters: any) => {
      return count + (Array.isArray(filters) ? filters.length : 0);
    }, 0);
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Mobile Overlay */}
      <div 
        className="fixed inset-0 bg-black/50 z-40 lg:hidden"
        onClick={onClose}
      />
      
      {/* Filters Sidebar */}
      <div className={`
        fixed lg:static top-0 left-0 h-full w-80 bg-white z-50 shadow-xl lg:shadow-none
        transform transition-transform lg:transform-none
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b lg:hidden">
          <div className="flex items-center space-x-2">
            <Filter className="w-5 h-5 text-primary" />
            <h2 className="text-lg font-semibold">
              Фильтры {getActiveFilterCount() > 0 && `(${getActiveFilterCount()})`}
            </h2>
          </div>
          <button 
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Desktop Header */}
        <div className="hidden lg:flex items-center justify-between p-6 border-b">
          <h2 className="text-lg font-semibold">
            Фильтры {getActiveFilterCount() > 0 && `(${getActiveFilterCount()})`}
          </h2>
          {getActiveFilterCount() > 0 && (
            <Button 
              variant="ghost" 
              size="sm"
              onClick={clearAllFilters}
              className="text-primary hover:text-primary-hover"
            >
              Очистить все
            </Button>
          )}
        </div>

        {/* Filters Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {/* Price Range */}
          <div className="mb-8">
            <button
              onClick={() => toggleSection('price')}
              className="flex items-center justify-between w-full mb-4"
            >
              <h3 className="text-base font-semibold">Цена</h3>
              <ChevronDown className={`w-5 h-5 transition-transform ${
                expandedSections.price ? 'rotate-180' : ''
              }`} />
            </button>
            
            {expandedSections.price && (
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <input
                    type="number"
                    placeholder="От"
                    value={priceRange.min}
                    onChange={(e) => setPriceRange(prev => ({ ...prev, min: parseInt(e.target.value) || 0 }))}
                    className="w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <span className="text-muted-foreground">—</span>
                  <input
                    type="number"
                    placeholder="До"
                    value={priceRange.max}
                    onChange={(e) => setPriceRange(prev => ({ ...prev, max: parseInt(e.target.value) || 50000 }))}
                    className="w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                
                <div className="text-sm text-muted-foreground">
                  {priceRange.min.toLocaleString()}₽ — {priceRange.max.toLocaleString()}₽
                </div>
              </div>
            )}
          </div>

          {/* Filter Groups */}
          {filterGroups.map((group) => (
            <div key={group.id} className="mb-8">
              <button
                onClick={() => toggleSection(group.id)}
                className="flex items-center justify-between w-full mb-4"
              >
                <h3 className="text-base font-semibold">{group.title}</h3>
                <ChevronDown className={`w-5 h-5 transition-transform ${
                  expandedSections[group.id] ? 'rotate-180' : ''
                }`} />
              </button>
              
              {expandedSections[group.id] && (
                <div className="space-y-3 max-h-48 overflow-y-auto">
                  {group.options.map((option) => (
                    <label key={option.id} className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedFilters[group.id]?.includes(option.id) || false}
                        onChange={(e) => handleFilterChange(group.id, option.id, e.target.checked)}
                        className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                      />
                      <span className="flex-1 text-sm">{option.label}</span>
                      {option.count && (
                        <span className="text-xs text-muted-foreground">({option.count})</span>
                      )}
                    </label>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Footer */}
        <div className="p-6 border-t lg:hidden">
          <div className="flex space-x-3">
            <Button
              variant="outline"
              onClick={clearAllFilters}
              className="flex-1"
              disabled={getActiveFilterCount() === 0}
            >
              Очистить
            </Button>
            <Button
              onClick={onClose}
              className="flex-1 bg-primary hover:bg-primary-hover text-white"
            >
              Применить
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductFilters;