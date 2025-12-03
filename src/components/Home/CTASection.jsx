import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="w-full bg-gradient-to-b from-black via-slate-900 to-black py-24 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-4xl text-center px-6"
      >
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-white">
          Ready to Supercharge Your Data Experience?
        </h2>

        {/* Subtitle */}
        <p className="mt-6 text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
          Get started with MITI Digital Hub today — leverage our AI-powered Chatbot
          and advanced Data Tool to simplify, analyze, and visualize your academic
          datasets like never before.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-6">
          <Link
            to="/chatbot"
            className="px-8 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold shadow-lg transition transform hover:scale-105"
          >
            Try Chatbot Now
          </Link>
          <Link
            to="/datatool"
            className="px-8 py-4 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-semibold shadow-lg transition transform hover:scale-105"
          >
            Explore Data Tool
          </Link>
        </div>

        {/* Optional Note */}
        <p className="mt-6 text-gray-400 text-sm">
          No installation required — start instantly in your browser.
        </p>
      </motion.div>
    </section>
  );
};

export default CTASection;
