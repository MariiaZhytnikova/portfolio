// src/components/ui/Tag.ts
import styled from "styled-components";

export const Tag = styled.span`
  padding: 6px 14px;
  background: ${({ theme }) => theme.colors.bg};
  color: ${({ theme }) => theme.colors.text};
  border-radius: ${({ theme }) => theme.radius.pill};
  font-size: 0.875rem;
  font-weight: 500;
  border: 1px solid ${({ theme }) => theme.colors.surface};
  transition: all 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.purple};
    border-color: ${({ theme }) => theme.colors.purple};
    transform: translateY(-2px);
  }
`;