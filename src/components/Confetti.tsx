import { useEffect, useState } from "react";

const Confetti = () => {
  const [confetti, setConfetti] = useState<Array<{ id: number; left: number; delay: number; duration: number }>>([]);

  useEffect(() => {
    const pieces = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 3,
      duration: 3 + Math.random() * 2,
    }));
    setConfetti(pieces);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
      {confetti.map((piece) => (
        <div
          key={piece.id}
          className="absolute w-2 h-2 bg-primary rounded-full animate-fade-in-up opacity-70"
          style={{
            left: `${piece.left}%`,
            top: "-10px",
            animationDelay: `${piece.delay}s`,
            animationDuration: `${piece.duration}s`,
            animationIterationCount: "infinite",
            background: `hsl(${Math.random() * 360}, 70%, 60%)`,
          }}
        />
      ))}
    </div>
  );
};

export default Confetti;
