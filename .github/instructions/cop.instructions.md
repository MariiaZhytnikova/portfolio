---
applyTo: '**'
---
# Portfolio Project - AI Coding Agent Instructions

## Architecture Overview

This is a React 19 + TypeScript + Vite single-page portfolio application using styled-components and React Router. The app follows a component-based architecture with clear separation between layout, UI components, and page sections.

**Component hierarchy:**
```
main.tsx: Providers > Router > App > Layout (Navbar + Outlet) > Section pages
```

## Key Project Structure

- `src/app/` - Application root (`App.tsx`) and context providers (`providers.tsx`)
- `src/sections/` - Page-level components mapped to routes (Spotlight, Backstory, Projects, Contacts)
- `src/components/layout/` - Layout components (Layout, Navbar, Section)
- `src/components/ui/` - Reusable UI primitives (Button, Card, Container, SearchInput)
- `src/theme/` - Centralized theming system (tokens, dark/light themes, global styles, TypeScript definitions)

## Theming System (Critical)

**Token-based design system** in `src/theme/`:

1. `tokens.ts` - Single source of truth for all design tokens (colors, spacing, radius, container widths)
2. `theme.ts` - Extends tokens to create `darkTheme` and `lightTheme` variants (only colors differ)
3. `styled.d.ts` - TypeScript module augmentation for `DefaultTheme` autocomplete
4. `GlobalStyle.ts` - Global CSS reset and base styles

**Usage pattern:**
```tsx
const StyledComponent = styled.div`
  color: ${({ theme }) => theme.colors.text};
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.radius.lg};
`;
```

**Theme context access:** Use `useThemeMode()` hook from `src/app/providers.tsx` for toggling themes.

## Styling Conventions

- **All styling via styled-components** - no CSS modules or inline styles
- Components extend base components: `const SpotlightCard = styled(Card)`...``
- Named exports for components: `export function ComponentName() {}`
- File naming: PascalCase matching component name (e.g., `Navbar.tsx`)

## Routing Structure

Routes defined in `src/app/App.tsx`:
- `/` → Spotlight (hero/intro section)
- `/backstory` → Backstory (about me)
- `/projects` → Projects (portfolio items)
- `/contacts` → Contacts (contact form/links)

All routes wrapped by `Layout` component which provides persistent `Navbar`.

## Development Workflow

```bash
npm run dev      # Start Vite dev server with HMR
npm run build    # TypeScript check + production build
npm run lint     # ESLint validation
npm run preview  # Preview production build locally
```

## Design Aesthetic

"Dark side developer" theme with:
- Default dark mode (`#0A0A0A` background, `#262626` surfaces)
- Accent colors: orange (`#FF6900`), purple (`#AD46FF`)
- Sticky navbar with centered navigation links
- Card-based layouts with subtle shadows

## Component Patterns to Follow

1. **Section components** (in `src/sections/`) wrap content in `<Section><Container>...</Container></Section>`
2. **Styled component extensions**: Create variants by extending base components from `src/components/ui/`
3. **Theme-aware components**: Always use theme tokens, never hardcoded values
4. **Route-mapped sections**: Each section component corresponds to a route in `App.tsx`

## TypeScript Configuration

- Strict mode enabled
- Three tsconfig files: `tsconfig.json` (base), `tsconfig.app.json` (app code), `tsconfig.node.json` (Vite config)
- Styled-components types via `@types/styled-components` with custom theme typing in `styled.d.ts`

## When Adding New Components

1. Place in appropriate directory (`layout/`, `ui/`, or `sections/`)
2. Use named exports: `export function ComponentName() {}`
3. Create styled components using theme tokens
4. For sections: add route in `App.tsx` and navigation link in `Navbar.tsx`
5. For UI components: keep generic and reusable, extend in section-specific styled components
