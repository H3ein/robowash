
import React from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { Star, MessageSquare, User } from 'lucide-react';

interface ReviewProps {
  name: string;
  date: string;
  rating: number;
  comment: string;
}

const ReviewCard: React.FC<ReviewProps> = ({ name, date, rating, comment }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-5 transition-all hover:shadow-lg">
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center">
          <div className="bg-wash-light rounded-full w-10 h-10 flex items-center justify-center text-wash-blue mr-3">
            <User className="h-5 w-5" />
          </div>
          <div>
            <h4 className="font-medium">{name}</h4>
            <p className="text-sm text-gray-500">{date}</p>
          </div>
        </div>
        <div className="flex">
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
      <p className="text-gray-700">{comment}</p>
    </div>
  );
};

const Reviews: React.FC = () => {
  const { t } = useTranslation();
  
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
    }
  ];
  
  return (
    <div>
      <div className="flex items-center mb-8">
        <MessageSquare className="h-6 w-6 mr-2 text-wash-blue" />
        <h2 className="text-3xl font-bold">{t('reviews.title')}</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reviews.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
