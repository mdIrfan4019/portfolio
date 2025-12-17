


// import { motion } from "framer-motion";

// const containerVariants = {
//   hidden: { opacity: 0 },
//   show: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.15,
//     },
//   },
// };

// const columnVariants = {
//   hidden: { opacity: 0, y: 30 },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.8, ease: "easeOut" },
//   },
// };

// const Skills = () => {
//   return (
//     <section
//       id="skills"
//       className="px-8 md:px-24 py-24 bg-white"
//     >
//       {/* TITLE */}
//       <motion.h2
//         className="section-title mb-20"
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6, ease: "easeOut" }}
//         viewport={{ once: true }}
//       >
//         Skills<span className="section-dot">.</span>
//       </motion.h2>

//       {/* SKILLS GRID */}
//       <motion.div
//         className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-16"
//         variants={containerVariants}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: true }}
//       >
//         {/* COLUMN 1 */}
//         <motion.div variants={columnVariants}>
//           <h3 className="section-subtitle">Web Design</h3>
//           <ul className="space-y-3 body-text">
//             <li>UI/UX Design</li>
//             <li>Responsive Design</li>
//             <li>Wireframing</li>
//             <li>User Research</li>
//           </ul>
//         </motion.div>

//         {/* COLUMN 2 */}
//         <motion.div variants={columnVariants}>
//           <h3 className="section-subtitle">Frontend</h3>
//           <ul className="space-y-3 body-text">
//             <li>JavaScript</li>
//             <li>ReactJS</li>
//             <li>NextJS</li>
//             <li>CSS3</li>
//           </ul>
//         </motion.div>

//         {/* COLUMN 3 */}
//         <motion.div variants={columnVariants}>
//           <h3 className="section-subtitle">Backend</h3>
//           <ul className="space-y-3 body-text">
//             <li>NodeJS</li>
//             <li>MongoDB</li>
//             <li>ExpressJS</li>
//             <li>Vercel</li>
//           </ul>
//         </motion.div>

//         {/* COLUMN 4 */}
//         <motion.div variants={columnVariants}>
//           <h3 className="section-subtitle">Soft Skills</h3>
//           <ul className="space-y-3 body-text">
//             <li>Communication</li>
//             <li>Collaboration</li>
//             <li>Commitment</li>
//             <li>Leadership</li>
//           </ul>
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// };

// export default Skills;


import { motion } from "framer-motion";
import {
  FaPaintBrush,
  FaReact,
  FaNodeJs,
  FaUsers,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
} from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress } from "react-icons/si";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const columnVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const skillItem = {
  hidden: { opacity: 0, x: -10 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4 },
  },
};

const Skills = () => {
  return (
    <section id="skills" className="px-8 md:px-24 py-24 bg-white">
      {/* TITLE */}
      <motion.h2
        className="section-title mb-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Skills<span className="section-dot">.</span>
      </motion.h2>

      {/* GRID */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {/* WEB DESIGN */}
        <motion.div variants={columnVariants}>
          <h3 className="section-subtitle mb-6">Web Design</h3>
          <ul className="space-y-4">
            <motion.li variants={skillItem} className="flex items-center gap-3 body-text">
              <FaPaintBrush className="text-primary" /> UI / UX Design
            </motion.li>
            <motion.li variants={skillItem} className="flex items-center gap-3 body-text">
              <FaHtml5 className="text-primary" /> HTML5
            </motion.li>
            <motion.li variants={skillItem} className="flex items-center gap-3 body-text">
              <FaCss3Alt className="text-primary" /> Responsive Design
            </motion.li>
          </ul>
        </motion.div>

        {/* FRONTEND */}
        <motion.div variants={columnVariants}>
          <h3 className="section-subtitle mb-6">Frontend</h3>
          <ul className="space-y-4">
            <motion.li variants={skillItem} className="flex items-center gap-3 body-text">
              <FaJs className="text-primary" /> JavaScript
            </motion.li>
            <motion.li variants={skillItem} className="flex items-center gap-3 body-text">
              <FaReact className="text-primary" /> React.js
            </motion.li>
            <motion.li variants={skillItem} className="flex items-center gap-3 body-text">
              <SiTailwindcss className="text-primary" /> Tailwind CSS
            </motion.li>
          </ul>
        </motion.div>

        {/* BACKEND */}
        <motion.div variants={columnVariants}>
          <h3 className="section-subtitle mb-6">Backend</h3>
          <ul className="space-y-4">
            <motion.li variants={skillItem} className="flex items-center gap-3 body-text">
              <FaNodeJs className="text-primary" /> Node.js
            </motion.li>
            <motion.li variants={skillItem} className="flex items-center gap-3 body-text">
              <SiExpress className="text-primary" /> Express.js
            </motion.li>
            <motion.li variants={skillItem} className="flex items-center gap-3 body-text">
              <SiMongodb className="text-primary" /> MongoDB
            </motion.li>
          </ul>
        </motion.div>

        {/* SOFT SKILLS */}
        <motion.div variants={columnVariants}>
          <h3 className="section-subtitle mb-6">Soft Skills</h3>
          <ul className="space-y-4">
            <motion.li variants={skillItem} className="flex items-center gap-3 body-text">
              <FaUsers className="text-primary" /> Communication
            </motion.li>
            <motion.li variants={skillItem} className="flex items-center gap-3 body-text">
              <FaUsers className="text-primary" /> Teamwork
            </motion.li>
            <motion.li variants={skillItem} className="flex items-center gap-3 body-text">
              <FaUsers className="text-primary" /> Problem Solving
            </motion.li>
            <motion.li variants={skillItem} className="flex items-center gap-3 body-text">
              <FaGitAlt className="text-primary" /> Version Control
            </motion.li>
          </ul>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;
