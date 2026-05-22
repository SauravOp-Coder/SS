import { useEffect, useRef, useState } from "react";

/**
 * 3D hero visual. Uses Spline viewer if available, otherwise renders a
 * premium animated CSS/SVG orb fallback that reacts to mouse movement.
 */
export function Spline3D() {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const el = ref.current; if (!el) return;
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      setTilt({ x: (e.clientY - cy) / 40, y: (e.clientX - cx) / 40 });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div ref={ref} className="relative w-full aspect-square max-w-[560px] mx-auto" style={{ perspective: "1200px" }}>
      <div
        className="relative w-full h-full transition-transform duration-300 ease-out"
        style={{ transform: `rotateX(${-tilt.x}deg) rotateY(${tilt.y}deg)` }}
      >
        {/* Outer glow */}
        <div className="absolute inset-0 rounded-full bg-orange-gradient opacity-30 blur-3xl animate-pulse" />
        {/* Orb core */}
        <div className="absolute inset-[12%] rounded-full bg-orange-gradient glow-orange" />
        <div className="absolute inset-[18%] rounded-full bg-gradient-to-br from-background/30 to-transparent mix-blend-overlay" />
        {/* Rings */}
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="absolute inset-0 rounded-full border border-primary/30"
            style={{
              transform: `rotateX(${70 + i * 6}deg) rotateZ(${i * 30}deg)`,
              animation: `spin ${14 + i * 6}s linear infinite ${i % 2 ? "reverse" : ""}`,
            }}
          />
        ))}
        {/* Inner grid */}
        <svg className="absolute inset-[20%] opacity-40" viewBox="0 0 100 100">
          <defs>
            <radialGradient id="g" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="oklch(0.78 0.21 60)" stopOpacity="0.9" />
              <stop offset="100%" stopColor="oklch(0.78 0.21 60)" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="50" cy="50" r="48" fill="url(#g)" />
          {Array.from({ length: 8 }).map((_, i) => (
            <line key={i} x1="50" y1="2" x2="50" y2="98" stroke="oklch(0.97 0.005 80)" strokeOpacity="0.15" strokeWidth="0.3" transform={`rotate(${i * 22.5} 50 50)`} />
          ))}
        </svg>
        {/* Particles */}
        {Array.from({ length: 18 }).map((_, i) => {
          const angle = (i / 18) * Math.PI * 2;
          const r = 48 + (i % 3) * 4;
          return (
            <span
              key={i}
              className="absolute h-1 w-1 bg-primary rounded-full"
              style={{
                left: `${50 + Math.cos(angle) * r}%`,
                top: `${50 + Math.sin(angle) * r}%`,
                boxShadow: "0 0 8px oklch(0.78 0.21 60)",
                animation: `pulse ${2 + (i % 5)}s ease-in-out ${i * 0.1}s infinite`,
              }}
            />
          );
        })}
      </div>
      <style>{`
        @keyframes spin { to { transform: rotateX(76deg) rotateZ(360deg); } }
      `}</style>
    </div>
  );
}
