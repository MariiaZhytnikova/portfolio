import styled from "styled-components";

export const BaseButton = styled.a`
  padding: ${({ theme }) =>
    `${theme.button.paddingY} ${theme.button.paddingX}`};
  border-radius: ${({ theme }) => theme.radius.pill};
  font-weight: 600;
  cursor: pointer;
  transition: ${({ theme }) => theme.button.transition};
  text-decoration: none;
  white-space: nowrap;
`;

export const PrimaryButton = styled(BaseButton)`
  background: ${({ theme }) => theme.gradients.primary};
  color: white;
  display: inline-block;

  &:hover {
    transform: ${({ theme }) => theme.button.hoverLift};
    box-shadow: 0 4px 12px ${({ theme }) => theme.colors.purple}66;
  }
`;

export const SecondaryButton = styled(BaseButton)`
  background: transparent;
  color: ${({ theme }) => theme.colors.text};
  border: 2px solid ${({ theme }) => theme.colors.surface};
  display: inline-flex;
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
  gap: 8px; /* space between icon and text */
  padding: 12px 20px;
  background: ${({ theme }) => theme.colors.surface};
  border: 2px solid ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.radius.md};
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 0.3s ease;

  color: ${({ theme }) => theme.colors.textSoft};
  font-weight: 500;
  font-size: 0.95rem;
  text-decoration: none;

  svg {
    width: 20px;
    height: 20px;
    stroke: currentColor;
    transition: transform 0.3s ease;
  }

  span {
    display: inline-block;
    transition: transform 0.3s ease;
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.purple};
    color: ${({ theme }) => theme.colors.purple};
  }

  &:hover span {
    transform: translateX(6px); /* move text slightly to right */
  }

  &:hover svg {
    transform: translateX(6px); /* optional: move icon with text */
    color: ${({ theme }) => theme.colors.purple};
  }
`;

export const IconButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background: ${({ theme }) => theme.colors.surface};
  border: 2px solid ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.radius.md};
  margin-top: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  transition: ${({ theme }) => theme.button.transition};

  svg {
    width: 20px;
    height: 20px;
    stroke: ${({ theme }) => theme.colors.text};
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.purple};
    transform: ${({ theme }) => theme.button.hoverLift};
  }

  &:hover svg {
    stroke: ${({ theme }) => theme.colors.purple};
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.md};
`;