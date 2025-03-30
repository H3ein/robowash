
import React from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { Car, Facebook, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-wash-dark text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo and description */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-gradient-to-r from-wash-blue to-wash-teal rounded-full p-2">
                <Car className="h-5 w-5 text-white" />
              </div>
              <span className="font-bold text-xl">SplashWash</span>
            </div>
            <p className="text-gray-400 mb-4">
              Premium car wash services with attention to detail. Your satisfaction is our priority.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-wash-blue transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-wash-blue transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-wash-blue transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-wash-blue transition-colors">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link to="/#services" className="text-gray-400 hover:text-wash-blue transition-colors">
                  {t('nav.services')}
                </Link>
              </li>
              <li>
                <Link to="/#location" className="text-gray-400 hover:text-wash-blue transition-colors">
                  {t('nav.location')}
                </Link>
              </li>
              <li>
                <Link to="/#book" className="text-gray-400 hover:text-wash-blue transition-colors">
                  {t('nav.book')}
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <address className="not-italic text-gray-400">
              <p>{t('location.address')}</p>
              <p className="mt-2">info@splashwash.com</p>
              <p className="mt-2">+1 (555) 123-4567</p>
              <p className="mt-2">{t('location.hours')}</p>
            </address>
          </div>
        </div>
        
        {/* Bottom bar */}
        <div className="pt-6 border-t border-gray-800 text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center">
          <p>© {currentYear} SplashWash. {t('footer.rights')}</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-wash-blue transition-colors">
              {t('footer.privacy')}
            </a>
            <a href="#" className="hover:text-wash-blue transition-colors">
              {t('footer.terms')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
