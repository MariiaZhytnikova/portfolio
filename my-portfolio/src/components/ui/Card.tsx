// src/components/ui/Card.ts
import styled from "styled-components";

export const Card = styled.div<{
  $padding?: string;
  height?: string;
  textAlign?: "left" | "center" | "right";
  width?: string;
}>`
  color: ${({ theme }) => theme.colors.text};
  padding: ${({ $padding }) => $padding ?? "0"};
  min-height: auto;
  width: ${({ width }) => width ?? "100%"};
  height: ${({ height }) => height ?? "auto"};
  text-align: ${({ textAlign }) => textAlign ?? "left"};
  display: flex;
  flex-direction: column;
`;