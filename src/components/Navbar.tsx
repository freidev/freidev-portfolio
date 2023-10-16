import { motion } from "framer-motion";
import "../styles/navbar.css";
export default function Navbar() {
  return (
    <nav className="flex justify-between items-center container m-auto p-4">
      <motion.h1
        whileHover={{ cursor: "pointer", scale: 1.05 }}
        className="text-3xl font-bold"
      >
        Freidev 👨🏽‍💻
      </motion.h1>
      <ul className="flex gap-5">
        <motion.li
          whileHover={{ color: "blue", scale: 1.05 }}
          className="item-nav"
        >
          Home
        </motion.li>
        <li className="item-nav">Projects</li>
        <li className="item-nav">Skils</li>
        <li className="item-nav">Resumen</li>
      </ul>
      <motion.button
        type="button"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Say hi!
      </motion.button>
    </nav>
  );
}
