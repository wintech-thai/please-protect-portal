"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, Target, Users, Zap, Code, Globe2 } from "lucide-react";
import Navbar from "@/src/modules/home/components/nav-bar";
import ParticlesHero from "@/src/modules/home/components/ParticleBackground";
import { useLanguage } from "@/src/contexts/LanguageContext";

export default function AboutPage() {
  const { t } = useLanguage();

  const expertiseList = [
    {
      icon: Shield,
      title: t("about.exp1Title"),
      desc: t("about.exp1Desc"),
    },
    {
      icon: Zap,
      title: t("about.exp2Title"),
      desc: t("about.exp2Desc"),
    },
    {
      icon: Code,
      title: t("about.exp3Title"),
      desc: t("about.exp3Desc"),
    },
  ];

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#0B1120] text-slate-300">
      {/* Background Particles (Fixed) */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <ParticlesHero />
      </div>

      <Navbar />

      <main className="relative z-10 w-full pt-28 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* 1. Header Section */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-900/50 bg-blue-900/20 text-cyan-400 text-sm font-semibold mb-6 shadow-[0_0_15px_rgba(34,211,238,0.1)]"
            >
              <Users className="w-4 h-4" />
              <span>{t("about.badge")}</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6"
            >
              {t("about.titlePrefix")} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                PLEASE-PROTECT
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-slate-400 leading-relaxed"
            >
              {t("about.subtitle")}
            </motion.p>
          </div>

          {/* 2. Our Story (Why PLEASE-PROTECT) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="w-full bg-[#162032]/60 backdrop-blur-md rounded-3xl border border-blue-900/50 p-8 md:p-12 lg:p-16 mb-24 shadow-2xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                  <Target className="w-8 h-8 text-cyan-500" />
                  {t("about.storyTitle")}
                </h2>
                <div className="space-y-6 text-slate-400 leading-relaxed">
                  <p>
                    {t("about.storyP1")}
                  </p>
                  <p>
                    {t("about.storyP2Start")}
                    <span className="text-cyan-400 font-semibold">{t("about.storyP2Highlight")}</span> 
                    {t("about.storyP2End")}
                  </p>
                  <p>
                    {t("about.storyP3")}
                  </p>
                </div>
              </div>
              <div className="relative h-full min-h-[300px] rounded-2xl overflow-hidden border border-blue-900/30 bg-[#0B1120] flex items-center justify-center group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-cyan-900/20" />
                <Globe2 className="w-32 h-32 text-blue-800/50 group-hover:text-cyan-500/30 transition-colors duration-500" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="p-4 bg-[#162032]/80 backdrop-blur-sm rounded-xl border border-blue-900/50">
                    <p className="text-sm font-medium text-cyan-400 mb-1">{t("about.missionLabel")}</p>
                    <p className="text-white font-bold">{t("about.missionText")}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 3. Our Expertise Section */}
          <div className="text-center mb-12">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-white mb-4"
            >
              {t("about.expertiseTitle")}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-400 max-w-2xl mx-auto"
            >
              {t("about.expertiseSub")}
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {expertiseList.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#162032]/40 backdrop-blur-sm p-8 rounded-2xl border border-blue-900/30 hover:border-cyan-500/50 transition-all group"
              >
                <div className="w-14 h-14 bg-blue-900/30 rounded-xl flex items-center justify-center mb-6 group-hover:bg-cyan-500/20 transition-colors">
                  <item.icon className="w-7 h-7 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed text-sm">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </main>
    </div>
  );
}