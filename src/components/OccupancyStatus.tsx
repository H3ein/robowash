
import React from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { ArrowDown, ArrowRight, ArrowUp, Clock } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

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
          icon: <ArrowDown className="h-8 w-8 text-white" />,
          color: 'bg-occupancy-low',
          textColor: 'text-occupancy-low',
          text: t('occupancy.low'),
          waitTime: '5-10',
          progress: 30
        };
      case 'medium':
        return {
          icon: <ArrowRight className="h-8 w-8 text-white" />,
          color: 'bg-occupancy-medium',
          textColor: 'text-occupancy-medium',
          text: t('occupancy.medium'),
          waitTime: '15-20',
          progress: 60
        };
      case 'high':
        return {
          icon: <ArrowUp className="h-8 w-8 text-white" />,
          color: 'bg-occupancy-high',
          textColor: 'text-occupancy-high',
          text: t('occupancy.high'),
          waitTime: '30-45',
          progress: 90
        };
      default:
        return {
          icon: <ArrowDown className="h-8 w-8 text-white" />,
          color: 'bg-occupancy-low',
          textColor: 'text-occupancy-low',
          text: t('occupancy.low'),
          waitTime: '5-10',
          progress: 30
        };
    }
  };

  const { icon, color, textColor, text, waitTime, progress } = getStatusInfo();

  return (
    <div className="rounded-2xl shadow-2xl bg-white overflow-hidden transform transition-all hover:scale-105 duration-300">
      <div className="px-8 py-6">
        <div className="flex justify-between items-center mb-5">
          <h3 className="text-xl font-bold bg-gradient-to-r from-wash-blue to-wash-teal bg-clip-text text-transparent">
            {t('occupancy.title')}
          </h3>
          <div className={`${color} p-1 rounded-lg`}>
            <Clock className="h-5 w-5 text-white" />
          </div>
        </div>
        
        <div className="flex items-center justify-center mb-6">
          <div className={`w-24 h-24 rounded-full ${color} flex items-center justify-center animate-pulse-slow shadow-lg relative overflow-hidden`}>
            <div className="absolute inset-0 bg-white/20 animate-spin-slow"></div>
            {icon}
          </div>
        </div>
        
        <div className="text-center mb-6">
          <p className={`text-2xl font-bold ${textColor} mb-2`}>{text}</p>
          <p className="text-wash-gray">
            {t('occupancy.estimated')} <span className="font-semibold">{waitTime}</span> {t('occupancy.minutes')}
          </p>
        </div>
        
        <div className="space-y-3">
          <div className="flex justify-between text-sm text-wash-gray">
            <span>{t('occupancy.status')}</span>
            <span className={textColor}>{text}</span>
          </div>
          <Progress 
            value={progress} 
            className="h-2 bg-gray-100" 
            indicatorClassName={color}
          />
        </div>
      </div>
      
      <div className="bg-water-gradient h-3"></div>
    </div>
  );
};

export default OccupancyStatus;
