import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SkillCard from "./SkillCard";
import { skillsData } from "../../constants/index";
import { Sparkles } from "lucide-react";

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...skillsData.map((cat) => cat.category)];

  const filteredSkills =
    selectedCategory === "All"
      ? skillsData.flatMap((cat, catIndex) =>
          cat.skills.map((skill, skillIndex) => ({
            ...skill,
            index: catIndex * 10 + skillIndex,
          }))
        )
      : skillsData
          .find((cat) => cat.category === selectedCategory)
          ?.skills.map((skill, index) => ({ ...skill, index })) || [];

  return (
    <div className="min-h-screen px-4 py-20 sm:px-6 lg:px-8 bg-gray-50/50 dark:bg-black/20">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-blue-100 border border-blue-200 rounded-full dark:bg-blue-900/50 dark:border-blue-800"
          >
            <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
              My Expertise
            </span>
          </motion.div>

          <h1 className="mb-6 text-5xl font-bold text-gray-900 sm:text-6xl lg:text-7xl dark:text-white">
            <span className="text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text">
              Skills & Technologies
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400">
            A comprehensive showcase of my technical abilities and expertise
            across various technologies
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/25"
                  : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:border-gray-700"
              }`}
            >
              <div className="flex items-center gap-2">
                {category !== "All" &&
                  skillsData.find((cat) => cat.category === category)?.icon}
                <span>{category}</span>
              </div>
            </motion.button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {filteredSkills.map((skill, index) => (
              <SkillCard
                key={`${skill.name}-${index}`}
                skill={skill}
                index={index}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-white border border-gray-200 shadow-sm dark:bg-gray-800 rounded-2xl dark:border-gray-700">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.8 + i * 0.1 }}
                  className="flex items-center justify-center w-10 h-10 font-semibold text-white border-2 border-white rounded-full bg-gradient-to-br from-blue-500 to-purple-500 dark:border-gray-800"
                >
                  {i}
                </motion.div>
              ))}
            </div>
            <div className="text-left">
              <p className="font-medium text-gray-800 dark:text-gray-100">
                Continuous Learning
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Always exploring new technologies
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
