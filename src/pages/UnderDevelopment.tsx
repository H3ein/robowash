import React from 'react';
import { Link } from 'react-router-dom';
import { Car, Droplets, CircuitBoard, Construction, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const UnderDevelopment: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[var(--bg-primary)] to-[var(--bg-secondary)] p-4">
      <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-wash-blue/10 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-wash-teal/10 to-transparent"></div>
      
      <div className="mb-10 animate-pulse-slow">
        <div className="bg-gradient-to-r from-wash-blue to-wash-teal rounded-full p-3 relative overflow-hidden shadow-xl">
          <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
            <CircuitBoard className="h-16 w-16 text-white/10" />
          </div>
          <div className="relative flex items-center justify-center">
            <Car className="h-10 w-10 text-white" />
            <Droplets className="h-5 w-5 text-white absolute -top-2 right-0" />
          </div>
        </div>
      </div>
      
      <div className="glass-panel relative z-10 p-12 rounded-2xl shadow-2xl border border-[var(--bg-tertiary)] text-center max-w-2xl">
        <Construction className="h-20 w-20 mx-auto mb-6 text-wash-blue/90 animate-bounce" />
        
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-wash-blue to-wash-teal bg-clip-text text-transparent">
          Coming Soon
        </h1>
        
        <div className="w-20 h-1 bg-gradient-to-r from-wash-blue to-wash-teal mx-auto rounded-full my-6"></div>
        
        <p className="text-xl text-[var(--text-primary)] mb-8">
          We're working on something amazing for this section. 
          Our automated cleaning robots are currently polishing this page to perfection!
        </p>
        
        <Button 
          size="lg" 
          className="bg-gradient-to-r from-wash-blue to-wash-teal hover:from-wash-teal hover:to-wash-blue text-white shadow-lg hover:shadow-button-hover transition-all"
          asChild
        >
          <Link to="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Return to Home
          </Link>
        </Button>
      </div>
      
      <div className="mt-10 text-center text-[var(--text-secondary)]">
        <p>© {new Date().getFullYear()} RoboWash. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default UnderDevelopment; 