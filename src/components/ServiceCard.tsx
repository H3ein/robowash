
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

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
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-all">
      <div className="p-6">
        <div className="mb-4 bg-wash-light rounded-full w-12 h-12 flex items-center justify-center text-wash-blue group-hover:bg-wash-blue group-hover:text-white transition-colors">
          {icon}
        </div>
        
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-wash-gray mb-3">{description}</p>
        
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold">{price}</span>
          
          <Link 
            to="/#book" 
            className="flex items-center text-wash-blue hover:text-wash-teal transition-colors"
          >
            <span className="mr-1 text-sm">Book</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
      
      <div className="h-1 bg-gradient-to-r from-wash-blue to-wash-teal"></div>
    </div>
  );
};

export default ServiceCard;
