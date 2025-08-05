import { useEffect, useRef } from "react";
import { Droplets } from "lucide-react";

const FloatingBottles = () => {
  const bottles = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    delay: i * 0.8,
    size: Math.random() * 25 + 25,
    left: Math.random() * 85 + 7.5,
    duration: Math.random() * 3 + 4,
    amplitude: Math.random() * 15 + 10,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {bottles.map((bottle) => (
        <div
          key={bottle.id}
          className="absolute animate-float opacity-8"
          style={{
            left: `${bottle.left}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${bottle.delay}s`,
            animationDuration: `${bottle.duration}s`,
            transform: `translateY(${bottle.amplitude}px)`,
          }}
        >
          <Droplets
            className="text-primary/60"
            style={{
              width: `${bottle.size}px`,
              height: `${bottle.size}px`,
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default FloatingBottles;