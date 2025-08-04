import { Typewriter } from 'react-simple-typewriter';

const LovePoem = () => (
  <div className="py-24 bg-gradient-to-b from-pink-50 via-rose-100 to-red-50 text-center px-6 md:px-40 relative overflow-hidden">
    <h2 className="text-4xl text-rose-600 mb-8 font-bold drop-shadow-lg">love you forever💖</h2>
    
    <p className="text-xl text-gray-800 font-medium leading-relaxed max-w-3xl mx-auto">
      <Typewriter
        words={[
          "In your eyes, I find my universe 🌌",
          "Your love is the poetry my heart recites every day 💘",
          "Even the stars envy the sparkle in your soul ✨",
          "With you, every heartbeat becomes a melody 🎵",
          "You're not just a wish come true — you're my everything 💫",
          "Happy Birthday, my love — my heart beats only for you ❤️"
        ]}
        loop={true}
        cursor
        cursorStyle="❤️"
        typeSpeed={50}
        deleteSpeed={30}
        delaySpeed={2500}
      />
    </p>

    {/* Optional floating hearts or sparkle animation */}
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
      <div className="animate-pulse text-pink-300 text-6xl absolute left-10 top-10">💗</div>
      <div className="animate-bounce text-pink-400 text-5xl absolute right-10 top-20">💞</div>
      <div className="animate-spin-slow text-rose-200 text-4xl absolute bottom-10 left-1/2">💖</div>
    </div>
  </div>
);

export default LovePoem;
