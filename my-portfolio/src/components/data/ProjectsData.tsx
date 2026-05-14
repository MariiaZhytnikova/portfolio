// src/components/data/ProjectsData.tsx

import MazeImg from "../../assets/Maze_is_Lava.png";
import DishDashImg from "../../assets/DishDash.png";
import HiveImg from "../../assets/Hive_Game.png";

export const projects = [
  {
    id: 1,
    title: "Maze is lava",
    image: MazeImg,
    description: "A full-stack multiplayer web-game with auth, chat and friends system",
    tech: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Socket.io",
      "TypeScript",
      "Node.js",
      "NestJS",
      "Fastify",
      "TypeORM",
      "PostgreSQL",
      "JWT",
      "Swagger/OpenAPI",
      "Jest",
      "GitHub actions",
    ],
    github: "https://github.com/Transcendence-surprise",
    live: "https://valinor.ink",
  },
  {
    id: 2,
    title: "DishDash",
    image: DishDashImg,
    description: "🌱 A small tool with a big impact on food waste (Under development)",
    tech: [
      "Node.js",
      "Vite",
      "TypeScript",
      "React",
      "Go",
      "Rest API",
      "GitHub actions",
      "Deployment: GitHub Pages, Fly.io",
    ],
    github: "https://github.com/MariiaZhytnikova/DishDash",
    live: "https://mariiazhytnikova.github.io/DishDash/",
  },
  {
    id: 3,
    title: "Hive",
    image: HiveImg,
    description: "Turn based web-game \"The Hive\", designed by John Yianni",
    tech: ["Node.js", "Vite", "TypeScript", "Deployment: GitHub Pages"],
    github: "https://github.com/MariiaZhytnikova/Hive-abstract-game",
    live: "https://mariiazhytnikova.github.io/Hive-abstract-game/",
  },
];