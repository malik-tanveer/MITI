import React from "react";
import { motion } from "framer-motion";
import { Lightbulb, Target } from "lucide-react"; // Vision & Mission icons

const VisionMission = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  return (
    <section className="w-full bg-gradient-to-b from-black via-slate-900 to-black py-28">
      <div className="max-w-6xl mx-auto px-6 space-y-24">
        {/* Vision */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="flex flex-col md:flex-row items-center md:items-start gap-10"
        >
          <div className="md:w-1/2 text-left">
            <Lightbulb className="w-20 h-20 text-yellow-400 mb-6" />
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Vision
            </h3>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
              We envision a world where students and learners can effortlessly harness
              the power of AI and data analytics. Our goal is to transform complex
              datasets into actionable insights, enabling smarter decision-making,
              faster learning, and deeper understanding. By combining innovation with
              accessibility, we aim to empower every student to achieve their full potential.
            </p>
          </div>
          <div className="md:w-1/2">
            {/* Optional visual illustration / empty space */}
          </div>
        </motion.div>

        {/* Mission */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="flex flex-col md:flex-row-reverse items-center md:items-start gap-10"
        >
          <div className="md:w-1/2 text-left">
            <Target className="w-20 h-20 text-indigo-400 mb-6" />
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Mission
            </h3>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
              Our mission is to provide students with a comprehensive platform that
              simplifies data exploration, analysis, and AI-assisted insights.
              From uploading and cleaning datasets to visualizing results and
              leveraging predictive models, every feature is designed to make
              learning interactive and efficient. We aim to bridge the gap between
              theoretical knowledge and practical application, helping learners
              excel academically and prepare for real-world challenges.
            </p>
          </div>
          <div className="md:w-1/2">
            {/* Optional visual illustration / empty space */}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VisionMission;
