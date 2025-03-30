
import React, { useEffect, useRef } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { MapPin } from 'lucide-react';

const Map: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  useEffect(() => {
    // This is a placeholder for actual Google Maps integration
    // In a real implementation, you would load the Google Maps API
    // and create a map instance here
    
    // For demonstration purposes, we're showing a static map background
    if (mapRef.current) {
      const mapContainer = mapRef.current;
      mapContainer.style.backgroundImage = "url('https://maps.googleapis.com/maps/api/staticmap?center=40.7128,-74.0060&zoom=13&size=600x300&key=YOUR_API_KEY')";
      mapContainer.style.backgroundSize = "cover";
      mapContainer.style.backgroundPosition = "center";
    }
  }, []);

  return (
    <div className="rounded-lg overflow-hidden shadow-lg bg-white">
      <div className="bg-wash-light p-4 border-b">
        <h3 className="text-lg font-semibold flex items-center">
          <MapPin className="h-5 w-5 mr-2 text-wash-blue" />
          {t('location.title')}
        </h3>
      </div>
      
      {/* Map container */}
      <div 
        ref={mapRef} 
        className="h-64 w-full bg-wash-light flex items-center justify-center"
      >
        {/* Fallback content if map doesn't load */}
        <div className="text-center p-6 bg-white/80 rounded-lg">
          <MapPin className="h-8 w-8 mx-auto mb-2 text-wash-blue" />
          <p className="font-medium">{t('location.address')}</p>
          <p className="text-sm text-wash-gray mt-1">{t('location.hours')}</p>
          <a 
            href="https://maps.google.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block mt-3 text-sm text-wash-blue hover:underline"
          >
            {t('location.directions')} →
          </a>
        </div>
      </div>
    </div>
  );
};

export default Map;
