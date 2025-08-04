import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import img1 from "../assets/rakhi-1.jpg";
import img2 from "../assets/rakhi-2.jpg";
import img3 from "../assets/rakhi-3.jpg";

const images = [img1, img2, img3];

const PhotoSlideshow = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000); 
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="snap-start min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-pink-50 to-rose-100 px-4">
      <h2 className="text-4xl md:text-5xl font-bold text-rose-600 mb-10 font-romantic drop-shadow-md">
        Our Lovely Memories 📸
      </h2>

      <div className="relative w-[90%] max-w-[500px] aspect-[3/4] border-[6px] border-rose-300 rounded-3xl shadow-2xl overflow-hidden bg-white">
        <AnimatePresence mode="wait">
          <motion.img
            key={current}
            src={images[current]}
            alt={`Slide ${current}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="w-full h-full object-cover"
          />
        </AnimatePresence>
      </div>

      <p className="mt-6 text-lg text-rose-500 italic font-light text-center">
        “Every moment with you is etched in my heart.”
      </p>
    </section>
  );
};

export default PhotoSlideshow;
