import { useEffect, useRef } from "react";

/**
 * Ambient teal "constellation" background.
 * A fixed, full-viewport canvas that sits behind all content (z-index: -1) and
 * gently drifts — think of it as a lightweight looping background video, but
 * asset-free, crisp at any resolution, and always exactly the site's teal.
 *
 * Deliberately NOT interactive (no cursor reactivity) — just quiet ambient motion.
 * Weighted toward the top of the viewport (a mask fades it downward) so it reads
 * boldest behind the hero and stays subtle under the rest of the page.
 *
 * Safeguards: honors prefers-reduced-motion (renders one static frame),
 * clamps devicePixelRatio, and pauses the animation loop while the tab is hidden.
 */
export default function ParticleField() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    // Read the site's teal so the field always tracks --accent.
    const accent = getComputedStyle(document.documentElement)
      .getPropertyValue("--accent")
      .trim();
    const NODE = hexToRgb(accent) || "13, 148, 136";

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let W = 0;
    let H = 0;
    let dpr = 1;
    let particles = [];
    let raf = 0;

    const LINK = 130;          // px — max distance two nodes will connect
    const LINK2 = LINK * LINK;
    const SPEED = 0.32;        // drift speed (Balanced)
    const DENSITY = 0.9;       // nodes per ~9000px² (Balanced)

    function seed() {
      const count = Math.round((DENSITY * (W * H)) / 9000);
      particles = [];
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * W,
          y: Math.random() * H,
          vx: (Math.random() - 0.5) * SPEED,
          vy: (Math.random() - 0.5) * SPEED,
        });
      }
    }

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = window.innerWidth;
      H = window.innerHeight;
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      canvas.style.width = W + "px";
      canvas.style.height = H + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
      if (reduce) draw(); // static frame reflows on resize
    }

    function draw() {
      ctx.clearRect(0, 0, W, H);

      // links between nearby nodes
      for (let i = 0; i < particles.length; i++) {
        const a = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < LINK2) {
            const alpha = (1 - d2 / LINK2) * 0.5;
            ctx.strokeStyle = `rgba(${NODE}, ${alpha.toFixed(3)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // nodes
      ctx.fillStyle = `rgba(${NODE}, 0.8)`;
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.5, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    function tick() {
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < -20) p.x = W + 20;
        else if (p.x > W + 20) p.x = -20;
        if (p.y < -20) p.y = H + 20;
        else if (p.y > H + 20) p.y = -20;
      }
      draw();
      raf = requestAnimationFrame(tick);
    }

    function start() {
      cancelAnimationFrame(raf);
      if (reduce) draw();
      else raf = requestAnimationFrame(tick);
    }

    function onVisibility() {
      if (document.hidden) cancelAnimationFrame(raf);
      else start();
    }

    resize();
    start();
    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -1,
        pointerEvents: "none",
        // Weight the field toward the top so it reads boldest behind the hero
        // and fades to a whisper lower down.
        WebkitMaskImage:
          "linear-gradient(to bottom, #000 0%, #000 48%, rgba(0,0,0,0.35) 82%, rgba(0,0,0,0.18) 100%)",
        maskImage:
          "linear-gradient(to bottom, #000 0%, #000 48%, rgba(0,0,0,0.35) 82%, rgba(0,0,0,0.18) 100%)",
      }}
    />
  );
}

// "#0D9488" -> "13, 148, 136"
function hexToRgb(hex) {
  const m = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!m) return null;
  return `${parseInt(m[1], 16)}, ${parseInt(m[2], 16)}, ${parseInt(m[3], 16)}`;
}
