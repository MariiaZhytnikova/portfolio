import styled from "styled-components";

const SectionWrapper = styled.section<{ bg?: string }>`
  background: ${({ bg, theme }) => bg || theme.colors.bg};
  scroll-margin-top: 80px;
`;

export function Section({ id, children, bg }: { id?: string; children: React.ReactNode; bg?: string }) {
  return <SectionWrapper id={id} bg={bg}>{children}</SectionWrapper>;
}