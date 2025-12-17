import { motion } from "framer-motion";

const pageVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const PageTransition = ({ children }) => {
  return (
    <motion.div
      variants={pageVariants}
      initial="hidden"
      animate="show"
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
