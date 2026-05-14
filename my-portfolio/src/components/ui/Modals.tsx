// src/components/ui/Modals.tsx
import styled from "styled-components";

export const ModalOverlay = styled.div<{ $top: number }>`
  position: absolute;
  top: ${({ $top }) => `${$top}px`};
  left: 0;
  right: 0;
  min-height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background-color: ${({ theme }) => theme.colors.surface};
  border-radius: 8px;
  padding: 32px;
  max-width: 600px;
  max-height: 80vh;
  overflow: auto;
  position: relative;
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: ${({ theme }) => theme.colors.text};

  pre {
    white-space: pre-wrap;
    word-wrap: break-word;
    font-size: 14px;
    line-height: 1.6;
    font-family: inherit;
  }

  h1 {
    font-size: 24px;
    margin-bottom: 16px;
  }

  h2 {
    font-size: 18px;
    margin-top: 16px;
    margin-bottom: 8px;
  }
`;
