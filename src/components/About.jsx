import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { socialLinks } from "../../constants";

const About = () => {
  return (
    <SectionWrapper id="about" className="bg-gray-50/50 dark:bg-black/20">
      <div className="mb-8 text-center">
        <h2 className="text-4xl font-bold text-gray-900 md:text-5xl dark:text-white">
          About <span className="text-blue-500">Me</span> !
        </h2>
      </div>
      <div className="flex flex-col items-center justify-center gap-12 md:flex-row lg:gap-20">
        <motion.div
          className="flex-shrink-0 text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="./Vansh-Image.png"
            alt="A professional portrait of a person"
            className="object-cover mx-auto border-4 border-white rounded-full shadow-lg w-60 h-60 md:w-64 md:h-64 dark:border-gray-800"
          />
          <div className="flex justify-center gap-4 mt-6">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-gray-600 transition-all duration-300 bg-white border border-gray-200 rounded-full shadow-sm dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg hover:border-blue-400 dark:hover:border-blue-500 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="flex-grow max-w-2xl"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="mb-4 text-lg leading-relaxed text-justify text-gray-600 dark:text-gray-300">
            Hi, I'm{" "}
            <strong className="font-semibold text-gray-800 dark:text-gray-100">
              Vansh Chauhan
            </strong>
            , a passionate Full Stack Developer with a love for building dynamic
            and responsive web applications with a deep understanding of both
            front-end and back-end technologies. I enjoy creating seamless user
            experiences using modern tools & technologies like React, Tailwind
            CSS, Node.js, Express.js, MongoDB, Next.js, React Native and more.
          </p>
          <p className="mb-4 text-lg leading-relaxed text-justify text-gray-600 dark:text-gray-300">
            My journey into full-stack development has been driven by a constant
            curiosity and a desire to solve real-world problems with clean,
            efficient code.
          </p>
          <p className="text-lg leading-relaxed text-justify text-gray-600 dark:text-gray-300">
            Whether it's building interactive user interfaces or managing
            databases, I aim to deliver high-quality, scalable solutions. I am
            always excited to learn new technologies and improve my skills to
            keep up with the fast-paced world of web development along with app
            development.
          </p>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default About;
