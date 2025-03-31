
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
    <div className="min-h-screen flex flex-col bg-[var(--bg-primary)]">
      <Header />
      
      {/* Hero Section with refined design */}
      <section className="pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-b from-[var(--bg-primary)] to-[var(--bg-secondary)]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left animate-in">
              <div className="flex items-center justify-center md:justify-start mb-4">
                <Smile className="h-12 w-12 text-robowash-gold mr-3" />
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-robowash-orange to-robowash-red bg-clip-text text-transparent leading-tight">
                  RoboWash
                </h1>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[var(--text-primary)]">
                <span className="block">{t('hero.title')}</span>
              </h2>
              <p className="text-lg text-[var(--text-primary)] mb-8 max-w-md mx-auto md:mx-0">
                Experience the future of car washing with our advanced automatic cleaning technology - spotless results every time!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-robowash-orange to-robowash-red hover:from-robowash-red hover:to-robowash-orange text-white shadow-lg hover:shadow-button-hover transition-all"
                  asChild
                >
                  <a href="#book" onClick={(e) => handleSmoothScroll(e, '/#book')}>
                    {t('nav.book')}
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-robowash-orange text-robowash-orange hover:bg-robowash-orange hover:text-white transition-colors"
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
      
      {/* Services Section with refined design */}
      <section id="services" className="py-16 bg-gradient-to-b from-[var(--bg-secondary)] to-[var(--bg-primary)]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-in">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-robowash-orange to-robowash-red bg-clip-text text-transparent">{t('services.title')}</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-robowash-orange to-robowash-red mx-auto rounded-full"></div>
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
      
      {/* Booking Section with refined design */}
      <section id="book" className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-primary)] to-[var(--bg-secondary)] z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 animate-in">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-robowash-orange to-robowash-red bg-clip-text text-transparent">{t('reservation.title')}</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-robowash-orange to-robowash-red mx-auto rounded-full"></div>
          </div>
          
          <div className="max-w-lg mx-auto glass-effect rounded-2xl shadow-xl p-6 border-[var(--bg-tertiary)] warm-glow">
            <ReservationForm />
          </div>
        </div>
      </section>
      
      {/* Reviews Section with refined design */}
      <section id="reviews" className="py-16 bg-gradient-to-b from-[var(--bg-secondary)] to-[var(--bg-primary)] relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 animate-in">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-robowash-orange to-robowash-red bg-clip-text text-transparent">{t('reviews.title')}</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-robowash-orange to-robowash-red mx-auto rounded-full"></div>
          </div>
          
          <Reviews />
          
          <div className="max-w-lg mx-auto mt-16 glass-effect rounded-2xl shadow-xl p-8 border-[var(--bg-tertiary)] warm-glow">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2 text-robowash-orange">{t('reviews.leaveReview')}</h3>
              <div className="w-12 h-1 bg-robowash-orange mx-auto rounded-full"></div>
            </div>
            <ReviewForm />
          </div>
        </div>
      </section>
      
      {/* Location Map Section with refined design */}
      <section id="location" className="py-16 bg-gradient-to-b from-[var(--bg-primary)] to-[var(--bg-secondary)]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-in">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-robowash-orange to-robowash-red bg-clip-text text-transparent">{t('location.title')}</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-robowash-orange to-robowash-red mx-auto rounded-full"></div>
          </div>
          
          <div className="rounded-2xl overflow-hidden shadow-xl border-[var(--bg-tertiary)] warm-glow">
            <Map />
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
