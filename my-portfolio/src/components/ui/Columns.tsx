// src/components/ui/Columns.tsx
import styled from "styled-components";
// import { motion } from "framer-motion";

export const ColumnGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.container.maxMD}) {
    grid-template-columns: 1fr;
  }
`;

export const Column = styled.div<{ $gap?: string }>`
  display: flex;
  flex-direction: column;
  gap: ${({ $gap, theme }) => $gap || theme.spacing.lg};
`;

export const LeftColumn = styled(Column)``;
export const RightColumn = styled(Column)``;

