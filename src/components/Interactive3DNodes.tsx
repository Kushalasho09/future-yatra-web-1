"use client";

import React, { useEffect, useRef } from "react";

export default function Interactive3DNodes() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 600);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 600);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener("resize", handleResize);

    // 3D Nodes Globe parameters
    const nodeCount = 42;
    type Node3D = {
      x: number;
      y: number;
      z: number;
      baseX: number;
      baseY: number;
      baseZ: number;
      radius: number;
      color: string;
      label?: string;
    };

    const nodes: Node3D[] = [];
    const sphereRadius = Math.min(width, height) * 0.32;

    const colors = ["#2DBDB6", "#3FE0D6", "#E7F9F7", "#3A5EA8", "#FFFFFF"];

    // Distribute nodes evenly on a sphere using Fibonacci sphere layout
    const phi = Math.PI * (3 - Math.sqrt(5)); // golden ratio angle
    for (let i = 0; i < nodeCount; i++) {
      const y = 1 - (i / (nodeCount - 1)) * 2; // y goes from 1 to -1
      const radiusAtY = Math.sqrt(1 - y * y); // radius at y
      const theta = phi * i;

      const x = Math.cos(theta) * radiusAtY;
      const z = Math.sin(theta) * radiusAtY;

      nodes.push({
        x: x * sphereRadius,
        y: y * sphereRadius,
        z: z * sphereRadius,
        baseX: x * sphereRadius,
        baseY: y * sphereRadius,
        baseZ: z * sphereRadius,
        radius: Math.random() * 2.5 + 2,
        color: colors[i % colors.length],
      });
    }

    let angleX = 0.002;
    let angleY = 0.003;
    let mouseX = 0;
    let mouseY = 0;
    let scrollY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = (e.clientX - rect.left - width / 2) * 0.0003;
      mouseY = (e.clientY - rect.top - height / 2) * 0.0003;
    };

    const handleScroll = () => {
      scrollY = window.scrollY * 0.0005;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;

      // Rotation matrix based on mouse and scroll
      const currentAngleY = angleY + mouseX + scrollY;
      const currentAngleX = angleX + mouseY;

      const cosY = Math.cos(currentAngleY);
      const sinY = Math.sin(currentAngleY);
      const cosX = Math.cos(currentAngleX);
      const sinX = Math.sin(currentAngleX);

      // Transform nodes
      const projectedNodes = nodes.map((node) => {
        // Rotate Y
        let x1 = node.baseX * cosY - node.baseZ * sinY;
        let z1 = node.baseZ * cosY + node.baseX * sinY;

        // Rotate X
        let y2 = node.baseY * cosX - z1 * sinX;
        let z2 = z1 * cosX + node.baseY * sinX;

        // Perspective projection
        const focalLength = 400;
        const scale = focalLength / (focalLength + z2 + sphereRadius * 1.5);
        const projX = centerX + x1 * scale;
        const projY = centerY + y2 * scale;

        // Update node for connection checking
        return {
          ...node,
          projX,
          projY,
          scale,
          z: z2,
        };
      });

      // Sort by Z for proper depth ordering
      projectedNodes.sort((a, b) => b.z - a.z);

      // Draw connections (edges)
      for (let i = 0; i < projectedNodes.length; i++) {
        for (let j = i + 1; j < projectedNodes.length; j++) {
          const n1 = projectedNodes[i];
          const n2 = projectedNodes[j];

          const dx = n1.projX - n2.projX;
          const dy = n1.projY - n2.projY;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            const alpha = (1 - dist / 110) * 0.35 * Math.min(n1.scale, n2.scale);
            ctx.beginPath();
            ctx.moveTo(n1.projX, n1.projY);
            ctx.lineTo(n2.projX, n2.projY);
            ctx.strokeStyle = `rgba(63, 224, 214, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      projectedNodes.forEach((node) => {
        const opacity = Math.max(0.2, (node.z + sphereRadius) / (sphereRadius * 2));
        ctx.beginPath();
        ctx.arc(node.projX, node.projY, node.radius * node.scale, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.globalAlpha = opacity;
        ctx.shadowColor = "#3FE0D6";
        ctx.shadowBlur = 8 * node.scale;
        ctx.fill();
        ctx.globalAlpha = 1.0;
        ctx.shadowBlur = 0;
      });

      // Draw outer glowing orbital ring
      ctx.beginPath();
      ctx.ellipse(
        centerX,
        centerY,
        sphereRadius * 1.15,
        sphereRadius * 0.4,
        Math.PI / 6 + scrollY * 2,
        0,
        Math.PI * 2
      );
      ctx.strokeStyle = "rgba(45, 189, 182, 0.25)";
      ctx.lineWidth = 1.5;
      ctx.setLineDash([8, 8]);
      ctx.stroke();
      ctx.setLineDash([]);

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative w-full h-full min-h-[380px] sm:min-h-[480px] flex items-center justify-center pointer-events-none">
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
}
