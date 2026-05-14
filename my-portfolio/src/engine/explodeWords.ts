// src/engine/explodeWords.ts
import Matter, { World } from "matter-js";

import type { Word } from "./types/Word";
import type { ParticleSystem } from "./particles";

type Params = {
  x: number;
  y: number;
  radius: number;
  power: number;

  world: World;
  words: Map<string, Word>;
  particles: ParticleSystem;
};

export function explodeWords({
  x,
  y,
  radius,
  power,
  world,
  words,
  particles,
}: Params) {
  words.forEach((w) => {
    const dx = w.body.position.x - x;
    const dy = w.body.position.y - y;

    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance > radius) {
      return;
    }

    const text = w.text;

    Matter.World.remove(world, w.body);
    w.sprite.remove();
    words.delete(w.id);

    particles.spawn(
      text,
      w.body.position.x,
      w.body.position.y,
      power
    );
  });
}