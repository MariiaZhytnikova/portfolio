# Portfolio

A modern developer portfolio built with React, TypeScript, and Vite. This repository contains the frontend app located in the `my-portfolio` folder.

Live demo: https://mariiazhytnikova.github.io/portfolio/



## Tech Stack
- **Frontend**: React, TypeScript, Vite
- **Styling**: styled-components (centralized tokens & themes)
- **Interactivity**: Pixi.js (2D WebGL renderer) + Matter.js (physics engine)
- **Build**: ESLint, TypeScript strict mode

## Project layout
Top-level app is in `my-portfolio/`. Key frontend code is under `my-portfolio/src/`:

```
my-portfolio/
  src/
    app/         # App root, providers, routing
    sections/    # Route-mapped page sections
    components/  # layout and UI primitives
    theme/       # tokens and themes (dark/light variants)
    engine/      # Pixi.js + Matter.js physics engine
    assets/      # images and svgs
  public/        # static files
```

## Quick start
From the repository root:

```bash
cd my-portfolio
npm install
npm run dev
```

Common scripts (run inside `my-portfolio`):

```bash
npm run dev      # Start Vite dev server
npm run build    # Create production build
npm run preview  # Preview production build locally
npm run lint     # Run ESLint checks
```

## Features in depth

### Interactive Canvas (Spotlight section)
The Spotlight section features an interactive **physics-driven word animation** powered by:
- **Pixi.js**: WebGL 2D renderer for smooth, high-performance canvas rendering
- **Matter.js**: 2D physics engine for realistic word particle interactions and collisions
- Mouse interactions trigger explosions and physics forces on the words

### Theme System
- **Dark theme** (default): Professional dark aesthetic with purple–orange accent gradient
- **Light theme**: Clean, high-contrast light mode with full color override support
- Toggle theme dynamically; all styles use centralized tokens for consistency
- Theme defined in `my-portfolio/src/theme/` with styled-components


- Add UI components under `my-portfolio/src/components/ui/`.
- Create section pages in `my-portfolio/src/sections/` and add routes in `my-portfolio/src/app/App.tsx`.
- Keep styles driven by theme tokens in `my-portfolio/src/theme/`.

## License
MIT
