import { useState, useRef } from 'react';
import { motion } from 'framer-motion';

const Surprise = () => {
  const [open, setOpen] = useState(false);
  const videoRef = useRef(null);

  const handlePlay = () => {
    const audio = window.globalAudioRef?.current;
    if (audio && !audio.paused) {
      audio.pause();
    }
  };

  const handleEnded = () => {
    setOpen(false); 
    const audio = window.globalAudioRef?.current;
    if (audio && audio.paused) {
      audio.play();
    }
  };

  return (
    <div className="py-20 bg-gradient-to-t from-rose-100 to-pink-200 text-center">
      <h2 className="text-3xl text-red-600 font-bold mb-6">Ab tk ka safar ? 🎁</h2>
      
      {!open ? (
        <button
          onClick={() => setOpen(true)}
          className="bg-pink-500 text-white py-3 px-6 rounded-full text-xl hover:bg-pink-600 transition"
        >
          Click to Open 💝
        </button>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black z-50 flex items-center justify-center"
        >
          <video
            ref={videoRef}
            controls
            autoPlay
            onPlay={handlePlay}
            onEnded={handleEnded}
            className="w-full h-full object-contain"
          >
            <source src="/rakhii.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>
      )}
    </div>
  );
};

export default Surprise;
