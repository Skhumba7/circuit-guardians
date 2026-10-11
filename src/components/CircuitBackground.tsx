'use client';

import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  pulseSpeed: number;
  pulsePhase: number;
  color: string;
}

interface CircuitTrace {
  points: { x: number; y: number }[];
  progress: number;
  speed: number;
  color: string;
}

export default function CircuitBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initNetwork();
    };

    window.addEventListener('resize', handleResize);

    // Particle nodes for digital tech network
    const colors = ['#67e8f9', '#38bdf8', '#a78bfa', '#818cf8'];
    let particles: Particle[] = [];
    const maxParticles = Math.min(Math.floor((width * height) / 22000), 55);

    function initNetwork() {
      particles = [];
      for (let i = 0; i < maxParticles; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.45,
          vy: (Math.random() - 0.5) * 0.45,
          radius: Math.random() * 2 + 1.2,
          pulseSpeed: 0.02 + Math.random() * 0.03,
          pulsePhase: Math.random() * Math.PI * 2,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }
    }

    initNetwork();

    // Subtle moving circuit energy beams
    const traces: CircuitTrace[] = [];
    const maxTraces = 6;

    function createTrace(): CircuitTrace {
      const startX = Math.random() * width;
      const startY = Math.random() * height;
      const points = [{ x: startX, y: startY }];
      let currX = startX;
      let currY = startY;

      // Create an authentic 90-degree / 45-degree circuit board trace path
      const segments = 3 + Math.floor(Math.random() * 3);
      for (let i = 0; i < segments; i++) {
        const step = 60 + Math.random() * 100;
        const dir = Math.floor(Math.random() * 4);
        if (dir === 0) currX += step;
        else if (dir === 1) currX -= step;
        else if (dir === 2) currY += step;
        else currY -= step;

        points.push({ x: currX, y: currY });
      }

      return {
        points,
        progress: 0,
        speed: 0.003 + Math.random() * 0.004,
        color: Math.random() > 0.4 ? '#67e8f9' : '#a78bfa',
      };
    }

    for (let i = 0; i < maxTraces; i++) {
      traces.push(createTrace());
    }

    let time = 0;

    const render = () => {
      time += 0.015;
      ctx.clearRect(0, 0, width, height);

      // 1. Draw glowing traces
      for (let t = 0; t < traces.length; t++) {
        const trace = traces[t];
        trace.progress += trace.speed;

        if (trace.progress >= 1) {
          traces[t] = createTrace();
          continue;
        }

        const pts = trace.points;
        ctx.beginPath();
        ctx.moveTo(pts[0].x, pts[0].y);

        for (let i = 1; i < pts.length; i++) {
          ctx.lineTo(pts[i].x, pts[i].y);
        }

        ctx.strokeStyle = 'rgba(103, 232, 249, 0.035)';
        ctx.lineWidth = 1;
        ctx.stroke();

        // Trace electrical pulse head
        const totalSegments = pts.length - 1;
        const currentSegFloat = trace.progress * totalSegments;
        const currentSegIndex = Math.floor(currentSegFloat);
        const segRatio = currentSegFloat - currentSegIndex;

        if (currentSegIndex < totalSegments) {
          const p1 = pts[currentSegIndex];
          const p2 = pts[currentSegIndex + 1];
          const pulseX = p1.x + (p2.x - p1.x) * segRatio;
          const pulseY = p1.y + (p2.y - p1.y) * segRatio;

          // Glowing pulse head
          const glowGrad = ctx.createRadialGradient(pulseX, pulseY, 0, pulseX, pulseY, 12);
          glowGrad.addColorStop(0, trace.color === '#67e8f9' ? 'rgba(103, 232, 249, 0.6)' : 'rgba(167, 139, 250, 0.6)');
          glowGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');

          ctx.fillStyle = glowGrad;
          ctx.beginPath();
          ctx.arc(pulseX, pulseY, 12, 0, Math.PI * 2);
          ctx.fill();

          ctx.fillStyle = '#ffffff';
          ctx.beginPath();
          ctx.arc(pulseX, pulseY, 1.8, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // 2. Update and draw nodes + interconnected circuit mesh
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around borders gently
        if (p.x < -20) p.x = width + 20;
        if (p.x > width + 20) p.x = -20;
        if (p.y < -20) p.y = height + 20;
        if (p.y > height + 20) p.y = -20;

        p.pulsePhase += p.pulseSpeed;
        const currentRadius = p.radius + Math.sin(p.pulsePhase) * 0.8;
        const alpha = 0.35 + Math.sin(p.pulsePhase) * 0.25;

        // Draw connections between nearby nodes
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          const maxDist = 140;
          if (dist < maxDist) {
            const lineAlpha = (1 - dist / maxDist) * 0.16;
            ctx.strokeStyle = `rgba(103, 232, 249, ${lineAlpha})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }

        // Draw node
        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.max(0.15, alpha);
        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(1, currentRadius), 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Dynamic ambient gradient glow orbs with subtle floating animation */}
      <div className="absolute top-[-10%] left-[-10%] h-[45rem] w-[45rem] animate-pulse rounded-full bg-cyan-500/10 blur-[120px] duration-10000" />
      <div className="absolute top-[35%] right-[-15%] h-[50rem] w-[50rem] animate-pulse rounded-full bg-violet-600/10 blur-[140px] duration-7000" />
      <div className="absolute bottom-[-10%] left-[20%] h-[40rem] w-[40rem] animate-pulse rounded-full bg-sky-500/10 blur-[130px] duration-9000" />

      {/* Cybernetic grid overlay */}
      <div className="hero-grid absolute inset-0 opacity-40" />

      {/* Interactive canvas for animated circuit traces & connection nodes */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full opacity-70"
      />
    </div>
  );
}
