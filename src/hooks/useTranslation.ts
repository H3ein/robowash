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
  'nav.reviews': {
    en: 'Reviews',
    tr: 'Yorumlar',
    ru: 'Отзывы',
    he: 'ביקורות'
  },
  
  // Hero
  'hero.title': {
    en: 'Robotic Cleaning Technology',
    tr: 'Robotik Temizleme Teknolojisi',
    ru: 'Роботизированная Технология Очистки',
    he: 'טכנולוגיית ניקוי רובוטית'
  },
  'hero.subtitle': {
    en: 'Experience spotless results with our advanced automated cleaning technology!',
    tr: 'Gelişmiş otomatik temizleme teknolojimiz ile lekesiz sonuçlar yaşayın!',
    ru: 'Испытайте безупречные результаты с нашей передовой автоматизированной технологией очистки!',
    he: 'התנסה בתוצאות מושלמות עם טכנולוגיית הניקוי האוטומטית המתקדמת שלנו!'
  },
  
  // Occupancy
  'occupancy.title': {
    en: 'Current Status',
    tr: 'Mevcut Durum',
    ru: 'Текущий Статус',
    he: 'סטטוס נוכחי'
  },
  'occupancy.status': {
    en: 'Status',
    tr: 'Durum',
    ru: 'Статус',
    he: 'סטטוס'
  },
  'occupancy.low': {
    en: 'Ready for You!',
    tr: 'Sizin İçin Hazır!',
    ru: 'Готов для Вас!',
    he: 'מוכן עבורך!'
  },
  'occupancy.medium': {
    en: 'Moderately Busy',
    tr: 'Orta Yoğunlukta',
    ru: 'Умеренно занято',
    he: 'עמוס במידה בינונית'
  },
  'occupancy.high': {
    en: 'Popular Right Now',
    tr: 'Şu Anda Popüler',
    ru: 'Сейчас Популярно',
    he: 'פופולרי עכשיו'
  },
  'occupancy.estimated': {
    en: 'Expected wait time:',
    tr: 'Tahmini bekleme süresi:',
    ru: 'Ожидаемое время ожидания:',
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
    en: 'Our Robot Services',
    tr: 'Robot Hizmetlerimiz',
    ru: 'Наши Робот-Услуги',
    he: 'שירותי הרובוט שלנו'
  },
  'services.startingAt': {
    en: 'Starting at',
    tr: 'Başlayan fiyat',
    ru: 'Начиная с',
    he: 'החל מ'
  },
  'services.book': {
    en: 'Book',
    tr: 'Randevu',
    ru: 'Бронировать',
    he: 'הזמן'
  },
  'services.basic.title': {
    en: 'Basic Wash',
    tr: 'Temel Yıkama',
    ru: 'Базовая Мойка',
    he: 'שטיפה בסיסית'
  },
  'services.basic.description': {
    en: 'Automated exterior wash with eco-friendly foam',
    tr: 'Çevre dostu köpük ile otomatik dış yıkama',
    ru: 'Автоматизированная наружная мойка с экологичной пеной',
    he: 'שטיפה חיצונית אוטומטית עם קצף ידידותי לסביבה'
  },
  'services.premium.title': {
    en: 'Premium Wash',
    tr: 'Premium Yıkama',
    ru: 'Премиум Мойка',
    he: 'שטיפה פרימיום'
  },
  'services.premium.description': {
    en: 'Basic wash plus precision waxing and tire shine',
    tr: 'Temel yıkama artı hassas cilalama ve lastik parlatma',
    ru: 'Базовая мойка с точным нанесением воска и блеском шин',
    he: 'שטיפה בסיסית בתוספת וקס מדויק וצחצוח צמיגים'
  },
  'services.deluxe.title': {
    en: 'Deluxe Wash',
    tr: 'Deluxe Yıkama',
    ru: 'Делюкс Мойка',
    he: 'שטיפה דה-לוקס'
  },
  'services.deluxe.description': {
    en: 'Premium wash plus automated interior cleaning',
    tr: 'Premium yıkama artı otomatik iç temizlik',
    ru: 'Премиум мойка с автоматизированной чисткой салона',
    he: 'שטיפה פרימיום בתוספת ניקוי פנימי אוטומטי'
  },
  
  // Reservation
  'reservation.title': {
    en: 'Book Your Robo-Wash',
    tr: 'Robo-Yıkama Randevusu Alın',
    ru: 'Забронируйте Робо-Мойку',
    he: 'הזמן את הרובו-שטיפה שלך'
  },
  'reservation.name': {
    en: 'Your Name',
    tr: 'Adınız',
    ru: 'Ваше Имя',
    he: 'השם שלך'
  },
  'reservation.email': {
    en: 'Your Email',
    tr: 'E-posta Adresiniz',
    ru: 'Ваша Эл. почта',
    he: 'האימייל שלך'
  },
  'reservation.phone': {
    en: 'Your Phone',
    tr: 'Telefonunuz',
    ru: 'Ваш Телефон',
    he: 'הטלפון שלך'
  },
  'reservation.phoneHint': {
    en: "We'll send you a friendly reminder",
    tr: 'Size dostça bir hatırlatma göndereceğiz',
    ru: 'Мы отправим вам дружеское напоминание',
    he: 'נשלח לך תזכורת ידידותית'
  },
  'reservation.date': {
    en: 'Preferred Date',
    tr: 'Tercih Edilen Tarih',
    ru: 'Предпочтительная Дата',
    he: 'תאריך מועדף'
  },
  'reservation.time': {
    en: 'Preferred Time',
    tr: 'Tercih Edilen Saat',
    ru: 'Предпочтительное Время',
    he: 'זמן מועדף'
  },
  'reservation.selectTime': {
    en: 'Select a time',
    tr: 'Bir saat seçin',
    ru: 'Выберите время',
    he: 'בחר זמן'
  },
  'reservation.service': {
    en: 'Choose Service',
    tr: 'Hizmet Seçin',
    ru: 'Выберите Услугу',
    he: 'בחר שירות'
  },
  'reservation.selectService': {
    en: 'Select a service',
    tr: 'Bir hizmet seçin',
    ru: 'Выберите услугу',
    he: 'בחר שירות'
  },
  'reservation.termsAgree': {
    en: 'I agree to let robots clean my car',
    tr: 'Robotların arabamı temizlemesine izin veriyorum',
    ru: 'Я согласен, чтобы роботы мыли мою машину',
    he: 'אני מסכים לאפשר לרובוטים לנקות את הרכב שלי'
  },
  'reservation.submit': {
    en: 'Schedule My Wash',
    tr: 'Yıkamamı Programla',
    ru: 'Запланировать Мойку',
    he: 'תזמן את השטיפה שלי'
  },
  'reservation.processing': {
    en: 'Scheduling...',
    tr: 'Programlanıyor...',
    ru: 'Планирование...',
    he: 'מתזמן...'
  },
  'reservation.success': {
    en: 'Awesome! Your wash is scheduled!',
    tr: 'Harika! Yıkamanız programlandı!',
    ru: 'Отлично! Ваша мойка запланирована!',
    he: 'מעולה! השטיפה שלך מתוזמנת!'
  },
  
  // Reviews
  'reviews.title': {
    en: 'What Our Customers Say',
    tr: 'Müşterilerimiz Ne Diyor',
    ru: 'Что Говорят Наши Клиенты',
    he: 'מה הלקוחות שלנו אומרים'
  },
  'reviews.leaveReview': {
    en: 'Share Your Experience',
    tr: 'Deneyiminizi Paylaşın',
    ru: 'Поделитесь Своим Опытом',
    he: 'שתף את החוויה שלך'
  },
  'reviews.rateExperience': {
    en: 'How was your robot wash?',
    tr: 'Robot yıkamanız nasıldı?',
    ru: 'Как прошла ваша роботизированная мойка?',
    he: 'איך הייתה שטיפת הרובוט שלך?'
  },
  'reviews.name': {
    en: 'Your Name',
    tr: 'Adınız',
    ru: 'Ваше Имя',
    he: 'השם שלך'
  },
  'reviews.comment': {
    en: 'Your Feedback',
    tr: 'Geri Bildiriminiz',
    ru: 'Ваш Отзыв',
    he: 'המשוב שלך'
  },
  'reviews.submit': {
    en: 'Submit Feedback',
    tr: 'Geri Bildirim Gönder',
    ru: 'Отправить Отзыв',
    he: 'שלח משוב'
  },
  'reviews.submitting': {
    en: 'Sending...',
    tr: 'Gönderiliyor...',
    ru: 'Отправка...',
    he: 'שולח...'
  },
  'reviews.thankYou': {
    en: 'Thanks for your feedback!',
    tr: 'Geri bildiriminiz için teşekkürler!',
    ru: 'Спасибо за ваш отзыв!',
    he: 'תודה על המשוב שלך!'
  },
  'reviews.submitted': {
    en: 'Your feedback helps our robots improve!',
    tr: 'Geri bildiriminiz robotlarımızın gelişmesine yardımcı oluyor!',
    ru: 'Ваш отзыв помогает нашим роботам совершенствоваться!',
    he: 'המשוב שלך עוזר לרובוטים שלנו להשתפר!'
  },
  'reviews.ratingRequired': {
    en: 'Please rate your experience',
    tr: 'Lütfen deneyiminizi değerlendirin',
    ru: 'Пожалуйста, оцените ваш опыт',
    he: 'אנא דרג את החוויה שלך'
  },
  'reviews.error': {
    en: 'Oops! Something went wrong. Please try again.',
    tr: 'Hay aksi! Bir şeyler yanlış gitti. Lütfen tekrar deneyin.',
    ru: 'Упс! Что-то пошло не так. Пожалуйста, попробуйте еще раз.',
    he: 'אופס! משהו השתבש. אנא נסה שוב.'
  },
  
  // Location
  'location.title': {
    en: 'Find Us',
    tr: 'Bizi Bulun',
    ru: 'Найдите Нас',
    he: 'מצא אותנו'
  },
  'location.address': {
    en: '123 Main Street, Anytown, USA',
    tr: '123 Ana Cadde, Herhangi Bir Şehir, USA',
    ru: '123 Главная Улица, Любой Город, США',
    he: '123 רחוב ראשי, עיר כלשהי, ארה"ב'
  },
  'location.hours': {
    en: 'Open daily: 8am - 8pm',
    tr: 'Her gün açık: 8:00 - 20:00',
    ru: 'Открыто ежедневно: 8:00 - 20:00',
    he: 'פתוח יומי: 8:00 - 20:00'
  },
  'location.directions': {
    en: 'Get Directions',
    tr: 'Yol Tarifi Al',
    ru: 'Получить Маршрут',
    he: 'קבל הוראות'
  },
  'location.visitUs': {
    en: 'Visit Our RoboWash',
    tr: 'RoboWash\'ımızı Ziyaret Edin',
    ru: 'Посетите Наш RoboWash',
    he: 'בקר ב-RoboWash שלנו'
  },
  'location.getDirections': {
    en: 'Get Directions',
    tr: 'Yol Tarifi Al',
    ru: 'Проложить Маршрут',
    he: 'קבל הוראות הגעה'
  },
  'location.viewLargerMap': {
    en: 'View Larger Map',
    tr: 'Daha Büyük Haritayı Görüntüle',
    ru: 'Просмотреть Увеличенную Карту',
    he: 'צפה במפה גדולה יותר'
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
    en: 'RoboWash Control Center',
    tr: 'RoboWash Kontrol Merkezi',
    ru: 'Центр Управления RoboWash',
    he: 'מרכז שליטה RoboWash'
  },
  'admin.status': {
    en: 'Robot Station Status',
    tr: 'Robot İstasyonu Durumu',
    ru: 'Статус Робот-Станции',
    he: 'סטטוס תחנת רובוט'
  },
  'admin.update': {
    en: 'Update Status',
    tr: 'Durumu Güncelle',
    ru: 'Обновить Статус',
    he: 'עדכן סטטוס'
  },
  'admin.bookings': {
    en: 'Upcoming Appointments',
    tr: 'Yaklaşan Randevular',
    ru: 'Предстоящие Посещения',
    he: 'פגישות קרובות'
  },
  'admin.login': {
    en: 'Admin Access',
    tr: 'Yönetici Erişimi',
    ru: 'Доступ Администратора',
    he: 'גישת מנהל'
  },
  'admin.password': {
    en: 'Access Code',
    tr: 'Erişim Kodu',
    ru: 'Код Доступа',
    he: 'קוד גישה'
  },
  'admin.signin': {
    en: 'Access System',
    tr: 'Sisteme Eriş',
    ru: 'Доступ к Системе',
    he: 'גישה למערכת'
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
