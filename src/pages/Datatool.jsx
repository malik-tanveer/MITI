import React, { useEffect } from "react";
import { motion } from "framer-motion";

const Datatool = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = "https://datatool-by-maroofiums.streamlit.app/";
    }, 1000); // 1 second delay taake loading dikhe

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-slate-900 to-black">
      {/* Simple animated loading text */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full"
      ></motion.div>
    </div>
  );
};

export default Datatool;
