// src/components/ui/Typography.ts
import styled from "styled-components";
import { motion } from "framer-motion";
import React from "react";

/* HERO / PAGE TITLE */
export const HeadingXL = styled.h1`
  font-size: ${({ theme }) => theme.typography.h1.size};
  font-weight: ${({ theme }) => theme.typography.h1.weight};
  line-height: 1.2;
`;

/* HEADING H2 */
export const HeadingLG = styled.h2`
  font-size: ${({ theme }) => theme.typography.h2.size};
  font-weight: ${({ theme }) => theme.typography.h2.weight};
  line-height: 1.3;
  padding-bottom: ${({ theme }) => theme.spacing.md};
`;

/* HEADING H3 */
export const HeadingMD = styled.h3`
  font-size: ${({ theme }) => theme.typography.h3.size};
  font-weight: ${({ theme }) => theme.typography.h3.weight};
`;

/* SUBTITLE */
export const SubtitleText = styled.p`
  font-size: ${({ theme }) => theme.typography.subtitle.size};
  font-weight: ${({ theme }) => theme.typography.subtitle.weight};
  color: ${({ theme }) => theme.colors.textSoft};
  margin-top: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

/* BODY */
export const BodyText = styled.span`
  font-size: ${({ theme }) => theme.typography.body.size};
  font-weight: ${({ theme }) => theme.typography.body.weight};
  color: ${({ theme }) => theme.colors.muted};
  line-height: 1.6;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  position: relative;
  cursor: default;
`;

type HoverRevealProps = {
  children: React.ReactNode;
};

export function HoverReveal({ children }: HoverRevealProps) {
  return (
    <motion.span
      initial={{ opacity: 0, y: -5 }}
      whileHover={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      style={{ display: "inline-block", marginLeft: "0.3em" }}
    >
      {children}
    </motion.span>
  );
}

/* BODY SM*/
export const BodyTextSm = styled.span`
  font-size: ${({ theme }) => theme.typography.bodySM.size};
  font-weight: ${({ theme }) => theme.typography.bodySM.weight};
  color: ${({ theme }) => theme.colors.textSoft};
  line-height: 1.6;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

/* COLOR BODY */
export const ColorfulBodyText = styled(BodyText)`
  color: inherit;
`;

/* GRADIENT HEADING */
export const GradientHeading = styled(HeadingXL)`
  background: ${({ theme }) => theme.gradients.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  width: fit-content;
`;

/* GRADIENT SUBTITLE */
export const GradientSubtitleText = styled(SubtitleText)`
  background: ${({ theme }) => theme.gradients.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  width: fit-content;
`;

/* ORANGE SUBTITLE */
export const OrangeSubtitleText = styled(SubtitleText)`
  background: ${({ theme }) => theme.colors.orange};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  width: fit-content;
`;

export const Label = styled.label`
  font-size: ${({ theme }) => theme.typography.tag.size};
  font-weight: ${({ theme }) => theme.typography.tag.weight};
  color: ${({ theme }) => theme.colors.textSoft};
  margin-bottom: 0.5rem;
`;
