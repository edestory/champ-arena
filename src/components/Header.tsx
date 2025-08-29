import { useState } from 'react';
import { Search, ShoppingCart, Menu, X, Phone, Mail, Instagram, MessageCircle, Youtube, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navigationItems = [
    { name: 'HOME', href: '#home' },
    { 
      name: 'PROGRAMS', 
      href: '#programs',
      dropdown: [
        { name: 'Boxing Training', href: '#boxing' },
        { name: 'Wrestling Classes', href: '#wrestling' },
        { name: 'Kids Programs (6-12)', href: '#kids' },
        { name: 'Teen Programs (13-17)', href: '#teens' },
        { name: 'Adult Programs (18+)', href: '#adults' }
      ]
    },
    { 
      name: 'COACHES', 
      href: '#coaches',
      dropdown: [
        { name: 'Meet Our Team', href: '#coaches' },
        { name: 'Head Coach Profile', href: '#head-coach' },
        { name: 'Specialized Trainers', href: '#trainers' }
      ]
    },
    { 
      name: 'SCHEDULE', 
      href: '#schedule',
      dropdown: [
        { name: 'Class Timetable', href: '#schedule' },
        { name: 'Personal Training', href: '#personal' },
        { name: 'Group Sessions', href: '#groups' }
      ]
    },
    { 
      name: 'SHOP', 
      href: '#shop',
      dropdown: [
        { name: 'Boxing Gear', href: '#boxing-gear' },
        { name: 'Wrestling Equipment', href: '#wrestling-gear' },
        { name: 'EDESTORY Apparel', href: '#apparel' },
        { name: 'Training Accessories', href: '#accessories' },
        { name: 'Nutrition & Supplements', href: '#nutrition' }
      ]
    },
    { name: 'GALLERY', href: '#gallery' },
    { name: 'CONTACT', href: '#contact' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg">
      {/* Top Info Bar */}
      <div className="bg-primary-dark text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>info@edestory.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>+7 (495) 123-45-67</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <span className="hidden md:inline">Follow Us:</span>
            <div className="flex space-x-3">
              <Instagram className="w-4 h-4 hover:text-primary-light cursor-pointer transition-colors" />
              <MessageCircle className="w-4 h-4 hover:text-primary-light cursor-pointer transition-colors" />
              <Youtube className="w-4 h-4 hover:text-primary-light cursor-pointer transition-colors" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">E</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-primary">EDESTORY</h1>
                <p className="text-xs text-muted-foreground tracking-wider">SPORTS ACADEMY</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <div
                  key={item.name}
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <a
                    href={item.href}
                    className="flex items-center space-x-1 text-sm font-medium text-secondary hover:text-primary transition-colors py-2 border-b-2 border-transparent hover:border-primary"
                  >
                    <span>{item.name}</span>
                    {item.dropdown && <ChevronDown className="w-4 h-4" />}
                  </a>
                  
                  {/* Dropdown Menu */}
                  {item.dropdown && activeDropdown === item.name && (
                    <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-border py-2 z-50">
                      {item.dropdown.map((subItem) => (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-secondary hover:text-primary hover:bg-accent transition-colors"
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              {/* Search */}
              <button className="p-2 text-secondary hover:text-primary transition-colors">
                <Search className="w-5 h-5" />
              </button>

              {/* Shopping Cart */}
              <button className="relative p-2 text-secondary hover:text-primary transition-colors">
                <ShoppingCart className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-white text-xs rounded-full flex items-center justify-center">
                  3
                </span>
              </button>

              {/* CTA Button */}
              <Button 
                onClick={() => scrollToSection('contact')}
                className="hidden md:flex bg-primary hover:bg-primary-hover text-white px-6 py-2 font-semibold shadow-red transition-all hover:shadow-lg"
              >
                Free Trial
              </Button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 text-secondary hover:text-primary transition-colors"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-b border-border shadow-lg">
          <div className="container mx-auto px-4 py-4">
            {/* Mobile CTA */}
            <div className="mb-4">
              <Button 
                onClick={() => scrollToSection('contact')}
                className="w-full bg-primary hover:bg-primary-hover text-white py-3 font-semibold"
              >
                Start Your Free Trial
              </Button>
            </div>

            {/* Mobile Navigation */}
            <nav className="space-y-4">
              {navigationItems.map((item) => (
                <div key={item.name} className="border-b border-border pb-4">
                  <a
                    href={item.href}
                    className="block text-lg font-medium text-secondary hover:text-primary py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                  {item.dropdown && (
                    <div className="ml-4 mt-2 space-y-2">
                      {item.dropdown.map((subItem) => (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          className="block text-sm text-muted-foreground hover:text-primary py-1"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Mobile Contact Info */}
            <div className="mt-6 pt-4 border-t border-border">
              <div className="flex flex-col space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>info@edestory.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>+7 (495) 123-45-67</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;