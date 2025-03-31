
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
import { Droplets, Sparkles, Brush, Smile } from 'lucide-react';
import { OccupancyLevel } from '@/components/OccupancyStatus';
import { useNavigation } from '@/hooks/useNavigation';

const Index: React.FC = () => {
  const { t } = useTranslation();
  const [occupancyLevel] = useState<OccupancyLevel>('low');
  const { handleSmoothScroll } = useNavigation();
  
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      {/* Hero Section with clean modern design */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left animate-in">
              <div className="flex items-center justify-center md:justify-start mb-6">
                <div className="bg-amber-400 rounded-full p-2 relative overflow-hidden shadow-md mr-3">
                  <Smile className="h-12 w-12 text-white" />
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-amber-500 leading-tight">
                  RoboWash
                </h1>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                <span className="block">{t('hero.title')}</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto md:mx-0">
                Experience the future of car washing with our advanced automatic cleaning technology - spotless results every time!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button 
                  size="lg" 
                  className="bg-amber-500 hover:bg-amber-600 text-white shadow-md hover:shadow-lg transition-all"
                  asChild
                >
                  <a href="#book" onClick={(e) => handleSmoothScroll(e, '/#book')}>
                    {t('nav.book')}
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-amber-500 text-amber-500 hover:bg-amber-50 hover:text-amber-600 transition-colors"
                  asChild
                >
                  <a href="#services" onClick={(e) => handleSmoothScroll(e, '/#services')}>
                    {t('nav.services')}
                  </a>
                </Button>
              </div>
            </div>
            
            {/* Current Status display */}
            <div className="flex justify-center animate-in">
              <OccupancyStatus level={occupancyLevel} />
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section with clean modern design */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-in">
            <h2 className="text-3xl font-bold mb-4 text-amber-500">{t('services.title')}</h2>
            <div className="w-20 h-1 bg-amber-500 mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
              We offer a range of premium car wash services to meet all your cleaning needs. 
              From basic washes to deluxe detailing, we have the perfect option for your vehicle.
            </p>
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
      
      {/* Booking Section with clean modern design */}
      <section id="book" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-in">
            <h2 className="text-3xl font-bold mb-4 text-amber-500">{t('reservation.title')}</h2>
            <div className="w-20 h-1 bg-amber-500 mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
              Schedule your car wash appointment in just a few clicks. Choose your preferred date, 
              time, and service package, and we'll take care of the rest.
            </p>
          </div>
          
          <div className="max-w-lg mx-auto bg-white rounded-xl shadow-md p-8 border border-gray-100">
            <ReservationForm />
          </div>
        </div>
      </section>
      
      {/* Reviews Section with clean modern design */}
      <section id="reviews" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-in">
            <h2 className="text-3xl font-bold mb-4 text-amber-500">{t('reviews.title')}</h2>
            <div className="w-20 h-1 bg-amber-500 mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
              Don't just take our word for it! See what our customers have to say about 
              their RoboWash experience and the quality of our service.
            </p>
          </div>
          
          <Reviews />
          
          <div className="max-w-lg mx-auto mt-16 bg-white rounded-xl shadow-md p-8 border border-gray-100">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2 text-amber-500">{t('reviews.leaveReview')}</h3>
              <div className="w-12 h-1 bg-amber-500 mx-auto rounded-full"></div>
            </div>
            <ReviewForm />
          </div>
        </div>
      </section>
      
      {/* Location Map Section with clean modern design */}
      <section id="location" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-in">
            <h2 className="text-3xl font-bold mb-4 text-amber-500">{t('location.title')}</h2>
            <div className="w-20 h-1 bg-amber-500 mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
              Conveniently located for easy access. Find us easily with the interactive map below,
              and visit us for a premium car wash experience.
            </p>
          </div>
          
          <div className="rounded-xl overflow-hidden shadow-md border border-gray-100">
            <Map />
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
