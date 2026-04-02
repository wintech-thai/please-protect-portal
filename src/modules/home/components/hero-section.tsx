"use client";

import { motion } from "framer-motion";
import { ChevronDown, ArrowRight, ShieldCheck, Zap, LayoutDashboard, Network } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/src/contexts/LanguageContext";

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="w-full flex flex-col items-center relative overflow-hidden pb-12">
      
      {/* 1. Hero Content */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center min-h-[70vh] relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="space-y-6 w-full flex flex-col items-center"
        >
          {/* Badge / Pill */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="px-4 py-1.5 rounded-full border border-blue-900/50 bg-blue-900/20 text-cyan-400 text-sm font-medium mb-2 shadow-[0_0_15px_rgba(34,211,238,0.1)]"
          >
            {t("hero.welcome")}
          </motion.div>

          {/* Main Title */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight"
          >
            {t("hero.title1")} <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              {t("hero.title2")}
            </span>
          </motion.h1>

          {/* Subtitle / Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-base md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed px-4 pt-2"
          >
            {t("hero.subtitle")}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 pt-8 w-full sm:w-auto px-4"
          >
            <Link href="/product/sensor" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(34, 211, 238, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-8 py-3.5 bg-cyan-500 hover:bg-cyan-400 text-[#0B1120] font-bold rounded-lg flex items-center justify-center gap-2 transition-all shadow-lg"
              >
                {t("hero.btn_product")} <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
            
            {/* 🚀 เปลี่ยน href จาก "#about" เป็น "/about" */}
            <Link href="/about" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-8 py-3.5 bg-[#162032]/80 border border-blue-900/50 hover:border-cyan-500/50 text-white font-medium rounded-lg flex items-center justify-center transition-all shadow-lg"
              >
                {t("hero.btn_why")}
              </motion.button>
            </Link>
          </motion.div>

        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-cyan-500/50 cursor-pointer hover:text-cyan-400 transition-colors"
            onClick={() => {
              document.getElementById('value-prop')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <ChevronDown size={36} />
          </motion.div>
        </motion.div>
      </div>
      
    </section>
  );
};

export default HeroSection;