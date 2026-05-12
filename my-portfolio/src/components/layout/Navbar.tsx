// src/components/layout/Navbar.tsx
import { useThemeMode } from "../../app/providers";
import {
  NavWrapper,
  NavInner,
  Logo,
  NavLinks,
  NavLink,
  NavControls,
} from "../ui/Nav"
import {
  ThemeToggleSlider,
  ThemeIcon,
} from "../ui/ThemeSwitch"
import { SearchInput } from "../ui/SearchInput"

interface NavLinkItem {
  label: string;
  href: string;
}

interface NavbarProps {
  logoText: string;
  links: NavLinkItem[];
  showSearch?: boolean;
  showThemeToggle?: boolean;
}

export function Navbar({
  logoText,
  links,
  showSearch = false,
  showThemeToggle = true,
}: NavbarProps) {
  const { mode, toggleMode } = useThemeMode();

  return (
    <NavWrapper>
      <NavInner>
        <Logo href="#">{logoText}</Logo>
        <NavLinks>
          {links.map((link) => (
            <NavLink key={link.href} href={link.href}>
              {link.label}
            </NavLink>
          ))}
        </NavLinks>
        <NavControls>
          {showSearch && <SearchInput type="search" placeholder="Search..." />}
          {showThemeToggle && (
            <ThemeToggleSlider
              onClick={toggleMode}
              $isLight={mode === "light"}
              aria-label="Toggle theme"
            >
              <ThemeIcon>🌙</ThemeIcon>
              <ThemeIcon>☀️</ThemeIcon>
            </ThemeToggleSlider>
          )}
        </NavControls>
      </NavInner>
    </NavWrapper>
  );
}