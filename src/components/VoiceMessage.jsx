const VoiceMessage = () => (
  <audio autoPlay loop controls className="hidden">
    <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg" />
    Your browser does not support the audio element.
  </audio>
);

export default VoiceMessage;
