import React from "react";
import { Code2 } from "lucide-react";
import { socialLinks } from "../../constants";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-gray-50 dark:bg-gray-900/50 dark:border-gray-800">
      <div className="px-4 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-2">
            <Code2 className="w-6 h-6 text-blue-500" />
            <span className="text-lg font-bold text-gray-800 dark:text-gray-100">
              Vansh Chauhan
            </span>
          </div>

          <div className="flex gap-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition-transform duration-300 dark:text-gray-500 hover:text-blue-500 dark:hover:text-blue-400 hover:scale-125"
              >
                {link.icon}
              </a>
            ))}
          </div>

          <p className="text-sm text-center text-gray-500 dark:text-gray-400 sm:text-right">
            &copy; {new Date().getFullYear()} Vansh Chauhan. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
