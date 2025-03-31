
import React from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { useNavigation } from '@/hooks/useNavigation';
import { 
  Car, 
  Facebook, 
  Instagram, 
  Twitter, 
  Home,
  Sparkles,
  MapPin,
  CalendarCheck,
  ShieldCheck,
  Mail,
  Phone,
  Clock,
  Smile
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
    <footer className="bg-gray-50 text-gray-700 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Logo and description */}
          <div>
            <Link 
              to="/" 
              className="flex items-center gap-2 mb-4"
              onClick={(e) => handleSmoothScroll(e, '/')}
            >
              <div className="bg-amber-400 rounded-full p-2 relative overflow-hidden">
                <div className="relative flex items-center justify-center">
                  <Smile className="h-6 w-6 text-white" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl text-gray-800 leading-none">
                  RoboWash
                </span>
                <span className="text-xs text-gray-500">Smart Automated Cleaning</span>
              </div>
            </Link>
            <p className="text-gray-500 mb-4">
              Experience the future of car washing with our advanced automated cleaning technology. Fast, consistent, and environmentally friendly.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-amber-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-amber-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-amber-500 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-gray-800">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href} 
                    onClick={(e) => handleSmoothScroll(e, link.href)}
                    className={`flex items-center gap-2 py-1 transition-colors ${
                      isLinkActive(link.href) 
                        ? 'text-amber-500 font-medium' 
                        : 'text-gray-500 hover:text-amber-500'
                    }`}
                  >
                    <span className="text-amber-400">{link.icon}</span>
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-gray-800">Contact Us</h3>
            <address className="not-italic text-gray-500">
              <div className="flex items-start gap-2 mb-3">
                <MapPin className="h-4 w-4 text-amber-500 mt-1 flex-shrink-0" />
                <p>{t('location.address')}</p>
              </div>
              <div className="flex items-center gap-2 mb-3">
                <Mail className="h-4 w-4 text-amber-500 flex-shrink-0" />
                <p>info@robowash.tech</p>
              </div>
              <div className="flex items-center gap-2 mb-3">
                <Phone className="h-4 w-4 text-amber-500 flex-shrink-0" />
                <p>+1 (555) 123-4567</p>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-amber-500 flex-shrink-0" />
                <p>{t('location.hours')}</p>
              </div>
            </address>
          </div>
        </div>
        
        {/* Bottom bar */}
        <div className="pt-6 border-t border-gray-200 text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center">
          <p>© {currentYear} RoboWash. {t('footer.rights')}</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-amber-500 transition-colors">
              {t('footer.privacy')}
            </Link>
            <Link to="/terms" className="hover:text-amber-500 transition-colors">
              {t('footer.terms')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
