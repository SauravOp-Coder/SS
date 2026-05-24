import { useEffect, useRef, useState } from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        src?: string;
        alt?: string;
        "camera-controls"?: boolean;
        "auto-rotate"?: boolean;
        "auto-rotate-delay"?: string;
        "rotation-per-second"?: string;
        "interaction-prompt"?: string;
        "shadow-intensity"?: string;
        exposure?: string;
        "environment-image"?: string;
        "camera-orbit"?: string;
        "field-of-view"?: string;
        loading?: string;
        reveal?: string;
        ar?: boolean;
      };
    }
  }
}

/** Premium 3D hero visual using a single clean robot model with ambient scanner-style effects. */
export function Spline3D() {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!document.querySelector('script[data-model-viewer="true"]')) {
      const script = document.createElement("script");
      script.type = "module";
      script.src = "https://ajax.googleapis.com/ajax/libs/model-viewer/4.0.0/model-viewer.min.js";
      script.setAttribute("data-model-viewer", "true");
      document.head.appendChild(script);
    }
  }, []);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      setTilt({ x: (e.clientY - cy) / 70, y: (e.clientX - cx) / 70 });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div ref={ref} className="hero-3d-stage relative w-full aspect-square max-w-[680px] mx-auto overflow-visible" style={{ perspective: "1400px" }}>
      {/* Clean free-floating robot: no box, no frame, no visible boundary. */}
      <div className="pointer-events-none absolute left-1/2 top-[48%] h-[72%] w-[72%] -translate-x-1/2 -translate-y-1/2 bg-primary/10 blur-[80px]" />
      <div className="pointer-events-none absolute left-[55%] top-[58%] h-56 w-56 -translate-x-1/2 -translate-y-1/2 bg-white/5 blur-[70px]" />

      <div
        className="relative z-10 h-full w-full transition-transform duration-300 ease-out"
        style={{ transform: `rotateX(${-tilt.x}deg) rotateY(${tilt.y}deg)` }}
      >
        <div className="robot-float absolute inset-[-4%] z-20 pointer-events-auto">
          <model-viewer
            src="/models/robot/scene.gltf"
            alt="AuraSkill Tech 3D AI robot"
            camera-controls
            auto-rotate
            auto-rotate-delay="0"
            rotation-per-second="12deg"
            interaction-prompt="none"
            shadow-intensity="1.25"
            exposure="1.05"
            environment-image="neutral"
            camera-orbit="0deg 72deg 4.25m"
            field-of-view="30deg"
            loading="eager"
            reveal="auto"
            style={{ width: "100%", height: "100%", background: "transparent" }}
          />
        </div>
      </div>

      <div className="pointer-events-none absolute left-1/2 top-[82%] h-12 w-72 -translate-x-1/2 bg-black/35 blur-2xl" />

      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i / 12) * Math.PI * 2;
        const r = 38 + (i % 3) * 8;
        return (
          <span
            key={i}
            className="absolute h-1 w-1 bg-primary/70"
            style={{
              left: `${50 + Math.cos(angle) * r}%`,
              top: `${50 + Math.sin(angle) * r}%`,
              boxShadow: "0 0 10px oklch(0.78 0.21 60 / .45)",
              animation: `robot-pulse ${2.4 + (i % 4)}s ease-in-out ${i * 0.14}s infinite`,
            }}
          />
        );
      })}

      <style>{`
        .hero-3d-stage, .hero-3d-stage * { border: 0 !important; outline: 0 !important; }
        .hero-3d-stage model-viewer { --poster-color: transparent; }
        .robot-float { animation: robot-float 5.8s ease-in-out infinite; filter: drop-shadow(0 40px 52px oklch(0.04 0.01 60 / .45)); }
        @keyframes robot-float { 0%, 100% { transform: translateY(-1%) scale(1); } 50% { transform: translateY(-7%) scale(1.035); } }
        @keyframes robot-pulse { 0%, 100% { opacity: .12; transform: scale(.72); } 50% { opacity: .68; transform: scale(1.25); } }
      `}</style>
    </div>
  );
}
