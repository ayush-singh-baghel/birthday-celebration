import Confetti from 'react-confetti';
import { useEffect, useState } from 'react';

const FloatingCelebration = () => {
  const [dimensions, setDimensions] = useState({ width: window.innerWidth, height: window.innerHeight });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <Confetti width={dimensions.width} height={dimensions.height} numberOfPieces={150} recycle />
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute w-8 h-8 bg-pink-300 rounded-full animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              animationDuration: `${3 + Math.random() * 3}s`,
              top: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>
    </>
  );
};

export default FloatingCelebration;
