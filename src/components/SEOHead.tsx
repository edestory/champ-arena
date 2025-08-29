import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { 
  MetaConfig, 
  OpenGraphConfig, 
  TwitterConfig, 
  BreadcrumbItem,
  generateMeta, 
  generateOpenGraph, 
  generateTwitterCard,
  generateBreadcrumbSchema,
  generateOrganizationSchema,
  generateWebSiteSchema,
  generateOGImageUrl,
  injectStructuredData,
  SITE_CONFIG
} from '@/lib/seo';

interface SEOHeadProps {
  meta: MetaConfig;
  og?: Partial<OpenGraphConfig>;
  twitter?: Partial<TwitterConfig>;
  breadcrumbs?: BreadcrumbItem[];
  structuredData?: object[];
}

const SEOHead: React.FC<SEOHeadProps> = ({ 
  meta, 
  og, 
  twitter, 
  breadcrumbs = [],
  structuredData = []
}) => {
  const location = useLocation();
  const currentUrl = `${SITE_CONFIG.url}${location.pathname}`;

  useEffect(() => {
    // Update document title
    document.title = meta.title;

    // Update meta tags
    const metaTags = generateMeta({
      ...meta,
      canonical: meta.canonical || currentUrl
    });

    // Update existing meta tags or create new ones
    updateMetaTag('description', metaTags.description);
    updateMetaTag('keywords', metaTags.keywords || '');
    updateMetaTag('robots', metaTags.robots);
    updateLinkTag('canonical', metaTags.canonical);

    // Generate OG image URL
    const ogImageUrl = generateOGImageUrl({
      title: meta.title,
      subtitle: meta.description
    });

    // Open Graph tags
    if (og) {
      const ogTags = generateOpenGraph({
        title: og.title || meta.title,
        description: og.description || meta.description,
        image: og.image || ogImageUrl,
        url: og.url || currentUrl,
        type: og.type || 'website',
        ...og
      });

      Object.entries(ogTags).forEach(([property, content]) => {
        updateMetaProperty(property, content?.toString() || '');
      });
    }

    // Twitter Card tags
    if (twitter) {
      const twitterTags = generateTwitterCard({
        title: twitter.title || meta.title,
        description: twitter.description || meta.description,
        image: twitter.image || ogImageUrl,
        ...twitter
      });

      Object.entries(twitterTags).forEach(([name, content]) => {
        updateMetaName(name, content);
      });
    }

    // Structured Data
    const schemas = [
      generateOrganizationSchema(),
      generateWebSiteSchema(),
      ...structuredData
    ];

    if (breadcrumbs.length > 0) {
      schemas.push(generateBreadcrumbSchema(breadcrumbs));
    }

    // Clear existing structured data
    document.querySelectorAll('script[type="application/ld+json"]').forEach(script => {
      if (script.getAttribute('data-auto-generated') === 'true') {
        script.remove();
      }
    });

    // Inject new structured data
    schemas.forEach(schema => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-auto-generated', 'true');
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
    });

  }, [meta, og, twitter, breadcrumbs, structuredData, currentUrl]);

  return null;
};

// Helper functions
const updateMetaTag = (name: string, content: string) => {
  let meta = document.querySelector(`meta[name="${name}"]`);
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute('name', name);
    document.head.appendChild(meta);
  }
  meta.setAttribute('content', content);
};

const updateMetaProperty = (property: string, content: string) => {
  let meta = document.querySelector(`meta[property="${property}"]`);
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute('property', property);
    document.head.appendChild(meta);
  }
  meta.setAttribute('content', content);
};

const updateMetaName = (name: string, content: string) => {
  let meta = document.querySelector(`meta[name="${name}"]`);
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute('name', name);
    document.head.appendChild(meta);
  }
  meta.setAttribute('content', content);
};

const updateLinkTag = (rel: string, href: string) => {
  let link = document.querySelector(`link[rel="${rel}"]`);
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', rel);
    document.head.appendChild(link);
  }
  link.setAttribute('href', href);
};

export default SEOHead;