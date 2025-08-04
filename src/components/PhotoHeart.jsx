import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import rakhi from "../assets/rakhi.jpg";



const images = [rakhi]; 

const PhotoHeart = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="py-20 bg-gradient-to-b from-pink-100 to-red-100 text-center">
      <h2 className="text-4xl mb-6 text-pink-700 font-bold">Just Look at You ❤️</h2>

      <div className="w-72 h-72 mx-auto rounded-full border-8 border-pink-300 shadow-xl overflow-hidden relative">
        <AnimatePresence mode="wait">
          <motion.img
            key={index}
            src={rakhi}
            alt="My Love"
            className="w-full h-full object-cover absolute top-0 left-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.8 }}
          />
        </AnimatePresence>
      </div>
    </div>
  );
};

export default PhotoHeart;
