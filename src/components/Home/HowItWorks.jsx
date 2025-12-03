import React from "react";
import { motion } from "framer-motion";
import { Upload, Database, BarChart2, Activity, Layers, Download, MessageCircle } from "lucide-react";

const steps = [
  {
    icon: <Upload className="w-12 h-12 text-indigo-400 mx-auto mb-4" />,
    title: "Upload Your Data",
    description:
      "Easily upload CSV, Excel, or TXT files using drag & drop or browse. Quick preview ensures your data is ready for analysis.",
  },
  {
    icon: <Database className="w-12 h-12 text-purple-400 mx-auto mb-4" />,
    title: "Explore & Clean",
    description:
      "Check for missing values, duplicates, and data types. Apply basic filters and sorting to get a clean dataset efficiently.",
  },
  {
    icon: <BarChart2 className="w-12 h-12 text-green-400 mx-auto mb-4" />,
    title: "Visualize Your Data",
    description:
      "Generate Bar, Line, Pie, or Scatter charts. Interactive filters let you analyze column-wise insights visually.",
  },
  {
    icon: <Activity className="w-12 h-12 text-blue-400 mx-auto mb-4" />,
    title: "Apply Machine Learning",
    description:
      "Select the target column, split train/test automatically, and get predictions with accuracy metrics ready for download.",
  },
  {
    icon: <Download className="w-12 h-12 text-yellow-400 mx-auto mb-4" />,
    title: "Export & Report",
    description:
      "Download processed datasets in CSV/Excel format and auto-generate PDF reports with charts and summary insights.",
  },
  {
    icon: <MessageCircle className="w-12 h-12 text-indigo-300 mx-auto mb-4" />,
    title: "Ask Chatbot for Help",
    description:
      "Get guidance, troubleshooting tips, or advanced suggestions instantly. Chatbot understands context and provides smart solutions.",
  },
];

const HowItWorks = () => {
  return (
    <section className="w-full bg-gradient-to-b from-black via-slate-900 to-black py-24">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-white"
        >
          How It Works
        </motion.h2>

        <p className="text-gray-400 max-w-2xl mx-auto mt-4 text-lg">
          A simple step-by-step guide to get the most out of Memon Digital Hub’s Data Tool and Chatbot.
        </p>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.04 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 bg-slate-900/60 border border-slate-800 rounded-2xl backdrop-blur-xl shadow-md text-center transition"
            >
              {step.icon}
              <h3 className="text-2xl font-bold text-white mb-2">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
