import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="relative flex flex-col overflow-hidden transition-all duration-300 bg-white border border-gray-200 group dark:bg-gray-800 dark:border-gray-700 rounded-2xl hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-500/10 dark:hover:shadow-2xl dark:hover:shadow-blue-500/20"
    >
      <div className="relative overflow-hidden">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="object-cover w-full h-56 transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      </div>

      <div className="flex flex-col flex-grow p-6">
        <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-gray-100">
          {project.title}
        </h3>
        <p className="flex-grow mb-4 text-sm text-gray-500 dark:text-gray-400">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 text-xs font-medium bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 mt-auto">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-semibold text-blue-500 transition-colors dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300"
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
          )}

          <a
            href={project.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-semibold text-gray-500 transition-colors dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
          >
            <Github size={16} />
            Source Code
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
