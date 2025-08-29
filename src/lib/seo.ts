export interface MetaConfig {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  noindex?: boolean;
}

export interface OpenGraphConfig {
  title: string;
  description: string;
  image: string;
  url: string;
  type?: 'website' | 'article' | 'product';
  locale?: string;
  siteName?: string;
  imageWidth?: number;
  imageHeight?: number;
}

export interface TwitterConfig {
  title: string;
  description: string;
  image: string;
  card?: 'summary' | 'summary_large_image';
}

export interface BreadcrumbItem {
  name: string;
  item: string;
  position: number;
}

export const SITE_CONFIG = {
  name: 'EDESTORY Sports Academy',
  url: 'https://edestory.com',
  defaultImage: 'https://edestory.com/og-image.jpg',
  locale: 'ru_RU',
  alternateLocale: 'en_US'
};

// Generate meta tags
export const generateMeta = (config: MetaConfig) => {
  return {
    title: config.title,
    description: config.description,
    keywords: config.keywords,
    canonical: config.canonical || SITE_CONFIG.url,
    robots: config.noindex ? 'noindex,nofollow' : 'index,follow,max-image-preview:large'
  };
};

// Generate Open Graph tags
export const generateOpenGraph = (config: OpenGraphConfig) => {
  return {
    'og:type': config.type || 'website',
    'og:title': config.title,
    'og:description': config.description,
    'og:image': config.image,
    'og:url': config.url,
    'og:locale': config.locale || SITE_CONFIG.locale,
    'og:site_name': config.siteName || SITE_CONFIG.name,
    'og:image:width': config.imageWidth || 1200,
    'og:image:height': config.imageHeight || 630
  };
};

// Generate Twitter Card tags
export const generateTwitterCard = (config: TwitterConfig) => {
  return {
    'twitter:card': config.card || 'summary_large_image',
    'twitter:title': config.title,
    'twitter:description': config.description,
    'twitter:image': config.image
  };
};

// Generate BreadcrumbList JSON-LD
export const generateBreadcrumbSchema = (items: BreadcrumbItem[]) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map(item => ({
      '@type': 'ListItem',
      position: item.position,
      name: item.name,
      item: item.item
    }))
  };
};

// Organization Schema
export const generateOrganizationSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'SportsActivityLocation',
    name: 'EDESTORY Sports Academy',
    description: 'Профессиональная спортивная академия, специализирующаяся на боксе и борьбе',
    url: 'https://edestory.com',
    logo: 'https://edestory.com/logo.png',
    telephone: '+7 (495) 123-45-67',
    email: 'info@edestory.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Спортивная улица, 25',
      addressLocality: 'Москва',
      postalCode: '119270',
      addressCountry: 'RU'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 55.7558,
      longitude: 37.6176
    },
    openingHours: [
      'Mo-Fr 07:00-21:00',
      'Sa 08:00-20:00',
      'Su 10:00-18:00'
    ],
    sameAs: [
      'https://instagram.com/edestory_academy',
      'https://vk.com/edestory',
      'https://youtube.com/@edestory',
      'https://t.me/edestory_news'
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Спортивные программы',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Бокс для взрослых',
            description: 'Профессиональные тренировки по боксу'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Борьба для взрослых',
            description: 'Классическая и вольная борьба'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Детские программы',
            description: 'Спортивные секции для детей'
          }
        }
      ]
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '156',
      bestRating: '5',
      worstRating: '1'
    }
  };
};

// WebSite Schema with SearchAction
export const generateWebSiteSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'EDESTORY Sports Academy',
    url: 'https://edestory.com',
    description: 'Профессиональная спортивная академия боевых искусств в Москве',
    inLanguage: ['ru-RU', 'en-US'],
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://edestory.com/search?q={search_term_string}',
      'query-input': 'required name=search_term_string'
    },
    publisher: {
      '@type': 'Organization',
      name: 'EDESTORY Sports Academy',
      logo: {
        '@type': 'ImageObject',
        url: 'https://edestory.com/logo.png'
      }
    }
  };
};

// FAQ Schema
export const generateFAQSchema = (faqs: { question: string; answer: string }[]) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };
};

// Product Schema for Shop
export const generateProductSchema = (product: {
  name: string;
  description: string;
  image: string;
  price: number;
  currency: string;
  availability: string;
  brand: string;
  sku: string;
  rating?: number;
  reviewCount?: number;
}) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.image,
    brand: {
      '@type': 'Brand',
      name: product.brand
    },
    sku: product.sku,
    offers: {
      '@type': 'Offer',
      price: product.price,
      priceCurrency: product.currency,
      availability: `https://schema.org/${product.availability}`,
      seller: {
        '@type': 'Organization',
        name: 'EDESTORY Sports Academy'
      }
    },
    ...(product.rating && {
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: product.rating,
        reviewCount: product.reviewCount || 1,
        bestRating: 5,
        worstRating: 1
      }
    })
  };
};

// Generate dynamic OG image URL
export const generateOGImageUrl = (config: {
  title: string;
  subtitle?: string;
  template?: 'default' | 'product' | 'blog' | 'coach';
}) => {
  const params = new URLSearchParams({
    title: config.title,
    ...(config.subtitle && { subtitle: config.subtitle }),
    template: config.template || 'default'
  });
  
  return `https://edestory.com/api/og?${params.toString()}`;
};

// Utility to inject structured data
export const injectStructuredData = (schema: object) => {
  if (typeof window !== 'undefined') {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);
  }
};

// SEO validation helper
export const validateSEO = (config: {
  title: string;
  description: string;
  h1Count: number;
}) => {
  const issues: string[] = [];
  
  if (config.title.length > 60) {
    issues.push(`Title слишком длинный: ${config.title.length} символов (максимум 60)`);
  }
  
  if (config.title.length < 10) {
    issues.push(`Title слишком короткий: ${config.title.length} символов (минимум 10)`);
  }
  
  if (config.description.length > 160) {
    issues.push(`Description слишком длинный: ${config.description.length} символов (максимум 160)`);
  }
  
  if (config.description.length < 50) {
    issues.push(`Description слишком короткий: ${config.description.length} символов (минимум 50)`);
  }
  
  if (config.h1Count !== 1) {
    issues.push(`Найдено ${config.h1Count} тегов H1 (должен быть ровно 1)`);
  }
  
  return {
    isValid: issues.length === 0,
    issues
  };
};