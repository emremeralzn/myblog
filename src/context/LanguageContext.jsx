import { createContext, useContext, useState, useEffect, useMemo, useCallback } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    // LocalStorage'dan dil tercihini al, yoksa Türkçe kullan
    return localStorage.getItem('language') || 'tr';
  });

  useEffect(() => {
    // Dil değiştiğinde localStorage'a kaydet
    localStorage.setItem('language', language);
    // HTML lang attribute güncelle (SEO için önemli)
    document.documentElement.lang = language;
  }, [language]);

  // Memoized callbacks to prevent unnecessary re-renders
  const toggleLanguage = useCallback(() => {
    setLanguage(prev => prev === 'tr' ? 'en' : 'tr');
  }, []);

  // Memoized context value
  const value = useMemo(() => ({
    language,
    setLanguage,
    toggleLanguage,
    isEnglish: language === 'en',
    isTurkish: language === 'tr'
  }), [language, toggleLanguage]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

