


import { motion } from "framer-motion";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Contact = () => {
  return (
    <section
      id="contact"
      className="px-8 md:px-24 py-24 bg-white"
    >
      <div className="grid md:grid-cols-2 gap-20">

        {/* LEFT INFO */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.h2 variants={itemVariants} className="section-title mb-6">
            Get In Touch<span className="section-dot">.</span>
          </motion.h2>

          <motion.p variants={itemVariants} className="body-text max-w-md mb-12">
            Looking to partner or work together? Reach out through the
            form and I'll get back to you in the next 48 hours.
          </motion.p>

          <motion.div className="flex flex-col gap-8">
            <motion.a
              variants={itemVariants}
              href="mailto:mia2823457@gmail.com"
              className="flex items-center gap-6 group"
            >
              <div className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center group-hover:border-primary transition" title="Send me an email"
              >
                <HiOutlineMail size={22} className="text-primary" />
              </div>

              <p className="text-lg text-gray-700 group-hover:text-primary transition">
                mia2823457@gmail.com
              </p>
            </motion.a>


            <motion.a
              variants={itemVariants}
              href="https://wa.me/914342943924"

              className="flex items-center gap-6 group"
            >
              <div className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center group-hover:border-primary transition" title="Call me"
              >
                <HiOutlinePhone size={22} className="text-primary" />
              </div>

              <p className="text-lg text-gray-700 group-hover:text-primary transition">
                +91 7317404019
              </p>
            </motion.a>

          </motion.div>
        </motion.div>

        

      </div>
    </section>
  );
};

export default Contact;
