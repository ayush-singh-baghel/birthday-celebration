const FloatingElements = () => {
  const particles = Array.from({ length: 25 });

  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
      {particles.map((_, i) => (
        <div
          key={i}
          className="absolute w-3 h-3 bg-pink-300 rounded-full animate-float"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`
          }}
        />
      ))}
    </div>
  );
};

export default FloatingElements;
