"use client";

import { motion } from "framer-motion";
import { Cloud, ShieldCheck, Server, Monitor, Laptop, Database, ArrowDown, ArrowRight, Eye } from "lucide-react";

export function NetworkDiagram() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full border border-blue-900/30 rounded-3xl p-8 relative overflow-hidden group"
    >
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-cyan-600/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="text-center mb-10 relative z-10">
        <h2 className="text-2xl font-bold text-white tracking-tight">Sensor Deployment Architecture</h2>
        <p className="text-slate-400 text-sm mt-2">Sensor Diagram</p>
      </div>

      <div className="flex flex-col items-center relative z-10">
        <img 
          src="/diagram.jpg" 
          alt="PLEASE-PROTECT Network Diagram"
          className="w-full h-auto max-h-[600px] object-contain transition-transform duration-500 group-hover:scale-[1.01]"
        />
      </div>
    </motion.div>
  );
}