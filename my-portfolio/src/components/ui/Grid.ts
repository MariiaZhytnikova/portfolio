// src/components/ui/Grid.ts
import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing.lg};
  margin-top: ${({ theme }) => theme.spacing.xl};
`;

export const Category = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.radius.lg};
`;

export const StyledCategory = styled(Category)`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing.lg};
  border: 2px solid ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.radius.sm};
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    color: ${({ theme }) => theme.colors.purple};
    border-color: ${({ theme }) => theme.colors.purple};
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  }

  &:hover * {
    color: ${({ theme }) => theme.colors.purple};
  }
`;