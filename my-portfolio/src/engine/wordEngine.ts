// src/engine/wordEngine.ts
type Word = {
  id: string;
  text: string;
  x: number;
  y: number;
  sprite: HTMLSpanElement;
};

export class WordEngine {
  private container: HTMLDivElement;
  private words: Map<string, Word> = new Map();

  constructor(container: HTMLDivElement) {
    this.container = container;
  }

  private isReady() {
    return Boolean(this.container);
  }

  addWord(text: string) {
    if (!this.isReady()) {
      console.warn("Pixi not ready yet, skipping word:", text);
      return;
    }

    const id = Math.random().toString(36);

    const x = Math.random() * this.container.clientWidth;
    const y = -20;

    const word = document.createElement("span");
    word.textContent = text;
    word.style.position = "absolute";
    word.style.left = `${x}px`;
    word.style.top = `${y}px`;
    word.style.color = "#ffffff";
    word.style.fontSize = "18px";
    word.style.whiteSpace = "nowrap";
    word.style.willChange = "transform";

    this.container.appendChild(word);

    this.words.set(id, {
      id,
      text,
      x,
      y,
      sprite: word,
    });
  }

  update() {
    if (!this.isReady()) return;

    this.words.forEach((w) => {
      w.y += 2;
      w.sprite.style.transform = `translateY(${w.y}px)`;

      if (w.y > this.container.clientHeight + 50) {
        this.container.removeChild(w.sprite);
        this.words.delete(w.id);
      }
    });
  }

  destroy() {
    if (this.isReady()) {
      this.words.forEach((w) => {
        w.sprite.remove();
      });
    }

    this.words.clear();
  }
}