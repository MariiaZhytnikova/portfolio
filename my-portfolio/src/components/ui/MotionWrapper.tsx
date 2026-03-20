// src/components/ui/MotionWrapper.tsx
import { motion } from "framer-motion";
import styled from "styled-components";

const MotionDiv = styled(motion.div)`
  position: relative;
`;

interface FieldWrapperProps {
  delay?: number;
  children: React.ReactNode;
}

export const FieldWrapper = ({ delay = 0, children }: FieldWrapperProps) => (
  <MotionDiv
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
  >
    {children}
  </MotionDiv>
);