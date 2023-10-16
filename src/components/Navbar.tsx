import { motion } from "framer-motion";
import "../styles/navbar.css";
import { Menu } from "./Menu";
export default function Navbar() {
  return (
    <nav className="grid grid-cols-2 md:grid-cols-3 md:grid-rows-2 justify-between items-center container m-auto p-4">
      <motion.h1
        whileHover={{ cursor: "pointer", scale: 1.05 }}
        className="text-3xl font-bold"
      >
        Freidev 👨🏽‍💻
      </motion.h1>
      <Menu className="hidden md:flex justify-center" />
      <motion.button
        type="button"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        className="max-w-[100px] ms-auto text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Say hi!
      </motion.button>

      <Menu className="md:hidden flex justify-between col-span-2 mt-2" />
    </nav>
  );
}
