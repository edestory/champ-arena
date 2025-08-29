import { ChevronRight, Home } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface BreadcrumbConfig {
  [key: string]: {
    label: string;
    labelEn: string;
  };
}

const breadcrumbConfig: BreadcrumbConfig = {
  '/': { label: 'Главная', labelEn: 'Home' },
  '/shop': { label: 'Магазин', labelEn: 'Shop' },
  '/programs': { label: 'Программы', labelEn: 'Programs' },
  '/coaches': { label: 'Тренеры', labelEn: 'Coaches' },
  '/about': { label: 'О нас', labelEn: 'About' },
  '/contact': { label: 'Контакты', labelEn: 'Contact' },
  '/privacy-policy': { label: 'Политика конфиденциальности', labelEn: 'Privacy Policy' },
  '/terms-of-service': { label: 'Условия использования', labelEn: 'Terms of Service' },
  '/shop/boxing': { label: 'Бокс', labelEn: 'Boxing' },
  '/shop/wrestling': { label: 'Борьба', labelEn: 'Wrestling' },
  '/shop/apparel': { label: 'Одежда', labelEn: 'Apparel' },
  '/shop/accessories': { label: 'Аксессуары', labelEn: 'Accessories' },
  '/shop/protection': { label: 'Защита', labelEn: 'Protection' },
  '/shop/supplements': { label: 'Питание', labelEn: 'Supplements' }
};

interface BreadcrumbsProps {
  customItems?: Array<{
    label: string;
    href?: string;
    active?: boolean;
  }>;
  className?: string;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ customItems, className = '' }) => {
  const location = useLocation();
  
  if (customItems) {
    return (
      <nav className={`mb-8 ${className}`} aria-label="Навигация">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/" className="flex items-center text-muted-foreground hover:text-primary transition-colors">
                  <Home className="w-4 h-4 mr-1" />
                  Главная
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            
            {customItems.map((item, index) => (
              <div key={index} className="flex items-center">
                <BreadcrumbSeparator>
                  <ChevronRight className="w-4 h-4" />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  {item.active || !item.href ? (
                    <BreadcrumbPage className="text-secondary font-medium">
                      {item.label}
                    </BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink asChild>
                      <Link 
                        to={item.href} 
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {item.label}
                      </Link>
                    </BreadcrumbLink>
                  )}
                </BreadcrumbItem>
              </div>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
      </nav>
    );
  }

  // Auto-generate breadcrumbs from current path
  const pathSegments = location.pathname.split('/').filter(Boolean);
  
  if (pathSegments.length === 0) {
    return null; // Don't show breadcrumbs on homepage
  }

  const breadcrumbItems = [];
  let currentPath = '';

  pathSegments.forEach((segment, index) => {
    currentPath += `/${segment}`;
    const config = breadcrumbConfig[currentPath];
    
    if (config) {
      breadcrumbItems.push({
        label: config.label,
        href: currentPath,
        active: index === pathSegments.length - 1
      });
    } else {
      // Fallback for dynamic segments
      breadcrumbItems.push({
        label: segment.charAt(0).toUpperCase() + segment.slice(1),
        href: currentPath,
        active: index === pathSegments.length - 1
      });
    }
  });

  return (
    <nav className={`mb-8 ${className}`} aria-label="Навигация">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/" className="flex items-center text-muted-foreground hover:text-primary transition-colors">
                <Home className="w-4 h-4 mr-1" />
                Главная
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          
          {breadcrumbItems.map((item, index) => (
            <div key={index} className="flex items-center">
              <BreadcrumbSeparator>
                <ChevronRight className="w-4 h-4" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                {item.active ? (
                  <BreadcrumbPage className="text-secondary font-medium">
                    {item.label}
                  </BreadcrumbPage>
                ) : (
                  <BreadcrumbLink asChild>
                    <Link 
                      to={item.href} 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item.label}
                    </Link>
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
            </div>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    </nav>
  );
};

export default Breadcrumbs;