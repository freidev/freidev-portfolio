import freidev from "../assets/images/freidev.png";
import "atropos/css";
import { motion } from "framer-motion";
export default function Home() {
  return (
    <section className="grid grid-cols-2 gap-20 items-center home-section">
      <div className="ps-5">
        <motion.h3
          className="text-2xl"
          animate={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0 }}
          transition={{ delay: 0.5 }}
        >
          Hello there 👋, Im
        </motion.h3>
        <motion.h1
          className="text-6xl text-blue-300 font-bold mb-3"
          animate={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0 }}
          transition={{ delay: 0.6 }}
        >
          Freilyn Bernabe
        </motion.h1>
        <motion.p
          animate={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0 }}
          transition={{ delay: 0.7 }}
        >
          I'm a motion.passionate FrontEnd developer specialized in web and
          mobile development. The world of coding not only fuels my technical
          curiosity but fills my day with joy and excitement. I'm always eager
          to delve into the code and create engaging, user-friendly digital
          environments.
        </motion.p>
      </div>
      <motion.div
        className="flex justify-center bg-blue-300 rounded-lg relative"
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ delay: 0.8 }}
      >
        <img
          src={freidev}
          alt="My person with opacity 0"
          className="opacity-0"
          style={{ maxHeight: "500px" }}
        />
        <motion.img
          src={freidev}
          className="absolute"
          alt="My person"
          style={{ maxHeight: "500px", scale: 1.08, top: "-20px" }}
          whileHover={{
            scale: [1.15],
            top: "-35px",
            cursor: "pointer",
            transition: { duration: 0.2, ease: "easeInOut", type: "spring" },
          }}
          // animate={{ opacity: 1, scale: 1.08, top: -20 }}
          // initial={{ opacity: 0, scale: 0.5 }}
          // transition={{ delay: 0.5 }}
        />
      </motion.div>
    </section>
  );
}
