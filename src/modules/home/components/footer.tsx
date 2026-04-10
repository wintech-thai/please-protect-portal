"use client";

import { AppRoute } from '@/src/config/app.route';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from "@/src/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  const links = [
    {
      name: t("navbar.about"), 
      link: AppRoute.home + '#about',
    },
    // {
    //   name: t("footer.services"),
    //   link: AppRoute.home + '#services',
    // },
    {
      name: t("navbar.security"), 
      link: AppRoute.privacy,
    },
  ];

  const contactInfo = [
    { icon: Mail, text: 'seubpong.mon@dev-hubs.com', href: 'mailto:seubpong.mon@dev-hubs.com' },
    { icon: Phone, text: '66(0) 94-249-4880', href: 'tel:+66942494880' },
    { icon: MapPin, text: 'Dev Hub Co., Ltd. 55 Sutthisan Winitchai Road, Din Daeng Subdistrict, Din Daeng District, Bangkok 10400, Thailand', href: '#' },
  ];

  /*
  const services = [
    "Container Orchestration",
    "Custom Software Development",
    "Enterprise Web Solutions",
    "DevOps Engineering",
    "Cloud Infrastructure"
  ];
  */

  return (
    <footer className="relative bg-[#0B1120] border-t border-blue-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6 lg:pr-8" 
          >
            <Link href="/">
              <Image
                src="/please-protect.svg"
                alt="Please Protect Logo"
                width={40}
                height={20}
                className="mr-2 opacity-90 hover:opacity-100 transition-opacity mb-2"
              />
            </Link>
            <p className="text-slate-400 leading-relaxed text-sm">
              {t("footer.desc")}
            </p>
          </motion.div>

          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-lg font-bold text-white">{t("footer.services")}</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  className="text-slate-400 hover:text-cyan-400 text-sm cursor-pointer transition-colors"
                >
                  {service}
                </motion.li>
              ))}
            </ul>
          </motion.div>
          */}

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-lg font-bold text-white">{t("footer.quickLinks")}</h3>
            <ul className="space-y-3">
              {links.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  className="text-slate-400 hover:text-cyan-400 text-sm cursor-pointer transition-colors"
                >
                  <Link href={link.link}>
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-lg font-bold text-white">{t("footer.contact")}</h3>
            <div className="space-y-4">
              {contactInfo.map((contact, index) => {
                const IconComponent = contact.icon;
                return (
                  <motion.a
                    key={index}
                    href={contact.href}
                    whileHover={{ x: 5 }}
                    className="flex items-start space-x-3 text-slate-400 hover:text-cyan-400 transition-colors group"
                  >
                    <IconComponent size={18} className="text-slate-500 group-hover:text-cyan-400 flex-shrink-0 mt-0.5 transition-colors" />
                    <span className="text-sm leading-relaxed">{contact.text}</span>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-blue-900/30 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-slate-500 text-xs">
            © {new Date().getFullYear()} DevHub Co., Ltd. {t("footer.rights")}
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href={AppRoute.privacy} className="text-slate-500 hover:text-cyan-400 text-xs transition-colors font-medium">
              {t("footer.privacy")}
            </Link>
            <Link href="#" className="text-slate-500 hover:text-cyan-400 text-xs transition-colors font-medium">
              {t("footer.terms")}
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-900 via-cyan-500 to-blue-900 opacity-50"></div>
      </div>
    </footer>
  );
};

export default Footer;