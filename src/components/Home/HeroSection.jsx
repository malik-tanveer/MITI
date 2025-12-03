import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Brain, MessageCircle, Database } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen w-full bg-gradient-to-b from-black via-slate-900 to-black pt-32 pb-24 flex items-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-6xl mx-auto px-6 text-center"
      >
        {/* Title */}
        <motion.h1
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl font-extrabold text-white leading-tight"
        >
          Welcome to{" "}
          <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
            MITI Digital Hub
          </span>
        </motion.h1>

        {/* Subtitle */}
        <p className="mt-6 text-base md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          A modern platform powered by AI tools. Explore our smart Chatbot built
          for MITI students and the advanced Data Tool designed for analytics,
          automation, and professional reporting.
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

        

      </motion.div>
    </section>
  );
};

export default HeroSection;
