

import { motion } from "framer-motion";
import {
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaDribbble,
} from "react-icons/fa";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const Footer = () => {
  return (
    <motion.footer
      className="bg-white px-8 md:px-24 py-12 border-t border-gray-200"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      {/* TOP BAR */}
      <motion.div
        variants={itemVariants}
        className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12"
      >
        {/* NAV LINKS */}
        <ul className="flex gap-6 font-medium text-gray-700 text-sm">
          <li><a href="#home" className="text-primary
">Home</a></li>
          <li><a href="#projects" className="hover:text-primary
 transition">Projects</a></li>
          <li><a href="#about" className="hover:text-primary
 transition">About</a></li>
          <li><a href="#contact" className="hover:text-primary
 transition">Contact</a></li>
        </ul>

        {/* SOCIAL ICONS */}
        <div className="flex gap-5 text-gray-600 text-lg">
          <a href="#" className="hover:text-primary
 transition"><FaInstagram /></a>
          <a href="#" className="hover:text-primary
 transition"><FaLinkedinIn /></a>
          <a href="#" className="hover:text-primary
 transition"><FaGithub /></a>
          <a href="#" className="hover:text-primary
 transition"><FaDribbble /></a>
        </div>
      </motion.div>

      {/* CTA + COPYRIGHT */}
      <motion.div
        variants={itemVariants}
        className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
      >
        {/* CTA */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Interested in working together?
          </h2>

          <div className="flex gap-3">
            <a
              href="#contact"
              className="bg-primary
 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-primary
 transition"
            >
              Get In Touch
            </a>

            <a
              href="#projects"
              className="border border-gray-300 px-5 py-2.5 rounded-lg text-sm font-medium hover:border-primary
 hover:text-primary
 transition"
            >
              Browse Projects
            </a>
          </div>
        </div>

        {/* COPYRIGHT */}
        <p className="text-gray-500 text-sm md:text-right">
          © {new Date().getFullYear()} Irfan. All rights reserved.
        </p>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
