import { Phone, Mail, MapPin, Clock, Instagram, MessageCircle, Youtube } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-secondary text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Mission */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">E</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">EDESTORY</h3>
                <p className="text-xs text-white/70 tracking-wider">{t('footer.tagline')}</p>
              </div>
            </div>
            
            <p className="text-white/80 leading-relaxed mb-6">
              {t('footer.mission')}
            </p>
            
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-colors"
                aria-label="Telegram"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Training Links */}
          <div>
            <h4 className="font-bold text-lg text-white mb-6">{t('footer.training.title')}</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('programs')}
                  className="text-white/80 hover:text-white transition-colors text-left"
                >
                  {t('footer.training.boxing')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('programs')}
                  className="text-white/80 hover:text-white transition-colors text-left"
                >
                  {t('footer.training.wrestling')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('programs')}
                  className="text-white/80 hover:text-white transition-colors text-left"
                >
                  {t('footer.training.kids')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('programs')}
                  className="text-white/80 hover:text-white transition-colors text-left"
                >
                  {t('footer.training.fitness')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('booking')}
                  className="text-white/80 hover:text-white transition-colors text-left"
                >
                  {t('footer.training.personal')}
                </button>
              </li>
            </ul>

            <h5 className="font-bold text-white mt-6 mb-4">{t('footer.about.title')}</h5>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-white/80 hover:text-white transition-colors text-left"
                >
                  {t('footer.about.story')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('coaches')}
                  className="text-white/80 hover:text-white transition-colors text-left"
                >
                  {t('footer.about.coaches')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('facilities')}
                  className="text-white/80 hover:text-white transition-colors text-left"
                >
                  {t('footer.about.facilities')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('gallery')}
                  className="text-white/80 hover:text-white transition-colors text-left"
                >
                  {t('footer.about.success')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('blog')}
                  className="text-white/80 hover:text-white transition-colors text-left"
                >
                  {t('footer.about.blog')}
                </button>
              </li>
            </ul>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="font-bold text-lg text-white mb-6">{t('footer.shop.title')}</h4>
            <ul className="space-y-3">
              <li>
                <a href="/shop/boxing" className="text-white/80 hover:text-white transition-colors">
                  {t('footer.shop.boxing')}
                </a>
              </li>
              <li>
                <a href="/shop/wrestling" className="text-white/80 hover:text-white transition-colors">
                  {t('footer.shop.wrestling')}
                </a>
              </li>
              <li>
                <a href="/shop/apparel" className="text-white/80 hover:text-white transition-colors">
                  {t('footer.shop.apparel')}
                </a>
              </li>
              <li>
                <a href="/shop/accessories" className="text-white/80 hover:text-white transition-colors">
                  {t('footer.shop.accessories')}
                </a>
              </li>
              <li>
                <a href="/shop/supplements" className="text-white/80 hover:text-white transition-colors">
                  {t('footer.shop.supplements')}
                </a>
              </li>
            </ul>

            <h5 className="font-bold text-white mt-6 mb-4">{t('footer.services.title')}</h5>
            <ul className="space-y-3">
              <li className="text-white/80">{t('footer.services.guide')}</li>
              <li className="text-white/80">{t('footer.services.shipping')}</li>
              <li className="text-white/80">{t('footer.services.returns')}</li>
              <li className="text-white/80">{t('footer.services.discounts')}</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg text-white mb-6">{t('footer.contact.title')}</h4>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-medium">{t('footer.contact.location')}</p>
                  <p className="text-white/80 text-sm">{t('footer.contact.address')}</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-medium">{t('footer.contact.phone')}</p>
                  <p className="text-white/80 text-sm">WhatsApp: +7 (999) 876-54-32</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-medium">{t('footer.contact.email')}</p>
                  <p className="text-white/80 text-sm">{t('footer.contact.emergency')}</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-medium">{t('footer.contact.hours.title')}</p>
                  <div className="text-white/80 text-sm">
                    <p>{t('footer.contact.hours.weekdays')}</p>
                    <p>{t('footer.contact.hours.saturday')}</p>
                    <p>{t('footer.contact.hours.sunday')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-white/60 text-sm text-center md:text-left">
              {t('footer.copyright')}
            </div>
            <div className="flex flex-wrap gap-6 text-sm">
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                {t('footer.legal.privacy')}
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                {t('footer.legal.terms')}
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                {t('footer.legal.cookies')}
              </a>
            </div>
          </div>
          
          <div className="text-center mt-4">
            <p className="text-white/60 text-xs">
              {t('footer.certification')}
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Accent Line */}
      <div className="h-2 bg-gradient-primary"></div>
    </footer>
  );
};

export default Footer;