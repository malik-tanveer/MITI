import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";

const Datatool = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = "https://datatool-by-maroofiums.streamlit.app/";
    }, 1000); // 1 second delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black via-slate-900 to-black text-white px-4 text-center">
      
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl font-bold mb-6 flex flex-col md:flex-row items-center justify-center gap-3"
      >
        <motion.span
          initial={{ y: -20, scale: 0.8 }}
          animate={{ y: 0, scale: 1 }}
          transition={{ type: "spring", stiffness: 120, delay: 0.2 }}
          className="text-indigo-500"
        >
          Memon
        </motion.span>
        <motion.span
          initial={{ y: -20, scale: 0.8 }}
          animate={{ y: 0, scale: 1 }}
          transition={{ type: "spring", stiffness: 120, delay: 0.4 }}
          className="text-white"
        >
          Data Tool
        </motion.span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opaciddddty: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.7 }}
        className="text-lg md:text-xl mb-10 max-w-xl"
      >
        Welcome to Memon Data Tool – your all-in-one solution for analyzing, cleaning, and visualizing data effortlessly. Everything you need to make sense of your data is here. You will be redirected shortly.
      </motion.p>

      {/* Loader */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        className="w-14 h-14 flex items-center justify-center"
      >
        <Loader2 className="w-12 h-12 text-indigo-500" />
      </motion.div>
    </div>
  );
};

export default Datatool;