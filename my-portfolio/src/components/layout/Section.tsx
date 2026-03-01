import styled from "styled-components";

const SectionWrapper = styled.section<{ bg?: string }>`
  background: ${({ bg, theme }) => bg || theme.colors.bg};
  padding: ${({ theme }) => theme.spacing["2xl"]} 0;
`;

export function Section({ children, bg }: { children: React.ReactNode; bg?: string }) {
  return <SectionWrapper bg={bg}>{children}</SectionWrapper>;
}