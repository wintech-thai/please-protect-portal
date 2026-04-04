"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { portalTranslations } from "@/src/locales/translations"; 

type Language = "EN" | "TH";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (path: string) => string; 
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<Language>("EN");

  useEffect(() => {
    const savedLang = localStorage.getItem("portalLanguage") as Language;
    if (savedLang === "TH" || savedLang === "EN") {
      setLanguage(savedLang);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("portalLanguage", lang);
  };

  const t = (path: string) => {
    const keys = path.split("."); 
    const module = keys.shift() as keyof typeof portalTranslations; 

    if (!module || !portalTranslations[module]) return path;

    let result: any = portalTranslations[module][language];

    for (const key of keys) {
      if (result[key] === undefined) return path;
      result = result[key];
    }
    return result;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};