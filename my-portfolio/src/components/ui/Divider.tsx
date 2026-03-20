// src/components/ui/Divider.tsx
import styled from "styled-components";

export const Divider = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${({ theme }) => theme.colors.surface};
  margin: ${({ theme }) => theme.spacing.sm} 0;
`;