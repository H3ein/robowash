import React from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { MapPin, Navigation, Clock, Phone, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Map: React.FC = () => {
  const { t } = useTranslation();

  // For an actual implementation, you would use a real API key
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.142047342144!2d2.3354330155502793!3d48.87456397928891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e38f817b073%3A0x48d69c30470e7aeb!2sRoboWash!5e0!3m2!1sen!2sus!4v1621234567890!5m2!1sen!2sus";

  return (
    <div className="rounded-lg overflow-hidden shadow-lg glass-effect">
      <div className="flex flex-col md:flex-row">
        {/* Map section */}
        <div className="w-full md:w-2/3 h-80 md:h-auto">
          <iframe 
            src={mapUrl} 
            className="w-full h-full border-0" 
            loading="lazy"
            title="RoboWash Location Map"
            allowFullScreen
          />
        </div>
        
        {/* Info section */}
        <div className="w-full md:w-1/3 p-6 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4 flex items-center">
              <MapPin className="h-5 w-5 mr-2 text-wash-blue" />
              {t('location.visitUs')}
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-wash-blue mt-1" />
                <p className="text-[var(--text-secondary)]">{t('location.address')}</p>
              </div>
              
              <div className="flex items-start">
                <Clock className="h-5 w-5 mr-3 text-wash-blue mt-1" />
                <p className="text-[var(--text-secondary)]">{t('location.hours')}</p>
              </div>
              
              <div className="flex items-start">
                <Phone className="h-5 w-5 mr-3 text-wash-blue mt-1" />
                <p className="text-[var(--text-secondary)]">+1 (555) 123-4567</p>
              </div>
            </div>
          </div>
          
          <div className="mt-6">
            <Button 
              className="w-full bg-gradient-to-r from-wash-blue to-wash-teal hover:from-wash-teal hover:to-wash-blue text-white"
              onClick={() => window.open('https://www.google.com/maps/dir/?api=1&destination=RoboWash', '_blank')}
            >
              <Navigation className="h-4 w-4 mr-2" />
              {t('location.getDirections')}
            </Button>
            
            <a 
              href="https://maps.google.com/?q=RoboWash" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center mt-3 text-sm text-wash-blue hover:text-wash-teal transition-colors"
            >
              <ExternalLink className="h-3 w-3 mr-1" />
              {t('location.viewLargerMap')}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
