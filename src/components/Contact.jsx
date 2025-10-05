import React from "react";
import { motion } from "framer-motion";
import { Send, Mail, Phone } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <SectionWrapper id="contact" className="bg-gray-50/50 dark:bg-black/20">
      <div className="mb-16 text-center">
        <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl dark:text-white">
          <span className="text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text">
            Get In Touch
          </span>
        </h2>
        <p className="max-w-2xl mx-auto text-lg text-gray-500 dark:text-gray-400">
          Have a project in mind or just want to say hi? I'd love to hear from
          you.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="md:col-span-2">
          <motion.form
            className="p-8 space-y-6 bg-white border border-gray-200 shadow-sm dark:bg-gray-800 dark:border-gray-700 rounded-2xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 text-gray-800 placeholder-gray-400 transition-all bg-gray-100 border-gray-300 rounded-lg outline-none dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 dark:placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 text-gray-800 placeholder-gray-400 transition-all bg-gray-100 border-gray-300 rounded-lg outline-none dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 dark:placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full px-4 py-3 text-gray-800 placeholder-gray-400 transition-all bg-gray-100 border-gray-300 rounded-lg outline-none resize-none dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 dark:placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            ></textarea>
            <div className="text-right">
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-8 py-3 text-lg font-semibold text-white transition-all duration-300 transform rounded-lg shadow-lg bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105"
              >
                <Send size={20} />
                Send Message
              </button>
            </div>
          </motion.form>
        </div>

        <div className="space-y-6">
          <motion.div
            className="flex items-center gap-4 p-6 bg-white border border-gray-200 shadow-sm dark:bg-gray-800 dark:border-gray-700 rounded-2xl"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Mail className="w-8 h-8 text-blue-500" />
            <div>
              <h4 className="font-semibold text-gray-800 dark:text-gray-100">
                Email
              </h4>
              <a
                href="mailto:VanshChauhan1106@gmail.com"
                className="text-gray-500 transition-colors dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400"
              >
                VanshChauhan1106@gmail.com
              </a>
            </div>
          </motion.div>
          <motion.div
            className="flex items-center gap-4 p-6 bg-white border border-gray-200 shadow-sm dark:bg-gray-800 dark:border-gray-700 rounded-2xl"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Phone className="w-8 h-8 text-blue-500" />
            <div>
              <h4 className="font-semibold text-gray-800 dark:text-gray-100">
                Phone
              </h4>
              <p className="text-gray-500 dark:text-gray-400">+91 9389401218</p>
            </div>
          </motion.div>
          <motion.div
            className="flex items-center gap-4 p-6 bg-white border border-gray-200 shadow-sm dark:bg-gray-800 dark:border-gray-700 rounded-2xl"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <FaWhatsapp className="w-8 h-8 text-blue-500" />
            <div>
              <h4 className="font-semibold text-gray-800 dark:text-gray-100">
                WhatsApp
              </h4>
              <a
                href="https://wa.me/919389401218"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 transition-colors dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400"
              >
                +91 9389401218
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
