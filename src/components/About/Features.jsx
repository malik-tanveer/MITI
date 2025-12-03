import React from "react";
import { motion } from "framer-motion";
import { Database, BarChart2, Cpu, Layers } from "lucide-react";

const featuresData = [
  {
    icon: <Database className="w-12 h-12 text-indigo-400" />,
    title: "Data Upload & Management",
    description: "Upload CSV, Excel, or TXT files easily via drag-and-drop or browse. Quick file previews, auto-detection of columns and data types, and complete file history let you switch datasets seamlessly.",
  },
  {
    icon: <Layers className="w-12 h-12 text-purple-400" />,
    title: "Data Cleaning & Preprocessing",
    description: "Handle missing values, remove duplicates, rename columns, filter rows, and sort by any column. Prepare your datasets effortlessly for analysis or machine learning tasks.",
  },
  {
    icon: <BarChart2 className="w-12 h-12 text-blue-400" />,
    title: "Data Visualization",
    description: "Generate bar, line, pie, scatter, and histogram charts. Interactively select columns and filters, and get auto-generated insights from visualizations instantly.",
  },
  {
    icon: <Cpu className="w-12 h-12 text-yellow-400" />,
    title: "AI-Powered Chatbot Assistance",
    description: "Our intelligent Chatbot guides users step-by-step, answering questions about datasets, ML models, charts, or the platform itself. Provides smart suggestions in real-time.",
  },
  {
    icon: <Database className="w-12 h-12 text-green-400" />,
    title: "Machine Learning Integration",
    description: "Select target columns, automatically split train/test sets, apply regression or classification models, and visualize prediction accuracy. Download results for further use.",
  },
  {
    icon: <Layers className="w-12 h-12 text-pink-400" />,
    title: "Dataset Merge & Combine",
    description: "Merge multiple CSV or Excel files based on column alignment. Choose merge types: inner, left, right, or outer, and generate clean, combined datasets ready for analysis.",
  },
  {
    icon: <BarChart2 className="w-12 h-12 text-orange-400" />,
    title: "Stats & Summary Insights",
    description: "Get mean, median, mode, min/max, standard deviation, and column-wise summaries automatically. Auto-generated textual insights save time and make analysis easier.",
  },
  {
    icon: <Cpu className="w-12 h-12 text-red-400" />,
    title: "Export & Reporting",
    description: "Export cleaned datasets, ML predictions, and visualizations in CSV, Excel, or PDF formats. Generate professional project reports quickly for presentations or assignments.",
  },
];

const Features = () => {
  return (
    <section className="w-full bg-gradient-to-b from-black via-slate-900 to-black py-28">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-white"
        >
          Key Features
        </motion.h2>
        <p className="text-gray-400 max-w-2xl mx-auto mt-4 text-lg">
          Explore the full power of our Data Tool and Chatbot platform. Each feature is designed to make data handling, visualization, machine learning, and AI assistance easy and efficient.
        </p>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {featuresData.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="p-8 bg-slate-900/60 border border-slate-800 rounded-2xl backdrop-blur-xl shadow-xl text-left"
            >
              <div className="mb-5">{feature.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
