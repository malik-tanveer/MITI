import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqData = [
  {
    faqs: [
      {
        question: "How do I upload CSV, Excel, or TXT files?",
        answer:
          "Simply drag and drop your files or use the browse option. You can preview the data before proceeding."
      },
      {
        question: "How can I merge multiple datasets?",
        answer:
          "You can merge multiple CSV or Excel files by aligning columns. Choose merge type: left, right, inner, or outer."
      },
      {
        question: "How do I clean and preprocess my data?",
        answer:
          "Check for missing values, remove duplicates, rename columns, filter rows, and sort by any column—all in one place."
      },
      {
        question: "How can I generate charts and visualizations?",
        answer:
          "Create bar, line, pie, scatter, and histogram charts. Auto-generate insights and interactively select columns."
      },
      {
        question: "How do I apply ML models on my dataset?",
        answer:
          "Select your target column, split the data into train/test sets automatically, and view predictions and accuracy metrics."
      }
    ]
  },
  {
    faqs: [
      {
        question: "How does the Chatbot help me?",
        answer:
          "Our AI Chatbot guides you step-by-step, answers questions about data, ML, visualizations, or website features, and provides suggestions instantly."
      },
      {
        question: "Does the Chatbot store my data?",
        answer:
          "No, all queries are processed in real-time. Uploaded files are only used for processing and not stored permanently."
      },
      {
        question: "What if the Chatbot cannot answer my query?",
        answer:
          "If the Chatbot is unsure, it will suggest next steps or guide you to relevant tools and features within the platform."
      }
    ]
  }
];

const FAQSection = () => {
  return (
    <section className="w-full bg-black py-24">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-white"
        >
          Frequently Asked Questions
        </motion.h2>
        <p className="text-gray-400 max-w-2xl mx-auto mt-4 text-lg">
          Find clear answers to your most common questions about our powerful Data Tool, intelligent Chatbot, and user-friendly website. Learn how to make the most of MITI Digital Hub’s features, streamline your workflows, and get guidance every step of the way.
        </p>

        <div className="mt-16 flex flex-col gap-12">
          {faqData.map((category, index) => (
            <div key={index} className="text-left">
              <div className="flex flex-col gap-4">
                {category.faqs.map((faq, i) => (
                  <AccordionItem key={i} question={faq.question} answer={faq.answer} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AccordionItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 cursor-pointer"
      onClick={() => setOpen(!open)}
    >
      <div className="flex justify-between items-center">
        <h4 className="text-white font-medium">{question}</h4>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="w-5 h-5 text-gray-300" />
        </motion.div>
      </div>
      {open && (
        <motion.p
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.3 }}
          className="text-gray-400 mt-3 text-sm leading-relaxed"
        >
          {answer}
        </motion.p>
      )}
    </motion.div>
  );
};

export default FAQSection;
