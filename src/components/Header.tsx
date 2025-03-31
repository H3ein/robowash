import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from '@/hooks/useTranslation';
import { useNavigation } from '@/hooks/useNavigation';
import LanguageSwitcher from './LanguageSwitcher';
import { Button } from '@/components/ui/button';
import { 
  Menu, 
  X, 
  CircuitBoard, 
  Home, 
  Sparkles, 
  MapPin, 
  CalendarCheck, 
  ShieldCheck,
  Smile 
} from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useTranslation();
  const location = useLocation();
  const { activeLink, handleSmoothScroll } = useNavigation();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { href: '/', label: t('nav.home'), icon: <Home className="h-4 w-4" /> },
    { href: '/#services', label: t('nav.services'), icon: <Sparkles className="h-4 w-4" /> },
    { href: '/#location', label: t('nav.location'), icon: <MapPin className="h-4 w-4" /> },
    { href: '/#book', label: t('nav.book'), icon: <CalendarCheck className="h-4 w-4" /> },
    { href: '/admin', label: t('nav.admin'), icon: <ShieldCheck className="h-4 w-4" /> }
  ];

  const isLinkActive = (href: string) => {
    return href === activeLink;
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen 
          ? 'bg-[var(--bg-primary)]/98 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link 
            to="/" 
            className="flex items-center gap-3 group"
            onClick={(e) => handleSmoothScroll(e, '/')}
          >
            <div className="bg-gradient-to-r from-robowash-orange to-robowash-red rounded-full p-2 relative overflow-hidden shadow-md group-hover:shadow-lg transition-all">
              <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                <CircuitBoard className="h-10 w-10 text-white/10" />
              </div>
              <div className="relative flex items-center justify-center">
                <Smile className="h-8 w-8 text-robowash-gold" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl md:text-2xl bg-gradient-to-r from-robowash-orange to-robowash-red bg-clip-text text-transparent leading-none group-hover:from-robowash-gold group-hover:to-robowash-orange transition-colors">
                RoboWash
              </span>
              <span className="text-xs text-[var(--text-secondary)]">Smart Automated Cleaning</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-4">
            {navLinks.map((link, index) => {
              const active = isLinkActive(link.href);
              return (
                <Link
                  key={index}
                  to={link.href}
                  aria-current={active ? 'page' : undefined}
                  onClick={(e) => handleSmoothScroll(e, link.href)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-lg font-medium
                   hover:bg-[var(--bg-secondary)] text-[var(--text-primary)] hover:text-robowash-orange 
                   transition-all relative group ${
                    active ? 'text-robowash-orange bg-[var(--bg-secondary)]/70 shadow-sm' : ''
                  }`}
                >
                  <span className={`${active ? 'text-robowash-orange' : 'text-robowash-orange/70 group-hover:text-robowash-orange'}`}>
                    {link.icon}
                  </span>
                  <span>{link.label}</span>
                  {active && (
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-robowash-orange" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden md:block">
              <LanguageSwitcher />
            </div>
            
            <Button 
              variant="outline" 
              size="icon"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
              className="md:hidden text-[var(--text-primary)] hover:bg-[var(--bg-secondary)] border-robowash-orange/20 hover:border-robowash-orange"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5 text-robowash-orange" />
              ) : (
                <Menu className="h-5 w-5 text-robowash-orange" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-[var(--bg-primary)]/98 backdrop-blur-md animate-in border-t border-[var(--bg-tertiary)] shadow-lg">
          <div className="container mx-auto px-4 py-5">
            <nav className="flex flex-col gap-3">
              {navLinks.map((link, index) => {
                const active = isLinkActive(link.href);
                return (
                  <Link
                    key={index}
                    to={link.href}
                    aria-current={active ? 'page' : undefined}
                    onClick={(e) => {
                      handleSmoothScroll(e, link.href);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg
                      hover:bg-[var(--bg-secondary)] text-[var(--text-primary)] transition-all
                      active:scale-[0.98] ${
                      active
                        ? 'font-medium text-robowash-orange bg-[var(--bg-secondary)]/70 shadow-sm' 
                        : ''
                    }`}
                  >
                    <span className={`text-robowash-orange ${active ? '' : 'opacity-70'}`}>
                      {link.icon}
                    </span>
                    <span className="text-base">{link.label}</span>
                  </Link>
                );
              })}
              <div className="pt-4 mt-2 border-t border-[var(--bg-tertiary)] flex justify-center">
                <LanguageSwitcher />
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
