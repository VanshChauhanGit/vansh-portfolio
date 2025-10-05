import React, { useState } from 'react';
import { motion } from 'framer-motion';

const SkillCard = ({ skill, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative group"
    >
      <div className="relative p-6 overflow-hidden transition-all duration-300 bg-white border border-gray-200 shadow-sm dark:bg-gray-800 backdrop-blur-sm rounded-2xl dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-lg dark:shadow-none dark:hover:shadow-xl dark:hover:shadow-blue-500/10">
        <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 group-hover:opacity-100" />
        
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <motion.div
                animate={{ rotate: isHovered ? 360 : 0 }}
                transition={{ duration: 0.6 }}
                className="p-3 bg-blue-100/50 dark:bg-blue-900/50 rounded-xl"
              >
                {skill.icon}
              </motion.div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">{skill.name}</h3>
            </div>
            <span className="text-sm font-medium text-blue-500 dark:text-blue-400">{skill.level}%</span>
          </div>

          <div className="relative h-2 mb-3 overflow-hidden bg-gray-200 rounded-full dark:bg-gray-700">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${skill.level}%` }}
              transition={{ duration: 1, delay: index * 0.1 + 0.3, ease: 'easeOut' }}
              className="absolute top-0 left-0 h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
            />
            <motion.div
              animate={{
                x: ['-100%', '100%'],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-transparent via-black/10 dark:via-white/10 to-transparent"
              style={{ width: '30%' }}
            />
          </div>

          <p className="text-sm text-gray-500 dark:text-gray-400">{skill.description}</p>

          <div className="flex flex-wrap gap-2 mt-4">
            {skill.tags.map((tag, i) => (
              <motion.span
                key={i}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 + 0.5 + i * 0.05 }}
                className="px-2 py-1 text-xs font-medium text-gray-600 bg-gray-100 rounded-lg dark:bg-gray-700 dark:text-gray-300"
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </div>

        <motion.div
          className="absolute w-40 h-40 rounded-full -bottom-20 -right-20 bg-gradient-to-br from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 blur-3xl"
          animate={{
            scale: isHovered ? 1.5 : 1,
            opacity: isHovered ? 1 : 0.5,
          }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  );
};

export default SkillCard;
