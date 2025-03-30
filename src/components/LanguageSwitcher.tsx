import React from 'react';
import { Button } from "@/components/ui/button";
import { LanguageContext, Language } from '@/context/LanguageContext';
import { useContext } from 'react';
import { useToast } from "@/hooks/use-toast";
import { Globe } from 'lucide-react';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useContext(LanguageContext);
  const { toast } = useToast();

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'tr', label: 'Türkçe', flag: '🇹🇷' },
    { code: 'ru', label: 'Русский', flag: '🇷🇺' },
    { code: 'he', label: 'עברית', flag: '🇮🇱' }
  ];

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage);
    
    const languageName = languages.find(lang => lang.code === newLanguage)?.label;
    toast({
      title: "Language changed",
      description: `Language set to ${languageName}`,
      duration: 2000
    });
  };

  return (
    <div className="relative inline-flex items-center gap-1 bg-[var(--bg-secondary)]/70 p-0.5 rounded-lg border border-[var(--bg-tertiary)] shadow-sm">
      <Globe className="text-wash-blue h-3.5 w-3.5 absolute left-2 lg:static lg:mr-1" />
      <div className="flex ml-6 lg:ml-0">
        {languages.map((lang) => {
          const isActive = language === lang.code;
          return (
            <Button
              key={lang.code}
              variant="ghost"
              size="sm"
              aria-pressed={isActive}
              className={`px-2 py-1.5 rounded-md text-sm transition-all ${
                isActive 
                  ? 'bg-wash-blue text-white font-medium shadow-sm' 
                  : 'bg-transparent text-[var(--text-primary)] hover:bg-[var(--bg-secondary)] hover:text-wash-blue'
              }`}
              onClick={() => handleLanguageChange(lang.code)}
            >
              <span className="mr-1.5 text-base">{lang.flag}</span>
              <span className="hidden sm:inline">{lang.label}</span>
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default LanguageSwitcher;
