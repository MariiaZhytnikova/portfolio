// src/engine/particles.ts

import type { Particle } from "./types/Particle";
import { FLOOR_OFFSET } from "./bounds";

export class ParticleSystem {
  private container: HTMLDivElement;
  private particles: Particle[] = [];

  private gravity = 0.25;

  constructor(container: HTMLDivElement) {
    this.container = container;
  }

  // ----------------------------
  // CREATE PARTICLES
  // ----------------------------

  spawn(
    text: string,
    x: number,
    y: number,
    power: number
  ) {
    [...text].forEach((char) => {
      const el = document.createElement("span");

      el.textContent = char;

      el.style.position = "absolute";
      el.style.left = "0px";
      el.style.top = "0px";
      el.style.pointerEvents = "none";
      el.style.fontSize = "18px";
      el.style.willChange = "transform";

      this.container.appendChild(el);

      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * power;

      this.particles.push({
        char,
        el,
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: 1,
      });
    });
  }

  // ----------------------------
  // UPDATE
  // ----------------------------

  update() {
    const floorY = this.container.clientHeight - FLOOR_OFFSET;

    this.particles.forEach((p) => {
      // gravity
      p.vy += this.gravity;

      // movement
      p.x += p.vx;
      p.y += p.vy;

      // floor bounce
      if (p.y > floorY) {
        p.y = floorY;

        p.vy *= -0.4;
        p.vx *= 0.7;
      }

      // air drag
      p.vx *= 0.99;
      p.vy *= 0.99;

      // fade
      p.life -= 0.015;

      p.el.style.opacity = String(p.life);

      // render
      p.el.style.transform =
        `translate(${p.x}px, ${p.y}px)`;

      // remove
      if (p.life <= 0) {
        p.el.remove();
      }
    });

    // cleanup
    this.particles = this.particles.filter(
      (p) => p.life > 0
    );
  }

  // ----------------------------
  // DESTROY
  // ----------------------------

  destroy() {
    this.particles.forEach((p) => {
      p.el.remove();
    });

    this.particles = [];
  }
}