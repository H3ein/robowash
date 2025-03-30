
import { useContext } from 'react';
import { LanguageContext, Language } from '@/context/LanguageContext';

// Translation dictionary type
type TranslationType = {
  [key: string]: {
    [key in Language]: string;
  };
};

// Translation dictionary
const translations: TranslationType = {
  // Header
  'nav.home': {
    en: 'Home',
    tr: 'Ana Sayfa',
    ru: 'Главная',
    he: 'בית'
  },
  'nav.services': {
    en: 'Services',
    tr: 'Hizmetler',
    ru: 'Услуги',
    he: 'שירותים'
  },
  'nav.location': {
    en: 'Location',
    tr: 'Konum',
    ru: 'Местоположение',
    he: 'מיקום'
  },
  'nav.book': {
    en: 'Book Now',
    tr: 'Randevu Al',
    ru: 'Забронировать',
    he: 'הזמן עכשיו'
  },
  'nav.admin': {
    en: 'Admin',
    tr: 'Yönetici',
    ru: 'Админ',
    he: 'מנהל'
  },
  
  // Occupancy
  'occupancy.title': {
    en: 'Current Status',
    tr: 'Mevcut Durum',
    ru: 'Текущий Статус',
    he: 'סטטוס נוכחי'
  },
  'occupancy.low': {
    en: 'Not Busy',
    tr: 'Yoğun Değil',
    ru: 'Не занято',
    he: 'לא עמוס'
  },
  'occupancy.medium': {
    en: 'Moderately Busy',
    tr: 'Orta Yoğunlukta',
    ru: 'Умеренно занято',
    he: 'עמוס במידה בינונית'
  },
  'occupancy.high': {
    en: 'Very Busy',
    tr: 'Çok Yoğun',
    ru: 'Очень занято',
    he: 'עמוס מאוד'
  },
  'occupancy.estimated': {
    en: 'Estimated wait time:',
    tr: 'Tahmini bekleme süresi:',
    ru: 'Примерное время ожидания:',
    he: 'זמן המתנה משוער:'
  },
  'occupancy.minutes': {
    en: 'minutes',
    tr: 'dakika',
    ru: 'минут',
    he: 'דקות'
  },
  
  // Services
  'services.title': {
    en: 'Our Services',
    tr: 'Hizmetlerimiz',
    ru: 'Наши Услуги',
    he: 'השירותים שלנו'
  },
  'services.basic.title': {
    en: 'Basic Wash',
    tr: 'Temel Yıkama',
    ru: 'Базовая Мойка',
    he: 'שטיפה בסיסית'
  },
  'services.basic.description': {
    en: 'Exterior wash with foam and rinse',
    tr: 'Köpük ve durulama ile dış yıkama',
    ru: 'Наружная мойка с пеной и ополаскиванием',
    he: 'שטיפה חיצונית עם קצף ושטיפה'
  },
  'services.premium.title': {
    en: 'Premium Wash',
    tr: 'Premium Yıkama',
    ru: 'Премиум Мойка',
    he: 'שטיפה פרימיום'
  },
  'services.premium.description': {
    en: 'Basic wash plus wax and tire shine',
    tr: 'Temel yıkama artı cila ve lastik parlatma',
    ru: 'Базовая мойка с воском и чернением шин',
    he: 'שטיפה בסיסית בתוספת ווקס וצחצוח צמיגים'
  },
  'services.deluxe.title': {
    en: 'Deluxe Wash',
    tr: 'Deluxe Yıkama',
    ru: 'Делюкс Мойка',
    he: 'שטיפה דה-לוקס'
  },
  'services.deluxe.description': {
    en: 'Premium wash plus interior cleaning',
    tr: 'Premium yıkama artı iç temizlik',
    ru: 'Премиум мойка с чисткой салона',
    he: 'שטיפה פרימיום בתוספת ניקוי פנימי'
  },
  
  // Reservation
  'reservation.title': {
    en: 'Book Your Wash',
    tr: 'Yıkama Randevusu Al',
    ru: 'Забронировать Мойку',
    he: 'הזמן את השטיפה שלך'
  },
  'reservation.name': {
    en: 'Full Name',
    tr: 'Ad Soyad',
    ru: 'Полное Имя',
    he: 'שם מלא'
  },
  'reservation.email': {
    en: 'Email',
    tr: 'E-posta',
    ru: 'Эл. почта',
    he: 'אימייל'
  },
  'reservation.phone': {
    en: 'Phone Number',
    tr: 'Telefon Numarası',
    ru: 'Номер Телефона',
    he: 'מספר טלפון'
  },
  'reservation.date': {
    en: 'Date',
    tr: 'Tarih',
    ru: 'Дата',
    he: 'תאריך'
  },
  'reservation.time': {
    en: 'Time',
    tr: 'Saat',
    ru: 'Время',
    he: 'שעה'
  },
  'reservation.service': {
    en: 'Service',
    tr: 'Hizmet',
    ru: 'Услуга',
    he: 'שירות'
  },
  'reservation.submit': {
    en: 'Book Appointment',
    tr: 'Randevu Al',
    ru: 'Забронировать',
    he: 'הזמן תור'
  },
  'reservation.success': {
    en: 'Appointment booked successfully!',
    tr: 'Randevu başarıyla alındı!',
    ru: 'Запись успешно забронирована!',
    he: 'התור נקבע בהצלחה!'
  },
  
  // Location
  'location.title': {
    en: 'Find Us',
    tr: 'Bizi Bulun',
    ru: 'Найдите Нас',
    he: 'מצא אותנו'
  },
  'location.address': {
    en: '123 Wash Street, City, Country',
    tr: '123 Yıkama Caddesi, Şehir, Ülke',
    ru: '123 Улица Мойки, Город, Страна',
    he: '123 רחוב שטיפה, עיר, מדינה'
  },
  'location.hours': {
    en: 'Open 7 days a week: 8AM - 8PM',
    tr: 'Haftanın 7 günü açık: 8:00 - 20:00',
    ru: 'Открыто 7 дней в неделю: 8:00 - 20:00',
    he: 'פתוח 7 ימים בשבוע: 8:00 - 20:00'
  },
  'location.directions': {
    en: 'Get Directions',
    tr: 'Yol Tarifi Al',
    ru: 'Получить Маршрут',
    he: 'קבל הוראות הגעה'
  },
  
  // Footer
  'footer.rights': {
    en: 'All Rights Reserved',
    tr: 'Tüm Hakları Saklıdır',
    ru: 'Все Права Защищены',
    he: 'כל הזכויות שמורות'
  },
  'footer.privacy': {
    en: 'Privacy Policy',
    tr: 'Gizlilik Politikası',
    ru: 'Политика Конфиденциальности',
    he: 'מדיניות פרטיות'
  },
  'footer.terms': {
    en: 'Terms of Service',
    tr: 'Hizmet Şartları',
    ru: 'Условия Обслуживания',
    he: 'תנאי שירות'
  },
  
  // Admin
  'admin.title': {
    en: 'Admin Panel',
    tr: 'Yönetici Paneli',
    ru: 'Панель Администратора',
    he: 'פאנל ניהול'
  },
  'admin.status': {
    en: 'Current Occupancy Status',
    tr: 'Mevcut Doluluk Durumu',
    ru: 'Текущий Статус Занятости',
    he: 'סטטוס תפוסה נוכחי'
  },
  'admin.update': {
    en: 'Update Status',
    tr: 'Durumu Güncelle',
    ru: 'Обновить Статус',
    he: 'עדכן סטטוס'
  },
  'admin.bookings': {
    en: 'Upcoming Bookings',
    tr: 'Yaklaşan Randevular',
    ru: 'Предстоящие Бронирования',
    he: 'הזמנות קרובות'
  },
  'admin.login': {
    en: 'Admin Login',
    tr: 'Yönetici Girişi',
    ru: 'Вход для Администратора',
    he: 'כניסת מנהל'
  },
  'admin.password': {
    en: 'Password',
    tr: 'Şifre',
    ru: 'Пароль',
    he: 'סיסמה'
  },
  'admin.signin': {
    en: 'Sign In',
    tr: 'Giriş Yap',
    ru: 'Войти',
    he: 'התחבר'
  }
};

// Hook for accessing translations
export const useTranslation = () => {
  const { language } = useContext(LanguageContext);

  // Function to get a translated string
  const t = (key: string): string => {
    if (!translations[key]) {
      console.warn(`Translation key "${key}" not found.`);
      return key;
    }
    return translations[key][language] || translations[key].en;
  };

  return { t, language };
};
