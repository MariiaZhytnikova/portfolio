# Portfolio Site

A modern, dark-themed developer portfolio built with React 19, TypeScript, Vite, and styled-components.

## Features
- **Single Page Application** with React Router
- **Dark Side Developer** aesthetic (default dark mode, purple-orange accent gradient)
- **Token-based theming** (centralized design tokens for colors, spacing, radius, etc.)
- **Responsive, card-based layouts**
- **Sticky, centered navbar**
- **Reusable UI components** (Button, Card, Container, etc.)
- **Section-based routing**: Spotlight, Backstory, Projects, Contacts
- **SVG icon support**

## Tech Stack
- React 19
- TypeScript (strict mode)
- Vite
- styled-components
- React Router DOM

## Project Structure
```
src/
  app/         # App root, providers, routing
  sections/    # Route-mapped page sections
  components/
    layout/    # Layout, Navbar, Section wrappers
    ui/        # Reusable UI primitives
  theme/       # Design tokens, themes, global styles
  assets/icons # SVG icons
public/        # Static assets (e.g., cv.pdf)
```

## Theming & Styling
- All styles via styled-components (no CSS modules or inline styles)
- Theme tokens in `src/theme/tokens.ts`
- Theme variants in `src/theme/theme.ts`
- Use theme tokens in all styled components
- Toggle theme with `useThemeMode()` from `src/app/providers.tsx`

## Development
```bash
npm install      # Install dependencies
npm run dev      # Start Vite dev server (HMR)
npm run build    # TypeScript check + production build
npm run lint     # ESLint validation
npm run preview  # Preview production build
```

## Adding New Features
- **New section page:**
  1. Create in `src/sections/SectionName.tsx`
  2. Add route in `src/app/App.tsx`
  3. Add nav link in `src/components/layout/Navbar.tsx`
- **New UI component:**
  1. Create in `src/components/ui/ComponentName.tsx`
  2. Use theme tokens only
  3. Keep generic/reusable
- **New theme token:**
  1. Add to `src/theme/tokens.ts`
  2. Update `src/theme/styled.d.ts` if needed
  3. Override in `lightTheme` if required

## Visual Identity
- Default dark mode: `#0A0A0A` bg, `#262626` surfaces
- Accent gradient: purple → orange (`#AD46FF` → `#FF6900`)
- Card shadow: `0 4px 6px rgba(0,0,0,0.2)`
- Pill-shaped buttons

---

**Inspired by the "dark side" of development.**

---

MIT License
