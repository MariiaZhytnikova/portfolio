// src/components/ui/Tag.ts
import styled from "styled-components";

export const Tag = styled.span`
  position: relative;
  display: inline-block;
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  font-size: ${({ theme }) => theme.typography.tag.size};
  font-weight: ${({ theme }) => theme.typography.tag.weight};
  color: ${({ theme }) => theme.colors.textSoft};
  line-height: 1.6;
  border-radius: ${({ theme }) => theme.radius.pill};
  border: 1px solid ${({ theme }) => theme.colors.surface};
  transition: ${({ theme }) => theme.transitions.fast};

/* animated border layer */
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;

    padding: 2px; /* border thickness */
    background: linear-gradient(
      90deg,
      ${({ theme }) => theme.colors.surface},
      ${({ theme }) => theme.colors.surface},
      ${({ theme }) => theme.colors.orange},
      ${({ theme }) => theme.colors.purple},
      ${({ theme }) => theme.colors.blue},
      ${({ theme }) => theme.colors.purple},
      ${({ theme }) => theme.colors.orange},
      ${({ theme }) => theme.colors.surface},
      ${({ theme }) => theme.colors.surface}
    );
    background-size: 200% 100%;

    /* mask to show ONLY border */
    -webkit-mask: 
      linear-gradient(#fff 0 0) content-box, 
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;

    opacity: 0;
    transition: opacity 0.3s;
  }

  &:hover::before {
    opacity: 1;
    animation: borderRun 2s linear infinite;
  }

  @keyframes borderRun {
    from {
      background-position: 200% 50%;
    }
    to {
      background-position: 0% 50%;
    }
  }
`;