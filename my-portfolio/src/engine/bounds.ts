// src/engine/bounds.ts
import { Bodies, World } from "matter-js";
import type { Engine } from "matter-js";

export const FLOOR_OFFSET = 20;

export function createBounds(
  engine: Engine,
  width: number,
  height: number
) {
  const floorHeight = 120;
  const floorY = height + floorHeight / 2 - FLOOR_OFFSET;

  const ground = Bodies.rectangle(
    width / 2,
    floorY,
    width,
    floorHeight,
    { isStatic: true }
  );

  const leftWall = Bodies.rectangle(
    -50,
    height / 2,
    100,
    height,
    { isStatic: true }
  );

  const rightWall = Bodies.rectangle(
    width + 50,
    height / 2,
    100,
    height,
    { isStatic: true }
  );

  World.add(engine.world, [
    ground,
    leftWall,
    rightWall,
  ]);
  console.log("BOUNDS WIDTH HEIGHT", width, height);
  console.log("BOUNDS CENTER", width / 2, height / 2);
  console.log("BOUNDS created with floorY:", floorY);
  console.log("BOUNDS Ground position:", ground.position);
  console.log("BOUNDS Left wall position:", leftWall.position);
  console.log("BOUNDS Right wall position:", rightWall.position);
}