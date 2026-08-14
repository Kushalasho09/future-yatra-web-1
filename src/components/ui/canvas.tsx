"use client";

class Oscillator {
  phase: number;
  offset: number;
  frequency: number;
  amplitude: number;

  constructor(options: { phase?: number; offset?: number; frequency?: number; amplitude?: number } = {}) {
    this.phase = options.phase || 0;
    this.offset = options.offset || 0;
    this.frequency = options.frequency || 0.001;
    this.amplitude = options.amplitude || 1;
  }

  update() {
    this.phase += this.frequency;
    return this.offset + Math.sin(this.phase) * this.amplitude;
  }
}

class WaveNode {
  x = 0;
  y = 0;
  vx = 0;
  vy = 0;
}

class Line {
  spring: number;
  friction: number;
  nodes: WaveNode[];

  constructor(options: { spring: number }) {
    this.spring = options.spring + 0.1 * Math.random() - 0.05;
    this.friction = E.friction + 0.01 * Math.random() - 0.005;
    this.nodes = [];
    for (let i = 0; i < E.size; i++) {
      const node = new WaveNode();
      node.x = pos.x;
      node.y = pos.y;
      this.nodes.push(node);
    }
  }

  update() {
    let e = this.spring;
    const firstNode = this.nodes[0];
    firstNode.vx += (pos.x - firstNode.x) * e;
    firstNode.vy += (pos.y - firstNode.y) * e;

    for (let i = 0; i < this.nodes.length; i++) {
      const node = this.nodes[i];
      if (i > 0) {
        const prevNode = this.nodes[i - 1];
        node.vx += (prevNode.x - node.x) * e;
        node.vy += (prevNode.y - node.y) * e;
        node.vx += prevNode.vx * E.dampening;
        node.vy += prevNode.vy * E.dampening;
      }
      node.vx *= this.friction;
      node.vy *= this.friction;
      node.x += node.vx;
      node.y += node.vy;
      e *= E.tension;
    }
  }

  draw() {
    if (!ctx) return;
    let n = this.nodes[0].x;
    let i = this.nodes[0].y;
    ctx.beginPath();
    ctx.moveTo(n, i);

    let a = 1;
    const o = this.nodes.length - 2;
    for (; a < o; a++) {
      const e = this.nodes[a];
      const t = this.nodes[a + 1];
      n = 0.5 * (e.x + t.x);
      i = 0.5 * (e.y + t.y);
      ctx.quadraticCurveTo(e.x, e.y, n, i);
    }
    const e = this.nodes[a];
    const t = this.nodes[a + 1];
    ctx.quadraticCurveTo(e.x, e.y, t.x, t.y);
    ctx.stroke();
    ctx.closePath();
  }
}

let ctx: (CanvasRenderingContext2D & { running?: boolean; frame?: number }) | null = null;
let f: Oscillator;
let pos = { x: 0, y: 0 };
let lines: Line[] = [];

const E = {
  debug: true,
  friction: 0.5,
  trails: 80,
  size: 50,
  dampening: 0.025,
  tension: 0.99,
};

function onMousemove(e: MouseEvent | TouchEvent | null) {
  function createLines() {
    lines = [];
    for (let i = 0; i < E.trails; i++) {
      lines.push(new Line({ spring: 0.45 + (i / E.trails) * 0.025 }));
    }
  }

  function updatePos(evt: MouseEvent | TouchEvent) {
    if (!evt) return;
    if ("touches" in evt && evt.touches.length > 0) {
      pos.x = evt.touches[0].pageX;
      pos.y = evt.touches[0].pageY;
    } else if ("clientX" in evt) {
      pos.x = (evt as MouseEvent).clientX;
      pos.y = (evt as MouseEvent).clientY;
    }
  }

  document.removeEventListener("mousemove", onMousemove as any);
  document.removeEventListener("touchstart", onMousemove as any);
  document.addEventListener("mousemove", updatePos as any);
  document.addEventListener("touchmove", updatePos as any);
  document.addEventListener("touchstart", updatePos as any);
  if (e) updatePos(e);
  createLines();
  render();
}

function render() {
  if (ctx && ctx.running) {
    ctx.globalCompositeOperation = "source-over";
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.globalCompositeOperation = "lighter";
    ctx.strokeStyle = "hsla(" + (195 + Math.round(Math.abs(f.update()) % 30)) + ",95%,50%,0.35)";
    ctx.lineWidth = 5;
    for (let i = 0; i < E.trails; i++) {
      if (lines[i]) {
        lines[i].update();
        lines[i].draw();
      }
    }
    if (ctx.frame !== undefined) ctx.frame++;
    window.requestAnimationFrame(render);
  }
}

function resizeCanvas() {
  if (ctx && ctx.canvas) {
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
  }
}

export const renderCanvas = function () {
  const canvasEl = document.getElementById("canvas") as HTMLCanvasElement;
  if (!canvasEl) return;
  ctx = canvasEl.getContext("2d") as any;
  if (!ctx) return;
  ctx.running = true;
  ctx.frame = 1;
  f = new Oscillator({
    phase: Math.random() * 2 * Math.PI,
    amplitude: 85,
    frequency: 0.0015,
    offset: 285,
  });
  pos.x = window.innerWidth / 2;
  pos.y = window.innerHeight / 3;

  document.addEventListener("mousemove", onMousemove as any);
  document.addEventListener("touchstart", onMousemove as any);
  window.addEventListener("resize", resizeCanvas);
  window.addEventListener("focus", () => {
    if (ctx && !ctx.running) {
      ctx.running = true;
      render();
    }
  });
  window.addEventListener("blur", () => {
    if (ctx) ctx.running = true;
  });
  resizeCanvas();
  onMousemove(null);
};
