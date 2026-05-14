// src/engine/mousePhysics.ts

import Matter from "matter-js";
import type { Body } from "matter-js";

export class MousePhysics {
  private container: HTMLDivElement;

  private mouse = {
    x: 0,
    y: 0,
  };

  private active = false;

  constructor(container: HTMLDivElement) {
    this.container = container;

    this.setupEvents();
  }

  // ----------------------------
  // EVENTS
  // ----------------------------

  private setupEvents() {
    this.container.addEventListener(
      "mousemove",
      (e) => {
        const rect =
          this.container.getBoundingClientRect();

        this.mouse.x = e.clientX - rect.left;
        this.mouse.y = e.clientY - rect.top;

        this.active = true;
      }
    );

    this.container.addEventListener(
      "mouseleave",
      () => {
        this.active = false;
      }
    );
  }

  // ----------------------------
  // APPLY FORCE
  // ----------------------------

  apply(body: Body) {
    if (!this.active) return;

    const pos = body.position;

    const dx = pos.x - this.mouse.x;
    const dy = pos.y - this.mouse.y;

    const distance = Math.sqrt(dx * dx + dy * dy);

    const radius = 200;

    if (distance > radius || distance < 1) {
      return;
    }

    const strength =
      (1 - distance / radius) * 3.5;

    // normalized direction
    const nx = dx / distance;
    const ny = dy / distance;

    Matter.Body.applyForce(body, body.position, {
      x: nx * strength,
      y: ny * strength,
    });
  }

  // ----------------------------
  // DESTROY
  // ----------------------------

  destroy() {
    // maybe later
  }
}