"use client";

import Navbar from "@/src/modules/home/components/nav-bar"; 
import HeroSection from "./components/hero-section"; 
import ParticlesHero from "./components/ParticleBackground";
import EcosystemFeatures from "./components/ecosystem-features";
import Footer from "./components/footer";

export const HomeView = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#0B1120] text-slate-300">
      
      <ParticlesHero />

      <Navbar />

      <main className="relative z-10 w-full overflow-x-hidden pt-16">
        <HeroSection />
        <EcosystemFeatures />
      </main>
      <Footer />
      
    </div>
  );
};