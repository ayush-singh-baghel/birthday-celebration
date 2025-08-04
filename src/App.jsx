import PasswordGate from './components/PasswordGate'; // 👈 Import added

import Landing from './components/Landing';
import PhotoHeart from './components/PhotoHeart';
import AudioPlayer from './components/AudioPlayer';
import LovePoem from './components/LovePoem';
import FloatingElements from './components/FloatingElements';
import Surprise from './components/Surprise';
import FloatingCelebration from './components/FloatingCelebration';
import LoveLetterPopup from './components/LoveLetterPopup';
import VoiceMessage from './components/VoiceMessage';
import GiftBox from './components/GiftBox';
import PhotoSlideshow from './components/PhotoSlideShow';

function App() {
  return (
    <PasswordGate correctPassword="ayush4321"> {/* 🔒 Your secret password */}
      <div className="relative min-h-screen text-white font-romantic overflow-x-hidden snap-y snap-mandatory h-screen overflow-scroll scroll-smooth">
        {/* 🎵 Background Music */}
        <AudioPlayer />

        {/* ✨ Floating Hearts, Petals, Stars */}
        <FloatingElements />

        {/* 🎊 Confetti & Balloons */}
        <FloatingCelebration />

        {/* 🔊 Voice Message */}
        {/* <VoiceMessage /> */}

        {/* 🎁 Surprise Gift Box */}
        <GiftBox />

        {/* 💌 Love Letter Popup */}
        <LoveLetterPopup />

        {/* 🖼 Sections */}
        <section className="snap-start">
          <Landing />
        </section>

        <section className="snap-start">
          <PhotoHeart />
        </section>

        {/* 🚫 Scroll snap disabled here to prevent skipping */}
        <section className="snap-none">
          <PhotoSlideshow />
        </section>

        <section className="snap-start">
          <LovePoem />
        </section>

        <section className="snap-start">
          <Surprise />
        </section>
      </div>
    </PasswordGate>
  );
}

export default App;
