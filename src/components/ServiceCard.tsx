
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';
import { useNavigation } from '@/hooks/useNavigation';

interface ServiceCardProps {
  title: string;
  description: string;
  price: string;
  icon: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  description, 
  price,
  icon
}) => {
  const { t } = useTranslation();
  const { handleSmoothScroll } = useNavigation();
  
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 flex flex-col">
      <div className="p-6 relative z-10 flex-grow">
        <div className="mb-6 bg-amber-100 rounded-full w-16 h-16 flex items-center justify-center text-amber-500 group-hover:bg-amber-500 group-hover:text-white transition-colors duration-300">
          {icon}
        </div>
        
        <h3 className="text-xl font-semibold mb-3 text-gray-800 group-hover:text-amber-500 transition-colors">{title}</h3>
        <p className="text-gray-600 mb-5">{description}</p>
        
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-xs text-gray-500 uppercase tracking-wide font-semibold">{t('services.startingAt').toUpperCase()}</span>
            <span className="text-2xl font-bold text-amber-500">{price}</span>
          </div>
          
          <Link 
            to="/#book" 
            onClick={(e) => handleSmoothScroll(e, '/#book')}
            className="flex items-center text-amber-500 hover:text-amber-700 transition-colors group-hover:scale-105 transform transition-transform duration-300"
          >
            <span className="mr-2 text-sm font-medium">{t('services.book')}</span>
            <div className="bg-amber-100 rounded-full p-1.5 group-hover:bg-amber-500 group-hover:text-white transition-colors">
              <ArrowRight className="h-4 w-4" />
            </div>
          </Link>
        </div>
      </div>
      
      <div className="h-1.5 bg-gradient-to-r from-amber-400 to-amber-500 relative overflow-hidden w-full mt-auto"></div>
    </div>
  );
};

export default ServiceCard;
