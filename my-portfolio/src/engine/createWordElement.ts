// src/engine/createWordElement.ts

export function createWordElement(
  text: string,
  color: string,
  fontSize: number
) {
  const word = document.createElement("span");

  word.textContent = text;
  word.style.position = "absolute";
  word.style.left = "0px";
  word.style.top = "0px";
  word.style.color = color;
  word.style.fontSize = `${fontSize}px`;
  word.style.whiteSpace = "nowrap";
  word.style.willChange = "transform";
  word.style.pointerEvents = "none";
  word.style.transformOrigin = "center";

  return word;
}
