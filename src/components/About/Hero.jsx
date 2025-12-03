// src/components/About/Hero.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Brain, MessageCircle, Database } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen w-full bg-gradient-to-b from-black via-slate-900 to-black pt-32 pb-24 flex items-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-6xl mx-auto px-6 text-center"
      >
        {/* Heading */}
        <motion.h1
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl font-extrabold text-white leading-tight"
        >
          Welcome to{" "}
          <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
            MITI Student Portal
          </span>
        </motion.h1>

        {/* Subtitle */}
        <p className="mt-6 text-base md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Our platform combines AI-powered Chatbot support with a comprehensive
          Data Tool, specifically tailored for MITI students and academic projects.
          Upload, clean, visualize, and analyze datasets while getting step-by-step
          guidance from our intelligent assistant. Streamline your workflow, gain
          insights instantly, and elevate your learning experience—all in one
          unified, modern interface.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-6">
          <Link
            to="/chatbot"
            className="px-8 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold shadow-lg transition"
          >
            Try Chatbot
          </Link>

          <Link
            to="/datatool"
            className="px-8 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-semibold shadow-lg transition"
          >
            Explore Data Tool
          </Link>
        </div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-20 px-4">
          {/* AI Chatbot */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-8 bg-slate-900/60 border border-slate-800 rounded-2xl backdrop-blur-xl shadow-md text-center h-full"
          >
            <MessageCircle className="w-14 h-14 text-indigo-400 mx-auto mb-5" />
            <h3 className="text-xl font-bold text-white mb-3">AI Chatbot</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Get instant answers and guidance for your datasets, ML workflows,
              and project queries. Context-aware and intelligent support
              tailored for MITI students.
            </p>
          </motion.div>

          {/* Data Tool */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-8 bg-slate-900/60 border border-slate-800 rounded-2xl backdrop-blur-xl shadow-md text-center h-full"
          >
            <Database className="w-14 h-14 text-purple-400 mx-auto mb-5" />
            <h3 className="text-xl font-bold text-white mb-3">Data Tool</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Upload, clean, visualize, and analyze your data effortlessly.
              Full analytics suite including charts, ML models, summaries,
              and reporting—all in one modern platform.
            </p>
          </motion.div>

          {/* Student Focus */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-8 bg-slate-900/60 border border-slate-800 rounded-2xl backdrop-blur-xl shadow-md text-center h-full"
          >
            <Brain className="w-14 h-14 text-blue-400 mx-auto mb-5" />
            <h3 className="text-xl font-bold text-white mb-3">Student Focused</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Designed specifically for MITI students. Simplified interface,
              smart recommendations, and guided workflows help you save time,
              gain insights, and focus on learning and growth.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
