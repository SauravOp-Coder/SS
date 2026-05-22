import { useEffect, useRef, useState } from "react";

/** Floating 3D wireframe cube reacting to mouse */
export function FloatingCube() {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: -20, y: 30 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const el = ref.current; if (!el) return;
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      setTilt({ x: -20 + (e.clientY - cy) / 30, y: 30 + (e.clientX - cx) / 30 });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  const faces = [
    { t: "translateZ(80px)" },
    { t: "rotateY(180deg) translateZ(80px)" },
    { t: "rotateY(90deg) translateZ(80px)" },
    { t: "rotateY(-90deg) translateZ(80px)" },
    { t: "rotateX(90deg) translateZ(80px)" },
    { t: "rotateX(-90deg) translateZ(80px)" },
  ];

  return (
    <div ref={ref} className="relative w-full aspect-square max-w-[280px] mx-auto grid place-items-center" style={{ perspective: "900px" }}>
      <div
        className="relative w-40 h-40 transition-transform duration-300 ease-out"
        style={{ transformStyle: "preserve-3d", transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`, animation: "cube-float 8s ease-in-out infinite" }}
      >
        {faces.map((f, i) => (
          <div
            key={i}
            className="absolute inset-0 border border-primary/50 bg-orange-gradient/10"
            style={{ transform: f.t, background: "linear-gradient(135deg, oklch(0.7 0.2 50 / 0.15), transparent)", boxShadow: "inset 0 0 30px oklch(0.7 0.2 50 / 0.25)" }}
          >
            <div className="absolute inset-3 border border-primary/30" />
            <div className="absolute inset-6 border border-primary/20" />
          </div>
        ))}
      </div>
      <style>{`
        @keyframes cube-float { 0%,100% { translate: 0 0; } 50% { translate: 0 -10px; } }
      `}</style>
    </div>
  );
}

/** Animated SVG neural network */
export function NeuralNetwork() {
  const layers = [4, 6, 6, 3];
  const width = 480, height = 280;
  const nodes: { x: number; y: number; layer: number }[] = [];
  const colW = width / (layers.length + 1);
  layers.forEach((count, li) => {
    const gap = height / (count + 1);
    for (let i = 0; i < count; i++) nodes.push({ x: colW * (li + 1), y: gap * (i + 1), layer: li });
  });
  const edges: { a: number; b: number }[] = [];
  nodes.forEach((n, i) => {
    nodes.forEach((m, j) => { if (m.layer === n.layer + 1) edges.push({ a: i, b: j }); });
  });

  return (
    <div className="relative w-full">
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto">
        <defs>
          <linearGradient id="nn-edge" x1="0%" x2="100%">
            <stop offset="0%" stopColor="oklch(0.7 0.2 50)" stopOpacity="0.1" />
            <stop offset="50%" stopColor="oklch(0.7 0.2 50)" stopOpacity="0.6" />
            <stop offset="100%" stopColor="oklch(0.7 0.2 50)" stopOpacity="0.1" />
          </linearGradient>
          <radialGradient id="nn-node">
            <stop offset="0%" stopColor="oklch(0.78 0.21 60)" />
            <stop offset="100%" stopColor="oklch(0.7 0.2 50)" />
          </radialGradient>
        </defs>
        {edges.map((e, i) => {
          const a = nodes[e.a], b = nodes[e.b];
          return (
            <line key={i} x1={a.x} y1={a.y} x2={b.x} y2={b.y} stroke="url(#nn-edge)" strokeWidth="1">
              <animate attributeName="stroke-opacity" values="0.2;0.9;0.2" dur={`${2 + (i % 5) * 0.3}s`} repeatCount="indefinite" begin={`${(i % 7) * 0.15}s`} />
            </line>
          );
        })}
        {nodes.map((n, i) => (
          <g key={i}>
            <circle cx={n.x} cy={n.y} r="9" fill="url(#nn-node)" opacity="0.25">
              <animate attributeName="r" values="9;14;9" dur="2.4s" repeatCount="indefinite" begin={`${i * 0.1}s`} />
            </circle>
            <circle cx={n.x} cy={n.y} r="5" fill="url(#nn-node)" style={{ filter: "drop-shadow(0 0 6px oklch(0.7 0.2 50))" }} />
          </g>
        ))}
      </svg>
    </div>
  );
}

/** Layered parallax 3D card stack */
export function HoloPanel() {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  return (
    <div
      ref={ref}
      className="relative w-full aspect-[4/3] max-w-[420px] mx-auto"
      style={{ perspective: "1000px" }}
      onMouseMove={(e) => {
        const r = ref.current!.getBoundingClientRect();
        setTilt({ x: -((e.clientY - r.top - r.height / 2) / 20), y: (e.clientX - r.left - r.width / 2) / 20 });
      }}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
    >
      <div className="relative w-full h-full transition-transform duration-200" style={{ transformStyle: "preserve-3d", transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}>
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="absolute inset-0 glass p-6"
            style={{ transform: `translateZ(${i * 30}px)`, opacity: 1 - i * 0.15 }}
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="h-2 w-2 bg-primary glow-soft" />
              <span className="text-[10px] uppercase tracking-widest text-primary">Layer {i + 1}</span>
            </div>
            {i === 0 && (
              <div className="space-y-2">
                <div className="h-2 w-3/4 bg-orange-gradient" />
                <div className="h-2 w-1/2 bg-muted" />
                <div className="h-2 w-2/3 bg-muted" />
                <div className="mt-4 grid grid-cols-3 gap-2">
                  {[...Array(6)].map((_, k) => (
                    <div key={k} className="h-8 bg-surface-2 border border-border" />
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
