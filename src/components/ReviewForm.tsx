
import React, { useState } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { Star, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const ReviewForm: React.FC = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (rating === 0) {
      toast({
        title: t('reviews.ratingRequired'),
        variant: 'destructive',
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: t('reviews.thankYou'),
        description: t('reviews.submitted'),
      });
      
      // Reset form
      setRating(0);
      setName('');
      setComment('');
    } catch (error) {
      console.error('Review submission error:', error);
      toast({
        title: 'Error',
        description: t('reviews.error'),
        variant: 'destructive'
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mt-8">
      <h3 className="text-xl font-semibold mb-4">{t('reviews.leaveReview')}</h3>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col items-center mb-4">
          <p className="mb-2">{t('reviews.rateExperience')}</p>
          <div className="flex space-x-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => setRating(star)}
                onMouseEnter={() => setHoveredRating(star)}
                onMouseLeave={() => setHoveredRating(0)}
                className="focus:outline-none"
              >
                <Star
                  className={`h-8 w-8 transition-colors ${
                    star <= (hoveredRating || rating)
                      ? 'text-yellow-400 fill-yellow-400'
                      : 'text-gray-300'
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="name">{t('reviews.name')}</Label>
          <Input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="comment">{t('reviews.comment')}</Label>
          <Textarea
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            rows={4}
            required
          />
        </div>
        
        <Button 
          type="submit" 
          className="w-full bg-wash-blue hover:bg-wash-teal"
          disabled={isSubmitting}
        >
          {isSubmitting ? t('reviews.submitting') : t('reviews.submit')}
          <Send className="ml-2 h-4 w-4" />
        </Button>
      </form>
    </div>
  );
};

export default ReviewForm;
