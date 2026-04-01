"use client";

import { motion } from "framer-motion";
import { 
  Activity, 
  Database, 
  ShieldAlert, 
  Cloud, 
  Zap, 
  LayoutDashboard, 
  Network 
} from "lucide-react";

const EcosystemFeatures = () => {
  return (
    <div className="w-full bg-[#0B1120] text-slate-300 py-20 relative z-10 border-t border-blue-900/20">
      
      {/* =========================================
          1. THE ECOSYSTEM OVERVIEW
      ========================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">PLEASE-PROTECT</span> Ecosystem
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 max-w-2xl mx-auto"
          >
            สถาปัตยกรรมความปลอดภัยที่เชื่อมโยงทุกการปกป้องเข้าด้วยกัน 
            ตั้งแต่การตรวจจับ เก็บข้อมูล ไปจนถึงการตอบสนองภัยคุกคาม
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* 1.1 SENSOR (Active) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, boxShadow: "0px 10px 30px rgba(34, 211, 238, 0.1)" }}
            className="bg-[#162032]/80 backdrop-blur-sm p-8 rounded-2xl border border-cyan-500/50 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 bg-cyan-500/20 text-cyan-400 text-xs font-bold px-3 py-1 rounded-bl-lg">
              AVAILABLE NOW
            </div>
            <div className="w-14 h-14 bg-blue-900/40 rounded-xl flex items-center justify-center mb-6 group-hover:bg-cyan-500/20 transition-colors">
              <Activity className="w-7 h-7 text-cyan-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">SENSOR</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              ตัวรับข้อมูลประสิทธิภาพสูง ตรวจจับทุกความเคลื่อนไหวในระบบเครือข่ายของคุณแบบ Real-time รองรับทั้ง Cloud และ On-Premise
            </p>
          </motion.div>

          {/* 1.2 LOG (Coming Soon - Grayed out) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-[#0B1120]/50 p-8 rounded-2xl border border-slate-800 relative overflow-hidden opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500"
          >
            <div className="absolute top-0 right-0 bg-slate-800 text-slate-400 text-xs font-bold px-3 py-1 rounded-bl-lg">
              COMING SOON
            </div>
            <div className="w-14 h-14 bg-slate-800/50 rounded-xl flex items-center justify-center mb-6">
              <Database className="w-7 h-7 text-slate-400" />
            </div>
            <h3 className="text-xl font-bold text-slate-300 mb-3">LOG MANAGEMENT</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              ระบบจัดเก็บและวิเคราะห์ Log ศูนย์กลางที่ได้มาตรฐานสากล ค้นหาข้อมูลได้รวดเร็ว พร้อมสำหรับการทำ Compliance
            </p>
          </motion.div>

          {/* 1.3 EDR (Coming Soon - Grayed out) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-[#0B1120]/50 p-8 rounded-2xl border border-slate-800 relative overflow-hidden opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500"
          >
            <div className="absolute top-0 right-0 bg-slate-800 text-slate-400 text-xs font-bold px-3 py-1 rounded-bl-lg">
              COMING SOON
            </div>
            <div className="w-14 h-14 bg-slate-800/50 rounded-xl flex items-center justify-center mb-6">
              <ShieldAlert className="w-7 h-7 text-slate-400" />
            </div>
            <h3 className="text-xl font-bold text-slate-300 mb-3">EDR</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Endpoint Detection and Response ปกป้องระดับเครื่องลูกข่าย วิเคราะห์พฤติกรรมต้องสงสัย และหยุดยั้งภัยคุกคามอัตโนมัติ
            </p>
          </motion.div>
        </div>
      </section>


      {/* =========================================
          2. KEY VALUE PROPOSITION
      ========================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            ทำไมต้อง <span className="text-cyan-400">PLEASE-PROTECT?</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 max-w-2xl mx-auto"
          >
            จุดแข็งที่ทำให้เราเป็นโซลูชันความปลอดภัยที่องค์กรยุคใหม่ไว้วางใจ
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { 
              icon: Cloud, 
              title: "Cloud-native & Easy Setup", 
              desc: "ติดตั้งง่าย ไร้รอยต่อ รองรับสถาปัตยกรรมสมัยใหม่ทั้งแบบ Cloud และ On-Premise" 
            },
            { 
              icon: Zap, 
              title: "High-Performance", 
              desc: "สถาปัตยกรรมทรงพลัง รองรับการประมวลผลข้อมูลมหาศาล (10,000+ events/sec) โดยไม่หน่วงระบบ" 
            },
            { 
              icon: LayoutDashboard, 
              title: "Intuitive Dashboard", 
              desc: "หน้าจอแสดงผลออกแบบมาให้เข้าใจง่าย ไม่ซับซ้อน ช่วยให้ตอบสนองภัยคุกคามได้ทันท่วงที" 
            },
            { 
              icon: Network, 
              title: "Centralized Management", 
              desc: "เชื่อมต่อและบริหารจัดการ Ecosystem ทั้งหมดได้จากศูนย์กลางเพียงจุดเดียว" 
            }
          ].map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, borderColor: "rgba(34, 211, 238, 0.5)" }}
              className="bg-[#162032]/40 p-6 rounded-2xl border border-blue-900/30 transition-all group"
            >
              <div className="w-12 h-12 bg-blue-900/30 rounded-xl flex items-center justify-center mb-5 group-hover:bg-cyan-500/20 transition-colors">
                <feature.icon className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default EcosystemFeatures;