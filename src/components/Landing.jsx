import { motion } from 'framer-motion';
import rakhiImg from "../assets/rakhi.jpg";

const Landing = () => (
  <motion.div
    className="h-screen bg-cover bg-center flex flex-col items-center justify-center text-center px-6 relative"
    style={{
      backgroundImage: `linear-gradient(rgba(255,182,193,0.4), rgba(255,105,180,0.6)), url(${rakhiImg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1.2 }}
  >
    <motion.h1
      className="text-6xl md:text-7xl text-rose-100 drop-shadow-2xl font-extrabold tracking-wide mb-4"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      Happy Birthday, Meri Jaan 💖
    </motion.h1>
    <motion.p
      className="text-2xl md:text-3xl text-pink-100 italic font-medium drop-shadow-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8 }}
    >
      You're the poem my heart never stops writing ✨
    </motion.p>
  </motion.div>
);

export default Landing;
