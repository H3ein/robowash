
import React, { useState, useEffect } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { ArrowDown, ArrowRight, ArrowUp, Clock, Car, Droplets, Smile } from 'lucide-react';

export type OccupancyLevel = 'low' | 'medium' | 'high';

interface OccupancyStatusProps {
  level: OccupancyLevel;
}

const OccupancyStatus: React.FC<OccupancyStatusProps> = ({ level }) => {
  const { t } = useTranslation();
  const [isHovering, setIsHovering] = useState(false);
  
  // Subtle background animation effect
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prev) => (prev + 1) % 100);
    }, 50);
    return () => clearInterval(interval);
  }, []);
  
  const getStatusInfo = () => {
    switch (level) {
      case 'low':
        return {
          icon: <ArrowDown className="h-8 w-8 text-white" />,
          color: 'bg-occupancy-low',
          textColor: 'text-occupancy-low',
          bgColor: 'bg-occupancy-bg-low',
          text: t('occupancy.low'),
          waitTime: '5-10',
          gradientFrom: 'from-[#10B981]',
          gradientTo: 'to-[#34D399]',
        };
      case 'medium':
        return {
          icon: <ArrowRight className="h-8 w-8 text-white" />,
          color: 'bg-occupancy-medium',
          textColor: 'text-occupancy-medium',
          bgColor: 'bg-occupancy-bg-medium',
          text: t('occupancy.medium'),
          waitTime: '15-20',
          gradientFrom: 'from-[#F59E0B]',
          gradientTo: 'to-[#FBBF24]',
        };
      case 'high':
        return {
          icon: <ArrowUp className="h-8 w-8 text-white" />,
          color: 'bg-occupancy-high',
          textColor: 'text-occupancy-high',
          bgColor: 'bg-occupancy-bg-high',
          text: t('occupancy.high'),
          waitTime: '30-45',
          gradientFrom: 'from-[#EF4444]',
          gradientTo: 'to-[#F87171]',
        };
      default:
        return {
          icon: <ArrowDown className="h-8 w-8 text-white" />,
          color: 'bg-occupancy-low',
          textColor: 'text-occupancy-low',
          bgColor: 'bg-occupancy-bg-low',
          text: t('occupancy.low'),
          waitTime: '5-10',
          gradientFrom: 'from-[#10B981]',
          gradientTo: 'to-[#34D399]',
        };
    }
  };

  const { icon, color, textColor, bgColor, text, waitTime, gradientFrom, gradientTo } = getStatusInfo();

  return (
    <div 
      className="w-full max-w-sm rounded-[24px] shadow-2xl overflow-hidden transform transition-all duration-500 hover:scale-102 border border-[var(--bg-tertiary)]"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      style={{
        background: 'rgba(255, 255, 255, 0.7)',
        backdropFilter: 'blur(20px)',
        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)'
      }}
    >
      {/* Dynamic background with subtle pattern */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div 
          className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iYSIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVHJhbnNmb3JtPSJyb3RhdGUoNDUpIj48cGF0aCBkPSJNLTEgMzlMNDEgLTFNLTE5IDIxTDIxIC0xOU0yMCAtMUw2MCAtNDEiIHN0cm9rZT0icmdiYSgwLCAwLCAwLCAwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjYSkiLz48L3N2Zz4=')]"
          style={{ transform: `translateX(${offset}px) translateY(${offset/2}px)` }}
        ></div>
      </div>
      
      {/* Top accent line with gradient */}
      <div className={`h-1.5 bg-gradient-to-r ${gradientFrom} ${gradientTo} w-full transition-all duration-500`}></div>
      
      <div className="relative px-8 py-9 z-10">
        {/* Header with floating clock icon */}
        <div className="flex justify-between items-center mb-9">
          <div className="flex flex-col">
            <h3 className="text-[26px] font-bold tracking-tight bg-gradient-to-r from-robowash-orange to-robowash-red bg-clip-text text-transparent">
              {t('occupancy.title')}
            </h3>
            <div className="h-1 w-16 bg-gradient-to-r from-robowash-orange to-robowash-red mt-2 rounded-full"></div>
          </div>
          
          <div className={`bg-gradient-to-br ${gradientFrom} ${gradientTo} p-3 rounded-full shadow-lg transform transition-all duration-500 hover:shadow-xl hover:scale-110 hover:rotate-12`}>
            <Clock className="h-6 w-6 text-white" />
            <div className={`absolute w-full h-full rounded-full -inset-1 animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite] bg-current opacity-10`}></div>
          </div>
        </div>
        
        {/* Main status display with 3D effect */}
        <div className="flex items-center justify-center mb-8 relative">
          {/* Glow effect behind the circle */}
          <div className={`absolute inset-0 ${color} opacity-20 blur-3xl rounded-full transform animate-[pulse_5s_ease-in-out_infinite] scale-50`}></div>
          
          {/* Main circle with gradient */}
          <div className={`w-44 h-44 rounded-full bg-gradient-to-br ${gradientFrom} ${gradientTo} flex items-center justify-center shadow-xl relative overflow-hidden transition-all duration-500 group`}
            style={{ boxShadow: `0 15px 30px -10px ${level === 'low' ? 'rgba(16, 185, 129, 0.4)' : level === 'medium' ? 'rgba(245, 158, 11, 0.4)' : 'rgba(239, 68, 68, 0.4)'}` }}
          >
            {/* Multiple overlay effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent opacity-80"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-black/10 via-transparent to-white/10"></div>
            
            {/* Animated borders */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-full absolute rounded-full border-t-2 border-white/30 animate-[spin_10s_linear_infinite]"></div>
              {isHovering && (
                <div className="w-[90%] h-[90%] absolute rounded-full border-2 border-dashed border-white/20 animate-[spin_15s_linear_infinite_reverse]"></div>
              )}
            </div>
            
            {/* Main icon with drop - Using Car and Smile icon */}
            <div className="relative z-10 flex items-center justify-center transform transition-all duration-700 group-hover:scale-110">
              <div className="relative">
                <Car className="h-20 w-20 text-white drop-shadow-lg" />
                <Smile className="h-12 w-12 text-robowash-gold absolute -top-5 -right-3 drop-shadow-lg" />
              </div>
              <Droplets 
                className="h-9 w-9 text-white/90 absolute -top-6 right-0 drop-shadow-lg" 
                style={{
                  filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))',
                  animation: 'bounce 2s infinite ease-in-out'
                }}
              />
            </div>
          </div>
        </div>
        
        {/* Status information with enhanced typography */}
        <div className="text-center mb-4 relative">
          {/* Subtle background glow */}
          <div className={`absolute w-full h-24 -top-6 inset-x-0 ${bgColor} rounded-full blur-2xl opacity-30`}></div>
          
          {/* Status badge */}
          <div className={`inline-block px-6 py-2 rounded-full ${bgColor} ${textColor} font-bold mb-5 shadow-md`}>
            {text}
          </div>
          
          {/* Wait time with enhanced typography */}
          <div className="flex flex-col items-center">
            <p className="text-[var(--text-secondary)] text-sm mb-2 tracking-wide">
              {t('occupancy.estimated')}
            </p>
            <div className="flex items-end justify-center">
              <span className={`text-4xl font-bold ${textColor} tracking-tight`}>
                {waitTime}
              </span>
              <span className="text-base font-normal text-[var(--text-secondary)] ml-2 mb-1">
                {t('occupancy.minutes')}
              </span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Interactive wave animation at bottom */}
      <div className="relative h-6 overflow-hidden">
        <div className={`absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-r ${gradientFrom} ${gradientTo}`}>
          <div className="absolute inset-0 opacity-30">
            <div className="absolute h-16 w-[200%] top-0 left-0" style={{ 
              background: 'radial-gradient(circle at center top, rgba(255,255,255,0.5) 0%, transparent 70%)',
              backgroundSize: '50px 50px',
              animation: 'water-flow 10s linear infinite'
            }}></div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white/40 to-transparent"></div>
        </div>
      </div>
    </div>
  );
};

export default OccupancyStatus;
