// src/engine/renderWord.ts
import type { Word } from "./types/Word";

export function renderWord(word: Word) {
  const pos = word.body.position;
  const angle = word.body.angle;
  const width = word.sprite.offsetWidth;
  const height = word.sprite.offsetHeight;

  word.sprite.style.transform = `
    translate(${pos.x - width / 2}px, ${pos.y - height / 2}px)
    rotate(${angle}rad)
  `;

  if (word.life !== undefined) {
    word.sprite.style.opacity = String(word.life);
  }
}