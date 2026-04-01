"use client";

import React from "react";
import { motion } from "framer-motion";
import { Cloud, Zap, Activity, CheckCircle2, FileText, LayoutDashboard } from "lucide-react";
import Link from "next/link";
import Image from "next/image"; 
import Navbar from "@/src/modules/home/components/nav-bar";
import ParticlesHero from "@/src/modules/home/components/ParticleBackground";

export default function ProductSensorPage() {
  const features = [
    {
      icon: Zap,
      title: "ติดตั้งง่าย พร้อมใช้งานทันที",
      desc: "ออกแบบมาให้ลดความซับซ้อนในการติดตั้ง สามารถ Deploy และพร้อมเริ่มตรวจจับภัยคุกคามในระบบได้ในเวลาอันรวดเร็ว",
    },
    {
      icon: Cloud,
      title: "รองรับ Cloud & On-Premise",
      desc: "ยืดหยุ่นต่อทุกสถาปัตยกรรมขององค์กร ไม่ว่าระบบของคุณจะอยู่บนคลาวด์ หรือเป็นเซิร์ฟเวอร์ภายในองค์กร (On-Premise) ก็ทำงานได้อย่างไร้รอยต่อ",
    },
    {
      icon: Activity,
      title: "ประสิทธิภาพสูง (10,000+ Events/sec)",
      desc: "สถาปัตยกรรมรองรับการรับส่งและประมวลผลข้อมูลมหาศาลได้อย่างมีประสิทธิภาพ มั่นใจได้ว่าไม่มี Log หรือ Event ใดเล็ดลอดสายตา",
    },
  ];

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#0B1120] text-slate-300">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <ParticlesHero />
      </div>

      <Navbar />

      <main className="relative z-10 w-full pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* 1. Header Section */}
          <div className="text-center max-w-4xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/50 bg-cyan-500/10 text-cyan-400 text-sm font-semibold mb-6"
            >
              <Activity className="w-4 h-4" />
              <span>Core Product</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6"
            >
              PLEASE-PROTECT <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">SENSOR</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-slate-400 leading-relaxed"
            >
              หัวใจสำคัญของการตรวจจับและปกป้องระบบเครือข่าย ทำหน้าที่เปรียบเสมือนดวงตา
              ที่คอยเฝ้าระวังทุกความเคลื่อนไหว เพื่อความปลอดภัยสูงสุดขององค์กรคุณ
            </motion.p>
          </div>

          {/* 2. Key Features Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="bg-[#162032]/80 backdrop-blur-md p-8 rounded-2xl border border-blue-900/40 hover:border-cyan-500/50 transition-colors group shadow-lg"
              >
                <div className="w-14 h-14 bg-blue-900/30 rounded-xl flex items-center justify-center mb-6 group-hover:bg-cyan-500/20 transition-colors">
                  <feature.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {feature.desc}
                </p>
                <ul className="mt-6 space-y-2">
                  <li className="flex items-center gap-2 text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-500" /> ตอบโจทย์การใช้งานจริง
                  </li>
                </ul>
              </motion.div>
            ))}
          </div>

          {/* 3. Dashboard Preview Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="w-full"
          >
            <div className="flex flex-col md:flex-row justify-between items-end mb-6 gap-4 px-2">
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">Intuitive Dashboard</h2>
                <p className="text-slate-400 text-sm">หน้าจอแสดงผลการทำงานแบบ Real-time เข้าใจง่าย</p>
              </div>
              <Link href="/document/sensor">
                <button className="flex items-center gap-2 px-6 py-2.5 bg-[#162032] border border-blue-900/50 hover:border-cyan-500/50 text-white font-medium rounded-lg transition-all shadow-lg">
                  <FileText className="w-4 h-4 text-cyan-400" /> ดูเอกสารสเปค (Spec)
                </button>
              </Link>
            </div>

            <div className="w-full rounded-xl border border-blue-900/50 overflow-hidden shadow-2xl shadow-cyan-900/20 group flex flex-col bg-[#020617]">
              
              {/* Decorative elements for the mockup skeleton (ปุ่ม Mac) */}
              <div className="w-full h-8 bg-[#0B1120] border-b border-blue-900/50 flex items-center px-4 gap-2 shrink-0 z-20">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>

              <div className="relative w-full aspect-[16/9] md:aspect-[21/9]">
                <Image 
                  src="/Sensor.png" 
                  alt="PLEASE-PROTECT SENSOR Dashboard Preview" 
                  fill
                  className="object-cover object-top opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                  priority
                />
              </div>

            </div>
          </motion.div>

        </div>
      </main>
    </div>
  );
}