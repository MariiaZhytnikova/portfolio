# Portfolio - AI Coding Instructions

## Tech Stack

React 19 + TypeScript + Vite + styled-components + React Router DOM

## Architecture

**Component Hierarchy:**
```
main.tsx → Providers (Theme + Router) → App → Layout (Navbar + Outlet) → Section Pages
```

**Routing Structure:**
- `/` - Spotlight (hero/intro)
- `/backstory` - About me
- `/projects` - Portfolio showcase
- `/contacts` - Contact form/links

All routes rendered through `Layout` component which provides persistent sticky `Navbar`.

## Directory Structure

```
src/
├── app/              # App root + providers (ThemeProvider, Router context)
├── sections/         # Page-level route components
├── components/
│   ├── layout/       # Layout, Navbar, Section wrappers
│   └── ui/           # Reusable primitives (Button, Card, Container)
├── theme/            # Design system (tokens, themes, TypeScript defs)
└── assets/icons/     # SVG icon files
```

## Theme System (Critical)

**Token-based design** - all values come from `src/theme/tokens.ts`:

```typescript
tokens = {
  colors: { bg, surface, text, textSoft, muted, orange, purple },
  spacing: { xs, sm, md, lg, xl, 2xl },
  radius: { sm, md, lg, pill },
  gradients: { primary: "linear-gradient(to right, #AD46FF, #FF6900)" },
  container: { maxWidth: "1200px" }
}
```

**Theme variants:**
- `darkTheme` (default) - extends tokens as-is
- `lightTheme` - extends tokens but overrides colors

**Access theme in components:**
```tsx
const Component = styled.div`
  color: ${({ theme }) => theme.colors.text};
  padding: ${({ theme }) => theme.spacing.md};
`;
```

**Toggle theme:** Use `useThemeMode()` hook from `src/app/providers.tsx`

## Styling Conventions

1. **All styles via styled-components** - no CSS modules or inline styles
2. **Component extension pattern:**
   ```tsx
   const SpotlightCard = styled(Card)`
     height: 1258px;
     padding-top: 100px;
   `;
   ```
3. **Named exports:** `export function ComponentName() {}`
4. **File naming:** PascalCase matching component name

## Design Patterns

### Gradient Text

Gradients can't be used with `color` - use background-clip technique:
```tsx
const Title = styled.h2`
  background: ${({ theme }) => theme.gradients.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  width: fit-content; // Prevents gradient from stretching
`;
```

### SVG Icons

Import SVG files from `assets/icons/`:
```tsx
import DownloadIcon from "../assets/icons/Download.svg";

<img src={DownloadIcon} alt="Download" />
```

### Button Patterns

Two button styles in use:
```tsx
// Primary - gradient background
const PrimaryButton = styled.a`
  background: ${({ theme }) => theme.gradients.primary};
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(173, 70, 255, 0.4);
  }
`;

// Secondary - outlined with icon
const SecondaryButton = styled.a`
  background: transparent;
  border: 2px solid ${({ theme }) => theme.colors.surface};
  display: inline-flex;
  gap: ${({ theme }) => theme.spacing.sm};
`;
```

### Section Layout Pattern

All section pages follow this structure:
```tsx
export function SectionName() {
  return (
    <Section>
      <Container>
        {/* content */}
      </Container>
    </Section>
  );
}
```

## Workflows

```bash
npm run dev      # Vite dev server (HMR enabled)
npm run build    # TypeScript check + production build
npm run lint     # ESLint validation
npm run preview  # Preview production build
```

## Static Assets

Place files in `public/` folder - accessible at root path:
- `public/cv.pdf` → served as `/cv.pdf`
- No import needed, reference directly in HTML

## Visual Identity

**"Dark Side Developer" theme:**
- Dark mode default: `#0A0A0A` bg, `#262626` surfaces
- Accent gradient: purple → orange (`#AD46FF` → `#FF6900`)
- Sticky navbar with centered links
- Card-based layouts with `box-shadow: 0 4px 6px rgba(0,0,0,0.2)`
- Pill-shaped buttons (`border-radius: 999px`)

## Adding New Features

**New section page:**
1. Create component in `src/sections/SectionName.tsx`
2. Add route in `src/app/App.tsx`
3. Add navigation link in `src/components/layout/Navbar.tsx`

**New UI component:**
1. Create in `src/components/ui/ComponentName.tsx`
2. Use theme tokens only (no hardcoded values)
3. Keep generic/reusable - extend in section files for specific variants

**New theme token:**
1. Add to `src/theme/tokens.ts`
2. Update `src/theme/styled.d.ts` TypeScript definition
3. Override in `lightTheme` if needed
