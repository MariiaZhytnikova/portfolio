// src/components/ui/Sosial.tsx
import styled from "styled-components";
import { ButtonContainer } from "./Button";

type SocialButtonProps = {
  href: string;
  Icon: React.ElementType;
  label?: string;
};

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
  transition: ${({ theme }) => theme.transitions.fast};
  text-decoration: none;

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

export const SocialButtons = ({ buttons }: { buttons: SocialButtonProps[] }) => {
  return (
    <ButtonContainer>
      {buttons.map(({ href, Icon, label }, index) => (
        <IconButton
          key={index}
          href={href}
          target={href.startsWith("mailto:") ? undefined : "_blank"}
          rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
          aria-label={label}
        >
        <Icon />
        </IconButton>
      ))}
    </ButtonContainer>
  );
};