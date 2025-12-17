


import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const dotVariants = {
  hidden: { scale: 0 },
  show: {
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const Experience = () => {
  return (
    <section
      id="experience"
      className="px-8 md:px-24 py-24 bg-white"
    >
      {/* TITLE */}
      <motion.h2
        className="section-title mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Experience<span className="section-dot">.</span>
      </motion.h2>

      {/* TIMELINE */}
      <motion.div
        className="space-y-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {/* ITEM 1 */}
        <motion.div
          variants={itemVariants}
          className="relative pl-8 border-l border-gray-200"
        >
          <motion.span
            variants={dotVariants}
            className="absolute -left-[6px] top-2 w-3 h-3 bg-primary
 rounded-full"
          />

          <p className="muted-text mb-2">2024 – Present</p>
          <h3 className="section-subtitle">MERN Stack Developer</h3>
          <p className="body-text max-w-2xl">
            Building full-stack web applications using React, Node.js,
            Express, and MongoDB with a focus on clean UI and scalable APIs.
          </p>
        </motion.div>

        {/* ITEM 2 */}
        <motion.div
          variants={itemVariants}
          className="relative pl-8 border-l border-gray-200"
        >
          <motion.span
            variants={dotVariants}
            className="absolute -left-[6px] top-2 w-3 h-3 bg-primary
 rounded-full"
          />

          <p className="muted-text mb-2">2023 – 2024</p>
          <h3 className="section-subtitle">Frontend Developer</h3>
          <p className="body-text max-w-2xl">
            Developed responsive interfaces using React and Tailwind CSS,
            focusing on accessibility, performance, and reusable components.
          </p>
        </motion.div>

        {/* ITEM 3 */}
        <motion.div
          variants={itemVariants}
          className="relative pl-8 border-l border-gray-200"
        >
          <motion.span
            variants={dotVariants}
            className="absolute -left-[6px] top-2 w-3 h-3 bg-primary
 rounded-full"
          />

          <p className="muted-text mb-2">2022 – 2023</p>
          <h3 className="section-subtitle">Computer Science Student</h3>
          <p className="body-text max-w-2xl">
            Learned core programming concepts, data structures, and software
            engineering fundamentals while building academic projects.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Experience;
