// src/
import styled from "styled-components";

export const ThemeToggleSlider = styled.button<{ $isLight: boolean }>`
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

export const ThemeIcon = styled.span`
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
`;