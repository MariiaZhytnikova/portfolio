import styled from "styled-components";

/* HERO / PAGE TITLE */
export const HeadingXL = styled.h1`
  font-size: ${({ theme }) => theme.typography.h1.size};
  font-weight: ${({ theme }) => theme.typography.h1.weight};
  line-height: 1.2;
`;

/* SECTION TITLE */
export const HeadingLG = styled.h2`
  font-size: ${({ theme }) => theme.typography.h2.size};
  font-weight: ${({ theme }) => theme.typography.h2.weight};
  line-height: 1.3;
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
export const BodyText = styled.p`
  font-size: ${({ theme }) => theme.typography.body.size};
  font-weight: ${({ theme }) => theme.typography.body.weight};
  color: ${({ theme }) => theme.colors.muted};
  line-height: 1.6;
`;

/* GRADIENT HEADING */
export const GradientHeading = styled(HeadingXL)`
  background: ${({ theme }) => theme.gradients.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  width: fit-content;
`;