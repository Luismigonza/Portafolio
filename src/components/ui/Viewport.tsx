"use client";

import { useEffect, useRef } from "react";
import { buildGeodesic, rotateX, rotateY, type Vec3 } from "@/lib/geodesic";
import styles from "./Viewport.module.css";

export interface ViewportStats {
  nodos: number;
  enlaces: number;
  fps: number;
  rot: string;
}

interface Props {
  onStats?: (stats: ViewportStats) => void;
}

export default function Viewport({ onStats }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const statsRef = useRef(onStats);
  statsRef.current = onStats;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const mesh = buildGeodesic(2);
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const pointer = { x: 0, y: 0, tx: 0, ty: 0 };

    let width = 0;
    let height = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.max(1, Math.floor(width * dpr));
      canvas.height = Math.max(1, Math.floor(height * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointer.tx = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      pointer.ty = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    };
    window.addEventListener("pointermove", onMove, { passive: true });

    const start = performance.now();
    let lastSample = start;
    let frames = 0;
    let fps = 60;
    let raf = 0;

    const draw = (now: number) => {
      raf = requestAnimationFrame(draw);

      frames++;
      const elapsedSample = now - lastSample;
      let publish = false;

      if (elapsedSample >= 500) {
        fps = Math.round((frames * 1000) / elapsedSample);
        frames = 0;
        lastSample = now;
        publish = true;
      }

      const time = reduced ? 0 : (now - start) / 1000;
      pointer.x += (pointer.tx - pointer.x) * 0.045;
      pointer.y += (pointer.ty - pointer.y) * 0.045;

      const angleY = time * 0.16 + pointer.x * 0.75;
      const angleX = Math.sin(time * 0.11) * 0.22 - pointer.y * 0.5;

      const cx = width / 2;
      const cy = height / 2;
      const radius = Math.min(width, height) * 0.34;
      const distance = 3.4;

      ctx.clearRect(0, 0, width, height);

      const projected = mesh.vertices.map((v) => {
        const pulse = 1 + Math.sin(v[1] * 3.1 + time * 1.15) * 0.055;
        let q: Vec3 = [v[0] * pulse, v[1] * pulse, v[2] * pulse];
        q = rotateY(q, angleY);
        q = rotateX(q, angleX);
        const scale = distance / (distance - q[2]);
        return {
          x: cx + q[0] * radius * scale,
          y: cy + q[1] * radius * scale,
          z: q[2],
        };
      });

      const sorted = mesh.edges
        .map(([a, b]) => ({ a, b, z: (projected[a].z + projected[b].z) / 2 }))
        .sort((m, n) => m.z - n.z);

      ctx.lineCap = "round";

      for (const edge of sorted) {
        const pa = projected[edge.a];
        const pb = projected[edge.b];
        const depth = (edge.z + 1) / 2;
        const alpha = 0.05 + depth * 0.42;
        const front = depth > 0.86;

        ctx.strokeStyle = front
          ? `rgba(255, 139, 61, ${alpha * 0.95})`
          : `rgba(214, 216, 226, ${alpha})`;
        ctx.lineWidth = front ? 1.15 : 0.6;
        ctx.beginPath();
        ctx.moveTo(pa.x, pa.y);
        ctx.lineTo(pb.x, pb.y);
        ctx.stroke();
      }

      for (const p of projected) {
        const depth = (p.z + 1) / 2;
        if (depth < 0.55) continue;
        ctx.fillStyle = `rgba(255, 139, 61, ${(depth - 0.5) * 0.85})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 0.7 + depth * 1.5, 0, Math.PI * 2);
        ctx.fill();
      }

      // Gizmo de ejes
      const gx = 46;
      const gy = height - 46;
      const gl = 24;

      const axes = (
        [
          { v: [1, 0, 0] as Vec3, color: "#F2506E", label: "X" },
          { v: [0, -1, 0] as Vec3, color: "#9BE564", label: "Y" },
          { v: [0, 0, 1] as Vec3, color: "#4D9EFF", label: "Z" },
        ]
      )
        .map((axis) => ({ ...axis, q: rotateX(rotateY(axis.v, angleY), angleX) }))
        .sort((m, n) => m.q[2] - n.q[2]);

      ctx.font = "600 9px ui-monospace, monospace";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      for (const axis of axes) {
        const ex = gx + axis.q[0] * gl;
        const ey = gy + axis.q[1] * gl;
        ctx.globalAlpha = 0.45 + ((axis.q[2] + 1) / 2) * 0.55;
        ctx.strokeStyle = axis.color;
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.moveTo(gx, gy);
        ctx.lineTo(ex, ey);
        ctx.stroke();
        ctx.fillStyle = axis.color;
        ctx.beginPath();
        ctx.arc(ex, ey, 5.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = "#131316";
        ctx.fillText(axis.label, ex, ey + 0.5);
        ctx.globalAlpha = 1;
      }

      if (publish) {
        statsRef.current?.({
          nodos: mesh.vertices.length,
          enlaces: mesh.edges.length,
          fps,
          rot: `${(((angleY * 180) / Math.PI) % 360).toFixed(0)}° ${((angleX * 180) / Math.PI).toFixed(0)}°`,
        });
      }
    };

    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return <canvas ref={canvasRef} className={styles.canvas} aria-hidden="true" />;
}