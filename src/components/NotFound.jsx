import { Link } from "react-router";
import { motion } from "framer-motion";
import { MdErrorOutline } from "react-icons/md";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-amber-50 via-yellow-100 to-emerald-100 dark:from-gray-900 dark:via-gray-950 dark:to-black px-6">
      <motion.div
        initial={{ scale: 0.5, rotate: -20, opacity: 0 }}
        animate={{ scale: 1, rotate: 0, opacity: 1 }}
        transition={{
          duration: 0.5,
          type: "spring",
          stiffness: 600,
          damping: 20,
        }}
        className="text-red-600 dark:text-red-400 text-7xl mb-4 animate-pulse"
      >
        <MdErrorOutline />
      </motion.div>

      <motion.h1
        className="text-5xl md:text-6xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-yellow-600 to-amber-500 dark:from-red-500 dark:via-amber-400 dark:to-yellow-300 tracking-wide glitch"
        initial={{ scale: 0.9, x: -80, opacity: 0 }}
        animate={{ scale: 1, x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 12, delay: 0.3 }}
      >
        404: PAGE NOT FOUND!
      </motion.h1>

      <motion.p
        className="mt-6 text-lg text-gray-800 dark:text-gray-300 text-center max-w-xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        The artifact you're looking for may have crumbled into dust... or simply
        doesn't exist.
      </motion.p>

      <motion.div
        className="mt-10"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 200, delay: 1 }}
      >
        <Link
          to="/"
          className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md font-bold tracking-wide shadow-lg transition duration-300"
        >
          🚀 Back to Home
        </Link>
      </motion.div>

      {/* Glitch CSS */}
      <style>{`
        .glitch {
          animation: glitch 1s infinite;
        }

        @keyframes glitch {
          0% {
            text-shadow: 2px 2px red, -2px -2px cyan;
          }
          25% {
            text-shadow: -2px 2px yellow, 2px -2px blue;
          }
          50% {
            text-shadow: 2px -2px lime, -2px 2px magenta;
          }
          75% {
            text-shadow: -1px 1px orange, 1px -1px purple;
          }
          100% {
            text-shadow: 2px 2px red, -2px -2px cyan;
          }
        }
      `}</style>
    </div>
  );
};

export default NotFound;
