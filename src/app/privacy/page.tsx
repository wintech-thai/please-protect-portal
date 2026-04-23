"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  Lock, 
  EyeOff, 
  Server, 
  UserCheck, 
  CheckCircle2 
} from "lucide-react";
import Navbar from "@/src/modules/home/components/nav-bar";
import ParticlesHero from "@/src/modules/home/components/ParticleBackground";
import { useLanguage } from "@/src/contexts/LanguageContext";
import Footer from "@/src/modules/home/components/footer";

export default function SecurityPrivacyPage() {
  const { t } = useLanguage();

  const securityPrinciples = [
    {
      icon: Lock,
      title: t("privacy.prin1Title"),
      desc: t("privacy.prin1Desc"),
    },
    {
      icon: EyeOff,
      title: t("privacy.prin2Title"),
      desc: t("privacy.prin2Desc"),
    },
    {
      icon: UserCheck,
      title: t("privacy.prin3Title"),
      desc: t("privacy.prin3Desc"),
    },
  ];

  const dataHandlingPolicies = [
    {
      title: t("privacy.pol1Title"),
      content: t("privacy.pol1Desc"),
    },
    {
      title: t("privacy.pol2Title"),
      content: t("privacy.pol2Desc"),
    },
    {
      title: t("privacy.pol3Title"),
      content: t("privacy.pol3Desc"),
    },
    {
      title: t("privacy.pol4Title"),
      content: t("privacy.pol4Desc"),
    },
  ];

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#0B1120] text-slate-300">
      {/* Background Particles */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <ParticlesHero />
      </div>

      <Navbar />

      <main className="relative z-10 w-full pt-28 pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* 1. Header Section */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-900/50 bg-blue-900/20 text-cyan-400 text-sm font-semibold mb-6 shadow-[0_0_15px_rgba(34,211,238,0.1)]"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>{t("privacy.badge")}</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6"
            >
              {t("privacy.titleSec")} <span className="text-cyan-400">{t("privacy.titlePriv")}</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-slate-400 leading-relaxed"
            >
              {t("privacy.subtitle")}
            </motion.p>
          </div>

          {/* 2. Core Principles */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            {securityPrinciples.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#162032]/60 backdrop-blur-md p-8 rounded-2xl border border-blue-900/30 hover:border-cyan-500/50 transition-all group"
              >
                <div className="w-14 h-14 bg-blue-900/30 rounded-xl flex items-center justify-center mb-6 group-hover:bg-cyan-500/20 transition-colors">
                  <item.icon className="w-7 h-7 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* 3. How We Handle Data Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full bg-[#162032]/40 backdrop-blur-sm rounded-3xl border border-blue-900/50 p-8 md:p-12"
          >
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shrink-0 shadow-lg shadow-blue-900/50">
                <Server className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                {t("privacy.handleDataTitle")}
              </h2>
            </div>

            <div className="space-y-8">
              {dataHandlingPolicies.map((policy, index) => (
                <div key={index} className="flex gap-4 md:gap-6">
                  <div className="mt-1 shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-cyan-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">{policy.title}</h3>
                    <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                      {policy.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </motion.div>

          {/* 4. Footer Note */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-12 text-center"
          >
            <p className="text-slate-500 text-sm">
              {t("privacy.footerQ")} <br className="hidden sm:block" />
              {t("privacy.footerContact")} <a href="mailto:contact@dev-hubs.com" className="text-cyan-500 hover:text-cyan-400 underline underline-offset-4 font-medium transition-colors">contact@dev-hubs.com</a>
            </p>
          </motion.div>

        </div>
      </main>
      <Footer />
    </div>
  );
}