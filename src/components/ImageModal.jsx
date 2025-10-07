import React from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.3, ease: "easeOut" },
  },
  exit: {
    scale: 0.8,
    opacity: 0,
    transition: { duration: 0.2, ease: "easeIn" },
  },
};

const ImageModal = ({ imageUrl, onClose }) => {
  return (
    <motion.div
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-[100] p-4"
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      onClick={onClose}
    >
      <motion.div
        className="relative max-w-4xl max-h-[90vh] bg-gray-900 p-2 rounded-lg shadow-2xl"
        variants={modalVariants}
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on the image
      >
        <img
          src={imageUrl}
          alt="Certification Preview"
          className="max-w-full max-h-[85vh] object-contain rounded"
        />
        <button
          onClick={onClose}
          className="absolute flex items-center justify-center w-10 h-10 text-gray-800 transition-all bg-white rounded-full shadow-lg -top-4 -right-4 dark:bg-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600"
          aria-label="Close image viewer"
        >
          <X size={24} />
        </button>
      </motion.div>
    </motion.div>
  );
};

export default ImageModal;
