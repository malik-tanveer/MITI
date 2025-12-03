import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="w-full bg-gradient-to-b from-black via-slate-900 to-black py-28">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-extrabold text-white"
        >
          Take Your Projects to the Next Level
        </motion.h2>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-gray-400 max-w-2xl mx-auto mt-4 text-lg md:text-xl leading-relaxed"
        >
          Join MITI Digital Hub today and explore AI-powered tools, interactive data
          visualizations, and smart chatbot guidance to streamline your learning and
          development workflow.
        </motion.p>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10"
        >
          <Link
            to="/signup"
            className="inline-flex items-center px-8 py-4 bg-slate-800/60 text-white font-semibold rounded-2xl shadow-lg hover:shadow-2xl backdrop-blur-xl hover:scale-105 transition transform"
          >
            Get Started
            <ArrowRight className="w-5 h-5 ml-3" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
