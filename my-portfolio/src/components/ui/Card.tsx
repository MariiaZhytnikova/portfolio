// src/components/ui/Card.ts
import styled from "styled-components";

export const Card = styled.div<{
  $padding?: string;
  height?: string;
  textAlign?: "left" | "center" | "right";
}>`
  color: ${({ theme }) => theme.colors.text};
  padding: ${({ $padding, theme }) => $padding || theme.spacing.xl};
  min-height: auto;
  height: ${({ height }) => height || "100vh"};
  text-align: ${({ textAlign }) => textAlign || "left"};
  // box-shadow: ${({ theme }) => theme.shadows.md};
  // border-radius: ${({ theme }) => theme.radius.md};
  display: flex;
  flex-direction: column;
`;