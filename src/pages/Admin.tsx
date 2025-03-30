
import React, { useState } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useToast } from '@/hooks/use-toast';
import { OccupancyLevel } from '@/components/OccupancyStatus';
import { Lock, ShieldCheck } from 'lucide-react';

const Admin: React.FC = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const [currentOccupancy, setCurrentOccupancy] = useState<OccupancyLevel>('low');
  
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate authentication (in a real app, this would be a server call)
    setTimeout(() => {
      // For demo purposes, any password works
      setIsLoggedIn(true);
      setIsLoading(false);
      
      toast({
        title: "Login successful",
        description: "Welcome to the admin panel",
      });
    }, 1500);
  };
  
  const handleStatusUpdate = () => {
    // In a real app, this would update the status in a database
    toast({
      title: "Status updated",
      description: `Occupancy level set to ${currentOccupancy}`,
    });
  };
  
  // Mock data for upcoming bookings
  const upcomingBookings = [
    { id: 1, name: 'John Doe', service: 'Premium Wash', date: '2023-05-20', time: '10:00 AM' },
    { id: 2, name: 'Jane Smith', service: 'Deluxe Wash', date: '2023-05-20', time: '2:30 PM' },
    { id: 3, name: 'Robert Johnson', service: 'Basic Wash', date: '2023-05-21', time: '11:00 AM' },
  ];
  
  // Login form
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        
        <div className="flex-1 flex items-center justify-center bg-gray-50 px-4">
          <div className="max-w-md w-full p-8 bg-white rounded-lg shadow-lg">
            <div className="text-center mb-6">
              <div className="inline-flex p-3 rounded-full bg-blue-100 text-wash-blue mb-4">
                <Lock className="h-6 w-6" />
              </div>
              <h1 className="text-2xl font-bold">{t('admin.login')}</h1>
            </div>
            
            <form onSubmit={handleLogin}>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="password">{t('admin.password')}</Label>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-wash-blue hover:bg-wash-teal"
                  disabled={isLoading}
                >
                  {isLoading ? 'Signing in...' : t('admin.signin')}
                </Button>
              </div>
            </form>
          </div>
        </div>
        
        <Footer />
      </div>
    );
  }
  
  // Admin dashboard
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <div className="flex-1 py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex items-center justify-between">
            <div className="flex items-center">
              <ShieldCheck className="h-6 w-6 mr-2 text-wash-blue" />
              <h1 className="text-2xl font-bold">{t('admin.title')}</h1>
            </div>
            
            <Button 
              variant="outline" 
              onClick={() => setIsLoggedIn(false)}
            >
              Sign Out
            </Button>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Status Update */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-4">{t('admin.status')}</h2>
              
              <div className="space-y-4">
                <RadioGroup 
                  value={currentOccupancy} 
                  onValueChange={(value) => setCurrentOccupancy(value as OccupancyLevel)}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="low" id="low" />
                    <Label htmlFor="low" className="text-occupancy-low font-medium">
                      {t('occupancy.low')}
                    </Label>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="medium" id="medium" />
                    <Label htmlFor="medium" className="text-occupancy-medium font-medium">
                      {t('occupancy.medium')}
                    </Label>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="high" id="high" />
                    <Label htmlFor="high" className="text-occupancy-high font-medium">
                      {t('occupancy.high')}
                    </Label>
                  </div>
                </RadioGroup>
                
                <Button 
                  onClick={handleStatusUpdate}
                  className="w-full bg-wash-blue hover:bg-wash-teal"
                >
                  {t('admin.update')}
                </Button>
              </div>
            </div>
            
            {/* Upcoming Bookings */}
            <div className="lg:col-span-2 bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-4">{t('admin.bookings')}</h2>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="py-2 px-4 text-left">Name</th>
                      <th className="py-2 px-4 text-left">Service</th>
                      <th className="py-2 px-4 text-left">Date</th>
                      <th className="py-2 px-4 text-left">Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    {upcomingBookings.map((booking) => (
                      <tr key={booking.id} className="border-b">
                        <td className="py-2 px-4">{booking.name}</td>
                        <td className="py-2 px-4">{booking.service}</td>
                        <td className="py-2 px-4">{booking.date}</td>
                        <td className="py-2 px-4">{booking.time}</td>
                      </tr>
                    ))}
                    {upcomingBookings.length === 0 && (
                      <tr>
                        <td className="py-4 px-4 text-center" colSpan={4}>
                          No upcoming bookings.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Admin;
