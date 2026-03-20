// src/components/ui/CenteredWrapper.tsx
import styled from "styled-components";

export const CenteredWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* horizontal centering */
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.lg};
`;