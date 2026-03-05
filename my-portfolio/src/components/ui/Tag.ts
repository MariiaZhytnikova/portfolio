// src/components/ui/Tag.ts
import styled from "styled-components";

export const Tag = styled.span`
  padding: 6px 14px;
  background: ${({ theme }) => theme.colors.bg};
  font-size: ${({ theme }) => theme.typography.tag.size};
  font-weight: ${({ theme }) => theme.typography.tag.weight};
  color: ${({ theme }) => theme.colors.textSoft};
  line-height: 1.6;
  border-radius: ${({ theme }) => theme.radius.pill};
  border: 1px solid ${({ theme }) => theme.colors.surface};
  transition: all 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.purple};
    border-color: ${({ theme }) => theme.colors.purple};
    transform: translateY(-2px);
  }
`;