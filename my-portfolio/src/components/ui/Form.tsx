// src/components/ui/Form.tsx
import styled from "styled-components";
import { motion } from "framer-motion";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
`;

export const InlineField = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.md};
`;

export const IconWrapper = styled.div<{ $focused?: boolean; color?: string; $alignTop?: boolean }>`
  color: ${({ $focused, color, theme }) =>
    $focused ? color || theme.colors.purple : theme.colors.muted};
  transition: ${({ theme }) => theme.transitions.colorFast};
`;

export const Input = styled(motion.input)<{ focused?: boolean; $focusColor?: string }>`
  flex: 1;
  padding: ${({ theme }) => theme.spacing.sm};
  background-color: ${({ theme }) => theme.colors.surface};
  border: 2px solid ${({ theme }) => theme.colors.surfaceSoft};
  border-radius: ${({ theme }) => theme.radius.lg};
  color: ${({ theme }) => theme.colors.text};
  outline: none;
  transition: ${({ theme }) => theme.transitions.default};

  &:focus {
    border-color: ${({ $focusColor, theme }) => $focusColor || theme.colors.purple};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.muted};
  }
`;

export const Textarea = styled(Input).attrs({ as: 'textarea', rows: 7 })`
  resize: none;
`;
