import React from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { useNavigation } from '@/hooks/useNavigation';
import { 
  Car, 
  Facebook, 
  Instagram, 
  Twitter, 
  Droplets, 
  CircuitBoard,
  Home,
  Sparkles,
  MapPin,
  CalendarCheck,
  ShieldCheck,
  Mail,
  Phone,
  Clock
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  const { activeLink, handleSmoothScroll } = useNavigation();
  
  // Same links as header for consistency
  const footerLinks = [
    { href: '/', label: t('nav.home'), icon: <Home className="h-4 w-4" /> },
    { href: '/#services', label: t('nav.services'), icon: <Sparkles className="h-4 w-4" /> },
    { href: '/#location', label: t('nav.location'), icon: <MapPin className="h-4 w-4" /> },
    { href: '/#book', label: t('nav.book'), icon: <CalendarCheck className="h-4 w-4" /> },
    { href: '/admin', label: t('nav.admin'), icon: <ShieldCheck className="h-4 w-4" /> }
  ];

  // Helper to check if a link is active
  const isLinkActive = (href: string) => {
    return href === activeLink;
  };

  return (
    <footer className="bg-[var(--bg-tertiary)] text-[var(--text-primary)] pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo and description */}
          <div>
            <Link 
              to="/" 
              className="flex items-center gap-2 mb-4"
              onClick={(e) => handleSmoothScroll(e, '/')}
            >
              <div className="bg-gradient-to-r from-wash-blue to-wash-teal rounded-full p-2 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                  <CircuitBoard className="h-8 w-8 text-white/10" />
                </div>
                <div className="relative flex items-center justify-center">
                  <Car className="h-5 w-5 text-white" />
                  <Droplets className="h-2.5 w-2.5 text-white absolute -top-1 right-0" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl text-[var(--text-primary)] leading-none">
                  RoboWash
                </span>
                <span className="text-xs text-[var(--text-secondary)]">Smart Automated Cleaning</span>
              </div>
            </Link>
            <p className="text-[var(--text-secondary)] mb-4">
              Experience the future of car washing with our advanced automated cleaning technology. Fast, consistent, and environmentally friendly.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-[var(--text-secondary)] hover:text-wash-blue transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-[var(--text-secondary)] hover:text-wash-blue transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-[var(--text-secondary)] hover:text-wash-blue transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href} 
                    onClick={(e) => handleSmoothScroll(e, link.href)}
                    className={`flex items-center gap-2 py-1 transition-colors ${
                      isLinkActive(link.href) 
                        ? 'text-wash-blue font-medium' 
                        : 'text-[var(--text-secondary)] hover:text-wash-blue'
                    }`}
                  >
                    <span className="text-wash-blue">{link.icon}</span>
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <address className="not-italic text-[var(--text-secondary)]">
              <div className="flex items-start gap-2 mb-2">
                <MapPin className="h-4 w-4 text-wash-blue mt-1 flex-shrink-0" />
                <p>{t('location.address')}</p>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <Mail className="h-4 w-4 text-wash-blue flex-shrink-0" />
                <p>info@robowash.tech</p>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <Phone className="h-4 w-4 text-wash-blue flex-shrink-0" />
                <p>+1 (555) 123-4567</p>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-wash-blue flex-shrink-0" />
                <p>{t('location.hours')}</p>
              </div>
            </address>
          </div>
        </div>
        
        {/* Bottom bar */}
        <div className="pt-6 border-t border-[var(--bg-secondary)] text-sm text-[var(--text-secondary)] flex flex-col md:flex-row justify-between items-center">
          <p>© {currentYear} RoboWash. {t('footer.rights')}</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-wash-blue transition-colors">
              {t('footer.privacy')}
            </Link>
            <Link to="/terms" className="hover:text-wash-blue transition-colors">
              {t('footer.terms')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
