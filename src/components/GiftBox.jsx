import { useState } from 'react';

const GiftBox = () => {
  const [opened, setOpened] = useState(false);

  return (
    <div className="fixed top-6 right-6 z-50">
      {!opened ? (
        <button
          onClick={() => setOpened(true)}
          className="animate-bounce transition transform hover:scale-110"
        >
          <img src="https://cdn-icons-png.flaticon.com/512/3461/3461665.png" alt="Gift" className="w-16 h-16" />
        </button>
      ) : (
        <div className="bg-pink-200 p-6 rounded-lg shadow-2xl text-pink-800 font-bold text-xl max-w-xs">
          🎉 Surprise! You’ve unlocked a memory of love.  
          <p className="text-sm mt-2 italic">“You are the best gift of my life.” 💖</p>
        </div>
      )}
    </div>
  );
};

export default GiftBox;
