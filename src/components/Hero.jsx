import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { socialLinks } from "../../constants";

const AnimatedBackground = () => (
  <div className="absolute inset-0 overflow-hidden -z-10">
    <motion.div
      className="absolute rounded-full top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-purple-500/20 dark:from-blue-500/10 dark:to-purple-500/10"
      animate={{
        scale: [1, 1.2, 1],
        x: [-20, 20, -20],
        y: [-20, 20, -20],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
      }}
      style={{ filter: "blur(100px)" }}
    />
    <motion.div
      className="absolute rounded-full bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-tl from-pink-500/20 to-indigo-500/20 dark:from-pink-500/10 dark:to-indigo-500/10"
      animate={{
        scale: [1, 1.1, 1],
        x: [30, -30, 30],
        y: [30, -30, 30],
      }}
      transition={{
        duration: 25,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
        delay: 5,
      }}
      style={{ filter: "blur(100px)" }}
    />
  </div>
);

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <section
      id="hero"
      className="relative flex items-center justify-center min-h-screen pt-20 overflow-hidden text-center"
    >
      <AnimatedBackground />
      <div className="absolute inset-0 bg-grid-gray-200/[0.4] dark:bg-grid-gray-700/[0.3] [mask-image:linear-gradient(to_bottom,white_5%,transparent_100%)]"></div>
      <div className="absolute inset-0 pointer-events-none bg-white dark:bg-gray-900 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      <motion.div
        className="relative z-10 max-w-4xl px-4 mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="mb-6 text-5xl font-extrabold text-gray-900 md:text-7xl lg:text-8xl dark:text-white"
          variants={itemVariants}
        >
          <span className="text-blue-500 text-4 xl inline-block">I'm</span>
          <span
            className="
              inline-block
              animate-text-shine 
              bg-clip-text text-transparent 
              bg-[linear-gradient(110deg,theme(colors.gray.900)_45%,theme(colors.gray.400)_50%,theme(colors.gray.900)_55%)]
              dark:bg-[linear-gradient(110deg,theme(colors.white)_45%,theme(colors.gray.300)_50%,theme(colors.white)_55%)]
              bg-[length:250%_100%]
            "
          >
            Vansh Chauhan
          </span>
        </motion.h1>

        <motion.h2
          className="mb-8 text-2xl font-bold text-transparent md:text-4xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text animate-text-gradient"
          variants={itemVariants}
        >
          Full Stack Developer
        </motion.h2>

        <motion.p
          className="max-w-3xl mx-auto mb-12 text-lg text-gray-500 md:text-xl dark:text-gray-400"
          variants={itemVariants}
        >
          Building complete, user-centric applications from scratch. Leveraging
          the MERN stack and React Native, I enjoy turning complex ideas into
          functional, real-world solutions.
        </motion.p>

        <motion.div
          className="flex justify-center gap-8 mb-12"
          variants={itemVariants}
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 transition-transform duration-300 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 hover:scale-125"
              whileHover={{ scale: 1.2, color: "#3b82f6" }}
            >
              {link.icon}
            </motion.a>
          ))}
        </motion.div>

        {/* <motion.div variants={itemVariants}>
          <Link
            to="about"
            smooth={true}
            duration={500}
            offset={-70}
            className="inline-block px-8 py-4 text-lg font-semibold text-white transition-all duration-300 transform rounded-lg shadow-lg cursor-pointer bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105"
          >
            Know More About Me
          </Link>
        </motion.div> */}
      </motion.div>
      <div className="absolute -translate-x-1/2 bottom-5 left-1/2">
        <Link
          to="about"
          smooth={true}
          duration={500}
          offset={-70}
          className="cursor-pointer"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex items-start justify-center w-6 h-10 p-1 border-2 border-gray-400 rounded-full dark:border-gray-600"
          >
            <motion.div
              className="w-1 h-2 bg-gray-400 rounded-full dark:bg-gray-600"
              animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
