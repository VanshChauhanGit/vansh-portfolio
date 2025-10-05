import {
  Code2,
  Palette,
  Database,
  Cloud,
  Wrench,
  Server,
  Bolt,
} from "lucide-react";
import { Github, Linkedin, Instagram } from "lucide-react";
import {
  FaCss3Alt,
  FaGit,
  FaGithub,
  FaHtml5,
  FaJsSquare,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiNextdotjs,
  SiPostman,
  SiVite,
} from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandReactNative } from "react-icons/tb";

export const socialLinks = [
  { icon: <Linkedin />, url: "https://linkedin.com/in/vanhschauhan0" },
  { icon: <Github />, url: "https://github.com/vanshchauhangit" },
  { icon: <Instagram />, url: "https://instagram.com/vansh_.chauhan/" },
];

export const skillsData = [
  {
    category: "Frontend",
    icon: <Code2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
    skills: [
      {
        name: "React",
        level: 91,
        icon: <FaReact className="w-5 h-5 text-blue-500" />,
        description: "Building dynamic and responsive user interfaces",
        tags: ["Hooks", "Context", "Performance"],
      },
      {
        name: "Next.js",
        level: 86,
        icon: <SiNextdotjs className="w-5 h-5 text-black" />,
        description: "React framework for production-grade applications",
        tags: ["SSR", "File-based Routing", "API Routes"],
      },
      {
        name: "JavaScript",
        level: 85,
        icon: <FaJsSquare className="w-5 h-5 text-blue-500" />,
        description: "Modern ES6+ and advanced programming concepts",
        tags: ["ES6+", "Async/Await", "DOM"],
      },
      {
        name: "HTML5",
        level: 95,
        icon: <FaHtml5 className="w-5 h-5 text-orange-500" />,
        description: "Semantic and accessible web content structure",
        tags: ["Semantic HTML", "Accessibility", "Forms"],
      },
      {
        name: "React Native",
        level: 88,
        icon: <TbBrandReactNative className="w-5 h-5 text-blue-500" />,
        description: "Building cross-platform mobile apps for iOS & Android",
        tags: ["Expo", "Native Modules", "UI Components"],
      },

      {
        name: "CSS3",
        level: 87,
        icon: <FaCss3Alt className="w-5 h-5 text-blue-600" />,
        description: "Modern styling with Flexbox, Grid, and animations",
        tags: ["Flexbox", "Grid", "Responsive Design"],
      },
      {
        name: "Tailwind CSS",
        level: 88,
        icon: <RiTailwindCssFill className="w-5 h-5 text-cyan-500" />,
        description: "Utility-first CSS framework for rapid UI development",
        tags: ["Responsive", "Custom Themes", "Animations"],
      },
    ],
  },
  {
    category: "Backend",
    icon: <Database className="w-5 h-5 text-green-600 dark:text-green-400" />,
    skills: [
      {
        name: "Node.js",
        level: 85,
        icon: <FaNodeJs className="w-5 h-5 text-green-500" />,
        description: "Server-side JavaScript runtime and API development",
        tags: ["Express", "REST APIs", "Authentication"],
      },
      {
        name: "Express.js",
        level: 84,
        icon: (
          <SiExpress className="w-5 h-5 text-gray-600 dark:text-gray-400" />
        ),
        description: "Web application framework for Node.js",
        tags: ["Middleware", "Routing", "API Design"],
      },
      {
        name: "MongoDB",
        level: 82,
        icon: <SiMongodb className="w-5 h-5 text-green-600" />,
        description: "NoSQL database for scalable and flexible data",
        tags: ["Mongoose", "Aggregation", "Indexing"],
      },
    ],
  },
  {
    category: "Tools",
    icon: <Wrench className="w-5 h-5 text-orange-600 dark:text-orange-400" />,
    skills: [
      {
        name: "Git & GitHub",
        level: 84,
        icon: <FaGithub className="w-5 h-5 text-black" />,
        description: "Version control and collaborative development",
        tags: ["Workflows", "Pull Requests", "CI/CD"],
      },
      {
        name: "Postman",
        level: 82,
        icon: <SiPostman className="w-5 h-5 text-orange-600" />,
        description: "A platform for building and testing APIs",
        tags: ["API Testing", "Collections", "Environments"],
      },
      {
        name: "Vite",
        level: 82,
        icon: <SiVite className="w-5 h-5 text-blue-500" />,
        description: "Next-gen frontend build tool for rapid development",
        tags: ["Dev Server", "HMR", "Build Optimization"],
      },
      {
        name: "Cloud Deployment",
        level: 75,
        icon: <Cloud className="w-5 h-5 text-sky-500" />,
        description: "Deployment and infrastructure management",
        tags: ["Vercel", "Netlify"],
      },
    ],
  },
];
