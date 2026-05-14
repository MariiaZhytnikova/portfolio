// src/engine/updateWordLifecycle.ts
import Matter, { World } from "matter-js";
import type { Word } from "./types/Word";

type Params = {
  word: Word;
  world: World;
  words: Map<string, Word>;
};

export function updateWordLife({
  word,
  world,
  words,
}: Params) {
  if (!word.dying) {
    return;
  }

  word.life = (word.life ?? 1) - 0.05;

  word.sprite.style.opacity = String(word.life);

  word.sprite.style.transform +=
    ` scale(${word.life})`;

  if (word.life <= 0) {
    Matter.World.remove(world, word.body);

    word.sprite.remove();

    words.delete(word.id);
  }
}