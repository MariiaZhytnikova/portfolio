// src/engine/wordEngine.ts
import Matter, { Bodies, World, Engine } from "matter-js";
import type { Word } from "./types/Word";
import { tokens } from "../theme/tokens";
import { randomBetween, randomItem } from "./utils";
import { ParticleSystem } from "./particles";
import { MousePhysics } from "./mousePhysics";
import { createBounds } from "./bounds";
import { createWordElement } from "./createWordElement";
import { PHYSICS } from "./types/config";
import { renderWord } from "./renderWord";
import { updateWordLife } from "./updateWordLife";
import { explodeWords } from "./explodeWords";

export class WordEngine {
  private mouse: MousePhysics;
  private particles: ParticleSystem;

  private container: HTMLDivElement;
  private words: Map<string, Word> = new Map();


  private engine: Engine = Matter.Engine.create();
  private world: World = this.engine.world;

  private canvas = document.createElement("canvas");
  private ctx = this.canvas.getContext("2d");

  private colors = [
    tokens.colors.orange,
    tokens.colors.purple,
    tokens.colors.blue,
    tokens.colors.text,
  ];

  constructor(container: HTMLDivElement) {
    this.container = container;

    this.mouse= new MousePhysics(container);
    this.particles = new ParticleSystem(container);

    this.engine.gravity.y = PHYSICS.gravity;
    this.engine.gravity.scale = 0.001;

    createBounds(
      this.engine,
      this.getWidth(),
      this.getHeight()
    );

    this.container.addEventListener("click", (e) => {
      const rect = this.container.getBoundingClientRect();

      explodeWords({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        radius: PHYSICS.explodeRadius,
        power: PHYSICS.explodePower,
        world: this.world,
        words: this.words,
        particles: this.particles,
      });
    });
  }

  // ----------------------------
  // UTILS
  // ----------------------------

  private getHeight() {
    return this.container.getBoundingClientRect().height;
  }

  private getWidth() {
    return this.container.getBoundingClientRect().width;
  }

  private measureTextWidth(text: string, fontSize: number): number {
    if (!this.ctx) return text.length * (fontSize / 2);

    this.ctx.font = `${fontSize}px sans-serif`;
    return this.ctx.measureText(text).width;
  }

  // ----------------------------
  // ADD WORD
  // ----------------------------

  addWord(text: string) {
    const id = Math.random().toString(36);

    const fontSize = randomBetween(12, 60)
    const color = randomItem(this.colors)
    const width = this.measureTextWidth(text, fontSize);

    const body = Bodies.rectangle(
      Math.random() * this.getWidth(),
      -50,
      width + 10,
      fontSize + 10,
      {
        restitution: 0.6,
        friction: 0.05,
        frictionAir: 0.005 + Math.random() * 0.005,
        density: fontSize / 20,
      }
    );

    Matter.Body.setVelocity(body, {
      x: randomBetween(-5, 5),
      y: randomBetween(-2, 2),
    });

    Matter.Body.setAngularVelocity(body, randomBetween(-0.1, 0.1));

    World.add(this.world, body);

    const word = createWordElement(
      text,
      color,
      fontSize
    );

    this.container.appendChild(word);

    this.words.set(id, {
      id,
      text,
      sprite: word,
      body,
    });
  }

  // ----------------------------
  // UPDATE
  // ----------------------------

  update() {
    Matter.Engine.update(this.engine);

    this.words.forEach((w) => {
      renderWord(w);

      // 💀 death animation
      updateWordLife({
        word: w,
        world: this.world,
        words: this.words,
      });

      this.mouse.apply(w.body);
    });
    this.particles.update();
  }

  // ----------------------------
  // DESTROY
  // ----------------------------

  destroy() {
    this.words.forEach((w) => {
      World.remove(this.world, w.body);
      w.sprite.remove();
    });

    this.words.clear();
    this.particles.destroy();
  }
}