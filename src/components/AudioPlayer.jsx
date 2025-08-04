import { useEffect, useRef, useState } from "react";

const AudioPlayer = () => {
  const audioRef = useRef(null);
  const [showPlayButton, setShowPlayButton] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.play().catch(() => {
        setShowPlayButton(true);
      });
    }

    window.globalAudioRef = audioRef;
  }, []);

  const handleManualPlay = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.play();
      setShowPlayButton(false);
    }
  };

  return (
    <>
      <audio ref={audioRef} loop className="hidden">
        <source src="/saiyaara.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      {showPlayButton && (
        <button
          onClick={handleManualPlay}
          className="fixed bottom-5 right-5 bg-pink-600 text-white px-5 py-2 rounded-full shadow-lg z-50 animate-bounce"
        >
          🔊 Play Music
        </button>
      )}
    </>
  );
};

export default AudioPlayer;
