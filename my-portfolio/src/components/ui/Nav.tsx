// src/
import styled from "styled-components";

export const NavWrapper = styled.nav`
  position: sticky;
  top: 0;
  z-index: 100;
  background: ${({ theme }) => theme.colors.bg};
  border-bottom: 2px solid ${({ theme }) => theme.colors.surface};
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
`;

export const NavInner = styled.div`
  max-width: ${({ theme }) => theme.container.maxWidth};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.xl};
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.a`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
`;

export const NavLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
`;

export const NavLink = styled.a`
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

export const NavControls = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
`;