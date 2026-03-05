// src/components/layout/Navbar.tsx
import styled from "styled-components";
import { useThemeMode } from "../../app/providers";

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

const NavWrapper = styled.nav`
  position: sticky;
  top: 0;
  z-index: 100;
  background: ${({ theme }) => theme.colors.bg};
  border-bottom: 2px solid ${({ theme }) => theme.colors.surface};
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
`;

const NavInner = styled.div`
  max-width: ${({ theme }) => theme.container.maxWidth};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.xl};
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.a`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
`;

const NavLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.colors.textSoft};
  text-decoration: none;
  font-weight: 500;
  position: relative;
  padding: 4px 0;

  &:hover {
    color: ${({ theme }) => theme.colors.purple};
  }

  &:after {
    content: "";
    display: block;
    height: 2px;
    background: ${({ theme }) => theme.colors.bg};
    width: 0%;
    transition: width 0.3s;
    position: absolute;
    bottom: 0;
    left: 0;
  }

  &:hover:after {
    width: 100%;
  }
`;

const NavControls = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const SearchInput = styled.input`
  height: 38px;
  min-width: 200px;
  padding: 0 ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.radius.pill};
  border: 1px solid ${({ theme }) => theme.colors.surface};
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.text};
  outline: none;

  &::placeholder {
    color: ${({ theme }) => theme.colors.muted};
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.bg};
  }
`;

const ThemeToggleSlider = styled.button<{ $isLight: boolean }>`
  position: relative;
  width: 66px;
  height: 34px;
  background: ${({ theme }) => theme.colors.surface};
  border: 2px solid ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.radius.pill};
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  padding: 0;

  &:hover {
    border-color: ${({ theme }) => theme.colors.purple};
  }

  &::after {
    content: "";
    position: absolute;
    width: 24px;
    height: 24px;
    background: ${({ theme }) => theme.colors.surface};
    border-radius: ${({ theme }) => theme.radius.pill};
    top: 2px;
    left: ${({ $isLight }) => ($isLight ? "32px" : "2px")};
    transition: left 0.3s ease;
  }
`;

const ThemeIcon = styled.span`
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
`;

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