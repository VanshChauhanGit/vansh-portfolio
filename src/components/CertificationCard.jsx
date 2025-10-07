import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const CertificationCard = ({ cert, onImageClick }) => (
  <motion.div
    className="relative flex-shrink-0 overflow-hidden transition-all duration-300 bg-white border border-gray-200 group w-80 dark:bg-gray-800 dark:border-gray-700 rounded-2xl hover:shadow-xl hover:shadow-blue-500/10 dark:hover:shadow-blue-500/20 hover:-translate-y-1"
    whileHover={{ scale: 1.03 }}
  >
    <div
      className="relative h-40 overflow-hidden cursor-pointer"
      onClick={() => onImageClick(cert.imageUrl)}
    >
      <img
        src={cert.imageUrl}
        alt={cert.title}
        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      <div className="absolute p-2 rounded-lg top-4 right-4 bg-white/20 backdrop-blur-sm">
        {cert.icon}
      </div>
    </div>

    <div className="p-4">
      <h3 className="mb-2 text-lg font-bold leading-tight text-gray-900 dark:text-gray-100">
        {cert.title}
      </h3>
      <p className="mb-1 text-sm font-medium text-gray-600 dark:text-gray-400">
        {cert.issuer}
      </p>
      <p className="mb-6 text-xs text-gray-400 dark:text-gray-500">
        Issued {cert.date}
      </p>

      {/* <a
        href={cert.verifyUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg transform transition-all duration-300 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0"
      >
        <ExternalLink size={16} />
        Verify Credential
      </a> */}
    </div>
  </motion.div>
);

export default CertificationCard;
