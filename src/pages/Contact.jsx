// src/pages/Contact.jsx
import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Yahan backend ya email API integration add kar sakte ho
    alert(`Thank you, ${formData.name}! Your message has been sent.`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="pt-24 min-h-screen bg-gradient-to-b from-black via-slate-900 to-black text-gray-300 px-4"
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
          Contact Us
        </h1>
        <p className="text-gray-400 text-center mb-10">
          Connect with MITI or the developers for inquiries, feedback, or support.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <MapPin className="w-6 h-6 text-indigo-400" />
              <span>MITI, Memon Industrial & Technical Institute</span>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="w-6 h-6 text-indigo-400" />
              <span>+92 300 1234567</span>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="w-6 h-6 text-indigo-400" />
              <span>info@miti.com</span>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 bg-slate-900/70 backdrop-blur-md p-6 rounded-xl border border-slate-800 shadow-md"
          >
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="bg-slate-800 text-white px-4 py-2 rounded-lg border border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="bg-slate-800 text-white px-4 py-2 rounded-lg border border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows={5}
              className="bg-slate-800 text-white px-4 py-2 rounded-lg border border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
            <button
              type="submit"
              className="bg-indigo-500 hover:bg-indigo-600 transition text-white py-2 rounded-lg font-semibold"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
}
