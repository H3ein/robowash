
import React, { useState } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

const ReservationForm: React.FC = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    service: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSelectChange = (name: string) => (value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: t('reservation.success'),
        description: `${formData.date} at ${formData.time}`,
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        service: ''
      });
    } catch (error) {
      console.error('Booking error:', error);
      toast({
        title: 'Error',
        description: 'Something went wrong. Please try again.',
        variant: 'destructive'
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  // Generate time slots from 8 AM to 8 PM
  const timeSlots = [];
  for (let i = 8; i <= 19; i++) {
    const hour = i > 12 ? i - 12 : i;
    const period = i >= 12 ? 'PM' : 'AM';
    timeSlots.push(`${hour}:00 ${period}`);
    timeSlots.push(`${hour}:30 ${period}`);
  }
  
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="mb-6 flex items-center">
        <Calendar className="h-6 w-6 mr-2 text-wash-blue" />
        <h2 className="text-xl font-semibold">{t('reservation.title')}</h2>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">{t('reservation.name')}</Label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="email">{t('reservation.email')}</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phone">{t('reservation.phone')}</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="date">{t('reservation.date')}</Label>
            <Input
              id="date"
              name="date"
              type="date"
              value={formData.date}
              onChange={handleChange}
              required
              min={new Date().toISOString().split('T')[0]}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="time">{t('reservation.time')}</Label>
            <Select 
              value={formData.time} 
              onValueChange={handleSelectChange('time')}
              required
            >
              <SelectTrigger>
                <SelectValue placeholder={t('reservation.time')} />
              </SelectTrigger>
              <SelectContent>
                {timeSlots.map((time, index) => (
                  <SelectItem key={index} value={time}>
                    {time}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="service">{t('reservation.service')}</Label>
          <Select 
            value={formData.service} 
            onValueChange={handleSelectChange('service')}
            required
          >
            <SelectTrigger>
              <SelectValue placeholder={t('reservation.service')} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="basic">{t('services.basic.title')}</SelectItem>
              <SelectItem value="premium">{t('services.premium.title')}</SelectItem>
              <SelectItem value="deluxe">{t('services.deluxe.title')}</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <Button 
          type="submit" 
          className="w-full bg-wash-blue hover:bg-wash-teal"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Processing...' : t('reservation.submit')}
        </Button>
      </form>
    </div>
  );
};

export default ReservationForm;
