
import React from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { ArrowDown, ArrowRight, ArrowUp } from 'lucide-react';

export type OccupancyLevel = 'low' | 'medium' | 'high';

interface OccupancyStatusProps {
  level: OccupancyLevel;
}

const OccupancyStatus: React.FC<OccupancyStatusProps> = ({ level }) => {
  const { t } = useTranslation();
  
  const getStatusInfo = () => {
    switch (level) {
      case 'low':
        return {
          icon: <ArrowDown className="h-6 w-6" />,
          color: 'bg-occupancy-low',
          textColor: 'text-occupancy-low',
          text: t('occupancy.low'),
          waitTime: '5-10'
        };
      case 'medium':
        return {
          icon: <ArrowRight className="h-6 w-6" />,
          color: 'bg-occupancy-medium',
          textColor: 'text-occupancy-medium',
          text: t('occupancy.medium'),
          waitTime: '15-20'
        };
      case 'high':
        return {
          icon: <ArrowUp className="h-6 w-6" />,
          color: 'bg-occupancy-high',
          textColor: 'text-occupancy-high',
          text: t('occupancy.high'),
          waitTime: '30-45'
        };
      default:
        return {
          icon: <ArrowDown className="h-6 w-6" />,
          color: 'bg-occupancy-low',
          textColor: 'text-occupancy-low',
          text: t('occupancy.low'),
          waitTime: '5-10'
        };
    }
  };

  const { icon, color, textColor, text, waitTime } = getStatusInfo();

  return (
    <div className="rounded-lg shadow-lg bg-white overflow-hidden">
      <div className="px-6 py-5">
        <h3 className="text-lg font-semibold mb-4 text-center">
          {t('occupancy.title')}
        </h3>
        
        <div className="flex items-center justify-center mb-4">
          <div className={`w-16 h-16 rounded-full ${color} flex items-center justify-center animate-pulse-slow`}>
            {icon}
          </div>
        </div>
        
        <div className="text-center">
          <p className={`text-xl font-bold ${textColor}`}>{text}</p>
          <p className="text-sm text-wash-gray mt-2">
            {t('occupancy.estimated')} <span className="font-semibold">{waitTime}</span> {t('occupancy.minutes')}
          </p>
        </div>
      </div>
      
      <div className="bg-water-gradient h-2"></div>
    </div>
  );
};

export default OccupancyStatus;
