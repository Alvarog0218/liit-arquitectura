import { useEffect, useRef } from "react";

type Props = {
  className?: string;
  variant?: "horizontal" | "plan" | "elevation";
  color?: string;
};

export function BlueprintLine({ className = "", variant = "horizontal", color = "currentColor" }: Props) {
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.querySelectorAll(".blueprint-line").forEach((p) => p.classList.add("in-view"));
          }
        });
      },
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  if (variant === "plan") {
    return (
      <svg ref={ref} viewBox="0 0 800 400" className={className} fill="none" stroke={color} strokeWidth="1.5">
        <rect className="blueprint-line" x="60" y="60" width="680" height="280" />
        <line className="blueprint-line" x1="60" y1="180" x2="740" y2="180" />
        <line className="blueprint-line" x1="340" y1="60" x2="340" y2="340" />
        <line className="blueprint-line" x1="540" y1="180" x2="540" y2="340" />
        <circle className="blueprint-line" cx="180" cy="120" r="18" />
        <circle className="blueprint-line" cx="640" cy="250" r="12" />
        <line className="blueprint-line" x1="60" y1="40" x2="740" y2="40" strokeDasharray="4 4" />
      </svg>
    );
  }

  if (variant === "elevation") {
    return (
      <svg ref={ref} viewBox="0 0 800 240" className={className} fill="none" stroke={color} strokeWidth="1.5">
        <polyline className="blueprint-line" points="40,200 40,80 200,80 200,40 600,40 600,80 760,80 760,200 40,200" />
        <line className="blueprint-line" x1="120" y1="200" x2="120" y2="120" />
        <line className="blueprint-line" x1="120" y1="120" x2="180" y2="120" />
        <line className="blueprint-line" x1="180" y1="200" x2="180" y2="120" />
        <rect className="blueprint-line" x="280" y="110" width="60" height="90" />
        <rect className="blueprint-line" x="380" y="110" width="60" height="90" />
        <rect className="blueprint-line" x="480" y="110" width="60" height="90" />
        <line className="blueprint-line" x1="40" y1="220" x2="760" y2="220" strokeDasharray="2 6" />
      </svg>
    );
  }

  return (
    <svg ref={ref} viewBox="0 0 800 20" className={className} fill="none" stroke={color} strokeWidth="1.5">
      <line className="blueprint-line" x1="0" y1="10" x2="800" y2="10" />
      <line className="blueprint-line" x1="0" y1="4" x2="20" y2="4" />
      <line className="blueprint-line" x1="0" y1="16" x2="20" y2="16" />
      <line className="blueprint-line" x1="780" y1="4" x2="800" y2="4" />
      <line className="blueprint-line" x1="780" y1="16" x2="800" y2="16" />
    </svg>
  );
}
