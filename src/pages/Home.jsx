import { motion } from "framer-motion";
import { Bot } from "lucide-react";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6"
    >
      <div className="flex items-center gap-2 mb-4">
        <Bot className="w-8 h-8 text-blue-500" />
        <h1 className="text-3xl font-bold">Chatbot App</h1>
      </div>

    </motion.div>
  );
};

export default Home;
