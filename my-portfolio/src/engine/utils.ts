// src/engine/utils.ts

export function randomBetween(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

export function randomItem<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}