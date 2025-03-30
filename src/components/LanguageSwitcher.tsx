
import React from 'react';
import { Button } from "@/components/ui/button";
import { LanguageContext, Language } from '@/context/LanguageContext';
import { useContext } from 'react';
import { useToast } from "@/hooks/use-toast";

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
    <div className="flex space-x-1 lg:space-x-2">
      {languages.map((lang) => (
        <Button
          key={lang.code}
          variant={language === lang.code ? "default" : "outline"}
          size="sm"
          className={`px-2 ${
            language === lang.code ? 'bg-wash-blue text-white' : 'bg-transparent'
          }`}
          onClick={() => handleLanguageChange(lang.code)}
        >
          <span className="mr-1">{lang.flag}</span>
          <span className="hidden sm:inline">{lang.label}</span>
        </Button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
