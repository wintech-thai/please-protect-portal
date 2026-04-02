"use client";

import React, { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown, Globe, Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AppRoute } from "@/src/config/app.route"; 
import { useLanguage } from "@/src/contexts/LanguageContext";

const Navbar = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  
  const { language, setLanguage, t } = useLanguage();

  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const langDropdownRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    {
      name: t("navbar.product"),
      isDropdown: true,
      children: [
        { name: "PLEASE-PROTECT SENSOR", link: AppRoute.productSensor }
      ]
    },
    {
      name: t("navbar.document"),
      isDropdown: true,
      children: [
        { name: "PLEASE-PROTECT SENSOR", link: AppRoute.documentSensor }
      ]
    },
    {
      name: t("navbar.about"),
      link: AppRoute.about,
    },
    {
      name: t("navbar.security"),
      link: AppRoute.privacy,
    },
  ];

  const isParentActive = (item: any) => 
    (item.link && pathname === item.link) || 
    (item.children?.some((c: any) => pathname === c.link));

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      let clickedInsideMenu = false;
      Object.values(dropdownRefs.current).forEach((ref) => {
        if (ref && ref.contains(event.target as Node)) clickedInsideMenu = true;
      });
      if (!clickedInsideMenu) setActiveDropdown(null);
      if (langDropdownRef.current && !langDropdownRef.current.contains(event.target as Node)) setIsLangDropdownOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 h-16 bg-[#0B1120]/90 backdrop-blur-md border-b border-blue-900/30 shadow-lg shadow-black/40 text-blue-100">
        <div className="container mx-auto px-3 h-full flex items-center justify-between">
          
          {/* Logo Section */}
          <div className="flex items-center gap-2">
            <Link href={AppRoute.home} className="flex items-center gap-2 group shrink-0">
                <Image
                  src="/please-protect.svg"
                  alt="Logo"
                  width={50}
                  height={50}
                  className="object-contain"
                  priority
                />
              <span className="text-2xl font-bold tracking-tight text-white hidden sm:block uppercase whitespace-nowrap">
                PLEASE-<span className="text-cyan-400">PROTECT</span>
              </span>
            </Link>
          </div>

          {/* Desktop Menu Section */}
          <div className="hidden md:flex items-center gap-1 ml-6 flex-1">
            {navLinks.map((item) => (
              <div key={item.name} className="relative" ref={(el) => { if (el) dropdownRefs.current[item.name] = el; }}>
                {item.isDropdown ? (
                  <button
                    onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                    className={`flex items-center gap-1 px-4 py-2 text-base font-medium whitespace-nowrap transition-all duration-200 rounded-md ${
                      isParentActive(item) ? "text-cyan-400 bg-blue-500/10" : "text-slate-400 hover:bg-blue-900/20"
                    }`}
                  >
                    {item.name} <ChevronDown className={`w-4 h-4 mt-0.5 opacity-70 transition-transform ${activeDropdown === item.name ? "rotate-180" : ""}`} />
                  </button>
                ) : (
                  <Link 
                    href={item.link || "#"} 
                    className={`flex items-center gap-1 px-4 py-2 text-base font-medium whitespace-nowrap transition-all duration-200 rounded-md ${
                      isParentActive(item) ? "text-cyan-400 bg-blue-500/10" : "text-slate-400 hover:bg-blue-900/20"
                    }`}
                  >
                    {item.name}
                  </Link>
                )}

                {/* Dropdown Content */}
                {item.isDropdown && activeDropdown === item.name && (
                  <div className="absolute left-0 top-full mt-2 min-w-[220px] p-1 bg-[#0B1120] border border-blue-900/30 shadow-xl rounded-lg animate-in fade-in slide-in-from-top-2">
                    {item.children?.map((subItem, idx) => (
                      <Link
                        key={subItem.name || idx}
                        href={subItem.link}
                        onClick={() => setActiveDropdown(null)}
                        className={`flex items-center px-3 py-3 text-base rounded-md transition-colors w-full whitespace-nowrap ${
                          pathname === subItem.link ? "bg-blue-500/20 text-cyan-400 font-medium" : "text-slate-400 hover:bg-blue-900/30"
                        }`}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Section (Language) */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <div className="relative hidden sm:block" ref={langDropdownRef}>
              <button
                onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium border border-blue-900/30 rounded-full text-slate-400 hover:text-cyan-400 hover:bg-blue-900/20 transition-all duration-200"
              >
                <Globe className="w-3.5 h-3.5" />
                <span>{language}</span>
                <ChevronDown className={`w-3 h-3 opacity-50 transition-transform ${isLangDropdownOpen ? "rotate-180" : ""}`} />
              </button>
              {isLangDropdownOpen && (
                <div className="absolute right-0 top-full mt-2 w-[150px] p-1 bg-[#0B1120] border border-blue-900/30 shadow-xl rounded-lg text-blue-100 animate-in fade-in slide-in-from-top-2">
                  <button onClick={() => { setLanguage("EN"); setIsLangDropdownOpen(false); }} className={`w-full flex items-center justify-between px-3 py-2 rounded-md transition-colors text-sm ${language === "EN" ? "bg-blue-500/20 text-cyan-400" : "hover:bg-blue-900/30 text-slate-400"}`}>
                    <div className="flex gap-2"><span>🇬🇧</span> English</div>{language === "EN" && <Check className="w-3.5 h-3.5" />}
                  </button>
                  <button onClick={() => { setLanguage("TH"); setIsLangDropdownOpen(false); }} className={`w-full flex items-center justify-between px-3 py-2 rounded-md transition-colors text-sm mt-1 ${language === "TH" ? "bg-blue-500/20 text-cyan-400" : "hover:bg-blue-900/30 text-slate-400"}`}>
                    <div className="flex gap-2"><span>🇹🇭</span> ภาษาไทย</div>{language === "TH" && <Check className="w-3.5 h-3.5" />}
                  </button>
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-slate-300 hover:text-white p-1 ml-1"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-[#0B1120] border-b border-blue-900/30 shadow-lg max-h-[85vh] overflow-y-auto z-40 text-blue-100 animate-in slide-in-from-top-2">
            {navLinks.map((item) => (
              <div key={item.name}>
                <Link
                  href={item.link || "#"}
                  className={`block px-4 py-4 text-base font-medium border-b border-blue-900/30 hover:bg-blue-900/20 transition-colors ${
                    isParentActive(item) ? "text-cyan-400 bg-blue-500/10" : "text-slate-300"
                  }`}
                  onClick={() => !item.children && setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
                {item.children && (
                  <div className="bg-[#020617]/50 pl-4 border-b border-blue-900/30">
                    {item.children.map((subItem, idx) => (
                      <Link
                        key={subItem.name || idx}
                        href={subItem.link}
                        className={`flex items-center gap-2 px-4 py-3 text-base ${
                          pathname === subItem.link ? "text-cyan-400" : "text-slate-400 hover:text-cyan-400"
                        }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            <div className="p-4 bg-[#020617]/50 border-b border-blue-900/30">
              <p className="text-xs font-semibold text-slate-500 mb-2 uppercase tracking-wider">{t("navbar.language")}</p>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => { setLanguage("EN"); setIsMobileMenuOpen(false); }}
                  className={`py-3 text-sm font-medium rounded-md border ${
                    language === "EN" ? "bg-[#0B1120] border-cyan-500 text-cyan-400" : "bg-[#0B1120] border-blue-900/30 text-slate-400"
                  }`}
                >
                  🇬🇧 English
                </button>
                <button
                  onClick={() => { setLanguage("TH"); setIsMobileMenuOpen(false); }}
                  className={`py-3 text-sm font-medium rounded-md border ${
                    language === "TH" ? "bg-[#0B1120] border-cyan-500 text-cyan-400" : "bg-[#0B1120] border-blue-900/30 text-slate-400"
                  }`}
                >
                  🇹🇭 ไทย
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
      <div className="h-16 w-full shrink-0"></div>
    </>
  );
};

export default Navbar;