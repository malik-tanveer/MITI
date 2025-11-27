// src/components/Footer.jsx
import { NavLink } from "react-router-dom";
import { Github, Linkedin, Twitter, Home, Info, Mail, MessageSquare, Database, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const navItems = [
    { name: "Home", path: "/", icon: <Home className="w-4 h-4" /> },
    { name: "About", path: "/about", icon: <Info className="w-4 h-4" /> },
    { name: "Contact", path: "/contact", icon: <Mail className="w-4 h-4" /> },
    { name: "Chatbot", path: "/chatbot", icon: <MessageSquare className="w-4 h-4" /> },
    { name: "Data Tool", path: "/datatool", icon: <Database className="w-4 h-4" /> },
  ];


  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-gradient-to-t from-black via-slate-900 to-black backdrop-blur-2xl border-t border-slate-800 shadow-[0_0_40px_rgba(0,0,0,0.5)] text-gray-300 px-6 py-12"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Logo + Description */}
        <div className="flex flex-col items-start gap-3">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center border border-white/20 shadow-lg">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-white font-bold text-lg">MITI</h1>
              <p className="text-gray-400 text-sm">Memon Industrial & Technical Institute</p>
            </div>
          </div>
          <p className="text-gray-400 text-xs md:text-sm mt-2 max-w-xs">
MITI showcases innovative projects. Explore the <strong>Data Tool</strong> for CSV visualization by Maroof, and the <strong>Chatbot</strong> assistance project by Tanveer. Interactive and professional projects designed to highlight skills and creativity.          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-2">
          <h2 className="text-white font-semibold text-sm md:text-base">Quick Links</h2>
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className="flex items-center gap-2 text-gray-400 hover:text-white transition text-sm md:text-base"
            >
              {item.icon} {item.name}
            </NavLink>
          ))}
        </div>

        {/* Tools / Resources */}
        <div className="flex flex-col gap-2">
          <h2 className="text-white font-semibold text-sm md:text-base">Resources</h2>
          <a
            href="/datatool"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition text-sm md:text-base flex items-center gap-2"
          >
            <Database className="w-4 h-4" /> Data Tool
          </a>
          <a
            href="/chatbot"
            className="text-gray-400 hover:text-white transition text-sm md:text-base flex items-center gap-2"
          >
            <MessageSquare className="w-4 h-4" /> Chatbot
          </a>
        </div>

        {/* Creators + Social */}
        <div className="flex flex-col gap-4">
          <h2 className="text-white font-semibold text-sm md:text-base">Made by</h2>
          <a
            href="https://github.com/malik-tanveer"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-400 hover:text-white transition text-sm md:text-base"
          >
            <Github className="w-5 h-5" /> Tanveer (Landing Page & Chatbot)
          </a>
          <a
            href="https://github.com/maroofiums"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-400 hover:text-white transition text-sm md:text-base"
          >
            <Github className="w-5 h-5" /> Maroof (Data Tool)
          </a>

          {/* Social Icons */}
        </div>
      </div>

      <div className="mt-8 text-center text-gray-500 text-xs md:text-sm">
        &copy; {new Date().getFullYear()} MITI. All rights reserved.
      </div>
    </motion.footer>
  );
}
