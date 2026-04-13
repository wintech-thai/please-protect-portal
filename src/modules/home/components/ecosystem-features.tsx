"use client";

import { motion, Variants } from "framer-motion";
import { 
  Activity, 
  Database, 
  ShieldAlert, 
  Cloud, 
  Zap, 
  LayoutDashboard, 
  Network 
} from "lucide-react";
import { useLanguage } from "@/src/contexts/LanguageContext";

export default function EcosystemFeatures() {
  const { t } = useLanguage();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="w-full text-slate-300 py-24 relative z-10 overflow-hidden" id="value-prop">
      
      {/* =========================================
         1. THE ECOSYSTEM OVERVIEW
      ========================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/30 border border-blue-700/50 text-cyan-400 text-sm font-semibold mb-6 shadow-[0_0_20px_rgba(6,182,212,0.15)]"
          >
            <Activity className="w-4 h-4 animate-pulse" />
            <span>The Defense Ecosystem</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight"
          >
            {t("ecosystem.overviewTitle").replace("PLEASE-PROTECT", "")} 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 drop-shadow-sm"> PLEASE-PROTECT</span>
            {t("ecosystem.overviewTitle").includes("Ecosystem") ? "" : " Ecosystem"}
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            {t("ecosystem.overviewSub")}
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {/* 1.1 SENSOR (Active Product) */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -8, scale: 1.02 }}
            className="group relative bg-[#0B1221]/80 backdrop-blur-xl p-8 rounded-3xl border-2 border-cyan-500/50 overflow-hidden shadow-[0_0_40px_rgba(6,182,212,0.15)] hover:shadow-[0_0_60px_rgba(6,182,212,0.3)] transition-all duration-300"
          >
            {/* Background Glow inside card */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="absolute top-0 right-0 flex items-center gap-1.5 bg-gradient-to-r from-cyan-600 to-blue-600 text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl shadow-lg">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
              {t("ecosystem.availableNow")}
            </div>

            <div className="w-16 h-16 bg-gradient-to-br from-blue-900/50 to-cyan-900/50 border border-cyan-500/30 rounded-2xl flex items-center justify-center mb-6 relative group-hover:border-cyan-400 transition-colors">
              <div className="absolute inset-0 bg-cyan-400/20 rounded-2xl animate-ping opacity-20"></div>
              <Activity className="w-8 h-8 text-cyan-400 drop-shadow-[0_0_10px_rgba(6,182,212,0.8)]" />
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">{t("ecosystem.sensorTitle")}</h3>
            <p className="text-slate-400 text-sm leading-relaxed relative z-10">
              {t("ecosystem.sensorDesc")}
            </p>
          </motion.div>

          {/* 1.2 LOG (Coming Soon) */}
          <motion.div 
            variants={itemVariants}
            className="group bg-[#0B1221]/40 backdrop-blur-sm p-8 rounded-3xl border border-slate-800 relative overflow-hidden opacity-60 hover:opacity-100 hover:border-slate-600 transition-all duration-500"
          >
            <div className="absolute top-0 right-0 bg-slate-800/80 backdrop-blur-md text-slate-400 text-[11px] font-bold px-4 py-1.5 rounded-bl-xl border-l border-b border-slate-700/50 uppercase tracking-wider">
              {t("ecosystem.comingSoon")}
            </div>
            <div className="w-16 h-16 bg-slate-800/40 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-slate-800 transition-colors">
              <Database className="w-8 h-8 text-slate-500 group-hover:text-slate-300 transition-colors" />
            </div>
            <h3 className="text-2xl font-bold text-slate-300 mb-3">{t("ecosystem.logTitle")}</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              {t("ecosystem.logDesc")}
            </p>
          </motion.div>

          {/* 1.3 EDR (Coming Soon) */}
          <motion.div 
            variants={itemVariants}
            className="group bg-[#0B1221]/40 backdrop-blur-sm p-8 rounded-3xl border border-slate-800 relative overflow-hidden opacity-60 hover:opacity-100 hover:border-slate-600 transition-all duration-500"
          >
            <div className="absolute top-0 right-0 bg-slate-800/80 backdrop-blur-md text-slate-400 text-[11px] font-bold px-4 py-1.5 rounded-bl-xl border-l border-b border-slate-700/50 uppercase tracking-wider">
              {t("ecosystem.comingSoon")}
            </div>
            <div className="w-16 h-16 bg-slate-800/40 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-slate-800 transition-colors">
              <ShieldAlert className="w-8 h-8 text-slate-500 group-hover:text-slate-300 transition-colors" />
            </div>
            <h3 className="text-2xl font-bold text-slate-300 mb-3">{t("ecosystem.edrTitle")}</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              {t("ecosystem.edrDesc")}
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* =========================================
         2. KEY VALUE PROPOSITION
      ========================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight"
          >
            {t("ecosystem.whyTitle").replace("PLEASE-PROTECT?", "")} 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">PLEASE-PROTECT?</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 max-w-2xl mx-auto"
          >
            {t("ecosystem.whySub")}
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {[
            { icon: Cloud, title: t("ecosystem.feat1Title"), desc: t("ecosystem.feat1Desc") },
            { icon: Zap, title: t("ecosystem.feat2Title"), desc: t("ecosystem.feat2Desc") },
            { icon: LayoutDashboard, title: t("ecosystem.feat3Title"), desc: t("ecosystem.feat3Desc") },
            { icon: Network, title: t("ecosystem.feat4Title"), desc: t("ecosystem.feat4Desc") }
          ].map((feature, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="bg-[#0B1221]/60 backdrop-blur-sm p-6 rounded-2xl border border-blue-900/30 hover:border-cyan-500/40 hover:bg-[#10192b]/80 transition-all duration-300 group shadow-lg"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-blue-900/40 to-slate-800/40 rounded-xl flex items-center justify-center mb-5 group-hover:from-cyan-900/40 group-hover:to-blue-900/40 border border-blue-800/30 group-hover:border-cyan-500/30 transition-all duration-300">
                <feature.icon className="w-6 h-6 text-cyan-500 group-hover:text-cyan-300 group-hover:scale-110 transition-all duration-300" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-100 transition-colors">{feature.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

    </div>
  );
}