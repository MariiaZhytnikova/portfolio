import styled from "styled-components";
import { motion } from 'framer-motion';

export const ButtonContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.md};
`;

export const BaseButton = styled(motion.button)`
  display: inline-flex; 
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) =>
    `${theme.button.paddingY} ${theme.button.paddingX}`};
  border-radius: ${({ theme }) => theme.radius.pill};
  border: none;
  font-weight: ${({ theme }) => theme.button.textWeightL};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.fast};
  text-decoration: none;
  white-space: nowrap;
  width: ${({ theme }) => theme.button.width};
`;

export const PrimaryButton = styled(BaseButton)`
  background: ${({ theme }) => theme.gradients.primary};
  color: ${({ theme }) => theme.colors.accent};

  &:hover {
    transform: ${({ theme }) => theme.button.hoverLift};
    box-shadow: 0 4px 12px ${({ theme }) => theme.colors.purple}66;
  }
`;

export const PrimaryWideButton = styled(BaseButton)`
  width: 75%;
  background: ${({ theme }) => theme.gradients.primary};
  color: ${({ theme }) => theme.colors.accent};

  &:hover {
    transform: ${({ theme }) => theme.button.hoverLift};
    box-shadow: 0 4px 12px ${({ theme }) => theme.colors.purple}66;
  }
`;

export const SecondaryButton = styled(BaseButton)`
  background: transparent;
  color: ${({ theme }) => theme.colors.text};
  border: 2px solid ${({ theme }) => theme.colors.surface};
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};

  &:hover {
    border-color: ${({ theme }) => theme.colors.purple};
    transform: ${({ theme }) => theme.button.hoverLift};
  }

  svg {
    width: ${({ theme }) => theme.button.iconSize};
    height: ${({ theme }) => theme.button.iconSize};
    flex-shrink: 0;
  }
`;

interface TextIconButtonProps {
  label: string;
}

export const TextIconButton = styled.a<TextIconButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.surface};
  border: 2px solid ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.radius.md};
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: ${({ theme }) => theme.transitions.fast};

  color: ${({ theme }) => theme.colors.textSoft};
  font-weight: ${({ theme }) => theme.button.textWeightM};
  font-size: ${({ theme }) => theme.button.textSize};
  text-decoration: none;

  svg {
    width: 20px;
    height: 20px;
    stroke: currentColor;
    transition: ${({ theme }) => theme.transitions.fast};
  }

  span {
    display: inline-block;
    transition: ${({ theme }) => theme.transitions.fast};
  }

  &:hover span {
    transform: translateX(6px); /* move text slightly to right */
  }

  &:hover svg {
    transform: translateX(6px); /* move icon with text */
  }
`;

export const AnimatedTextIconButton = styled(TextIconButton)`
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background: linear-gradient(
      90deg,
      ${({ theme }) => theme.colors.surface},
      ${({ theme }) => theme.colors.surface},
      ${({ theme }) => theme.colors.surface},
      ${({ theme }) => theme.colors.orange},
      ${({ theme }) => theme.colors.purple},
      ${({ theme }) => theme.colors.blue},
      ${({ theme }) => theme.colors.orange},
      ${({ theme }) => theme.colors.surface},
      ${({ theme }) => theme.colors.surface},
      ${({ theme }) => theme.colors.surface}
    );
    background-size: 200% 100%;
    background-repeat: no-repeat;
    opacity: 0;
    z-index: 0;
    pointer-events: none;
  }

  & > * {
    position: relative;
    z-index: 1;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.purple};
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text};
  padding: 0;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.7;
  }
`;