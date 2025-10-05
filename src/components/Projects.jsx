import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import SectionWrapper from './SectionWrapper';

const projectsData = [
  {
    title: 'E-commerce Platform',
    description: 'A modern, full-featured e-commerce site with a custom CMS, built with React and Node.js.',
    imageUrl: 'https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600&h=400',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
    liveUrl: '#',
    sourceUrl: '#',
  },
  {
    title: 'Data Visualization Dashboard',
    description: 'An interactive dashboard for visualizing complex datasets using D3.js and React.',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600&h=400',
    tags: ['React', 'D3.js', 'Framer Motion', 'API'],
    liveUrl: '#',
    sourceUrl: '#',
  },
  {
    title: 'Project Management App',
    description: 'A collaborative tool for teams to manage tasks, track progress, and communicate effectively.',
    imageUrl: 'https://images.unsplash.com/photo-1588531861730-e5dfa5223c6a?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600&h=400',
    tags: ['Next.js', 'Supabase', 'Real-time', 'Auth'],
    liveUrl: '#',
    sourceUrl: '#',
  },
];

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative flex flex-col bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden transition-all duration-300 hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-500/10 dark:hover:shadow-2xl dark:hover:shadow-blue-500/20"
    >
      <div className="relative overflow-hidden">
        <img src={project.imageUrl} alt={project.title} className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      </div>
      
      <div className="flex-grow p-6 flex flex-col">
        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">{project.title}</h3>
        <p className="text-gray-500 dark:text-gray-400 text-sm mb-4 flex-grow">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map(tag => (
            <span key={tag} className="px-2.5 py-1 text-xs font-medium bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300 rounded-full">{tag}</span>
          ))}
        </div>

        <div className="mt-auto flex items-center gap-4">
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-semibold text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300 transition-colors">
            <ExternalLink size={16} />
            Live Demo
          </a>
          <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-semibold text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
            <Github size={16} />
            Source Code
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <SectionWrapper id="projects">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Featured Projects
          </span>
        </h2>
        <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
          Here's a selection of my work. Feel free to explore the live demos and source code.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Projects;
