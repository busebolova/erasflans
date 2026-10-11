import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { translate, type Language } from '@/lib/translations';

type Ctx = { language: Language; setLanguage: (l: Language) => void; t: (text: string) => string };
const LanguageContext = createContext<Ctx>({ language: 'tr', setLanguage: () => {}, t: (s) => s });

export function LanguageProvider({ children }: { children: ReactNode }) {
 const [language, setLanguage] = useState<Language>('tr');
 useEffect(() => { const v = localStorage.getItem('eras-language'); if (v === 'en' || v === 'tr') setLanguage(v); }, []);
 useEffect(() => { document.documentElement.lang = language; localStorage.setItem('eras-language', language); }, [language]);
 return <LanguageContext.Provider value={{ language, setLanguage, t: (s) => translate(s, language) }}>{children}</LanguageContext.Provider>;
}
export const useLanguage = () => useContext(LanguageContext);
