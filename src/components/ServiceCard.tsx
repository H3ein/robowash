
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
    <div className="glass-effect rounded-2xl shadow-xl overflow-hidden group hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-1 border border-[var(--bg-tertiary)] flex flex-col">
      <div className="absolute inset-0 bg-gradient-to-tr from-robowash-orange/5 to-robowash-gold/5 z-0"></div>
      
      <div className="p-8 pb-6 relative z-10 flex-grow">
        <div className="mb-6 bg-gradient-to-r from-robowash-orange/10 to-robowash-gold/10 rounded-full w-16 h-16 flex items-center justify-center text-robowash-orange group-hover:bg-robowash-orange group-hover:text-white transition-colors duration-300 shadow-lg">
          {icon}
        </div>
        
        <h3 className="text-xl font-semibold mb-3 text-[var(--text-primary)] group-hover:text-robowash-orange transition-colors">{title}</h3>
        <p className="text-[var(--text-secondary)] mb-5">{description}</p>
        
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-xs text-[var(--text-secondary)] uppercase tracking-wide font-semibold">{t('services.startingAt').toUpperCase()}</span>
            <span className="text-2xl font-bold bg-gradient-to-r from-robowash-orange to-robowash-gold bg-clip-text text-transparent">{price}</span>
          </div>
          
          <Link 
            to="/#book" 
            onClick={(e) => handleSmoothScroll(e, '/#book')}
            className="flex items-center text-robowash-orange hover:text-robowash-red transition-colors group-hover:scale-105 transform transition-transform duration-300"
          >
            <span className="mr-2 text-sm font-medium">{t('services.book')}</span>
            <div className="bg-robowash-orange/20 rounded-full p-1.5 group-hover:bg-robowash-orange group-hover:text-white transition-colors">
              <ArrowRight className="h-4 w-4" />
            </div>
          </Link>
        </div>
      </div>
      
      <div className="h-2 bg-gradient-to-r from-robowash-orange to-robowash-gold relative overflow-hidden w-full mt-auto">
        <div className="absolute inset-0 bg-white/20 animate-water-flow"></div>
      </div>
    </div>
  );
};

export default ServiceCard;
