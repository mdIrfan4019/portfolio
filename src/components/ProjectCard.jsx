

// import { motion } from "framer-motion";
// import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// const cardVariants = {
//   hidden: { opacity: 0, y: 30 },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.5, ease: "easeOut" },
//   },
// };

// const ProjectCard = ({ project }) => {
//   return (
//     <motion.div
//       variants={cardVariants}
//       whileHover={{ y: -6 }}
//       className="border border-gray-200 rounded-xl overflow-hidden bg-white"
//     >
//       {/* IMAGE */}
//       <div className="h-40 w-full overflow-hidden bg-gray-100">
//         <motion.img
//           src={project.image || "/portfolio.jpg"}
//           alt="project_image"
//           className="w-full h-full object-cover"
//           whileHover={{ scale: 1.05 }}
//           transition={{ duration: 0.3 }}
//         />
//       </div>

//       {/* CONTENT */}
//       <div className="p-5">
//         <h3 className="text-lg font-semibold text-gray-900 mb-2">
//           {project.title}
//         </h3>

//         <p className="text-sm text-gray-500 mb-4 leading-relaxed">
//           {project.description}
//         </p>

//         {/* TECH */}
//        {/* TECH */}
// {Array.isArray(project.techStack) && project.techStack.length > 0 && (
//   <div className="flex flex-wrap gap-2 mb-4">
//     {project.techStack[0]
//       .split("·")
//       .map((tech, index) => (
//         <span
//           key={index}
//           className="text-xs px-2 py-1 rounded-full border border-gray-300 text-gray-600"
//         >
//           {tech.trim()}
//         </span>
//       ))}
//   </div>
// )}


//         {/* LINKS */}
//         <div className="flex items-center gap-5 text-sm text-gray-700">
//           {project.github && (
//             <a
//               href={project.github}
//               target="_blank"
//               rel="noreferrer"
//               className="flex items-center gap-1 hover:text-primary
//  transition"
//             >
//               <FaGithub />
//               GitHub
//             </a>
//           )}

//           {project.live && (
//             <a
//               href={project.live}
//               target="_blank"
//               rel="noreferrer"
//               className="flex items-center gap-1 hover:text-primary
//  transition"
//             >
//               <FaExternalLinkAlt />
//               Live
//             </a>
//           )}
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default ProjectCard;



import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const ProjectCard = ({ project }) => {
  const {
    title,
    description,
    techStack,
    github,
    live,
    image,
  } = project;

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -6 }}
      className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition"
    >
      {/* IMAGE */}
      <div className="h-44 w-full overflow-hidden bg-gray-100">
        <motion.img
          src={image || "/portfolio.jpg"}
          alt="project_image"
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          loading="lazy"
        />
      </div>

      {/* CONTENT */}
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          {title}
        </h3>

        <p className="text-sm text-gray-500 mb-4 leading-relaxed">
          {description}
        </p>

        {/* TECH STACK */}
        {Array.isArray(techStack) && (
          <div className="flex flex-wrap gap-2 mb-4">
            {techStack[0].split("·").map((tech, index) => (
              <span
                key={index}
                className="text-xs px-2 py-1 rounded-full border border-gray-300 text-gray-600"
              >
                {tech.trim()}
              </span>
            ))}
          </div>
        )}

        {/* LINKS */}
        <div className="flex items-center gap-6 text-sm font-medium text-gray-700">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 hover:text-primary transition"
            >
              <FaGithub />
              GitHub
            </a>
          )}

          {live && (
            <a
              href={live}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 hover:text-primary transition"
            >
              <FaExternalLinkAlt />
              Live
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
