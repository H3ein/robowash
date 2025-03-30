
import React, { useState } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import OccupancyStatus from '@/components/OccupancyStatus';
import Map from '@/components/Map';
import ServiceCard from '@/components/ServiceCard';
import ReservationForm from '@/components/ReservationForm';
import Reviews from '@/components/Reviews';
import ReviewForm from '@/components/ReviewForm';
import { Button } from '@/components/ui/button';
import { Car, Droplets, Sparkles, Brush } from 'lucide-react';
import { OccupancyLevel } from '@/components/OccupancyStatus';

const Index: React.FC = () => {
  const { t } = useTranslation();
  const [occupancyLevel] = useState<OccupancyLevel>('low');
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-br from-wash-light via-blue-50 to-wash-light">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left animate-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-wash-blue to-wash-teal bg-clip-text text-transparent leading-tight">
                Premium Car Wash <span className="block mt-2">Experience</span>
              </h1>
              <p className="text-lg text-wash-gray mb-8 max-w-md mx-auto md:mx-0">
                We make your car shine like new with our premium washing services and skilled team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-wash-blue to-wash-teal hover:from-wash-teal hover:to-wash-blue text-white shadow-lg hover:shadow-xl transition-all"
                  asChild
                >
                  <a href="#book">
                    {t('nav.book')}
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-wash-blue text-wash-blue hover:bg-wash-blue hover:text-white transition-colors"
                  asChild
                >
                  <a href="#services">
                    {t('nav.services')}
                  </a>
                </Button>
              </div>
            </div>
            
            <div className="flex justify-center animate-in">
              <OccupancyStatus level={occupancyLevel} />
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-in">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-wash-blue to-wash-teal bg-clip-text text-transparent">{t('services.title')}</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-wash-blue to-wash-teal mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard 
              title={t('services.basic.title')}
              description={t('services.basic.description')}
              price="$15"
              icon={<Droplets className="h-6 w-6" />}
            />
            
            <ServiceCard 
              title={t('services.premium.title')}
              description={t('services.premium.description')}
              price="$25"
              icon={<Sparkles className="h-6 w-6" />}
            />
            
            <ServiceCard 
              title={t('services.deluxe.title')}
              description={t('services.deluxe.description')}
              price="$40"
              icon={<Brush className="h-6 w-6" />}
            />
          </div>
        </div>
      </section>
      
      {/* Booking Section */}
      <section id="book" className="py-16 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-wash-light opacity-50 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 animate-in">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-wash-blue to-wash-teal bg-clip-text text-transparent">{t('reservation.title')}</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-wash-blue to-wash-teal mx-auto rounded-full"></div>
          </div>
          
          <div className="max-w-lg mx-auto">
            <ReservationForm />
          </div>
        </div>
      </section>
      
      {/* Reviews Section */}
      <section id="reviews" className="py-16 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-wash-light opacity-50 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 animate-in">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-wash-blue to-wash-teal bg-clip-text text-transparent">{t('reviews.title')}</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-wash-blue to-wash-teal mx-auto rounded-full"></div>
          </div>
          
          <Reviews />
          
          <div className="max-w-lg mx-auto mt-16 bg-white rounded-xl shadow-xl p-8 backdrop-blur-sm bg-white/90">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2 text-wash-blue">{t('reviews.leaveReview')}</h3>
              <div className="w-12 h-1 bg-wash-blue mx-auto rounded-full"></div>
            </div>
            <ReviewForm />
          </div>
        </div>
      </section>
      
      {/* Location Map Section */}
      <section id="location" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-in">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-wash-blue to-wash-teal bg-clip-text text-transparent">{t('location.title')}</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-wash-blue to-wash-teal mx-auto rounded-full"></div>
          </div>
          
          <Map />
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
