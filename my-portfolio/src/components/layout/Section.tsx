import styled from "styled-components";

const SectionWrapper = styled.section<{ $bg?: string }>`
  background: ${({ $bg, theme }) => $bg || theme.colors.bg};
  scroll-margin-top: 80px;
  padding: ${({ theme }) => theme.spacing.xxl};

  display: flex;
  justify-content: center;  // horizontal center
  align-items: center;      // vertical center
`;

export function Section({ id, children, $bg }: { id?: string; children: React.ReactNode; $bg?: string }) {
  return <SectionWrapper id={id} $bg={$bg}>{children}</SectionWrapper>;
}