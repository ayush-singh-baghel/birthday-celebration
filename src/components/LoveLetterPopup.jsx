import { useState } from 'react';
import { motion } from 'framer-motion';

const LoveLetterPopup = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="text-center py-10 bg-pink-50">
      <button
        onClick={() => setShow(true)}
        className="bg-red-500 text-white px-6 py-3 rounded-full text-xl hover:bg-red-600"
      >
        💌 Read My Love Letter
      </button>

      {show && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            className="bg-white text-red-500 p-8 rounded-xl max-w-lg shadow-2xl handwriting text-xl"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
          >
            <p>
              My dearest Rakhi,  
              <br /><br />
              From the moment I met you, my world became brighter... 🌟  
              Your smile warms my soul and your love completes me.  
              Happy Birthday, my forever love 💖  
              <br /><br />– Ayush
            </p>
            <button
              onClick={() => setShow(false)}
              className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-full"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default LoveLetterPopup;
