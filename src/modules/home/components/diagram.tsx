"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Cloud, Server, ShieldCheck, Shield, Router, Activity, Network, CheckCircle2, AlertCircle,
  LayoutDashboard, ArrowRight, ArrowLeft, Database, Cpu
} from "lucide-react";

import { useLanguage } from "@/src/contexts/LanguageContext";
import { portalTranslations } from "@/src/locales/translations";

type SensorStatus = "online" | "offline" | "warning";

const AnimatedHorizontalLine = () => (
  <div className="w-16 sm:w-32 h-[2px] bg-slate-700/80 shrink-0 mt-6 -mx-2 relative z-0 overflow-hidden">
    <motion.div
      animate={{ left: ["-10%", "110%"] }}
      transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
      className="absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-blue-400 rounded-full shadow-[0_0_8px_#60a5fa]"
    />
  </div>
);

const StepBadge = ({ step }: { step: string }) => (
  <div className="absolute -top-2 -right-2 w-5 h-5 bg-cyan-400 text-cyan-950 rounded-full flex items-center justify-center text-[11px] font-black z-30 shadow-[0_0_10px_rgba(6,182,212,0.5)] border border-cyan-200">
    {step}
  </div>
);

const AnimatedArrowLine = ({ direction }: { direction: "ltr" | "rtl" }) => {
  const isLtr = direction === "ltr";
  return (
    <div className="flex-1 h-[2px] bg-slate-700/60 relative overflow-hidden rounded-full">
      <motion.div
        animate={{ left: isLtr ? ["-8%", "108%"] : ["108%", "-8%"] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "linear" }}
        className={`absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full shadow-[0_0_8px_currentColor] ${
          isLtr ? "bg-amber-400 text-amber-400" : "bg-cyan-400 text-cyan-400"
        }`}
      />
    </div>
  );
};

export function CenterDiagram() {
  const { language } = useLanguage();
  const t = portalTranslations.centerDiagram[language as keyof typeof portalTranslations.centerDiagram] || portalTranslations.centerDiagram.EN;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full text-slate-200 font-sans mb-8"
    >
      <div className="bg-[#0B1120] border border-blue-900/30 rounded-xl shadow-[0_0_30px_rgba(6,182,212,0.05)] p-6 hover:border-cyan-500/30 transition-colors duration-500">

        {/* Header */}
        <div className="mb-6">
          <h3 className="text-lg md:text-xl font-bold text-white tracking-tight flex items-center gap-2">
            <Cpu className="w-5 h-5 text-cyan-400" />
            {t.headerTitle}
          </h3>
          <p className="text-sm text-slate-500 mt-1">{t.headerSubtitle}</p>
        </div>

        {/* Diagram Area */}
        <div className="bg-[#050B14] rounded-lg border border-slate-800/80 p-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">

            {/* SENSOR Node */}
            <div className="flex flex-col items-center shrink-0 w-44">
              <div className="w-16 h-16 rounded-2xl bg-[#0B1120] border-2 border-cyan-500 flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.25)]">
                <ShieldCheck className="w-8 h-8 text-cyan-400" />
              </div>
              <div className="mt-3 text-center">
                <div className="text-[11px] font-black text-cyan-400 tracking-wide leading-tight">{t.nodeSensor}</div>
                <div className="text-[10px] text-slate-500 mt-0.5">{t.nodeSensorSub}</div>
              </div>
            </div>

            {/* Bidirectional Arrows */}
            <div className="flex flex-col gap-3 flex-1 min-w-0 w-full sm:w-auto">
              {/* Upload: SENSOR → CENTER */}
              <div className="flex items-center gap-2">
                <AnimatedArrowLine direction="ltr" />
                <div className="shrink-0 flex items-center gap-1.5 bg-amber-500/10 border border-amber-500/30 rounded-full px-2.5 py-1">
                  <ArrowRight className="w-3 h-3 text-amber-400 shrink-0" />
                  <span className="text-[10px] font-semibold text-amber-400 whitespace-nowrap">{t.labelUpload}</span>
                </div>
                <AnimatedArrowLine direction="ltr" />
              </div>

              {/* Download: CENTER → SENSOR */}
              <div className="flex items-center gap-2">
                <AnimatedArrowLine direction="rtl" />
                <div className="shrink-0 flex items-center gap-1.5 bg-cyan-500/10 border border-cyan-500/30 rounded-full px-2.5 py-1">
                  <ArrowLeft className="w-3 h-3 text-cyan-400 shrink-0" />
                  <span className="text-[10px] font-semibold text-cyan-400 whitespace-nowrap">{t.labelDownload}</span>
                </div>
                <AnimatedArrowLine direction="rtl" />
              </div>
            </div>

            {/* CENTER Node */}
            <div className="flex flex-col items-center shrink-0 w-44">
              <div className="w-16 h-16 rounded-2xl bg-[#0B1120] border-2 border-indigo-400 flex items-center justify-center shadow-[0_0_20px_rgba(129,140,248,0.25)]">
                <Cloud className="w-8 h-8 text-indigo-400" />
              </div>
              <div className="mt-3 text-center">
                <div className="text-[11px] font-black text-indigo-400 tracking-wide leading-tight">{t.nodeCenter}</div>
                <div className="text-[10px] text-slate-500 mt-0.5">{t.nodeCenterSub}</div>
                <div className="mt-2 inline-flex items-center gap-1 bg-indigo-500/10 border border-indigo-500/30 rounded-full px-2 py-0.5">
                  <LayoutDashboard className="w-3 h-3 text-indigo-400" />
                  <span className="text-[9px] font-bold text-indigo-400">{t.dashboardBadge}</span>
                </div>
              </div>
            </div>

          </div>

          {/* Dashboard desc */}
          <div className="mt-6 flex items-center justify-center gap-2 text-[11px] text-slate-500">
            <Database className="w-3.5 h-3.5 text-indigo-400/60 shrink-0" />
            <span>{t.dashboardDesc}</span>
          </div>
        </div>

        {/* Description Cards */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-[#020617]/50 p-4 rounded-lg border border-slate-800/80 flex items-start gap-3 hover:border-slate-700 transition-colors">
            <ArrowRight className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
            <div>
              <h4 className="text-xs font-bold text-slate-300">{t.descUploadTitle}</h4>
              <p className="text-[11px] text-slate-500 mt-1.5 leading-relaxed">{t.descUploadBody}</p>
            </div>
          </div>
          <div className="bg-[#020617]/50 p-4 rounded-lg border border-slate-800/80 flex items-start gap-3 hover:border-slate-700 transition-colors">
            <ArrowLeft className="w-4 h-4 text-cyan-500 mt-0.5 flex-shrink-0" />
            <div>
              <h4 className="text-xs font-bold text-slate-300">{t.descDownloadTitle}</h4>
              <p className="text-[11px] text-slate-500 mt-1.5 leading-relaxed">{t.descDownloadBody}</p>
            </div>
          </div>
        </div>

      </div>
    </motion.div>
  );
}

export function NetworkDiagram() {
  const { language } = useLanguage();
  const t = portalTranslations.diagram[language as keyof typeof portalTranslations.diagram] || portalTranslations.diagram.EN;

  const [status] = useState<SensorStatus>("online");

  const statusConfig: Record<SensorStatus, { color: string, text: string, bg: string, icon: any }> = {
    online: { color: "text-emerald-400", text: t.statusOnline, bg: "bg-emerald-500/10 border-emerald-500/30", icon: CheckCircle2 },
    offline: { color: "text-rose-400", text: t.statusOffline, bg: "bg-rose-500/10 border-rose-500/30", icon: AlertCircle },
    warning: { color: "text-amber-400", text: t.statusWarning, bg: "bg-amber-500/10 border-amber-500/30", icon: AlertCircle },
  };

  const StatusIcon = statusConfig[status].icon;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full text-slate-200 font-sans mb-16"
    >
      <div className="bg-[#0B1120] border border-blue-900/30 rounded-xl shadow-[0_0_30px_rgba(6,182,212,0.05)] p-6 hover:border-cyan-500/30 transition-colors duration-500">
        
        {/* Card Header & Status */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
          <div>
            <h3 className="text-lg md:text-xl font-bold text-white tracking-tight flex items-center gap-2">
              <Network className="w-5 h-5 text-cyan-400" />
              {t.headerTitle}
            </h3>
            <p className="text-sm text-slate-500 mt-1">{t.headerSubtitle}</p>
          </div>
          
          <div className={`flex items-center gap-2 text-xs font-bold px-3 py-1.5 rounded-md border ${statusConfig[status].bg} ${statusConfig[status].color}`}>
            <StatusIcon className="w-4 h-4" />
            {statusConfig[status].text}
          </div>
        </div>

        {/* Diagram Area */}
        <div className="bg-[#050B14] rounded-lg border border-slate-800/80 overflow-x-auto custom-scrollbar relative">
          <div className="min-w-[850px] pt-12 pb-32 px-8 flex items-start justify-center relative">
            
            {/* Node 1: Internet */}
            <div className="relative z-10 flex flex-col items-center shrink-0 w-24 group/node">
              <div className="w-12 h-12 rounded-full bg-slate-800 border-2 border-slate-600 flex items-center justify-center shadow-md relative z-10 transition-colors group-hover/node:border-slate-400">
                <Cloud className="w-5 h-5 text-slate-300" />
                <StepBadge step="1" />
              </div>
              <div className="mt-3 text-center leading-tight">
                <div className="text-xs font-bold text-slate-200">{t.nodeInternet}</div>
                <div className="text-[10px] text-slate-500">{t.nodeWan}</div>
              </div>
            </div>

            {/* Line 1 */}
            <AnimatedHorizontalLine />

            {/* Node 2: Firewall */}
            <div className="relative z-10 flex flex-col items-center shrink-0 w-24 group/node">
              <div className="w-12 h-12 rounded-xl bg-slate-800 border-2 border-slate-600 flex items-center justify-center shadow-md relative z-10 transition-colors group-hover/node:border-slate-400">
                <Shield className="w-5 h-5 text-slate-300" />
                <StepBadge step="2" />
              </div>
              <div className="mt-3 text-center leading-tight">
                <div className="text-xs font-bold text-slate-200">{t.nodeFirewall}</div>
                <div className="text-[10px] text-slate-500">{t.nodeGateway}</div>
              </div>
            </div>

            {/* Line 2 */}
            <AnimatedHorizontalLine />

            {/* Node 3: Core Switch & SENSOR */}
            <div className="relative z-10 flex flex-col items-center shrink-0 w-24 group/node">
              {/* Core Switch */}
              <div className="w-12 h-12 rounded-xl bg-slate-800 border-2 border-slate-600 flex items-center justify-center shadow-md relative z-10 transition-colors group-hover/node:border-slate-400">
                <Router className="w-5 h-5 text-slate-300" />
                <StepBadge step="3" />
              </div>
              <div className="mt-3 text-center leading-tight">
                <div className="text-xs font-bold text-slate-200">{t.nodeCoreSwitch}</div>
                <div className="text-[10px] text-slate-500">{t.nodeDistribution}</div>
              </div>

              {/* Branch Down -> Sensor */}
              <div className="absolute top-12 flex flex-col items-center z-0">
                <div className="h-16 border-l-2 border-dashed border-cyan-600/60 relative flex justify-center w-[2px] overflow-hidden">
                  <motion.div 
                    animate={{ top: ["-10%", "110%"] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                    className="absolute w-1.5 h-1.5 bg-cyan-400 rounded-full shadow-[0_0_8px_#22d3ee]"
                  />
                  
                  <div className="absolute top-1/2 left-3 -translate-y-1/2 whitespace-nowrap bg-[#050B14] px-1 text-[10px] font-mono text-cyan-500/80">
                    {t.nodeMirror}
                  </div>
                </div>

                {/* PROTECT SENSOR Node */}
                <div className="relative flex flex-col items-center group/sensor cursor-default mt-1">
                  <div className="absolute -top-3.5 bg-cyan-950 text-cyan-300 px-2 py-0.5 rounded text-[9px] font-bold border border-cyan-800/80 whitespace-nowrap z-20">
                    {t.nodeSensor}
                  </div>

                  <div className={`w-14 h-14 rounded-xl border-2 flex items-center justify-center transition-all duration-300 relative z-10 bg-[#050B14] ${
                    status === "online" 
                      ? "border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.3)] group-hover/sensor:shadow-[0_0_25px_rgba(6,182,212,0.5)]" 
                      : "border-rose-500 shadow-[0_0_15px_rgba(244,63,94,0.3)]"
                  }`}>
                    <ShieldCheck className={`w-7 h-7 ${status === "online" ? "text-cyan-400" : "text-rose-400"}`} />
                  </div>
                  
                  <div className="mt-2 text-center leading-tight whitespace-nowrap">
                    <div className={`text-[13px] font-black tracking-wide ${status === "online" ? "text-cyan-400" : "text-rose-400"}`}>
                      {t.nodeSensor}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Line 3 */}
            <AnimatedHorizontalLine />

            {/* Node 4: Internal Network */}
            <div className="relative z-10 flex flex-col items-center shrink-0 w-24 group/node">
              <div className="w-12 h-12 rounded-full bg-slate-800 border-2 border-slate-600 flex items-center justify-center shadow-md relative z-10 transition-colors group-hover/node:border-slate-400">
                <Server className="w-5 h-5 text-slate-300" />
                <StepBadge step="4" />
              </div>
              <div className="mt-3 text-center leading-tight">
                <div className="text-xs font-bold text-slate-200">{t.nodeInternal}</div>
                <div className="text-[10px] text-slate-500 max-w-[120px] truncate" title={t.nodeInternalSubtitle}>{t.nodeInternalSubtitle}</div>
              </div>
            </div>

          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-[#020617]/50 p-4 rounded-lg border border-slate-800/80 flex items-start gap-3 hover:border-slate-700 transition-colors">
            <Activity className="w-4 h-4 text-cyan-500 mt-0.5 flex-shrink-0" />
            <div>
              <h4 className="text-xs font-bold text-slate-300 flex items-center gap-2">
                <span className="bg-cyan-500/20 text-cyan-400 px-1.5 rounded text-[10px]">SPAN</span>
                {t.descPassiveTitle}
              </h4>
              <p className="text-[11px] text-slate-500 mt-1.5 leading-relaxed">
                {t.descPassiveBody}
              </p>
            </div>
          </div>
          <div className="bg-[#020617]/50 p-4 rounded-lg border border-slate-800/80 flex items-start gap-3 hover:border-slate-700 transition-colors">
            <Network className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
            <div>
              <h4 className="text-xs font-bold text-slate-300">{t.descProtectTitle}</h4>
              <p className="text-[11px] text-slate-500 mt-1.5 leading-relaxed">
                {t.descProtectBody}
              </p>
            </div>
          </div>
        </div>

      </div>
    </motion.div>
  );
}