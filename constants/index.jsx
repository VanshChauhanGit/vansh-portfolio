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

export const projectsData = [
  {
    title: "EasyWrite - Blog App",
    description:
      "EasyWrite is a user-friendly blog web app that allows users to easily create, read, update and delete blog posts. It features a clean and modern design, providing a seamless writing and reading experience.",
    imageUrl: "./projects/easywrite.png",
    tags: ["React", "Javascript", "Appwrite", "Tailwind CSS", "Redux"],
    liveUrl: "https://easywrite.netlify.app/",
    sourceUrl: "https://github.com/VanshChauhanGit/EasyWrite-Blog-App",
    category: "Web App",
  },
  {
    title: "Chatify - Realtime Chat App",
    description:
      "Chatify is a full-stack, real-time messaging app built mobile-first with React Native. Its robust Node.js, Express, and MongoDB backend powers authentication, profile management, and seamless communication.",
    imageUrl: "./projects/chatify.png",
    tags: [
      "React Native",
      "Node.js",
      "MongoDB",
      "Express",
      "Nativewind",
      "Socket.io",
    ],
    sourceUrl: "https://github.com/VanshChauhanGit/Chatify-App/",
    category: "Mobile App",
  },
  {
    title: "DoQueue - Todo App",
    description:
      "A streamlined to-do list web app designed to enhance productivity and task management. DoQueue allows users to create, organize, and prioritize tasks with an intuitive interface. The app ensures a smooth user experience with features like task status updates and real-time synchronization.",
    imageUrl: "./projects/doqueue.png",
    tags: ["React", "Tailwind CSS", "Vite"],
    liveUrl: "https://doqueue.netlify.app/",
    sourceUrl: "https://github.com/VanshChauhanGit/DoQueue-React-Todo-App",
    category: "Web App",
  },
  {
    title: "Aora App - Video Uploading App",
    description:
      "Aora is a full-stack mobile application for seamless video uploading and sharing. It utilizes Appwrite for its robust backend, handling user authentication, database management, and secure file storage.",
    imageUrl: "./projects/aora.jpg",
    tags: ["React Native", "Appwrite", "Nativewind"],
    sourceUrl: "https://github.com/VanshChauhanGit/Aora-App",
    category: "Mobile App",
  },
  {
    title: "RedStorePro - E-Commerce Frontend App",
    description:
      "A sleek and visually appealing e-commerce website designed to showcase products and provide an engaging shopping experience. RedStore Pro focuses on delivering a responsive and interactive user interface, making it ideal for modern online stores.",
    imageUrl: "./projects/redstorepro.png",
    tags: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://redstorepro.netlify.app/",
    sourceUrl: "https://github.com/VanshChauhanGit/RedStorePro",
    category: "Web App",
  },
  {
    title: "SkyCast - Weather App",
    description:
      "This open-source weather app project is a mobile application for Android, developed using the React Native framework and Expo. It is designed to fetch and display current and forecast weather data.",
    imageUrl: "./projects/skycast.jpg",
    tags: ["React Native", "API", "Nativewind", "Expo"],
    sourceUrl: "https://github.com/VanshChauhanGit/Weather-App",
    category: "Mobile App",
  },
  {
    title: "Weather's Hub - Real-Time Weather Web App",
    description:
      "A user-friendly web app that provides accurate, real-time weather updates for any location. Weather's Hub is designed with a clean and intuitive interface, making it easy to check current weather conditions and forecasts.",
    imageUrl: "./projects/weathershub.png",
    tags: ["API", "HTML", "JavaScript", "Bootstrap"],
    liveUrl: "https://weathershub.netlify.app/",
    sourceUrl: "https://github.com/VanshChauhanGit/WeathersHub",
    category: "Web App",
  },
  {
    title: "GlobalRates - Realtime Currency Converter App",
    description:
      "This real-time currency converter web app offers seamless, accurate conversions between multiple global currencies. It features a user-friendly design, perfect for travelers and financial users.",
    imageUrl: "./projects/globalrates.png",
    tags: ["API", "HTML", "JavaScript", "Bootstrap"],
    liveUrl: "https://globalrates.netlify.app/",
    sourceUrl:
      "https://github.com/VanshChauhanGit/GlobalRates-Currency-Converter",
    category: "Web App",
  },
];
