import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const imageVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-between px-8 md:px-24 bg-white"
    >
      {/* LEFT CONTENT */}
      <motion.div
        className="max-w-xl"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.p variants={item} className="body-text mb-4">
          Hey, I’m{" "}
          <span className="font-medium text-gray-900">Mohammad Irfan</span> 👋
        </motion.p>

        <motion.h1
          variants={item}
          className="text-7xl font-extrabold leading-tight text-primary"
        >
          <span
            className="text-primary"
          >
            Frontend
          </span>
          <br />
          Developer
        </motion.h1>

        <motion.p variants={item} className="body-text mt-6">
          I build clean, modern, and scalable web applications using the MERN
          stack.
        </motion.p>

        <motion.div variants={item} className="flex gap-4 mt-8">
          <a
            href="#contact"
            className="bg-primary
           text-white px-6 py-3 rounded-xl font-medium hover:bg-primary
           transition"
          >
            Get In Touch
          </a>

          <a
            href="#projects"
            className="border border-gray-300 px-6 py-3 rounded-xl font-medium hover:border-primary
            hover:text-primary
            transition"
          >
            Browse Projects
          </a>
        </motion.div>
      </motion.div>

      {/* RIGHT IMAGE */}
      <motion.div
        className="relative mt-16 md:mt-0 flex items-center justify-center"
        variants={imageVariant}
        initial="hidden"
        animate="show"
      >
        {/* OUTER RING */}
        <motion.div
          className="absolute w-[420px] h-[420px] rounded-full border border-primary
"
          animate={{ y: [0, -8, 0] }}
          transition={{
            repeat: Infinity,
            duration: 4,
            ease: "easeInOut",
          }}
        />

        {/* IMAGE CIRCLE */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="w-[360px] h-[360px] rounded-full overflow-hidden bg-white"
        >
          <img
            src="/profile.png"
            alt="profile"
            className="w-full h-full object-cover grayscale"
            style={{
              objectPosition: "50% 20%", // adjust face alignment if needed
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
