
import React, { useState } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { Star, MessageSquare, User, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface ReviewProps {
  name: string;
  date: string;
  rating: number;
  comment: string;
}

const ReviewCard: React.FC<ReviewProps> = ({ name, date, rating, comment }) => {
  return (
    <Card className="h-full overflow-hidden border-0 shadow-lg transition-all hover:shadow-xl bg-white/90 backdrop-blur-sm">
      <CardContent className="p-6">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <div className="bg-gradient-to-br from-wash-blue to-wash-teal rounded-full w-12 h-12 flex items-center justify-center text-white mr-3 shadow-md">
              <User className="h-6 w-6" />
            </div>
            <div>
              <h4 className="font-bold text-lg">{name}</h4>
              <p className="text-sm text-gray-500">{date}</p>
            </div>
          </div>
          <div className="flex bg-gray-50 rounded-full px-3 py-1 shadow-inner">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
        <div className="bg-gray-50 p-4 rounded-xl shadow-inner">
          <p className="text-gray-700 italic">"{comment}"</p>
        </div>
      </CardContent>
    </Card>
  );
};

const Reviews: React.FC = () => {
  const { t } = useTranslation();
  const [currentPage, setCurrentPage] = useState(0);
  
  const reviews = [
    {
      name: 'John D.',
      date: '2023-10-15',
      rating: 5,
      comment: 'Fantastic service! My car looks brand new after the deluxe wash.'
    },
    {
      name: 'Sarah M.',
      date: '2023-09-28',
      rating: 4,
      comment: 'Great value for money. Quick service and friendly staff.'
    },
    {
      name: 'Mehmet K.',
      date: '2023-09-05',
      rating: 5,
      comment: 'Arabanın içi dışı pırıl pırıl oldu. Kesinlikle tavsiye ederim.'
    },
    {
      name: 'Dmitri P.',
      date: '2023-08-22',
      rating: 4,
      comment: 'Отличный сервис и приятный персонал. Рекомендую.'
    },
    {
      name: 'Emma L.',
      date: '2023-10-02',
      rating: 5,
      comment: 'Best car wash in town! I love how they pay attention to every detail.'
    },
    {
      name: 'Ali Y.',
      date: '2023-09-15',
      rating: 5,
      comment: 'Hızlı servis ve mükemmel sonuç. Kesinlikle tekrar geleceğim.'
    }
  ];
  
  // Display 2 reviews on mobile, 4 on larger screens
  const reviewsPerPage = typeof window !== 'undefined' && window.innerWidth < 768 ? 2 : 4;
  const pageCount = Math.ceil(reviews.length / reviewsPerPage);
  
  const visibleReviews = reviews.slice(
    currentPage * reviewsPerPage,
    (currentPage + 1) * reviewsPerPage
  );
  
  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % pageCount);
  };
  
  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + pageCount) % pageCount);
  };
  
  return (
    <div className="animate-in">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center">
          <div className="bg-gradient-to-r from-wash-blue to-wash-teal rounded-full p-2 mr-3 shadow-md">
            <MessageSquare className="h-6 w-6 text-white" />
          </div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-wash-blue to-wash-teal bg-clip-text text-transparent">
            {t('reviews.title')}
          </h2>
        </div>
        
        {pageCount > 1 && (
          <div className="flex space-x-2">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={prevPage}
              className="rounded-full border-wash-blue hover:bg-wash-blue hover:text-white transition-all"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              onClick={nextPage}
              className="rounded-full border-wash-blue hover:bg-wash-blue hover:text-white transition-all"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        )}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {visibleReviews.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </div>
      
      {pageCount > 1 && (
        <div className="flex justify-center space-x-1 mt-4">
          {[...Array(pageCount)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i)}
              className={`w-2.5 h-2.5 rounded-full ${
                i === currentPage ? 'bg-wash-blue' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Reviews;
