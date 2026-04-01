"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Download, 
  QrCode, 
  FileCheck, 
  BookOpen,
  ArrowLeft 
} from "lucide-react";
import Link from "next/link";
import Navbar from "@/src/modules/home/components/nav-bar";
import ParticlesHero from "@/src/modules/home/components/ParticleBackground";

export default function DocumentPage() {
  const documents = [
    {
      id: 1,
      title: "Product Profile",
      description: "รายละเอียดภาพรวมของผลิตภัณฑ์ หน้าที่การทำงาน และประโยชน์ที่องค์กรจะได้รับ",
      type: "PDF",
      size: "2.4 MB",
      icon: BookOpen,
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 2,
      title: "Product Specification",
      description: "ข้อมูลทางเทคนิค รุ่นต่างๆ ของผลิตภัณฑ์ และรายละเอียดสเปคอย่างละเอียด (Hardware/Software)",
      type: "PDF",
      size: "1.8 MB",
      icon: FileCheck,
      color: "from-purple-500 to-blue-500",
    }
  ];

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#0B1120] text-slate-300">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <ParticlesHero />
      </div>

      <Navbar />

      <main className="relative z-10 w-full pt-28 pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* 1. Header Section */}
          <div className="mb-12">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 text-cyan-500 text-sm font-medium mb-4 cursor-pointer hover:text-cyan-400 transition-colors"
            >
              <Link href="/product/sensor" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" /> Back to Product
              </Link>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-extrabold text-white mb-4"
            >
              PLEASE-PROTECT <span className="text-cyan-400">SENSOR</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-slate-400 text-lg"
            >
              ศูนย์รวมเอกสารและข้อมูลทางเทคนิคสำหรับระบบเซ็นเซอร์ตรวจจับภัยคุกคาม
            </motion.p>
          </div>

          {/* 2. Documents List Grid */}
          <div className="grid grid-cols-1 gap-6">
            {documents.map((doc, index) => (
              <motion.div
                key={doc.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#162032]/60 backdrop-blur-md rounded-2xl border border-blue-900/30 overflow-hidden group hover:border-cyan-500/30 transition-all shadow-xl"
              >
                <div className="flex flex-col lg:flex-row items-stretch">
                  
                  {/* Info Content */}
                  <div className="flex-1 p-6 sm:p-8 flex items-start gap-6">
                    <div className={`w-14 h-14 shrink-0 rounded-2xl bg-gradient-to-br ${doc.color} flex items-center justify-center shadow-lg`}>
                      <doc.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                          {doc.title}
                        </h3>
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-900/50 text-blue-300 border border-blue-800/50 uppercase">
                          {doc.type}
                        </span>
                      </div>
                      <p className="text-slate-400 text-sm leading-relaxed mb-6">
                        {doc.description}
                      </p>
                      
                      <button className="inline-flex items-center gap-2 px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold rounded-lg transition-all shadow-lg active:scale-95">
                        <Download className="w-4 h-4" /> Download <span className="opacity-60 font-normal">({doc.size})</span>
                      </button>
                    </div>
                  </div>

                  {/* QR Code Section */}
                  <div className="w-full lg:w-52 bg-[#0B1120]/50 border-t lg:border-t-0 lg:border-l border-blue-900/30 p-6 flex flex-col items-center justify-center text-center">
                    <div className="relative group/qr p-2 bg-white rounded-xl mb-3 shadow-lg">
                      <div className="w-24 h-24 bg-slate-100 flex items-center justify-center">
                         <QrCode className="w-20 h-20 text-[#0B1120]" />
                      </div>
                      <div className="absolute inset-0 bg-[#0B1120]/90 opacity-0 group-hover/qr:opacity-100 transition-opacity flex items-center justify-center rounded-xl">
                        <p className="text-[10px] font-bold text-cyan-400">SCAN TO OPEN</p>
                      </div>
                    </div>
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">
                      Scan to Mobile
                    </p>
                  </div>

                </div>
              </motion.div>
            ))}
          </div>

          {/* Support Note */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-12 p-8 rounded-2xl border border-dashed border-blue-900/50 text-center bg-blue-900/5"
          >
            <p className="text-slate-500 text-sm">
              ต้องการข้อมูลด้านเทคนิคเชิงลึกเพิ่มเติม? 
              <Link href="/about" className="text-cyan-500 hover:text-cyan-400 font-semibold ml-1 transition-colors">
                ติดต่อทีมวิศวกรของเรา
              </Link>
            </p>
          </motion.div>

        </div>
      </main>
    </div>
  );
}