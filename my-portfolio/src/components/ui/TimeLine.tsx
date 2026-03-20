// src/components/ui/TimeLine.tsx
import styled from "styled-components";
import { motion } from "framer-motion";

export const TimelineWrapper = styled.div`
  position: relative;
  padding-right: ${({ theme }) => theme.spacing.lg};
`;

export const TimelineLine = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  background: ${({ theme }) => theme.colors.surface};
  overflow: hidden;
`;

export const TimelineGradient = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    ${({ theme }) => theme.colors.orange},
    ${({ theme }) => theme.colors.purple},
    ${({ theme }) => theme.colors.blue},
    ${({ theme }) => theme.colors.purple},
    ${({ theme }) => theme.colors.orange}
  );
  opacity: 0.2;
`;

export const TimelineGlow = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 120px;
  filter: blur(6px);
`;

export const TimelineGlowSharp = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 80px;
`;