
// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import ProjectCard from "./ProjectCard";

// const containerVariants = {
//   hidden: { opacity: 0 },
//   show: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.15,
//     },
//   },
// };

// const Projects = () => {
//   const [projects, setProjects] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:5000/api/projects")
//       .then((res) => res.json())
//       .then((data) => setProjects(data));
//   }, []);

//   return (
//     <section
//       id="projects"
//       className="px-8 md:px-24 py-24 bg-white"
//     >
//       {/* TITLE */}
//       <motion.h2
//         className="section-title mb-16"
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         viewport={{ once: true }}
//       >
//         Projects<span className="section-dot">.</span>
//       </motion.h2>

//       {/* PROJECT GRID */}
//       <motion.div
//         className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
//         variants={containerVariants}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: true }}
//       >
//         {projects.map((project) => (
//           <ProjectCard key={project._id} project={project} />
//         ))}
//       </motion.div>
//     </section>
//   );
// };

// export default Projects;


import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

/* ================================
   HARD-CODED PROJECT DATA
   ================================ */
const PROJECTS = [
  {
    _id: "1",
    title: "Wanderlust",
    description:
      "A full-stack platform for listing and booking rooms with authentication and CRUD features.",
    techStack: ["HTML · CSS · JavaScript · Node.js · Express · MongoDB"],
    github: "https://github.com/mdIrfan4019/wanderlust",
    live: "https://wanderlust-ruby-six.vercel.app/",
    image: "/images/Wanderlust.png",
  },
  {
    _id: "2",
    title: "Weather App",
    description:
      "A weather forecasting app that shows real-time weather data using external APIs.",
    techStack: ["React · JavaScript · Express"],
    github: "https://github.com/mdIrfan4019/weather",
    live: "https://weather-rouge-chi-69.vercel.app/",
    image: "/images/Weather.png",
  },
  {
    _id: "3",
    title: "Zerodha Frontend Clone",
    description:
      "A responsive frontend clone of Zerodha with modern UI and smooth animations.",
    techStack: ["React · JavaScript ·Express "],
    github: "https://github.com/mdIrfan4019/Zerodha_Frontend_Clone",
    live: "https://yourportfolio.vercel.app",
    image: "/images/Zerodha.png",
  },
  {
    _id: "4",
    title: "Blog App",
    description:
      "Modern blogging platform for writing, sharing, and managing content..",
    techStack: ["React · JavaScript ·Express "],
    github: "https://github.com/mdIrfan4019/blog-app",
    live: "https://blog-app-xi-seven-68.vercel.app/",
    image: "/images/blogApp.png",
  },
];

/* ================================
   ANIMATION VARIANTS
   ================================ */
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="px-6 md:px-24 py-24 bg-white"
    >
      {/* TITLE */}
      <motion.h2
        className="section-title mb-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Projects<span className="text-primary">.</span>
      </motion.h2>

      {/* PROJECT GRID */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {PROJECTS.map((project) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
