// src/engine/createPixiApp.ts
import * as PIXI from "pixi.js";

export async function createPixiApp(
  container: HTMLDivElement
) {
  const app = new PIXI.Application();

  await app.init({
    resizeTo: container,
    backgroundAlpha: 0,
    antialias: true,
  });

  container.appendChild(app.canvas);

  return app;
}