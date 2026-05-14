// src/engine/types/Word.ts
import type { Body } from "matter-js";

export type Word = {
  id: string;
  text: string;
  sprite: HTMLSpanElement;
  body: Body;

  dying?: boolean;
  life?: number;
};